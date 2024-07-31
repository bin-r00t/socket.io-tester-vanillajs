/**
 * 将一个图片的网络地址，转换到 canvas 显示
 * 方便后续从 canvas 转换为 dataURL 格式
 * @param {string} src 网络地址
 */
export function imageSrcToCanvas(src, cb) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = src;
  // 防止因跨域问题导致下面的 toDataURL 和 toBlob 调用失败
  image.crossOrigin = "anonymous";
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
    cb(canvas.toDataURL("image/jpeg", 1.0));
  };
}
