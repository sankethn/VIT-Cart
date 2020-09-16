/* header */
var i = 0;
var headImages = [];
var footImages = [];
var time = 5000;

headImages[0] = '../images/head1.jpg';
headImages[1] = '../images/head2.jpg';
headImages[2] = '../images/head3.jpg';

footImages[0] = '../images/foot1.jpg';
footImages[1] = '../images/foot2.jpg';
footImages[2] = '../images/foot1.jpg';

function changeHeadImg(){
    document.slide.src = headImages[i];
    if(i <headImages.length - 1){
        i++
    }else{
        i=0;
    }

    setTimeout("changeHeadImg()", time)
}
window.onload = changeHeadImg;

/* sidebar */
function openMenu(){
    document.querySelector(".sidebar").classList.add("open")
}

function closeMenu(){
    document.querySelector(".sidebar").classList.remove("open")
}