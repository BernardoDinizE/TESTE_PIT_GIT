var corglobal;
var keyname = Event.KeyboardEvent 
var cores = document.querySelectorAll('.cor');
var t1 = 0;
var t2 = 0;
var click = "";

function corselect(index){
    cores[index].style.border = '4px solid white';
}

function removeselect(){
    cores[0].style.border = '2px solid black';
    cores[1].style.border = '2px solid black';
    cores[2].style.border = '2px solid black';
    cores[3].style.border = '2px solid black';
    cores[4].style.border = '2px solid black';
    cores[5].style.border = '2px solid black';
    cores[6].style.border = '2px solid black';
    cores[7].style.border = '2px solid black';
    cores[8].style.border = '2px solid black';
    cores[9].style.border = '2px solid black';
    cores[10].style.border = '2px solid black';
    cores[11].style.border = '2px solid black';
    cores[12].style.border = '2px solid black';
    cores[13].style.border = '2px solid black';
    cores[14].style.border = '2px solid black';
}

function pintar1(){
    corglobal = "black";
    removeselect();
    corselect(0);
}
function pintar2(){
    corglobal = "white";
    removeselect();
    corselect(1);
}
function pintar3(){
    corglobal = "#462b1f";
    removeselect();
    corselect(2);
}
function pintar4(){
    corglobal = "darkred";
    removeselect();
    corselect(3);
}
function pintar5(){
    corglobal = "red";
    removeselect();
    corselect(4);
}
function pintar6(){
    corglobal = "orange";
    removeselect();
    corselect(5);
}
function pintar7(){
    corglobal = "yellow";
    removeselect();
    corselect(6);
}
function pintar8(){
    corglobal = "lawngreen";
    removeselect();
    corselect(7);
}
function pintar9(){
    corglobal = "green";
    removeselect();
    corselect(8);
}
function pintar0(){
    corglobal = "darkturquoise";
    removeselect();
    corselect(9);
}
function pintar10(){
    corglobal = "dodgerblue";
    removeselect();
    corselect(10);
}
function pintar11(){
    corglobal = "blue";
    removeselect();
    corselect(11);
}
function pintar12(){
    corglobal = "purple";
    removeselect();
    corselect(12);
}
function pintar13(){
    corglobal = "fuchsia";
    removeselect();
    corselect(13);
}
function pintar14(){
    corglobal = "pink";
    removeselect();
    corselect(14);
}

// ----------------TESTANDO-------------------
function pinto(){
    document.addEventListener(
        "keyup",
        (event) => {
          const keyName = event.key;
          if (keyName == "Control") {
            if(t1 == 0){
                click = "click"
                t1 = 1;
                t2 = 0;
            }
            else{
                click = "mousemove"
                t2 = 1;
                t1 = 0;
            }
          }
        }
      );
}

function pincel(){
    if(t1 == 1){
        return "click"();
    }
    else if(t2 == 1){
        return "mousemove"();
    }
}


function pinto1(){
    document.addEventListener(
        "keyup",
        (event) => {
          const keyName = event.key;
          if (keyName == "1") {
            corglobal = "white";
          }
        }
      );
}
// ----------------TESTANDO-------------------

function peniss(){
    var box = document.getElementById('box');
    for(var i = 0; i < 225; i++){
        const div = document.createElement('div');
        div.className = 'boxbox';
        div.addEventListener("click", () => pintarq(div));
        box.appendChild(div);
    }
}

function pintarq(div){
    div.style.backgroundColor = corglobal
}

peniss();
pinto();
pinto1();
pincel();