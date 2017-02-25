var screenshot = require('desktop-screenshot');
var PNGCrop = require('png-crop');
var fs = require('fs');
var resemble = require('node-resemble');


setInterval(function(){

    screenshot("screenshot.png", function(error, complete) {
        var config1 = {width: 1000, height: 75, top: 420, left:200};
        PNGCrop.crop('screenshot.png', 'screenshot.png', config1, function(err) {
          console.log('crop complete!');
          analyzeImage()
        });
    });

}, 5000);



function analyzeImage(){
    var croppedImage = fs.readFileSync('./screenshot.png');
    resemble(croppedImage).onComplete(function(data){
        // { red: 21, green: 22, blue: 23, brightness: 22 }
        console.log(data);
    });
}

