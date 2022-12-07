let win = 0;
let lose = 0;
let pan = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];


function tttclick(btn){
    if (btn == "btn0" && pan[0] == 0){
        pan[0] = 1;
        aisel();
        repan();

    }else if(btn == "btn1" && pan[1] == 0){
        pan[1] = 1;
        aisel();
        repan();

    }else if(btn == "btn2" && pan[2] == 0){
        pan[2] = 1;
        aisel();
        repan();

    }else if(btn == "btn3" && pan[3] == 0){
        pan[3] = 1;
        aisel();
        repan();

    }else if(btn == "btn4" && pan[4] == 0){
        pan[4] = 1;
        aisel();
        repan();

    }else if(btn == "btn5" && pan[5] == 0){
        pan[5] = 1;
        aisel();
        repan();

    }else if(btn == "btn6" && pan[6] == 0){
        pan[6] = 1;
        aisel();
        repan();

    }else if(btn == "btn7" && pan[7] == 0){
        pan[7] = 1;
        aisel();
        repan();

    }else if(btn == "btn8" && pan[8] == 0){
        pan[8] = 1;
        aisel();
        repan();
    }
}

function aisel(){

    for(let i=0; i<=10000; i++){
        let n = Math.floor(Math.random()*9); /*0~8 까지 난수뽑기*/
        if (pan[n]==0) {
            pan[n] = 2;
            break;
        }
    }
}

function finish(){
    pan = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];/*판 리셋*/
    for(let i =0; i <= 8; i++){
        var selectbtn = document.querySelector(".btn"+i);
        //moff(selectbtn);
        selectbtn.innerText = "*";
        moff(selectbtn);
    }
    alert("승리 : "+win+"  패배 : "+lose);
}

function finish_rule(){
    for(let i=1; i <= 2; i++) {
        if(pan[0]==i && pan[1]==i && pan[2]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
        if(pan[6]==i && pan[7]==i && pan[8]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
        if(pan[0]==i && pan[3]==i && pan[6]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
        if(pan[2]==i && pan[5]==i && pan[8]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }

        
        if(pan[1]==i && pan[4]==i && pan[7]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
        if(pan[3]==i && pan[4]==i && pan[5]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }

        

        if(pan[0]==i && pan[4]==i && pan[8]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
        if(pan[2]==i && pan[4]==i && pan[6]==i){
            if(i==1){
                win++;
            }else if(i==2){
                lose++
            }
            finish();
        }
    }
}

    
function monu(tag){
    tag.style.cursor="crosshair"
    tag.disabled=true
    tag.style.color = "blue"
}
function mona(tag){
    tag.style.cursor="crosshair"
    tag.disabled=true
    tag.style.color = "red"
}

function moff(tag){
    tag.style.cursor="wait"
    tag.disabled=false
    tag.style.color = "white"
}

function repan(){
    for(let i =0; i <= 8; i++){
        if (pan[i] == 1){
            var selectbtn = document.querySelector(".btn"+i);
            monu(selectbtn);
            selectbtn.innerText = "O";
        }else if(pan[i] == 2){
            var selectbtn = document.querySelector(".btn"+i);
            mona(selectbtn);
            selectbtn.innerText = "X";
        }
    }

    finish_rule();
    
    if(add(pan) >= 13){ /*게임이 끝나는 경우*/
        

        pan = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]; /*판 리셋*/
        alert("무승부");
        for(let i =0; i <= 8; i++){
            var selectbtn = document.querySelector(".btn"+i);
            selectbtn.innerText = "*";
            moff(selectbtn);
        }
    }else{ /*게임이 끝나지 않은 경우*/
        
    }

}

function add(arr) {
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum;
};