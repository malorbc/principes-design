export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToPercents(rgb) {
  return {
    r: rgb.r / 255,
    g: rgb.g / 255,
    b: rgb.b / 255,
  };
}

export function changeMaterialColor(mat, hex) {
  const rgb = hexToRgb(hex);
  const ratio = rgbToPercents(rgb);
  mat.color.r = ratio.r;
  mat.color.g = ratio.g;
  mat.color.b = ratio.b;
}

export function changeEmissiveColor(mat, hex) {
  const rgb = hexToRgb(hex);
  const ratio = rgbToPercents(rgb);
  mat.emissive.r = ratio.r;
  mat.emissive.g = ratio.g;
  mat.emissive.b = ratio.b;
}
