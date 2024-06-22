const fundo = document.getElementById('fundo');
const back = document.getElementById('back');
const next = document.getElementById('next');
const titu = document.getElementById('titu');
const parg = document.getElementById('a');
const hidden = document.getElementById('hidden');
const conten = document.getElementById('content');
const body = document.querySelector('body');


let click = 0

let clickb = 0

let n = 0

let content = [
    {
        titlec:'Who am I?',
        pc: 'My name is Mateus, live in Orleans city in estate of Santa Catarina, in country Brazil',
    },
    {
        titlec:'Wich profission I d like to have',
        pc: 'I I d like to be a programmer.',
    },
    {
        titlec:'What do I know?',
        pc: 'I know, the around a some intermediary Python and basic of Js, and intermediary abouth HTML and CSS,',
    },
    {
        titlec:'My courses',
        pc: 'I have a some online couses maked and I m being a some courses in this moment.',
    },
]

function bubble() {
    const item = document.createElement('span');
    var height = Math.random()* 60 + 30;
    var width = height;

    item.style.height = height + 'px';
    item.style.width = width + 'px';

    item.style.left = Math.random() * innerWidth + 'px';

    n = parseInt(Math.random()*1000)

    item.style.backgroundImage = `url('https://picsum.photos/id/${n}/1000/1000')`;

    body.appendChild(item);

    setTimeout(()=>{
        item.remove()
    }, 4000)
}

function wallpaper(){
    n = parseInt(Math.random()*1000)
    fundo.style.backgroundImage = `url('https://picsum.photos/id/${n}/1000/1000')`;
};

back.addEventListener('click',()=>{
    console.log(click)
    if(click == 0){
        click = 0;
    }
    else{
        click -= 1;
    }
    clicked()
})
next.addEventListener('click',()=>{
    console.log(click)
    if(click == 3){
        click = 3;
    }
    else{
        click += 1;
    }
    clicked()
})

function clicked(){

    if(click == 0){
        titu.innerText = content[0].titlec
        parg.innerText = content[0].pc
    }
    else if(click == 1){
        titu.innerText = content[1].titlec
        parg.innerText = content[1].pc
    }
    else if(click == 2){
        titu.innerText = content[2].titlec
        parg.innerText = content[2].pc
    }
    else if(click == 3){
        titu.innerText = content[3].titlec
        parg.innerText = content[3].pc
    }

}

hidden.addEventListener('click',()=>{
    if(clickb == 1){
        clickb = 0;
    }
    else{
        clickb += 1;
    }
    if(clickb == 0){
        head.style.opacity = 1;
        conten.style.opacity = 1;
    }
    else{
        head.style.opacity = 0;
        conten.style.opacity = 0;
    }
})

setInterval(wallpaper, 4100);
setInterval(bubble, 500);