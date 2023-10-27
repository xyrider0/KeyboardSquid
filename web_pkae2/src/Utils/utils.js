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
      this.x = Math.round(width);
      this.y = Math.round(height);
  }

  multX(num){
    return new Rectangle(this.x * num, this.y);
  }
}