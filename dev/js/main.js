var accordeon = document.getElementsByClassName('accordeon__menu')[0],
    accordeonBtnPlus = document.getElementsByClassName('accordeon__plus'),
    accordeonBtnMinus = document.getElementsByClassName('accordeon__minus'),
    accordeonTitle = document.getElementsByClassName('accordeon__title');

accordeon.onclick = function(e){
    e = e || event;
    var target = e.target;
    for(i = 0; i < accordeonBtnPlus.length ; i++ ){

        if(target == accordeonBtnPlus[i]){
            accordeonBtnPlus[i].classList.toggle('accordeon__plus_hidden');

            accordeonBtnMinus[i].classList.toggle('accordeon__minus_visiable');

            accordeonTitle[i].classList.toggle('accordeon__title_dark');

            accordeonBtnPlus[i].parentNode.parentNode.classList.toggle('accordeon__item_opened');
        }
        
        if(target == accordeonBtnMinus[i]){
            accordeonBtnPlus[i].classList.toggle('accordeon__plus_hidden');

            accordeonBtnMinus[i].classList.toggle('accordeon__minus_visiable');

            accordeonTitle[i].classList.toggle('accordeon__title_dark');

            accordeonBtnMinus[i].parentNode.parentNode.classList.toggle('accordeon__item_opened');
        }
    }
}