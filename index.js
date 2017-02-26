/*
// ======= INSTRUCIONS ====================================
1. open exodus
2. log in
3. max screen exodus
5. $ npm install
4. $ node index.js
*/


// ======= REQUIRES =======================================
var mouse = require('macmouse');
mouse.init();



// =========================================================
// ======= Variables =======================================
// =========================================================


// coins are: btc, dash, doge, eth, lite
var coin1 = 'lite'
var coin2 = 'eth'

//amount is 'all', 'half', 'min'
var amount = 'all'

// =========================================================
// =========================================================
// =========================================================





// ======= COORDINATES =======================================
var dropdown1 =
    {
        btc:
        {
            x:400,
            y:250
        },
        dash:{
            x:400,
            y:300
        },
        doge:{
            x:400,
            y:350
        },
        eth:{
            x:400,
            y:425
        },
        lite:{
            x:400,
            y:480
        }
    }

var dropdown2 =
    {
        btc:
        {
            x:1000,
            y:250
        },
        dash:{
            x:1000,
            y:300
        },
        doge:{
            x:1000,
            y:350
        },
        eth:{
            x:1000,
            y:425
        },
        lite:{
            x:1000,
            y:480
        }
    }

var amount =
    {
        all:
        {
            x:350,
            y:245
        },
        half:
        {
            x:445,
            y:245
        },    
        min:
        {
            x:550,
            y:245
        }              
    }



// ======= BOT STUFF ====================================

//click exchange side panel
mouse.Place(75, 355);
mouse.Click(0, 0);
mouse.Click(0, 0);

// click dropdown1
mouse.Place(400, 180);
mouse.Click(0, 0);

//select dropdown1 coin
mouse.Place(dropdown1[coin1].x, dropdown1[coin1].y);
mouse.Click(0, 0);

// click dropdown2
mouse.Place(1000, 180);
mouse.Click(0, 0);

//select dropdown2 coin
mouse.Place(dropdown2[coin2].x, dropdown2[coin2].y);
mouse.Click(0, 0);

//select amount coin
mouse.Place(amount.all.x, amount.all.y);
mouse.Click(0, 0);

//click exchange coin
mouse.Place(730, 640);
// setTimeout(function(){
//     mouse.Click(0, 0);
// },500)


mouse.quit()