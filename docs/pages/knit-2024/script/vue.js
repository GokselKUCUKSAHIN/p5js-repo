const vueInstance = new Vue({
  el: "#app",
  data: {
    fraction: 0.6180339887498949,
    numberOfPoints: 500,
    dotsize: 3
  },
  methods: {
    uploadImage(event) {
      // const currentFiles = inpu
      const input = this.$refs.imgUpload;
      const currentFiles = input.files;
      console.log(input)


    }
  }
  // methods: {
  //   changed(event) {
  //     console.log(this.getValue(event));
  //   },
  //   getValue(event) {
  //     return event.target.value;
  //   },
  //   fixedDecimal(num, degree) {
  //     return parseFloat(num).toFixed(degree);
  //   }
  // },
  // watch: {
  //   fraction(oldVal, newVal) {
  //     p5redraw();
  //   }, numberOfPoints(oldVal, newVal) {
  //     p5redraw();
  //   }, dotsize(oldVal, newVal) {
  //     p5redraw();
  //   }
  // },
  // computed: {
  //   fractionComputed() {
  //     return this.fixedDecimal(this.fraction, 5);
  //   },
  //   dotsizeComputed() {
  //     return this.fixedDecimal(this.dotsize, 3);
  //   }
  // },
});