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

// Draw on HTML canvas the key label
export function createKeyText(keyLabel, ctx, xstart, ystart, font, fillStyle = '#FFFFFF'){
  ctx.strokeStyle = ctx.fillStyle
  ctx.font = font
  ctx.fillStyle = fillStyle
  ctx.textAlign = "center"
  ctx.letterSpacing = "0px"
  ctx.textBaseline = "bottom"
  ctx.wordSpacing = "-8px"
  let yoffset = {"bottom": -30, "middle": 0, "top": 30}
  const customKeys = {'`': "`~", '1':'1!', '2': '2@', '3': '3#', '4': '4$', '5': '5%', '6': '6^', '7': '7&', '8': '8*', '9': '9(', '0': '0)', '-': '-_', '=': '=+',
              '[': '[{', ']': ']}', '\'': '\'\"', ';': ';:', ',': ',<', '.':'.>', '/':'/?', 'LCtrl':'Ctrl', 'RCtrl': 'Ctrl', 'LAlt': 'Alt', 'RAlt': 'Alt',
              'NumLock': 'Num', 'Num/': '/', 'Num*': '*', 'Num-': '-', 'Num+':'+', 'Num1': '1', 'Num2':'2', 'Num3':'3', 'Num4':'4', 'Num5':'5', 'Num6':'6', 'Num7': '7', 'Num8': '8',
          'Num9': '9', 'Num0': '0', 'NumEnter': 'Enter', 'RShift':'Shift', 'LShift':'Shift', 'F1': 'F 1', 'F2': 'F 2', 'F3': 'F 3', 'F4': 'F 4', 'F5': 'F 5',
          'F6': 'F 6', 'F7': 'F 7', 'F8': 'F 8', 'F9': 'F 9', 'F10':'F 10', 'F11': 'F 11', 'F12': 'F 12'}
  const specialKeys = ['Backspace', 'Enter', 'Up', 'Down', 'Left', 'Right', 'NumDel', 'Space', '\\']

  if(specialKeys.includes(keyLabel)){
    let len = 15
    let width = 18
    let head_len = width
    if (keyLabel == 'Left'){
      draw_arrow(ctx, xstart, ystart + yoffset[ctx.textBaseline], xstart - 1.5 * len, ystart + yoffset[ctx.textBaseline], width, head_len)
    }
    else if (keyLabel == 'Down'){
      draw_arrow(ctx, xstart, ystart + yoffset[ctx.textBaseline], xstart, ystart + yoffset[ctx.textBaseline] + 1.5 * len, width, head_len)
    }
    else if (keyLabel == 'Right'){
      draw_arrow(ctx, xstart, ystart + yoffset[ctx.textBaseline], xstart+ 1.5 * len, ystart + yoffset[ctx.textBaseline], width, head_len)
    }
    else if (keyLabel == 'Up'){
      draw_arrow(ctx, xstart, ystart + yoffset[ctx.textBaseline], xstart, ystart + yoffset[ctx.textBaseline] - 1.5 * len, width, head_len)
    }
    else if (keyLabel == 'Space'){
      let length = 150
      ctx.beginPath();
      ctx.moveTo(xstart - length/2, ystart + yoffset[ctx.textBaseline])
      ctx.lineTo(xstart + length/2, ystart + yoffset[ctx.textBaseline])
      ctx.lineWidth = 10
      ctx.stroke()
    }
    else if (keyLabel == '\\'){
      let x = 30
      ctx.beginPath();
      ctx.moveTo(xstart - x, ystart - 50)
      ctx.lineTo(xstart, ystart - 2)
      ctx.lineWidth = 3
      ctx.stroke()
      ctx.fillText('|', xstart + 25, ystart)
    }
    else{
      ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
    }
  }
  else{
    if(['`', '1', '2', '3', '4', '5', '6','7', '8', '9', '0'].includes(keyLabel)){
        let letterSpacing = 5
        ctx.letterSpacing = "5px"
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart + letterSpacing/2, ystart)
    }
    else if ([, '-', '=', ',', '.', '/', ';', '\'', '[', ']', '\\'].includes(keyLabel)){
        let letterSpacing = 20
        ctx.letterSpacing = '20px'
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart + letterSpacing/2, ystart)
    }
    else if (['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(keyLabel)){
        
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
    }
    else{
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
    }
  }        
}

// Function for creating keyboard sized image
// Draws on HTML canvas to create preview of what keyboard will look like
export function createKeyRow(dictIn, dictKeys, canvasIn, canvasOut, keySize, x_init, y_init, pct_overlap, spacing, fillStyle, lengthmod = 1, lengthmody = 1, font='52px serif'){
    // dictIn = dictionary to store image data in for print
    // dictKeys = array of keys being inputted to store in dictIN
    // canvasIn = html canvas original image is on
    // canvasOut = html canvas to put image preview
    // keySize = Dimensions of standard (regular num/letter), single key print with properties x, y
    // xstart = Horizontal Pixel location to grab from original image
    // ystart = Vertical Pixel location to grab from original image
    // overlap = percentage of overlap between keys to adjust starting location of next keys
    // spacing = percentage gap between key faces (not to scale) (percent of empty space between keys proportional to size of key face)
    const xoverlap = pct_overlap * keySize.x
    const yoverlap = pct_overlap * keySize.y

    for(let i = 0; i < dictKeys.length; i++){
        const width = lengthmod * keySize.x - 2 * spacing
        const height = lengthmody * keySize.y - 2 * spacing
        const xstart = x_init + i * keySize.x + spacing
        const ystart = y_init + spacing
        const keyLabel = dictKeys[i]

        createKeyText(keyLabel, canvasIn, (xstart + width/2), (ystart + 4/9 * height), font, fillStyle)

        canvasOut.drawImage(canvasIn.canvas, xstart, ystart, width, height, xstart, ystart, width, height)
        const imageDataWithBleed = {'x': xstart-xoverlap, 'y': ystart-yoverlap, 'dx': width + 2*xoverlap, 'dy': height + 2 * yoverlap}

        dictIn[dictKeys[i]] = imageDataWithBleed;
    }
}