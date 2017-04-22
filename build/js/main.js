var accordeon = document.getElementsByClassName('accordeon')[0],
    accordeonImgPlus = document.getElementsByClassName('accordeon__js_plus'),
    accordeonImgMinus = document.getElementsByClassName('accordeon__js_minus');

accordeon.onclick = function(e){
    e = e || event;
    var target = e.target;
    for(i = 0; i < accordeonImgPlus.length ; i++ ){
        if(target == accordeonImgPlus[i]){
            accordeonImgPlus[i].style.display = 'none';
            accordeonImgMinus[i].style.display = 'block';
            accordeonImgPlus[i].parentNode.classList.toggle('accordeon__item_opened');
        }
        if(target == accordeonImgMinus[i]){
            accordeonImgPlus[i].style.display = 'block';
            accordeonImgMinus[i].style.display = 'none';
            accordeonImgMinus[i].parentNode.classList.toggle('accordeon__item_opened');
        }
    }
}