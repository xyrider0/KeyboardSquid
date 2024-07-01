import Rectangle from "../../Utils/utils";

function draw_arrow(ctx, x0, y0, x1, y1, width, head_len) {
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
function createKeyText(keyLabel, ctx, xstart, ystart, fillStyle = '#FFFFFF'){
  ctx.strokeStyle = ctx.fillStyle
  ctx.fillStyle = fillStyle
  ctx.textAlign = "center"
  ctx.letterSpacing = "0px"
  ctx.textBaseline = "top"
  if(ctx.textBaseline == "top")
  {
    ystart = ystart - 55
  }
  const specialKeyStart = ystart + 35
  ctx.wordSpacing = "-8px"
  let yoffset = {"bottom": -20, "middle": 0, "top": 20}
  const customKeys = {'`': "`~", '1':'1!', '2': '2@', '3': '3#', '4': '4$', '5': '5%', '6': '6^', '7': '7&', '8': '8*', '9': '9(', '0': '0)', '-': '-_', '=': '=+',
              '[': '[{', ']': ']}', '\'': '\'\"', ';': ';:', ',': ',<', '.':'.>', '/':'/?', 'LCtrl':'Ctrl', 'RCtrl': 'Ctrl', 'LAlt': 'Alt', 'RAlt': 'Alt',
              'NumLock': 'Num', 'Num/': '/', 'Num*': '*', 'Num-': '-', 'Num+':'+', 'Num1': '1', 'Num2':'2', 'Num3':'3', 'Num4':'4', 'Num5':'5', 'Num6':'6', 'Num7': '7', 'Num8': '8',
          'Num9': '9', 'Num0': '0', 'NumEnter': 'Enter', 'RShift':'Shift', 'LShift':'Shift', 'F1': 'F 1', 'F2': 'F 2', 'F3': 'F 3', 'F4': 'F 4', 'F5': 'F 5',
          'F6': 'F 6', 'F7': 'F 7', 'F8': 'F 8', 'F9': 'F 9', 'F10':'F 10', 'F11': 'F 11', 'F12': 'F 12'}
  const specialKeys = ['Backspace', 'Enter', 'Up', 'Down', 'Left', 'Right', 'NumDel', 'Space', 'LShift', 'RShift', '\\', 'Caps', 'Caps2', 'Tab',
                        'LCtrl', 'Win', 'LAlt', 'RAlt', 'Fn', 'App', 'RCtrl', 'VolDown', 'Music', 'Play', 'VolUp']

  if(specialKeys.includes(keyLabel)){
    let len = 12
    let width = 15
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
      ctx.moveTo(xstart - x-10, ystart + 6)
      ctx.lineTo(xstart-10, ystart + 58)
      ctx.lineWidth = 3
      ctx.stroke()
      ctx.font = fontSizing('\\|')
      ctx.fillText('|', xstart + 25, ystart)
      
    }
    else if (keyLabel == 'NumDel'){
      ctx.fillText('.', xstart, ystart)
    }
    else if (['LCtrl', 'LAlt', 'RCtrl', 'RAlt', 'Fn'].includes(keyLabel)){
      ctx.font = fontSizing('wordFont');
      ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart + yoffset[ctx.textBaseline])
    }
    else if (['Backspace', 'Enter', 'Tab'].includes(keyLabel)){
      draw_arrow(ctx, xstart-15, ystart + yoffset[ctx.textBaseline], xstart - 15 - 1.5 * len, ystart + yoffset[ctx.textBaseline], width-10, head_len);
      ctx.beginPath();
      if(['Tab'].includes(keyLabel)){
        let h2 = 25;
        draw_arrow(ctx, xstart+25 - head_len, h2 + ystart + yoffset[ctx.textBaseline], xstart + 25 - head_len + 1.5 * len, h2 + ystart + yoffset[ctx.textBaseline], width-10, head_len);
        ctx.moveTo(xstart-15 - head_len, ystart + yoffset[ctx.textBaseline] + h2)
        ctx.lineTo(xstart + 25, ystart + yoffset[ctx.textBaseline]+ h2)
      }
      ctx.moveTo(xstart-15, ystart + yoffset[ctx.textBaseline])
      ctx.lineTo(xstart + 25, ystart + yoffset[ctx.textBaseline])
      if(keyLabel == 'Enter')
        {
          ctx.lineTo(xstart + 25, ystart + 10)
        }

      ctx.lineWdith=10
      ctx.stroke()
    }
    else if (['RShift', 'LShift'].includes(keyLabel)){
      let d1 = 12
      let d2 = 26
      let htop = -20
      let hbot = 15
      let y_orig = ystart + yoffset[ctx.textBaseline] + 10

      ctx.beginPath();
      ctx.moveTo(xstart-d1, y_orig)
      ctx.lineTo(xstart-d2, y_orig)
      ctx.lineTo(xstart, y_orig + htop)
      ctx.lineTo(xstart + d2, y_orig)
      ctx.lineTo(xstart + d1, y_orig)
      ctx.lineTo(xstart + d1, y_orig + hbot)
      ctx.lineTo(xstart - d1, y_orig + hbot)
      ctx.lineTo(xstart - d1, y_orig)
      ctx.miterLimit=5;
      ctx.lineWidth=5
      ctx.stroke()
    }
    else if (keyLabel == "Music"){
        let y_orig = ystart + 56
        let x_orig = xstart - 6
        let y_adj = width  + 2
        let w = 15
        let arc_rad = 9
        let h = 15


        ctx.beginPath()
        let r = new Path2D()
        r.arc(x_orig-w + 3, y_orig + h, arc_rad, 0, Math.PI * 2)
        ctx.fill(r)

        ctx.moveTo(x_orig - w + arc_rad, y_orig + h)
        ctx.lineTo(x_orig - w + arc_rad,  y_orig - h)
        ctx.lineTo(x_orig + w + arc_rad, y_orig - h)
        ctx.lineTo(x_orig + w + arc_rad, y_orig + h)
        
        ctx.lineWidth = 6
        ctx.stroke()

        let r2 = new Path2D()
        r2.arc(x_orig + w + 3, y_orig + h, arc_rad, 0, Math.PI * 2)

        ctx.fill(r2)

    }
    else if (keyLabel == "Play"){
    {
      let y_orig = ystart + 60
      let x_orig = xstart - 15
      let y_adj = width  + 2
      draw_arrow(ctx, x_orig, y_orig, x_orig+ 1.5 * len, y_orig, width, head_len)
      
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(x_orig + 2.5 * len, y_orig - y_adj)
      ctx.lineTo(x_orig + 2.5 * len, y_orig + y_adj)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x_orig + 3.5 * len, y_orig - y_adj)
      ctx.lineTo(x_orig + 3.5 * len, y_orig + y_adj)
      
      ctx.stroke()
    }
    }
    else if (['VolUp', 'VolDown'].includes(keyLabel)){
      let orig_x = xstart - 20;
      let orig_y = ystart + 60
      let left = 8
      let right = 20
      let h1 = 10
      let h2 = 25

      let r = new Path2D();
      r.moveTo(orig_x - left, orig_y - h1)
      r.lineTo(orig_x, orig_y - h1)
      r.lineTo(orig_x + right, orig_y -h2)
      r.lineTo(orig_x + right, orig_y + h2)
      r.lineTo(orig_x, orig_y + h1)
      r.lineTo(orig_x - left, orig_y + h1)
      r.lineTo(orig_x - left, orig_y-h1)

      ctx.fill(r)

      ctx.beginPath()
      ctx.arc(xstart - 5, orig_y, 20, -Math.PI/6, Math.PI/6)
      ctx.lineWidth = 5
      ctx.stroke()
      if(keyLabel == "VolUp"){
        ctx.beginPath()
        ctx.arc(xstart - 5, orig_y, 30, -Math.PI/6, Math.PI/6)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(xstart - 5, orig_y, 40, -Math.PI/6, Math.PI/6)
        ctx.stroke()
      }


    }
    else if (keyLabel == 'App'){
      let y_orig = ystart + yoffset[ctx.textBaseline]
      let h1 = 42
      let h2 = 28
      let h3 = 14
      let w = 15
      ctx.beginPath()
      ctx.moveTo(xstart - w, y_orig + h1)
      ctx.lineTo(xstart + w, y_orig + h1)
      ctx.lineTo(xstart + w, y_orig)
      ctx.lineTo(xstart - w, y_orig)
      ctx.lineTo(xstart - w, y_orig + h1)
      ctx.lineTo(xstart + w, y_orig + h1)
      ctx.moveTo(xstart - w, y_orig + h2)
      ctx.lineTo(xstart + w, y_orig + h2)
      ctx.moveTo(xstart - w, y_orig + h3)                                                                                      
      ctx.lineTo(xstart, y_orig + h3)
      ctx.lineWidth = 6;
      ctx.stroke()

      draw_arrow(ctx, xstart + 1.8 * w, y_orig + 0.9 * h1, xstart + 0.2 * w, y_orig + 0.7 * h2, width-8, head_len-3);
    }
    else if (keyLabel == 'Win'){
      let y_orig = ystart + yoffset[ctx.textBaseline] + 20
      let w1 = 22
      let w2 = 26
      let h1 = 20
      let h2 = 27
      let lwidth = 1.75;
      let slope = (h2-h1)/(w1 + w2)


      let r1 = new Path2D();
      r1.moveTo(xstart - w1, y_orig - lwidth)
      r1.lineTo(xstart - w1, y_orig - h1)
      r1.lineTo(xstart - lwidth, y_orig - h1 - slope * (w1 - lwidth))
      r1.lineTo(xstart - lwidth, y_orig - lwidth)
      r1.lineTo(xstart - w1, y_orig - lwidth)
      r1.closePath()
      ctx.fill(r1)                                                                                                        

      let r2 = new Path2D();
      r2.moveTo(xstart - w1, y_orig + lwidth)
      r2.lineTo(xstart - w1, y_orig + h1)
      r2.lineTo(xstart - lwidth, y_orig + h1 + slope * (w1 - lwidth))
      r2.lineTo(xstart - lwidth, y_orig + lwidth)
      r2.lineTo(xstart - w1, y_orig + lwidth)
      r2.closePath()
      ctx.fill(r2)

      let r3 = new Path2D();
      r3.moveTo(xstart + w2, y_orig + lwidth)
      r3.lineTo(xstart + w2, y_orig + h2)
      r3.lineTo(xstart + lwidth, y_orig + h2 - slope * (w2 - lwidth))
      r3.lineTo(xstart + lwidth, y_orig + lwidth)
      r3.lineTo(xstart + w2, y_orig + lwidth)
      r3.closePath()
      ctx.fill(r3)

      let r4 = new Path2D();
      r4.moveTo(xstart + w2, y_orig - lwidth)
      r4.lineTo(xstart + w2, y_orig - h2)
      r4.lineTo(xstart + lwidth, y_orig - h2 + slope * (w2 - lwidth))
      r4.lineTo(xstart + lwidth, y_orig - lwidth)
      r4.lineTo(xstart + w2, y_orig - lwidth)
      r4.closePath()
      ctx.fill(r4)
    }
    else if (['Caps', 'Caps2'].includes(keyLabel)){
      
      let d1 = 12
      let d2 = 26
      let htop = 20
      let hbot = 15
      let y_orig = ystart + yoffset[ctx.textBaseline] + 10
      ctx.beginPath();
      ctx.moveTo(xstart+d1, y_orig)
      ctx.lineTo(xstart+d2, y_orig)
      ctx.lineTo(xstart, y_orig + htop)
      ctx.lineTo(xstart - d2, y_orig)
      ctx.lineTo(xstart - d1, y_orig)
      ctx.lineTo(xstart - d1, y_orig - hbot)
      ctx.lineTo(xstart + d1, y_orig - hbot)
      ctx.lineTo(xstart + d1, y_orig)
      ctx.lineWidth=5
      ctx.stroke()
    }
    else{
      //console.log('Special Key ' + keyLabel + ' not found!')
      const specialKeyFont = 'Special'
      ctx.font = fontSizing(specialKeyFont)
      ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, specialKeyStart)
    }
  }
  else{
    if(customKeys[keyLabel]){
      ctx.font = fontSizing(customKeys[keyLabel])
    }
    else{
      ctx.font = fontSizing(keyLabel)
    }
    
    if(['`', '1', '2', '3', '4', '5', '6','7', '8', '9', '0'].includes(keyLabel)){
        let letterSpacing = 5
        ctx.letterSpacing = "5px"
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart + letterSpacing/2, ystart)
    }
    else if ([, '-', '=', ',', '.', '/', ';', '\'', '[', ']', '\\'].includes(keyLabel)){
        let letterSpacing = 20
        ctx.letterSpacing = '20px'
        if(keyLabel=='-'){
          ystart = ystart - 20;
        }
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart + letterSpacing/2, ystart)
    }
    else if (['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(keyLabel)){
        
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
    }
    else if (['Num+', 'NumEnter'].includes(keyLabel)){
        
      ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart+25)
    }
    else{
        ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
    }
  }        
}

