import React, { useState} from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './MerchPage.module.css';
import Rectangle from "../../Utils/utils";
import CherryProfileMold from "./Molds.js";

const aspectDict = {
  'Full': new Rectangle(23.666, 7.333),
  'TKL': new Rectangle(19.333, 7.333),
  'FRL': new Rectangle(19.333, 6),
  '75': new Rectangle(17, 7),
  '65': new Rectangle(17, 6),
  '60': new Rectangle(16, 6),
  '40': new Rectangle(13, 5),
  'Numpad': new Rectangle(5, 6),
}

export default function MerchPage(){
  // Cropping Image + Preview
  const [src, setSrc] = useState(null);
  const [aspectSelection, setAspectSelection] = useState("Full");
  const [crop, setCrop] = useState({aspect: aspectDict['Full'].x/aspectDict['Full'].y});
  const [image, setImage] = useState(null);
  const [cropOutput, setCropOutput] = useState(null);
  const [keycapOutput, setKeycapOutput] = useState(null);
  const [mold1Output, setMold1Output] = useState(null);
  const [mold2Output, setMold2Output] = useState(null);
  
  const selectAspect = () => {
    var selection = document.getElementById('keyboardLayoutSelection').value
    var forceAspect = aspectDict[selection]
    setAspectSelection(selection)
    setCrop({aspect: forceAspect.x/forceAspect.y})
  };

  const selectImage = (file) => {
      setSrc(URL.createObjectURL(file));
  };

  const cropImageNow = () => {
      const magnify = 1
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const ctx = canvas.getContext('2d', {willReadFrequently: true});

      const pixelRatio = window.devicePixelRatio; // 0.66666 on my pc

      // canvas.width = crop.width * pixelRatio * magnify;
      // canvas.height = crop.height * pixelRatio * magnify;
      ctx.imageSmoothingQuality = 'high';

      const keySize = new Rectangle(230, 230) // Chosen so mold left and righ edges align at 0 overlap :3
      //const keySize = new Rectangle(canvas.width/aspectDict[aspectSelection].x, canvas.height/aspectDict[aspectSelection].y);
      const spacing = keySize.x/10;
      const functionspace = keySize.y/3 // Space between function keys and first row

      canvas.width = keySize.x * aspectDict[aspectSelection].x
      canvas.height = canvas.width * aspectDict[aspectSelection].y/aspectDict[aspectSelection].x

      // Base Crop
      ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          canvas.width,
          canvas.height,
      );


      // Converting to base64
      const base64Image = canvas.toDataURL('image/jpeg');
      setCropOutput(base64Image);

      // Keycap Preview
      const canvas2 = document.createElement('canvas');

      // Draw on HTML canvas the key label
      function createKeyText(keyLabel, ctx, xstart, ystart, font, fillStyle = '#FFFFFF'){
        ctx.font = font
        ctx.fillStyle = fillStyle
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        const customKeys = {'`': "`~", '1':'1!', '2': '2@', '3': '3#', '4': '4$', '5': '5%', '6': '6^', '7': '7&', '8': '8*', '9': '9(', '0': '0)', '-': '-_', '=': '=+',
                      '[': '[{', ']': ']}', '\\': '\\|', ';': ';:', '\'': '\'\"', ',': ',<', '.':'.>', '/':'/?', 'LCtrl':'Ctrl', 'RCtrl': 'Ctrl', 'LAlt': 'Alt', 'RAlt': 'Alt',
                    'NumLock': 'Num', 'Num/': '/', 'Num*': '*', 'Num-': '-', 'Num+':'+', 'Num1': '1', 'Num2':'2', 'Num3':'3', 'Num4':'4', 'Num5':'5', 'Num6':'6', 'Num7': '7', 'Num8': '8',
                  'Num9': '9', 'Num0': '0', 'NumEnter': 'Enter'}
        const specialKeys = ['RShift', 'LShift', 'Backspace', 'Tab', 'Caps', 'Enter', 'Fn', 'App', 'Up', 'Down', 'Left', 'Right', 'NumDel']

        if(specialKeys.includes(keyLabel)){
          ctx.fillText(keyLabel, xstart, ystart)
        }
        else{
          ctx.fillText((customKeys[keyLabel] ? customKeys[keyLabel] : keyLabel), xstart, ystart)
        }        
      }

      // Function for creating keyboard sized image
      // Draws on HTML canvas to create preview of what keyboard will look like
      function createKeyRow(dictIn, dictKeys, canvasIn, canvasOut, keySize, x_init, y_init, pct_overlap, spacing, lengthmod = 1, lengthmody = 1, font='64px serif'){
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

          createKeyText(keyLabel, canvasIn, (xstart + width/2), (ystart + height/2), font)

          canvasOut.drawImage(canvasIn.canvas, xstart, ystart, width, height, xstart, ystart, width, height)
          const imageDataWithBleed = canvasIn.getImageData(xstart - xoverlap,
                                                          ystart - yoverlap,
                                                          width + 2 * xoverlap,
                                                          height + 2 * yoverlap);

          dictIn[dictKeys[i]] = imageDataWithBleed;
        }
      }

      // Create Selection
      const overlap = 0; // percentage overlap between keys

      // Manual Resizing for Visuals
      canvas2.width = canvas.width;
      canvas2.height = canvas.height;
      const ctx2 = canvas2.getContext('2d')
      // const spacing = keySize.x/6;
      ctx2.fillStyle = "#FFFFFF";
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

      var imageDataDic = {}

      // Row 1
      if (["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 0.5 * keySize.y;
        createKeyRow(imageDataDic, ['Esc'], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['F1', 'F2', 'F3', 'F4'], ctx, ctx2, keySize, 2.5 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['F5', 'F6', 'F7', 'F8'], ctx, ctx2, keySize, 7 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['F9', 'F10', 'F11', 'F12'], ctx, ctx2, keySize, 11.5 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['PrtSc', 'ScrLk', 'Pause'], ctx, ctx2, keySize, 15.5 * keySize.x + functionspace, rowheight, overlap, spacing);
      }
      if (aspectSelection == "75"){
        var rowheight = 0.5 * keySize.y;
        createKeyRow(imageDataDic, ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause'], 
                                    ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing, 1);
      }


      // Row 2
      if (["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 1.5 * keySize.y + functionspace;
      }
      else if (aspectSelection == "75"){
        var rowheight = 1.5 * keySize.y;
      }
      else if (["FRL", "65", "60"].includes(aspectSelection)){
        var rowheight = 0.5 * keySize.y
      }
      if (aspectSelection != '40'){
        createKeyRow(imageDataDic, ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['Backspace'], ctx, ctx2, keySize, 13.5 * keySize.x, rowheight, overlap, spacing, 2);
        if(['75', '65'].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Home'], ctx, ctx2, keySize, 15.5 * keySize.x, rowheight, overlap, spacing);
        }
      }
      if(["Full", "TKL", "FRL"].includes(aspectSelection))
      {
        createKeyRow(imageDataDic, ['Ins', 'Home', 'PgUp'], ctx, ctx2, keySize, 15.5 * keySize.x + functionspace, rowheight, overlap, spacing);
        if (aspectSelection == "Full")
        {
          createKeyRow(imageDataDic, ['NumLock', 'Num/', 'Num*', 'Num-'], ctx, ctx2, keySize, 18.5 * keySize.x + 2 * functionspace, rowheight, overlap, spacing)
        }
      }
      
      // Row 3
      if (["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 2.5 * keySize.y + functionspace;     
      }
      else if (aspectSelection == "75"){
        var rowheight = 2.5 * keySize.y;
      }
      else{
        var rowheight = 1.5 * keySize.y; 
      }
      if (aspectSelection != "40"){
        createKeyRow(imageDataDic, ['Tab'], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing, 1.5);
        createKeyRow(imageDataDic, ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'], ctx, ctx2, keySize, 2 * keySize.x, rowheight, 1.43 * overlap, spacing);
        createKeyRow(imageDataDic, ['\\'], ctx, ctx2, keySize, 14 * keySize.x, rowheight, overlap, spacing, 1.5);
        if (["Full", "TKL", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Del', 'End', 'PgDn'], ctx, ctx2, keySize, 15.5 * keySize.x + functionspace, rowheight, 1.43*overlap, spacing);  
          if(aspectSelection == "Full")
          {
            createKeyRow(imageDataDic, ['Num+'], ctx, ctx2, keySize, 21.5 * keySize.x + 2 * functionspace, rowheight, overlap, spacing, 1, 2)
            createKeyRow(imageDataDic, ['Num7', 'Num8', 'Num9'], ctx, ctx2, keySize, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, spacing);
          }
        }
        if (["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['PgUp'], ctx, ctx2, keySize, 15.5 * keySize.x, rowheight, overlap, spacing)
        }
      }

      // Row 4
      if(["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 3.5 * keySize.y + functionspace;
      }
      else if (aspectSelection == "75"){
        var rowheight = 3.5 * keySize.y;
      }
      else{
        var rowheight = 2.5 * keySize.y
      }
      if (aspectSelection != "40"){
        createKeyRow(imageDataDic, ['Caps'], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing, 1.75);
        createKeyRow(imageDataDic, ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''], ctx, ctx2, keySize, 2.25 * keySize.x, rowheight, overlap, spacing);
        createKeyRow(imageDataDic, ['Enter'], ctx, ctx2, keySize, 13.25 * keySize.x, rowheight, 1.38*overlap, spacing, 2.25);
        
        if(["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['PgDn'], ctx, ctx2, keySize, 15.5 * keySize.x, rowheight, overlap, spacing)
        }
        if(aspectSelection == "Full"){
          createKeyRow(imageDataDic, ['Num4', 'Num5', 'Num6'], ctx, ctx2, keySize, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, spacing);
        }
      }

      // Row 5
      if(["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 4.5 * keySize.y + functionspace;
      }
      else if (aspectSelection == "75"){
        var rowheight = 4.5 * keySize.y;
      }
      else{
        var rowheight = 3.5 * keySize.y;
      }
      if (aspectSelection != "40"){
        createKeyRow(imageDataDic, ['LShift'], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, 1.38*overlap, spacing, 2.25);
        createKeyRow(imageDataDic, ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'], ctx, ctx2, keySize, 2.75 * keySize.x, rowheight, overlap, spacing);
        if (["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Caps2'], ctx, ctx2, keySize, 12.75 * keySize.x, rowheight, overlap, spacing, 1.75);
          createKeyRow(imageDataDic, ['Up', 'End'], ctx, ctx2, keySize, 14.5 * keySize.x, rowheight, overlap, spacing, 1);
        }
        else{
          createKeyRow(imageDataDic, ['RShift'], ctx, ctx2, keySize, 12.75 * keySize.x, rowheight, overlap, spacing, 2.75);
        }
        if(["TKL", "Full", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Up'], ctx, ctx2, keySize, 16.5 * keySize.x + functionspace, rowheight, overlap, spacing);
          if(aspectSelection == "Full"){
            createKeyRow(imageDataDic, ['NumEnter'], ctx, ctx2, keySize, 21.5 * keySize.x + 2 * functionspace, rowheight, overlap, spacing, 1, 2)
            createKeyRow(imageDataDic, ['Num1', 'Num2', 'Num3'], ctx, ctx2, keySize, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, spacing);
          }
        }
        if(["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['End'], ctx, ctx2, keySize, 15.5 * keySize.x, rowheight, overlap, spacing)
        }
      }

      // Row 6
      if(["Full", "TKL"].includes(aspectSelection)){
        var rowheight = 5.5 * keySize.y + functionspace;
      }
      else if (aspectSelection == "75"){
        var rowheight = 5.5 * keySize.y;
      }
      else{
        var rowheight = 4.5 * keySize.y;
      }
      if (aspectSelection != "40"){
        createKeyRow(imageDataDic, ['LCtrl'], ctx, ctx2, keySize, 0.5 * keySize.x, rowheight, overlap, spacing, 1.25);
        createKeyRow(imageDataDic, ['Win'], ctx, ctx2, keySize, 1.75 * keySize.x, rowheight, overlap, spacing, 1.25);
        createKeyRow(imageDataDic, ['LAlt'], ctx, ctx2, keySize, 3 * keySize.x, rowheight, overlap, spacing, 1.25);
        createKeyRow(imageDataDic, ['Space'], ctx, ctx2, keySize, 4.25 * keySize.x, rowheight, overlap, spacing, 6.25);
        createKeyRow(imageDataDic, ['RAlt'], ctx, ctx2, keySize, 10.5 * keySize.x, rowheight, overlap, spacing, 1.25);
        if(["75", "65"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['RCtrl'], ctx, ctx2, keySize, 11.75 * keySize.x, rowheight, overlap, spacing, 1.25);
          createKeyRow(imageDataDic, ['Left', 'Down', 'Right'], ctx, ctx2, keySize, 13.5 * keySize.x, rowheight, overlap, spacing);
        }
        else{
          createKeyRow(imageDataDic, ['Fn'], ctx, ctx2, keySize, 11.75 * keySize.x, rowheight, overlap, spacing, 1.25);
          createKeyRow(imageDataDic, ['App'], ctx, ctx2, keySize, 13 * keySize.x, rowheight, overlap, spacing, 1.25);
          createKeyRow(imageDataDic, ['RCtrl'], ctx, ctx2, keySize, 14.25 * keySize.x, rowheight, overlap, spacing, 1.25);
        }
        if(["TKL", "Full", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Left', 'Down', 'Right'], ctx, ctx2, keySize, 15.5 * keySize.x + functionspace, rowheight, overlap, spacing);
          if(aspectSelection == "Full"){
            createKeyRow(imageDataDic, ['Num0'], ctx, ctx2, keySize, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, spacing, 2);
            createKeyRow(imageDataDic, ['NumDel'], ctx, ctx2, keySize, 20.5 * keySize.x + functionspace * 2, rowheight, overlap, spacing);
          }
        }

      }

      //Convertin to base64
      const output = canvas2.toDataURL('image/png');
      setKeycapOutput(output);

      // Creat Sublimation Print
      
      // Keycap Mold1
      const mold = new CherryProfileMold()
      //setMold1Output(mold.createMold(mold.keyPropsMold1, imageDataDic));
      setMold2Output(mold.createMold(mold.keyPropsMold2, imageDataDic));
    }

  return (
      <div className="MerchPage">
          <center>
              <label for="keyboardlayout">Choose a Keyboard Layout:</label>

              <select id="keyboardLayoutSelection" onChange={(e)=> {
                selectAspect(e);
              }}>
                <option value="Full">Full</option>
                <option value="TKL">TenKeyless</option>
                <option value="FRL">Function Rowless</option>
                <option value="75">75%</option>
                <option value="65">65%</option>
                <option value="60">60%</option>
                <option value="40">40%</option>
                <option value="Numpad">Numpad</option>
              </select>
              <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                      selectImage(e.target.files[0]);
                  }}
              />
              <br />
              <br />
              <div>
                  {src && (
                      <div className={styles.imageSample}>
                          <ReactCrop src={src} onImageLoaded={setImage}
                              crop={crop} onChange={setCrop}/>
                          <br />
                          <button onClick={cropImageNow}>Crop</button>
                          <br />
                          <br />
                      </div>
                  )}
              </div>
              <div>{cropOutput && (
                  <div>
                    {<img src={cropOutput} className={styles.imagePreview}/>}
                    <br />
                    <br />
                    <img src={keycapOutput} className={styles.imagePreview}/>
                    <img src={mold1Output} className={styles.imagePreview}/>
                    <img src={mold2Output} className={styles.imagePreview}/>
                  </div>
                    )}
              </div>
          </center>
      </div>
  );
}
