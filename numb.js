var i=0;
    var image=document.getElementById("image");
    // Добавьте свои картинки в массив через запятую
    var imgs=new Array('number 1.jpg', 'number 2.jpg','number 3.jpg','number 4.jpg','number 5.jpg');
    function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}