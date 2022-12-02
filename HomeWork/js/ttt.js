var win = 0;
var lose = 0;

var pan = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

/*var click0 = document.getElementById("btn0");
var click1 = document.getElementById("btn1");
var click2 = document.getElementById("btn2");
var click3 = document.getElementById("btn3");
var click4 = document.getElementById("btn4");
var click5 = document.getElementById("btn5");
var click6 = document.getElementById("btn6");
var click7 = document.getElementById("btn7");
var click8 = document.getElementById("btn8");*/

Math.floor(Math.random()*8); /*0~8 까지 난수뽑기*/

function tttclick(btn){
    if (btn == "btn0"){
        pan[0] = 1;
        aisel();
        repan();
        console.log(pan);

    }else if(btn == "btn1" && pan[1] == 0){
        pan[1] = 1;
        repan();

    }else if(btn == "btn2" && pan[2] == 0){
        pan[2] = 1;
        repan();

    }else if(btn == "btn3" && pan[3] == 0){
        pan[3] = 1;
        repan();

    }else if(btn == "btn4" && pan[4] == 0){
        pan[4] = 1;
        repan();

    }else if(btn == "btn5" && pan[5] == 0){
        pan[5] = 1;
        repan();

    }else if(btn == "btn6" && pan[6] == 0){
        pan[6] = 1;
        repan();

    }else if(btn == "btn7" && pan[7] == 0){
        pan[7] = 1;
        repan();

    }else if(btn == "btn8" && pan[8] == 0){
        pan[8] = 1;
        repan();
    }
}

function repan(){
    for(let i =0; i <= 8; i++){
        if (pan[i] == 1){
            var selectbtn = document.querySelector(".btn"+i);
            selectbtn.innerText = "O";
        }else if(pan[i] == 2){
            var selectbtn = document.querySelector(".btn"+i);
            selectbtn.innerText = "X";
        }
    }

    
    if(add(pan) == 9){
        /*게임이 끝나는 경우*/

        pan = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];/*판 리셋*/
        for(let i =0; i <= 8; i++){
            var selectbtn = document.querySelector(".btn"+i);
            selectbtn.innerText = "*";
        }
    }else{
        /*게임이 끝나지 않은 경우*/
    }

}

function add(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 


