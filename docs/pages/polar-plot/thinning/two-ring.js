function int(x) {
  return ~~x;
}

function getPoints(binary) {
  const dimension = binary.length;
  const w = Array(dimension);
  let count = 0;
  for (let i = 0; i < dimension; i++) {
    if (binary[i]) {
      w[i] = 1;
    } else {
      w[i] = 0;
      count++;
    }
  }
  const spacing = 1;
  const totalValue = int(180 * spacing + 1);
  const AFRe = Array(totalValue + 1).fill(0); // WHY + 1?
  const AFIm = Array(totalValue + 1).fill(0); // WHY + 1?
  const gen = Array(totalValue + 1).fill(0);
  let maxGen = 0;
  const Np = [0, 35, 70];
  const x1 = [0, 0.5, 0.5];
  const rp = Array(3);
  for (let i = 0; i < 3; i++) {
    rp[i] = (Np[i] * x1[i]) / (2 * Math.PI);
  }
  for (let i = 1; i < totalValue + 1; i++) {
    const theta = ((i - 1) / spacing) * (Math.PI / 180) - (Math.PI * 0.5);
    for (let z = 1; z < 3; z++) {
      for (let k = 0; k < Np[z]; k++) {
        let sum = 0;
        for (let m = 1; m <= z; m++) {
          sum += Np[m - 1];
        }
        const fiENPay = ((2 * Math.PI) * (k + 1)) / Np[z];
        const fiENPay2 = (2 * Math.PI) * rp[z];
        const alfaEN = fiENPay2 * Math.sin(theta) * Math.cos(0 - fiENPay);
        AFRe[i] += w[k + sum] * Math.cos(alfaEN);
        AFIm[i] += w[k + sum] * Math.sin(alfaEN);
      }
      gen[i] = Math.sqrt((Math.pow(AFRe[i], 2) + Math.pow(AFIm[i], 2)));
      if (gen[i] > maxGen) {
        maxGen = gen[i];
      }
    }
  }
  const B3 = Array(totalValue + 1).fill(0); // WHY + 1?
  const a = Array(360).fill(0);
  let b = -90;
  for (let i = 1; i < gen.length; i++) {
    a[i] = b++;
    B3[i] = 0.00000000001 + 20 * Math.log10(gen[i] / maxGen);
  }
  B3.splice(0, 1);
  return B3;
}