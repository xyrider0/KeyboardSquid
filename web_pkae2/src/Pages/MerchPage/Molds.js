import Rectangle from '../../Utils/utils'


// Function for creating a row of keys with similar sizing
function createKeys(dict, dictKeys, xstart, centerY, spacingX, keySize){
    // Construct and store Mold Location of each Key
    // dict: Dictionary to store data
    // dictKeys: Array of key labels (e.g. Q, W, E, Enter)
    // xstart: X Coordinate of center pixel on first key in row
    // centerY: Y coordinate of center pixel on key
    // spacingX: Distance between key centers in row
    // keySize: Rectangle with keySize values
    for(let i = 0; i < dictKeys.length; i++){
        let centerX = Math.ceil(xstart + i*spacingX)
        const center = new Rectangle(centerX,centerY)
        dict[dictKeys[i]] = {'center': center, 'keySize': keySize}
    }
    }


    
export default class CherryProfileMold{
    constructor(){
        //Creates Mold Print from preview

        // A3 Dimensions
        this.size = new Rectangle(4950, 3510);

        // keycap print sizes for different rows on keyboard
        this.keySizes = {
          'r4': new Rectangle(355, 355),
          'r4 2.0': new Rectangle(579, 355),
          'r3 1.5': new Rectangle(466, 355),
          'r3': new Rectangle(414, 414),
          'r2 2.25': new Rectangle(661, 401),
          'r2': new Rectangle(355, 355),
          'r1 2.25': new Rectangle(661, 401),
          'r1 2': new Rectangle(579, 355),
          'r1 2.75': new Rectangle(750, 355),
          'r1 1.25': new Rectangle(412, 355),
          'r1 1.75': new Rectangle(523, 355),
          'r2 1.75': new Rectangle(524, 355),
          'r1': new Rectangle(355, 355),
          '+': new Rectangle(577, 355),
          'NumEnter': new Rectangle(577, 355),
          'r1 6.25': new Rectangle(1613, 355)
        }
        
        // For Each Key
        // Store center: of Key x, y Location as Rectangle
        // Store KeySize: as Rectangle with x, y length
        this.keyPropsMold1 = {};
        this.keyPropsMold2 = {};

        // Adjustments based on testing
        const moldspacing = 472;
        const mold1startX = 548;

        // Mold 1 Properties
        createKeys(this.keyPropsMold1, ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'], mold1startX, 567, moldspacing, this.keySizes['r1']); // Mold Row 1
        createKeys(this.keyPropsMold1, ['Left', 'Up', 'Right', 'Down', 'Num1', 'Num2', 'Num3', 'NumDel', '/'], mold1startX, 1040, moldspacing, this.keySizes['r1']); // Mold Row 2
        createKeys(this.keyPropsMold1, ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], mold1startX, 1507, moldspacing, this.keySizes['r2']); // Mold Row 3
        createKeys(this.keyPropsMold1, [';', '\'', 'Num4', 'Num5', 'Num6'], mold1startX, 1978, moldspacing, this.keySizes['r2']); // Mold Row 4
        createKeys(this.keyPropsMold1, ['Q', 'W', 'E', 'R'], 2908, 1978, moldspacing, this.keySizes['r3']); // Mold Row 4
        createKeys(this.keyPropsMold1, ['T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del'], mold1startX, 2440, moldspacing, this.keySizes['r3']); // Mold Row 5
        createKeys(this.keyPropsMold1, ['End', 'PgDn', 'Num7', 'Num8', 'Num9', 'VolDown', 'Music', 'Play', 'VolUp'], mold1startX, 2913, moldspacing, this.keySizes['r3']); // Mold Row 6

        // Adjustments based on testing
        const mold2startX = 488;
        // Mold 2 Properties
        createKeys(this.keyPropsMold2, ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'], mold2startX, 496, 490, this.keySizes['r4']); // Mold Row 1
        createKeys(this.keyPropsMold2, ['F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '`', '1', '2'], mold2startX, 909, 435, this.keySizes['r4']); // Mold Row 2
        createKeys(this.keyPropsMold2, ['3', '4', '5', '6', '7', '8', '9', '0', '-', '='], mold2startX, 1322, 435, this.keySizes['r4']); // Mold Row 3
        createKeys(this.keyPropsMold2, ['Ins', 'Home', 'PgUp', 'NumLock', 'Num/', 'Num*', 'Num-'], mold2startX, 1736, 532, this.keySizes['r4']);// Mold Row 4
        createKeys(this.keyPropsMold2, ['Backspace'], 4280, 1736, 0, this.keySizes['r4 2.0']);// Mold Row 4
        createKeys(this.keyPropsMold2, ['Tab', '\\'], 543, 2150, 641, this.keySizes['r3 1.5']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['Enter'], 1842, 2150, 0, this.keySizes['r2 2.25']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['LShift'], 2630, 2150, 0, this.keySizes['r1 2.25']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['Num0'], 3411, 2150, 0, this.keySizes['r1 2']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['RShift'], 4196, 2150, 0, this.keySizes['r1 2.75']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['LCtrl', 'Win', 'LAlt', 'RAlt', 'Fn', 'App', 'RCtrl'], mold2startX+28, 2562, 540, this.keySizes['r1 1.25']);// Mold Row 6
        createKeys(this.keyPropsMold2, ['Caps'], 4323, 2562, 0, this.keySizes['r1 1.75']);// Mold Row 6
        createKeys(this.keyPropsMold2, ['Caps2'], mold2startX, 2975, 0, this.keySizes['r2 1.75']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['Num+'], 1389, 2975, 0, this.keySizes['+']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['NumEnter'], 2409, 2975, 0, this.keySizes['NumEnter']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['Space'], 3796, 2975, 0, this.keySizes['r1 6.25']);// Mold Row 7
    }

    // Function for creating the actual print for the sublimation dying on molds
    // Draws on HTML canvas to the dimensions required for the sublimation
    createMold(keyProps, imageDataDic){
        const canvas = document.createElement('canvas');
        canvas.width = this.size.x;
        canvas.height = this.size.y;
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let [key, value] of Object.entries(keyProps)){
        const imageData = imageDataDic[key]
        if(imageData){
            if (['NumEnter', 'Num+'].includes(key)){
                const tempCanvas = document.createElement('canvas')
                const tempCtx = tempCanvas.getContext('2d', {willReadFrequently: true})
                tempCanvas.width = imageData.width 
                tempCanvas.height = imageData.height 
                tempCtx.putImageData(imageData, 0, 0)
                ctx.save()
                ctx.translate(value['center'].x, value['center'].y)
                ctx.rotate(-Math.PI/2)
                ctx.drawImage(tempCanvas, 0, 0, imageData.width, imageData.height, -imageData.width/2, -imageData.height/2, imageData.width, imageData.height)
                ctx.restore()
            }
            else{
                ctx.putImageData(imageData, value['center'].x-imageData.width/2, value['center'].y-imageData.height/2)
            }
            
        }
        }

        // Create Pins Locations
        const circle_x = [265, 2477, 4692];
        const circle_y = [60, 3447];
        for(let i = 0; i < circle_x.length; i++){
        for(let j = 0; j < circle_y.length; j++)
        {
            ctx.beginPath();
            ctx.arc(circle_x[i], circle_y[j], 17, 0, 2 * Math.PI);
            ctx.stroke();
        }
        }
        const imageData = canvas.toDataURL('image/png');
        return(imageData)
    }
}