$('#saveImg').on('click', saveImg);

function saveImg() {
    // $('body').addClass('can-output');
    // $('.canvas-output').css('display', 'block');

    var img = canvas.toDataURL("image/png");
    var c = document.getElementById('myCanvasExport');
    var ctx = c.getContext("2d");
    var imageObj1 = new Image();
    var imageObj2 = new Image();
    var bgfront = $('#front-product-view').css("background-image");
    bgfrontTemp = bgfront.split('assests')[1];
    bgfrontTemp2 = bgfrontTemp.split('.png')[0];
    imageObj1.src = "assests" + bgfrontTemp2 + ".png";
    imageObj1.onload = function () {
        ctx.drawImage(imageObj1, 0, 0);
        imageObj2.src = img;
        imageObj2.onload = function () {
            ctx.drawImage(imageObj2, 0, 0);
        }
    };


    var imgBack = canvasBack.toDataURL("image/png");
    var cBack = document.getElementById('myCanvasExportBack');
    var ctxBack = cBack.getContext("2d");
    var imageObj1Back = new Image();
    var imageObj2Back = new Image();
    var bgfront = $('#back-product-view').css("background-image");
    bgfrontTemp = bgfront.split('assests')[1];
    bgfrontTemp2 = bgfrontTemp.split('.png')[0];
    imageObj1Back.src = "assests" + bgfrontTemp2 + ".png";
    imageObj1Back.onload = function () {
        ctxBack.drawImage(imageObj1Back, 0, 0, 513, 490);
        imageObj2Back.src = imgBack;
        imageObj2Back.onload = function () {
            ctxBack.drawImage(imageObj2Back, 120, 100, 258, 300);
        }
    };

    console.log('Main Image Front -', JSON.stringify(canvasFrontProduct));
    console.log('Main Image Back -', JSON.stringify(canvasBackProduct));
    console.log('Front View -', JSON.stringify(canvas));
    console.log('Back View -', JSON.stringify(canvasBack));
}

$('.canvas-output-close').on('click', function () {
    $('body').removeClass('can-output');
    $('.canvas-output').css('display', 'none');
});