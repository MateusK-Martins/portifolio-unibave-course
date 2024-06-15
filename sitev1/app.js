
const boptuni = document.getElementById('optuni');
const item = document.querySelectorAll('.item');
let clickm1 = 0;
let clickm2 = 0;



boptuni.addEventListener('click',()=>{
    clickm2 ++;

    if(clickm2 === 1){
        boptuni.style.top = 10 + '%';
        boptuni.style.height = 250 + 'px';
        item.forEach(element => {
            element.style.display = 'flex'
        });
    }
    else if(clickm2 == 2){
        boptuni.style.height = 50 + 'px';
        item.forEach(element => {
            console.log('acess')
            element.style.display = 'none'
        });
        clickm2 = 0;
    }

})