function fontSizing(textToPrint){
  const style = ""
  const fontfamily = "garamond"
  const wordFont= style + '48px ' + fontfamily
  const specialFont = style + '54px ' + fontfamily
  const pairFont = style + '58px ' + fontfamily
  const letterFont = style + '66px ' + fontfamily
  
  if(textToPrint.length == 1){
    return letterFont
  }
  else if (textToPrint == 'Special'){
    return specialFont
  }
  else if (textToPrint.length==2){
    return pairFont
  }
  return wordFont
}

// Function for creating keyboard sized image
// Draws on HTML canvas to create preview of what keyboard will look like
export function createKeyRow(dictIn, dictKeys, canvasIn, canvasOut, keyData, x_init, y_init, pct_overlap, spacing, fillStyle, lengthmod = 1, lengthmody = 1, faceonly=1, printText = 1){
    // dictIn = dictionary to store image data in for print
    // dictKeys = array of keys being inputted to store in dictIN
    // canvasIn = html canvas original image is on
    // canvasOut = html canvas to put image preview
    // keyData: 
    //    size = Dimensions of standard (regular num/letter), single key print with properties x, y
    //    keyFace = Dimensions of standard (regular num/letter), single key print face (without sloped edges) with properties x, y
    //    keySlopeOneSide = Dimensions of standard (regular num/letter), single key print sloped edge (one side) with properties x, y
    // xstart = Horizontal Pixel location to grab from original image
    // ystart = Vertical Pixel location to grab from original image
    // pct_overlap = (Rectangle Class, requires props x, y) percentage of overlap between keys to adjust starting location of next keys
    // spacing = gap between keys (not key faces)
    let size = new Rectangle(0,0)
    let xoffset = 0
    let yoffset = keyData.spacing.y
    if(faceonly){
      size = keyData.keyFace
      xoffset = xoffset + 2 * keyData.keySlopeOneSide.x
      yoffset = yoffset + keyData.keySlopeOneSide.yTop + keyData.keySlopeOneSide.yBot
    }
    else{
      size = keyData.keySize
    }

    const xoverlap = pct_overlap.x/100 * size.x
    const yoverlap = pct_overlap.y/100 * size.y

    for(let i = 0; i < dictKeys.length; i++){
        const width = lengthmod * size.x + (lengthmod-1) * (xoffset + spacing.x)
        const height = lengthmody * size.y + (lengthmody-1) * yoffset
        const xstart = x_init + i * (keyData.keySize.x + spacing.x) + xoffset
        const ystart = y_init
        const keyLabel = dictKeys[i]

        if(printText){
          createKeyText(keyLabel, canvasIn, (xstart + width/2), (ystart + 4/9 * height), fillStyle)
        }

        console.log(width, height, xoverlap, yoverlap)
        canvasOut.drawImage(canvasIn.canvas, xstart, ystart, width, height, xstart, ystart, width, height)
        const imageDataWithBleed = {'x': xstart-xoverlap, 'y': ystart-yoverlap, 'dx': width + 2*xoverlap, 'dy': height + 2 * yoverlap}

        dictIn[dictKeys[i]] = imageDataWithBleed;
    }
}