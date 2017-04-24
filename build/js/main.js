var accordeon = document.getElementsByClassName('accordeon__menu')[0],
    accordeonBtnPlus = document.getElementsByClassName('accordeon__plus'),
    accordeonBtnMinus = document.getElementsByClassName('accordeon__minus');

accordeon.onclick = function(e){
    e = e || event;
    var target = e.target;
    for(i = 0; i < accordeonBtnPlus.length ; i++ ){
        if(target == accordeonBtnPlus[i]){
            accordeonBtnPlus[i].style.display = 'none';
            accordeonBtnMinus[i].style.display = 'block';
            accordeonBtnPlus[i].parentNode.parentNode.classList.toggle('accordeon__item_opened');
        }
        if(target == accordeonBtnMinus[i]){
            accordeonBtnPlus[i].style.display = 'block';
            accordeonBtnMinus[i].style.display = 'none';
            accordeonBtnMinus[i].parentNode.parentNode.classList.toggle('accordeon__item_opened');
        }
    }
}