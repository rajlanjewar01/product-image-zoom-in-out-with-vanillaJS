/*----------Modal code----------*/
//modal button
var openModal = document.getElementById('open-modal');

//modal select
var modal = document.getElementById('modal-demo');

//close modal button
var closeModal = document.getElementsByClassName('close-modal')[0];

//open modal event listener
openModal.addEventListener('click', function(){
    modal.classList.toggle('visible');
});

//close modal event listener
closeModal.addEventListener('click', function(){
    modal.classList.remove('visible');
});






/*----------Image zoom in-out code---------- */
var prodImg = document.querySelector("#product-img");

//get actual image dimentions
const imgActualWidth = document.querySelector("#product-img").clientWidth;
const imgActualHeight = document.querySelector("#product-img").clientHeight;


//get image width
var imgCurrWidth = prodImg.clientWidth;

//get image height
var imgCurrHeight = prodImg.clientHeight;


var zoomInBtn = $("#zoom-in");
var zoomOutBtn = $("#zoom-out");

//zoom in image
function zoomIn(){
    //console.log(imgCurrWidth);
    if(imgCurrWidth >= 2000){
        alert("Maximum zoom-in level (2000px) reached");
    } else{
        prodImg.style.width = (imgCurrWidth += 100) + "px";
        prodImg.style.height = (imgCurrHeight += 100) + "px";
    }
}


//zoom out image
function zoomOut(){
    if(imgCurrWidth === imgActualWidth && imgCurrHeight === imgActualHeight){
        console.log("Actual image width*height => " + imgActualWidth + "*" +imgActualHeight + " Current image width*height "+ imgCurrWidth + "*" + imgCurrHeight )
        alert("Maximum zoom-out level reached");
    } else{
        prodImg.style.width = (imgCurrWidth -= 100) + "px";
        prodImg.style.height = (imgCurrHeight -= 100) + "px";
    }
}