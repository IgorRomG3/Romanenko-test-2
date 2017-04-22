var accordeon = document.getElementsByClassName('accordeon')[0],
    accordeonBtnPlus = document.getElementsByClassName('accordeon__js_plus'),
    accordeonBtnMinus = document.getElementsByClassName('accordeon__js_minus');

accordeon.onclick = function(e){
    e = e || event;
    var target = e.target;
    for(i = 0; i < accordeonBtnPlus.length ; i++ ){
        if(target == accordeonBtnPlus[i]){
            accordeonBtnPlus[i].style.display = 'none';
            accordeonBtnMinus[i].style.display = 'block';
            accordeonBtnPlus[i].parentNode.classList.toggle('accordeon__item_opened');
        }
        if(target == accordeonBtnMinus[i]){
            accordeonBtnPlus[i].style.display = 'block';
            accordeonBtnMinus[i].style.display = 'none';
            accordeonBtnMinus[i].parentNode.classList.toggle('accordeon__item_opened');
        }
    }
}