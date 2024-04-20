import React, {useState} from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './MerchPage.module.css';
import Rectangle from "../../Utils/utils";
import CherryProfileMold from "./Molds.js";
import { createKeyRow } from './CanvasDrawer.js';

const aspectDict = {
  'Full': new Rectangle(23.5, 7.3),
  'TKL': new Rectangle(19.333, 7.1),
  'FRL': new Rectangle(19.333, 6.06),
  '75': new Rectangle(17, 7.25),
  '65': new Rectangle(17, 6.06),
  '60': new Rectangle(16, 6.06),
  'Numpad': new Rectangle(5, 7.56)
}

export default function MerchPage(){
  // Cropping Image + Preview
  const [src, setSrc] = useState(null);
  const [aspectSelection, setAspectSelection] = useState("Full");
  const [fontColorSelection, setFontColorSelection] = useState("#FFFFFF");
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

  const selectFontColor = () => {
    var selection = document.getElementById('colorpicker').value
    setFontColorSelection(selection)
  };

  const cropImageNow = () => {

      // Create Selection
      // const overlap = new Rectangle(60, 41); // percentage overlap between keys (Rectangle Class)
      const overlap = new Rectangle(0, 0);

      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const ctx = canvas.getContext('2d', {willReadFrequently: true});

      ctx.imageSmoothingQuality = 'high';

      // 11.8 px / mm
      const keyFace = new Rectangle(142, 165) // Chosen so mold left and righ edges align at 0 overlap :3
      const keySlopeOneSide = {x: Math.round(0.25 * keyFace.x), yTop: Math.round(0.0714 * keyFace.y), yBot: Math.round(0.142857 * keyFace.y)}
      const spacing = new Rectangle(0.1322 * keyFace.x, 0.0714 * keyFace.y);
      const keySize = new Rectangle(keyFace.x + 2*keySlopeOneSide.x, keyFace.y + keySlopeOneSide.yTop + keySlopeOneSide.yBot)
      const functionspace  = 4 * spacing.y // Space between function keys and first row

      const keyProps = {'keyFace': keyFace, 'keySize': keySize, 'keySlopeOneSide': keySlopeOneSide, 'spacing': spacing}

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

      // Manual Resizing for Visuals
      canvas2.width = canvas.width;
      canvas2.height = canvas.height;
      const ctx2 = canvas2.getContext('2d')
      ctx2.fillStyle = "#FFFFFF";
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

      // Draw Opaque Original Image
      ctx2.globalAlpha = 0.1;
      ctx2.drawImage(ctx.canvas, 0, 0);
      ctx2.globalAlpha = 1;

      var imageDataDic = {}

      // Row 1
      var rowheight = 0.5 * keySize.y;
      if (["Full", "TKL"].includes(aspectSelection)){
        createKeyRow(imageDataDic, ['Esc'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['F1', 'F2', 'F3', 'F4'], ctx, ctx2, keyProps, 2.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['F5', 'F6', 'F7', 'F8'], ctx, ctx2, keyProps, 7 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['F9', 'F10', 'F11', 'F12'], ctx, ctx2, keyProps, 11.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['PrtSc', 'ScrLk', 'Pause'], ctx, ctx2, keyProps, 15.5 * keySize.x + functionspace, rowheight, overlap, 0, fontColorSelection);
        if (aspectSelection == "Full"){
          createKeyRow(imageDataDic, ['VolDown', 'Music', 'Play', 'VolUp'], ctx, ctx2, keyProps, 18.5 * keySize.x + 2 * functionspace, rowheight, overlap, 0, fontColorSelection);
        }
      }
      if (aspectSelection == "75"){
        createKeyRow(imageDataDic, ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause'], 
                                    ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1);
      }
      if (aspectSelection == "Numpad")
      {
        createKeyRow(imageDataDic, ['VolDown', 'Music', 'Play', 'VolUp'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection)
      }
      


      // Row 2
      if (["Full", "TKL", "Numpad"].includes(aspectSelection)){
        var rowheight = 1.5 * keySize.y + functionspace;
      }
      else if (aspectSelection == "75"){
        var rowheight = 1.5 * keySize.y  + spacing.y;
      }
      else if (["FRL", "65", "60"].includes(aspectSelection)){
        var rowheight = 0.5 * keySize.y
      }
      if (aspectSelection != 'Numpad'){
        createKeyRow(imageDataDic, ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['Backspace'], ctx, ctx2, keyProps, 13.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 2);
        if(['75', '65'].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Home'], ctx, ctx2, keyProps, 15.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        }
      }
      if(["Full", "TKL", "FRL"].includes(aspectSelection))
      {
        createKeyRow(imageDataDic, ['Ins', 'Home', 'PgUp'], ctx, ctx2, keyProps, 15.5 * keySize.x + functionspace, rowheight, overlap, 0, fontColorSelection);
        if (aspectSelection == "Full")
        {
          createKeyRow(imageDataDic, ['NumLock', 'Num/', 'Num*', 'Num-'], ctx, ctx2, keyProps, 18.5 * keySize.x + 2 * functionspace, rowheight, overlap, 0, fontColorSelection)
        }
      }
      if (aspectSelection == "Numpad")
      {
        createKeyRow(imageDataDic, ['NumLock', 'Num/', 'Num*', 'Num-'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection)
      }
      
      // Row 3
      if (["Full", "TKL", "Numpad"].includes(aspectSelection)){
        var rowheight = 2.5 * keySize.y + functionspace + 2 * spacing.y;     
      }
      else if (aspectSelection == "75"){
        var rowheight = 2.5 * keySize.y + 2 * spacing.y;
      }
      else{
        var rowheight = 1.5 * keySize.y + spacing.y; 
      }
      if (aspectSelection != "Numpad"){
        createKeyRow(imageDataDic, ['Tab'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.5);
        createKeyRow(imageDataDic, ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'], ctx, ctx2, keyProps, 2 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['\\'], ctx, ctx2, keyProps, 14 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.5);
        if (["Full", "TKL", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Del', 'End', 'PgDn'], ctx, ctx2, keyProps, 15.5 * keySize.x + functionspace, rowheight, overlap, 0, fontColorSelection);  
          if(aspectSelection == "Full")
          {
            createKeyRow(imageDataDic, ['Num+'], ctx, ctx2, keyProps, 21.5 * keySize.x + 2 * functionspace, rowheight, overlap, 0, fontColorSelection, 1, 2)
            createKeyRow(imageDataDic, ['Num7', 'Num8', 'Num9'], ctx, ctx2, keyProps, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, 0, fontColorSelection);
          }
        }
        if (["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['PgUp'], ctx, ctx2, keyProps, 15.5 * keySize.x, rowheight, overlap, 0, fontColorSelection)
        }
      }
      else if (aspectSelection == "Numpad")
      {
        createKeyRow(imageDataDic, ['Num7', 'Num8', 'Num9'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['Num+'], ctx, ctx2, keyProps, 3.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1, 2)
      }

      // Row 4
      if(["Full", "TKL", "Numpad"].includes(aspectSelection)){
        var rowheight = 3.5 * keySize.y + functionspace + 3 * spacing.y;
      }
      else if (aspectSelection == "75"){
        var rowheight = 3.5 * keySize.y + 3 * spacing.y;
      }
      else{
        var rowheight = 2.5 * keySize.y + 2 * spacing.y;
      }
      if (aspectSelection != "Numpad"){
        createKeyRow(imageDataDic, ['Caps'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.75);
        createKeyRow(imageDataDic, ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''], ctx, ctx2, keyProps, 2.25 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        createKeyRow(imageDataDic, ['Enter'], ctx, ctx2, keyProps, 13.25 * keySize.x, rowheight, overlap, 0, fontColorSelection, 2.25);
        
        if(["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['PgDn'], ctx, ctx2, keyProps, 15.5 * keySize.x, rowheight, overlap, 0, fontColorSelection)
        }
        if(aspectSelection == "Full"){
          createKeyRow(imageDataDic, ['Num4', 'Num5', 'Num6'], ctx, ctx2, keyProps, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, 0, fontColorSelection);
        }
      }
      if(aspectSelection == "Numpad"){
        createKeyRow(imageDataDic, ['Num4', 'Num5', 'Num6'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
      }

      // Row 5
      if(["Full", "TKL", "Numpad"].includes(aspectSelection)){
        var rowheight = 4.5 * keySize.y + functionspace + 4 * spacing.y;
      }
      else if (aspectSelection == "75"){
        var rowheight = 4.5 * keySize.y + 4 * spacing.y;
      }
      else{
        var rowheight = 3.5 * keySize.y + 3 * spacing.y;
      }
      if (aspectSelection != "Numpad"){
        createKeyRow(imageDataDic, ['LShift'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 2.25);
        createKeyRow(imageDataDic, ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'], ctx, ctx2, keyProps, 2.75 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        if (["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Caps2'], ctx, ctx2, keyProps, 12.75 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.75);
          createKeyRow(imageDataDic, ['Up', 'End'], ctx, ctx2, keyProps, 14.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1);
        }
        else{
          createKeyRow(imageDataDic, ['RShift'], ctx, ctx2, keyProps, 12.75 * keySize.x, rowheight, overlap, 0, fontColorSelection, 2.75);
        }
        if(["TKL", "Full", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Up'], ctx, ctx2, keyProps, 16.5 * keySize.x + functionspace, rowheight, overlap, 0, fontColorSelection);
          if(aspectSelection == "Full"){
            createKeyRow(imageDataDic, ['NumEnter'], ctx, ctx2, keyProps, 21.5 * keySize.x + 2 * functionspace, rowheight, overlap, 0, fontColorSelection, 1, 2)
            createKeyRow(imageDataDic, ['Num1', 'Num2', 'Num3'], ctx, ctx2, keyProps, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, 0, fontColorSelection);
          }
        }
        if(["65", "75"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['End'], ctx, ctx2, keyProps, 15.5 * keySize.x, rowheight, overlap, 0, fontColorSelection)
        }
      }
      if(aspectSelection == "Numpad"){
        createKeyRow(imageDataDic, ['NumEnter'], ctx, ctx2, keyProps, 3.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1, 2)
        createKeyRow(imageDataDic, ['Num1', 'Num2', 'Num3'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
      }

      // Row 6
      if(["Full", "TKL", "Numpad"].includes(aspectSelection)){
        var rowheight = 5.5 * keySize.y + functionspace + 5 * spacing.y;
      }
      else if (aspectSelection == "75"){
        var rowheight = 5.5 * keySize.y + 5 * spacing.y;
      }
      else{
        var rowheight = 4.5 * keySize.y + 4 * spacing.y;
      }
      if (aspectSelection != "Numpad"){
        createKeyRow(imageDataDic, ['LCtrl'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
        createKeyRow(imageDataDic, ['Win'], ctx, ctx2, keyProps, 1.75 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
        createKeyRow(imageDataDic, ['LAlt'], ctx, ctx2, keyProps, 3 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
        createKeyRow(imageDataDic, ['Space'], ctx, ctx2, keyProps, 4.25 * keySize.x, rowheight, overlap, 0, fontColorSelection, 6.25);
        createKeyRow(imageDataDic, ['RAlt'], ctx, ctx2, keyProps, 10.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
        if(["75", "65"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['RCtrl'], ctx, ctx2, keyProps, 11.75 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
          createKeyRow(imageDataDic, ['Left', 'Down', 'Right'], ctx, ctx2, keyProps, 13.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
        }
        else{
          createKeyRow(imageDataDic, ['Fn'], ctx, ctx2, keyProps, 11.75 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
          createKeyRow(imageDataDic, ['App'], ctx, ctx2, keyProps, 13 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
          createKeyRow(imageDataDic, ['RCtrl'], ctx, ctx2, keyProps, 14.25 * keySize.x, rowheight, overlap, 0, fontColorSelection, 1.25);
        }
        if(["TKL", "Full", "FRL"].includes(aspectSelection)){
          createKeyRow(imageDataDic, ['Left', 'Down', 'Right'], ctx, ctx2, keyProps, 15.5 * keySize.x + functionspace, rowheight, overlap, 0, fontColorSelection);
          if(aspectSelection == "Full"){
            createKeyRow(imageDataDic, ['Num0'], ctx, ctx2, keyProps, 18.5 * keySize.x + functionspace * 2, rowheight, overlap, 0, fontColorSelection, 2);
            createKeyRow(imageDataDic, ['NumDel'], ctx, ctx2, keyProps, 20.5 * keySize.x + functionspace * 2, rowheight, overlap, 0, fontColorSelection);
          }
        }
      }
      if(aspectSelection == "Numpad"){
        createKeyRow(imageDataDic, ['Num0'], ctx, ctx2, keyProps, 0.5 * keySize.x, rowheight, overlap, 0, fontColorSelection, 2);
        createKeyRow(imageDataDic, ['NumDel'], ctx, ctx2, keyProps, 2.5 * keySize.x, rowheight, overlap, 0, fontColorSelection);
      }

      //Convertin to base64
      const output = canvas2.toDataURL('image/png');
      setKeycapOutput(output);

      // Creat Sublimation Print
      
      // Keycap Mold1
      const mold = new CherryProfileMold()
      setMold1Output(mold.createMold(ctx.canvas, mold.keyPropsMold1, imageDataDic));
      setMold2Output(mold.createMold(ctx.canvas, mold.keyPropsMold2, imageDataDic));
    }
 
  return (
      <div className="MerchPage">
          <center>
              <label htmlFor="keyboardlayout">Choose a Keyboard Layout:</label>

              <select id="keyboardLayoutSelection" onChange={(e)=> {
                selectAspect(e);
              }}>
                <option value="Full">Full</option>
                <option value="TKL">TenKeyless</option>
                <option value="FRL">Function Rowless</option>
                <option value="75">75%</option>
                <option value="65">65%</option>
                <option value="60">60%</option>
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
              <label htmlFor="fontColor"> Choose a Font color: </label>
              <input type="color" id="colorpicker" onChange={(e)=> {
                selectFontColor(e);}} defaultValue="#FFFFFF"></input>
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
                    {/* {<img src={cropOutput} className={styles.imagePreview}/>} */}
                    <br />
                    <br />
                    <img src={keycapOutput} className={styles.imageSample}/>
                    <img src={mold1Output} className={styles.imagePreview}/>
                    <img src={mold2Output} className={styles.imagePreview}/>
                  </div>
                    )}
              </div>
          </center>
      </div>
  );
}
