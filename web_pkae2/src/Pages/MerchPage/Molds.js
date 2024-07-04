import Rectangle from '../../Utils/utils'

// Function for creating a row of keys with similar sizing
// 11.8 px / mm
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

        // keycap print sizes for different rows on keyboard on original mold print file (they are crap)
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
          'NumEnter': new Rectangle(587, 355),
          'r1 6.25': new Rectangle(1648.4, 355)
        }
        
        // For Each Key
        // Store center: of Key x, y Location as Rectangle
        // Store KeySize: as Rectangle with x, y length
        this.keyPropsMold1 = {};
        this.keyPropsMold2 = {};

        // Adjustments based on testing
        const moldspacing = 471-3.245;
        const mold1startX = 605+8;
        const heightadj = 24

        // Mold 1 Properties
        createKeys(this.keyPropsMold1, ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'], mold1startX, 585-15 + heightadj, moldspacing, this.keySizes['r1']); // Mold Row 1
        createKeys(this.keyPropsMold1, ['Left', 'Up', 'Right', 'Down', 'Num1', 'Num2', 'Num3', 'NumDel', '/'], mold1startX, 1055 + heightadj, moldspacing, this.keySizes['r1']); // Mold Row 2
        createKeys(this.keyPropsMold1, ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], mold1startX, 1512+heightadj, moldspacing, this.keySizes['r2']); // Mold Row 3
        createKeys(this.keyPropsMold1, [';', '\'', 'Num4', 'Num5', 'Num6'], mold1startX, 1977+heightadj, moldspacing, this.keySizes['r2']); // Mold Row 4
        createKeys(this.keyPropsMold1, ['Q', 'W', 'E', 'R'], 2943, 1969+heightadj, moldspacing, this.keySizes['r3']); // Mold Row 4
        createKeys(this.keyPropsMold1, ['T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del'], mold1startX-10, 2436+heightadj, moldspacing, this.keySizes['r3']); // Mold Row 5
        const mold1startX_pt2 = mold1startX - 4
        createKeys(this.keyPropsMold1, ['End', 'PgDn', 'Num7', 'Num8', 'Num9', 'VolDown', 'Music', 'Play', 'VolUp'], mold1startX_pt2, 2900+heightadj, moldspacing, this.keySizes['r3']); // Mold Row 6

        // Adjustments based on testing
        const mold2startX = 548-5;
        // Mold 2 Properties
        
        const row1spacing = 485.075;
        const row1y = 534+0.5
        createKeys(this.keyPropsMold2, ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'], mold2startX, row1y, row1spacing, this.keySizes['r4']); // Mold Row 1

        const row2_3spacing = 430.33+5/9;
        const row2y = 942
        createKeys(this.keyPropsMold2, ['F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '`', '1', '2'], mold2startX, row2y, row2_3spacing, this.keySizes['r4']); // Mold Row 2

        const row3y = 1351
        createKeys(this.keyPropsMold2, ['3', '4', '5', '6', '7', '8', '9', '0', '-', '='], mold2startX, row3y, row2_3spacing, this.keySizes['r4']); // Mold Row 3

        const row4y = 1754.3
        const row4spacing = 522
        createKeys(this.keyPropsMold2, ['Ins', 'Home', 'PgUp', 'NumLock', 'Num/', 'Num*', 'Num-'], mold2startX, row4y, row4spacing, this.keySizes['r4']);// Mold Row 4
        createKeys(this.keyPropsMold2, ['Backspace'], 4315, row4y+10, 0, this.keySizes['r4 2.0']);// Mold Row 4
        
        const row5y = 2160.6+2;
        const row5ylarge = row5y + 7;
        createKeys(this.keyPropsMold2, ['Tab', '\\'], 600.5, row5y, 635.5, this.keySizes['r3 1.5']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['Enter'], 1915, row5ylarge, 0, this.keySizes['r2 2.25']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['LShift'], 2701, row5ylarge, 0, this.keySizes['r1 2.25']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['Num0'], 3452, row5ylarge, 0, this.keySizes['r1 2']);// Mold Row 5
        createKeys(this.keyPropsMold2, ['RShift'], 4228, row5ylarge, 0, this.keySizes['r1 2.75']);// Mold Row 5
        
        const row6y = 2580.6
        const row6spacing = 538.5-5/9;
        createKeys(this.keyPropsMold2, ['LCtrl', 'Win', 'LAlt', 'RAlt', 'Fn', 'App', 'RCtrl'], mold2startX+18, row6y, row6spacing, this.keySizes['r1 1.25']);// Mold Row 6
        createKeys(this.keyPropsMold2, ['Caps2'], 4329, row6y, 0, this.keySizes['r1 1.75']);// Mold Row 6

        const row7y = 2985+2;
        const row7ylarge = row7y+5;
        createKeys(this.keyPropsMold2, ['Caps'], mold2startX+80, row7y, 0, this.keySizes['r2 1.75']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['Num+'], 1515, row7ylarge+11.8, 0, this.keySizes['+']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['NumEnter'], 2437.5, row7ylarge+11.8, 0, this.keySizes['NumEnter']);// Mold Row 7
        createKeys(this.keyPropsMold2, ['Space'], 3836, row7ylarge, 0, this.keySizes['r1 6.25']);// Mold Row 7
    }

    // Function for creating the actual print for the sublimation dying on molds
    // Draws on HTML canvas to the dimensions required for the sublimation
    createMold(ctxImg, keyProps, imageDataDic){
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
                ctx.save()
                ctx.translate(value['center'].x, value['center'].y)
                ctx.rotate(-Math.PI/2)
                ctx.drawImage(ctxImg, imageData['x'], imageData['y'], imageData['dx'], imageData['dy'], -imageData['dx']/2, -imageData['dy']/2, imageData['dx'], imageData['dy'])
                ctx.restore()
            }
            else{
                ctx.drawImage(ctxImg, imageData['x'], imageData['y'], imageData['dx'], imageData['dy'], value['center'].x-imageData['dx']/2, value['center'].y-imageData['dy']/2, imageData['dx'], imageData['dy'])
            }
            
        }
        }

        // Create Pins Locations
        const circle_x = [330, 2512, 4704];
        const circle_y = [107.2, 3447];
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