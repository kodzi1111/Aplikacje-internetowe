/*<div>0</div>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>C</div>
<div>+</div>
<div>-</div>
<div>=</div>
<div>.</div>
<div>display</div>
#container>div:nth-child(1){

    grid-row:: 5;
    grid-col:umn: 1/span 2;

}
#container>div:nth-child(15){
    grid-row:: 5;
    grid-col:umn: 3;

}
#container>div:nth-child(14){
    grid-row:: 5;
    grid-col:umn: 4;

}
#container>div:nth-child(13){
    grid-row:: 4;
    grid-col:umn: 4;

}
#container>div:nth-child(12){
    grid-row:: 3;
    grid-col:umn: 4;

}
#container>div:nth-child(11){
    grid-row:: 2;
    grid-col:umn: 4;

}
#container>div:nth-child(10){
    grid-row:: 2;
    grid-col:umn: 3;

}
#container>div:nth-child(9){
    grid-row:: 2;
    grid-col:umn: 2;

}
#container>div:nth-child(8){
    grid-row:: 2;
    grid-col:umn: 1;

}
#container>div:nth-child(7){
    grid-row:: 3;
    grid-col:umn: 3;

}
#container>div:nth-child(6){
    grid-row:: 3;
    grid-col:umn: 2;

}
#container>div:nth-child(5){
    grid-row:: 3;
    grid-col:umn: 1;

}
#container>div:nth-child(4){
    grid-row:: 4;
    grid-col:umn: 3;

}
#container>div:nth-child(3){
    grid-row:: 4;
    grid-col:umn:2 ;

}
#container>div:nth-child(2){
    grid-row:: 4;
    grid-col:umn: 1;

}#container>div:nth-child(16){
    grid-row:: 1;
    grid-col:umn: 1/5;

    background-col:or: grey;
}*/
const pola= [{txt:0 , row: 5 ,col: '1/span 2'},
    {txt:1 , row: 4,col: 1},
    {txt:2 , row: 4,col: 2},
    {txt:3 , row: 4,col: 3},
    {txt:4 , row: 3,col: 1},
    {txt:5 , row: 3 ,col: 2},
    {txt:6 , row: 3 ,col: 3},
    {txt:7 , row: 2 ,col: 1},
    {txt:8 , row: 2 ,col: 2},
    {txt:9 , row: 2 ,col: 3},
    {txt:'.' , row: 5 ,col: 3},
    {txt:'+' , row: 3 ,col: 4},
    {txt:'-', row: 4 ,col:4},
    {txt:'C', row: 2 ,col: 4},
    {txt:'display', row: 1 ,col:'1/span 4'},
    {txt:'=', row: 5 ,col:4}
];
let clearflag= false;
let mem=0;
let op=0;

const handleClick =ev => {
    const disp =document.getElementById('display');
    const key =ev.target.textContent;
    switch (key){
        case 'C':
        disp.textContent='0';
        clearflag=false;
        mem=op=0;
        break;

        case'+':
        case'-':
        if(op===0){
            mem=parseFloat(disp.textContent);
        }else{
            mem+=op*parseFloat(disp.textContent);
        }
        op=key==='+'?1:-1;
        clearflag=true;

break;
case'=':
if(op===0){
    mem=parseFloat(disp.textContent);
}else{
    mem+=op*parseFloat(disp.textContent);
}
op=0;
disp.textContent=mem;

break;




        default:
        if(key==='0' &&disp.textContent==='0')return;
        if(key==='.'&&disp.textContent.includes('.'))return;
        if((disp.textContent ==='0'&& key!=='.')||clearflag){
        disp.textContent =key;
        clearflag=false;
        }else{

            disp.textContent +=key;
        }

        break;

    }


}
const init =()=>{
   const container = document.createElement('div');
   container.id='container';

   pola.forEach(el=> {
   const div = document.createElement('div');
   div.textContent = el.txt;
   div.style.gridColumn=el.col;
   div.style.gridRow=el.row;
   if(el.txt==='display'){
       div.id='display';
div.textContent="";


   }else{



   div.addEventListener('click',handleClick);
}
   container.appendChild(div);
   });
document.body.appendChild(container);





}
window.addEventListener('DOMContentLoaded',init);
