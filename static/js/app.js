const menu = document.getElementById('menu');
const back = document.getElementById('back');
const opts = document.querySelectorAll('.opt');
const myuni = document.getElementById('myuni');
const menu_opt_1 = document.getElementById('menu_opt_1')
const opt1_content = document.querySelectorAll('opt1_content');

menu_opt_1.style.display = 'none';

let click = 0;
let nopt = 0
opts.forEach((opt)=>{
    nopt ++;
})
menu.addEventListener('click',()=>{
    if(click < 1){
        click ++;
        menu.style.backgroundColor = 'green';
        menu.style.height = 90 + '%';
        menu.style.width = 80 + '%';
        opts.forEach((opt) => {
            opt.style.display = 'flex';
            opt.style.height = menu.clientHeight / nopt + 'px';
        });
    }
    else{
        click = 0;
    }
    console.log(click)
})
back.addEventListener('click',()=>{
    menu.style.backgroundColor = 'transparent';
    menu.style.height = 50 + 'px';
    menu.style.width = 50 + 'px';
    opts.forEach((opt)=>{
        opt.style.display = 'none';
    })
})