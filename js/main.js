$(document).ready(function () {
    $("#banner").hide();
    console.log("main.js is ready ");

    var slide = false;
    $('.TLeftPurple').hover(function () {
        if (!slide) {
            $(this).css('transform', 'translateX(36px)')
            slide = true;
        }

        setTimeout(() => {
            $(this).css('transform', 'unset');
            slide = false;
        }, 1000);
    })

    $('.TLeftPurple').mouseleave(function () {

    })

})

// $('#DiscoverPicsSTV')

$(document).on("scroll", function () {

    if ($(document).scrollTop() > 100) {
        $("#banner").addClass("shrink");
        $("#banner").slideDown(400);
    } else {
        $("#banner").slideUp(400)
    }

});


// var Pieces = ["Parallelogram", "square", "TDownBlue", "TdownOrange", "TLeftPurple", "TLeftRed", "TRightGreen"];

// Pieces.forEach(p => {
//     var elem = $('.' + p)[0]; //select each elem from array
//     var MaskStyle = $(elem).offset(); // get style with Jquery plugin

//     var MaskID = p + 'Mask'; //create an Id
//     var Mask = '<div id="' + MaskID + '"></div>'; //Create the mask element with id
//     $('#Tangram').append(Mask); //Add the Element to Tangram
//     $('#' + MaskID).offset(MaskStyle); //Set the style form the element to the new mask

//     var ElemRect = document.getElementsByClassName(p)[0].getBoundingClientRect();
//     $('#' + MaskID).position({
//         top: ElemRect.top,
//         left: ElemRect.left
//     });
//     $('#' + MaskID).width(ElemRect.width);
//     $('#' + MaskID).height(ElemRect.height);



// });