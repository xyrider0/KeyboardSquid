export function chunker(arr, size) {
  return arr.reduce((all, one, i) => {
    const ch = Math.floor(i / size);
    all[ch] = [].concat((all[ch] || []), one);
    return all
  }, []);
}

export function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default class Rectangle{
  constructor(width, height){
      this.x = width;
      this.y = height;
  }

  multX(num){
    return new Rectangle(this.x * num, this.y);
  }
}

export function draw_arrow(ctx, x0, y0, x1, y1, width, head_len) {
  const head_angle = Math.PI / 6;
  const angle = Math.atan2(y1 - y0, x1 - x0);

  ctx.lineWidth = width;

  /* Adjust the point */
  x1 -= width * Math.cos(angle);
  y1 -= width * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(x1, y1);
  ctx.lineTo(x1 - head_len * Math.cos(angle - head_angle), y1 - head_len * Math.sin(angle - head_angle));
  ctx.lineTo(x1 - head_len * Math.cos(angle + head_angle), y1 - head_len * Math.sin(angle + head_angle));
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}