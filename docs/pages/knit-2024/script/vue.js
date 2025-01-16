const vueInstance = new Vue({
  el: "#app",
  data: {
    count: 0,
    processingImage: false,
    error: null,
    showCropModal: false,
    originalImage: null,
    croppedImage: null,
    cropBox: {
      x: 0,
      y: 0,
      size: 200,
      isDragging: false,
      isResizing: false,
      resizeHandle: null,
      startX: 0,
      startY: 0
    },
    modalStyle: {
      width: '800px',
      height: '600px'
    },
    isPlaying: false
  },
  methods: {
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (!this.isValidImageFile(file)) {
        this.error = 'Please upload a valid image file (JPG, PNG)';
        return;
      }

      this.resetState();

      try {
        const img = await this.loadImage(file);
        if (img.width !== img.height) {
          this.originalImage = img;
          this.showCropModal = true;
          this.$nextTick(() => {
            this.initCropArea();
          });
        } else {
          await this.processAndSendImage(img);
        }
      } catch (err) {
        this.error = 'An error occurred while processing the image';
        console.error(err);
      }
    },

    loadImage(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });
    },

    initCropArea() {
      const canvas = this.$refs.cropCanvas;
      const ctx = canvas.getContext('2d');

      // Canvas boyutlarını ayarla
      canvas.width = 800;
      canvas.height = 600;

      // Resmi canvas'a sığdır ve oranını koru
      const imgRatio = this.originalImage.width / this.originalImage.height;
      let drawWidth, drawHeight, startX, startY;

      if (imgRatio > canvas.width / canvas.height) {
        // Resim daha geniş
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        startX = 0;
        startY = (canvas.height - drawHeight) / 2;
      } else {
        // Resim daha uzun
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        startX = (canvas.width - drawWidth) / 2;
        startY = 0;
      }

      // Resmi çiz
      ctx.drawImage(
        this.originalImage,
        startX, startY,
        drawWidth, drawHeight
      );

      // Başlangıç kırpma kutusu boyutunu ayarla
      const initialSize = Math.min(drawWidth, drawHeight);
      this.cropBox.size = initialSize * 0.8; // Resmin %80'i kadar başlangıç boyutu

      // Kırpma kutusunu ortala
      this.cropBox.x = (canvas.width - this.cropBox.size) / 2;
      this.cropBox.y = (canvas.height - this.cropBox.size) / 2;

      this.drawCropBox();
    },

    drawCropBox() {
      const canvas = this.$refs.cropCanvas;
      const ctx = canvas.getContext('2d');

      // Önceki frame'i temizle
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Resmi orijinal oranlarıyla yeniden çiz
      const imgRatio = this.originalImage.width / this.originalImage.height;
      let drawWidth, drawHeight, startX, startY;

      if (imgRatio > canvas.width / canvas.height) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        startX = 0;
        startY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        startX = (canvas.width - drawWidth) / 2;
        startY = 0;
      }

      // Ana resmi çiz
      ctx.drawImage(
        this.originalImage,
        startX, startY,
        drawWidth, drawHeight
      );

      // Kırpma alanı dışındaki bölgeyi karart
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(canvas.width, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, 0);
      ctx.moveTo(this.cropBox.x, this.cropBox.y);
      ctx.lineTo(this.cropBox.x + this.cropBox.size, this.cropBox.y);
      ctx.lineTo(this.cropBox.x + this.cropBox.size, this.cropBox.y + this.cropBox.size);
      ctx.lineTo(this.cropBox.x, this.cropBox.y + this.cropBox.size);
      ctx.lineTo(this.cropBox.x, this.cropBox.y);
      ctx.closePath();
      ctx.fill('evenodd');

      // Kırpma kutusu çerçevesi
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.strokeRect(
        this.cropBox.x,
        this.cropBox.y,
        this.cropBox.size,
        this.cropBox.size
      );

      this.drawResizeHandles();
    },

    drawResizeHandles() {
      const canvas = this.$refs.cropCanvas;
      const ctx = canvas.getContext('2d');
      const handleSize = 10;
      const handles = [
        {x: this.cropBox.x - handleSize / 2, y: this.cropBox.y - handleSize / 2},
        {x: this.cropBox.x + this.cropBox.size - handleSize / 2, y: this.cropBox.y - handleSize / 2},
        {x: this.cropBox.x - handleSize / 2, y: this.cropBox.y + this.cropBox.size - handleSize / 2},
        {x: this.cropBox.x + this.cropBox.size - handleSize / 2, y: this.cropBox.y + this.cropBox.size - handleSize / 2}
      ];

      handles.forEach(handle => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(handle.x, handle.y, handleSize, handleSize);
      });
    },

    startDrag(e) {
      const rect = this.$refs.cropCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (this.isInResizeHandle(x, y)) {
        this.cropBox.isResizing = true;
        this.cropBox.resizeHandle = this.getResizeHandle(x, y);
      } else if (this.isInCropBox(x, y)) {
        this.cropBox.isDragging = true;
      }

      this.cropBox.startX = x;
      this.cropBox.startY = y;
    },

    drag(e) {
      if (!this.cropBox.isDragging && !this.cropBox.isResizing) return;

      const rect = this.$refs.cropCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - this.cropBox.startX;
      const dy = y - this.cropBox.startY;

      if (this.cropBox.isResizing) {
        this.resizeCropBox(dx, dy);
      } else if (this.cropBox.isDragging) {
        this.moveCropBox(dx, dy);
      }

      this.cropBox.startX = x;
      this.cropBox.startY = y;
      this.drawCropBox();
    },

    stopDrag() {
      this.cropBox.isDragging = false;
      this.cropBox.isResizing = false;
      this.cropBox.resizeHandle = null;
    },

    isInResizeHandle(x, y) {
      // Handle kontrolü mantığı
      const handleSize = 10;
      const handles = [
        {x: this.cropBox.x, y: this.cropBox.y},
        {x: this.cropBox.x + this.cropBox.size, y: this.cropBox.y},
        {x: this.cropBox.x, y: this.cropBox.y + this.cropBox.size},
        {x: this.cropBox.x + this.cropBox.size, y: this.cropBox.y + this.cropBox.size}
      ];

      return handles.some(handle =>
        x >= handle.x - handleSize / 2 &&
        x <= handle.x + handleSize / 2 &&
        y >= handle.y - handleSize / 2 &&
        y <= handle.y + handleSize / 2
      );
    },

    getResizeHandle(x, y) {
      // Hangi handle'ın seçildiğini belirle
      const handleSize = 10;
      const handles = ['nw', 'ne', 'sw', 'se'];
      const positions = [
        {x: this.cropBox.x, y: this.cropBox.y},
        {x: this.cropBox.x + this.cropBox.size, y: this.cropBox.y},
        {x: this.cropBox.x, y: this.cropBox.y + this.cropBox.size},
        {x: this.cropBox.x + this.cropBox.size, y: this.cropBox.y + this.cropBox.size}
      ];

      for (let i = 0; i < positions.length; i++) {
        if (
          x >= positions[i].x - handleSize / 2 &&
          x <= positions[i].x + handleSize / 2 &&
          y >= positions[i].y - handleSize / 2 &&
          y <= positions[i].y + handleSize / 2
        ) {
          return handles[i];
        }
      }
      return null;
    },

    isInCropBox(x, y) {
      return x >= this.cropBox.x &&
        x <= this.cropBox.x + this.cropBox.size &&
        y >= this.cropBox.y &&
        y <= this.cropBox.y + this.cropBox.size;
    },

    resizeCropBox(dx, dy) {
      const minSize = 50;
      const maxSize = Math.min(this.$refs.cropCanvas.width, this.$refs.cropCanvas.height);

      switch (this.cropBox.resizeHandle) {
        case 'nw':
          this.cropBox.x += dx;
          this.cropBox.y += dy;
          this.cropBox.size -= Math.max(dx, dy);
          break;
        case 'ne':
          this.cropBox.y += dy;
          this.cropBox.size += dx;
          break;
        case 'sw':
          this.cropBox.x += dx;
          this.cropBox.size -= dx;
          this.cropBox.size += dy;
          break;
        case 'se':
          this.cropBox.size += Math.max(dx, dy);
          break;
      }

      // Sınırları kontrol et
      this.cropBox.size = Math.max(minSize, Math.min(maxSize, this.cropBox.size));
    },

    moveCropBox(dx, dy) {
      const canvas = this.$refs.cropCanvas;
      this.cropBox.x = Math.max(0, Math.min(canvas.width - this.cropBox.size, this.cropBox.x + dx));
      this.cropBox.y = Math.max(0, Math.min(canvas.height - this.cropBox.size, this.cropBox.y + dy));
    },

    async cropAndProcess() {
      try {
        this.processingImage = true;

        // Geçici canvas oluştur
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Orijinal resmin boyutlarını ve pozisyonunu hesapla
        const canvas = this.$refs.cropCanvas;
        const imgRatio = this.originalImage.width / this.originalImage.height;
        let drawWidth, drawHeight, startX, startY;

        if (imgRatio > canvas.width / canvas.height) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          startX = 0;
          startY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          startX = (canvas.width - drawWidth) / 2;
          startY = 0;
        }

        // Kırpma alanının orijinal resim üzerindeki karşılığını hesapla
        const scaleX = this.originalImage.width / drawWidth;
        const scaleY = this.originalImage.height / drawHeight;
        const cropX = (this.cropBox.x - startX) * scaleX;
        const cropY = (this.cropBox.y - startY) * scaleY;
        const cropSize = this.cropBox.size * scaleX;

        // Final canvas'ı ayarla
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = 600;
        finalCanvas.height = 600;
        const finalCtx = finalCanvas.getContext('2d');

        finalCtx.drawImage(
          this.originalImage,
          cropX, cropY,
          cropSize, cropSize,
          0, 0,
          600, 600
        );

        this.croppedImage = finalCanvas.toDataURL();

        const imageData = finalCtx.getImageData(0, 0, 600, 600);
        const grayscaleArray = this.convertToGrayscale(imageData);
        const response = await this.sendImageData(grayscaleArray);
        this.initializeKnitData(response);
      } catch (err) {
        this.error = 'An error occurred while processing the image';
        console.error(err);
      } finally {
        this.processingImage = false;
        this.showCropModal = false;
      }
    },

    initializeKnitData(response) {
      const slider = document.querySelector('.progress-slider');
      if (slider) {
        slider.max = response.lines.length - 1;
      }
      knitData = response;
      knitData.lines = shuffle(knitData.lines);
      this.count = 0;
    },

    isValidImageFile(file) {
      const validTypes = ['image/jpeg', 'image/png'];
      return validTypes.includes(file.type);
    },

    convertToGrayscale(imageData) {
      const grayscaleArray = [];
      const width = imageData.width;

      for (let y = 0; y < imageData.height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          const gray = Math.round(
            imageData.data[idx] * 0.299 +
            imageData.data[idx + 1] * 0.587 +
            imageData.data[idx + 2] * 0.114
          );
          row.push(gray);
        }
        grayscaleArray.push(row);
      }
      return grayscaleArray;
    },

    async sendImageData(grayscaleData) {
      const response = await fetch('http://localhost:8070/knit-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: grayscaleData,
          lineLimit: 2000,
          pinCount: 300
        })
      });

      if (!response.ok) {
        throw new Error('Server Error');
      }

      return await response.json();
    },

    resetState() {
      this.processingImage = false;
      this.error = null;
      this.showCropModal = false;
      this.originalImage = null;
      this.croppedImage = null;
      this.cropBox = {
        x: 0,
        y: 0,
        size: 200,
        isDragging: false,
        isResizing: false,
        resizeHandle: null,
        startX: 0,
        startY: 0
      };

      const fileInput = document.getElementById('image_uploads');
      if (fileInput) {
        fileInput.value = '';
      }
    },

    togglePlay() {
      this.isPlaying = !this.isPlaying;
      console.log(this.isPlaying ? 'play' : 'pause');
    },

    handleSliderInteraction() {
      if (this.isPlaying) {
        this.isPlaying = false;
      }
    }
  }
});