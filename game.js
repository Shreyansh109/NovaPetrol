document.getElementById("shot1img").style.position="absolute";
document.getElementById("shot1img").style.left="10px";
document.getElementById("shot1img").style.top="10px";

document.getElementById("shot1amocnt").style.position="absolute";
document.getElementById("shot1amocnt").style.left="74px";
document.getElementById("shot1amocnt").style.top="10px";

document.getElementById("shot2img").style.position="absolute";
document.getElementById("shot2img").style.left=`${10 + document.getElementById("shot1img").clientWidth+15+46.93+32.25}px`;
document.getElementById("shot2img").style.top="10px";

document.getElementById("shot2amocnt").style.position="absolute";
document.getElementById("shot2amocnt").style.left=`${document.getElementById("shot2img").clientWidth+document.getElementById("shot2img").offsetLeft}px`;
document.getElementById("shot2amocnt").style.top="10px";

document.getElementById("HPcon").style.left=`${document.getElementById("shot2amocnt").offsetLeft+32.25*2+10}px`;

document.getElementById("pshipHPcon").style.display="block";

let body = document.getElementById('screen');
let sh = window.innerHeight;
let sw = window.innerWidth;
document.getElementById("pshipHPcon").style.left=`${sw/2-100}px`;
document.getElementById("pshipID").style.height=`${sw/10}px`;
document.getElementById("pshipID").style.width=`${sw/2}px`;

let space = document.getElementById('ship');
let ssh = space.clientHeight;
let ssw = space.width;
let iddc = 0;

var lvl = 1;
var myshipHP=100;
var enmyHP1=100;
var enmyHP2=100;
var enmyHP3=100;
var pshipHP=200;
var shottyp = 0;
var shot1amo=50; //first shot ammo
document.getElementById("shot1amocnt").innerHTML=`<b>${shot1amo}</b>`;
var shot2amo=5; //second shot ammo
document.getElementById("shot2amocnt").innerHTML=`<b>${shot2amo}</b>`;
var shot3amo=0;
var ss=10; //shot speed
var sd=5; //shot damage

var nhelp=3;//give information how many types of help are activated

document.onkeydown = function(event) {
    let topp = space.offsetTop;
    let leftp = space.offsetLeft;
    if(myshipHP>0 && pshipHP>0){
        switch(event.key) {
            case "ArrowDown":
            case "s":
            case "S":
                if((topp + parseInt(ssh) + 15) <= sh) {
                    space.style.top = `${topp + 15}px`;
                }
                break;
            case "ArrowUp":
            case "W":
            case "w":
                if(topp-15 > 0) {
                    space.style.top = `${topp - 15}px`;
                }
                break;
            case "ArrowLeft":
            case "A":
            case "a":
                if(leftp > 10) {
                    space.style.left = `${leftp - 20}px`;
                    space.setAttribute("src", "file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/left%20tilt%20spaceship.png");
                }
                break;
            case "ArrowRight":
            case "D":
            case "d":
                if((leftp + parseInt(ssw) + 12) <= sw) {
                    space.style.left = `${leftp + 20}px`;
                    space.setAttribute("src", "file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/right%20tilt%20spaceship.png");
                }
                break;
            case "z":
            case "Z":
                if((shottyp==0 && shot1amo!=0) || (shottyp==1 && shot2amo!=0) || (shottyp==2 && shot2amo!=0)){
                    createShot(leftp, topp);
                }
                if(shottyp==0 && shot1amo>0){
                    shot1amo--;
                    document.getElementById("shot1amocnt").innerHTML=`<b>${shot1amo}</b>`;
                }
                else if(shottyp==1 && shot2amo>0){
                    shot2amo--;
                    document.getElementById("shot2amocnt").innerHTML=`<b>${shot2amo}</b>`;
                }
                else if(shottyp==2 && shot3amo>0){
                    shot3amo--;
                    document.getElementById("shot3amocnt").innerHTML=`<b>${shot3amo}</b>`;
                }
                if((shot1amo==0 && shottyp==0) || (shot2amo==0 && shottyp==1) || (shot3amo==0 && shottyp==2)){
                    if(nl==1){
                        document.getElementById("no ammo").currentTime= 0;
                        document.getElementById("no ammo").play(); //no ammo
                    }
                    if(shot1amo==0){
                        document.getElementById("shot1img").style.opacity="0.7";
                    }
                    if(shot2amo==0){
                        document.getElementById("shot2img").style.opacity="0.7";
                    }
                    if( shot3amo==0){
                        document.getElementById("shot3img").style.opacity="0.7";
                    }
                }
                break;
            case "0":
                shottyp = 0;
                sd=5;
                ss=10;
                document.getElementById("shot1img").style.border="2px rgb(9, 214, 9) dashed";
                document.getElementById("shot1img").style.top="10px";
                document.getElementById("shot1img").style.left="10px";

                document.getElementById("shot2img").style.border="none";
                document.getElementById("shot2img").style.top="10px";
                document.getElementById("shot2img").style.left=`${10 + document.getElementById("shot1img").clientWidth+15+2+46.93+32.25}px`;
                document.getElementById("shot3img").style.border="none";
                document.getElementById("shot3img").style.top="11px";
                document.getElementById("shot3img").style.left=`${document.getElementById("shot2amocnt").offsetLeft+32.25*2+10}px`;
                break;
            case "1":
                shottyp = 1;
                sd=15;
                ss=5
                document.getElementById("shot2img").style.border="2px rgb(214, 9, 180) dashed";
                document.getElementById("shot2img").style.top="8px";
                document.getElementById("shot2img").style.left=`${10 + document.getElementById("shot1img").clientWidth+15+46.93+32.25}px`;

                document.getElementById("shot1img").style.border="none";
                document.getElementById("shot1img").style.top="11px";
                document.getElementById("shot1img").style.left="11px";
                document.getElementById("shot3img").style.border="none";
                document.getElementById("shot3img").style.top="11px";
                document.getElementById("shot3img").style.left=`${document.getElementById("shot2amocnt").offsetLeft+32.25*2+10}px`;
                break;
            case "2":
                if(nhelp==4){
                    shottyp = 2;
                    if(mangiv==1){
                        sd=25;
                        ss=30;
                        document.getElementById("shot3img").style.border="2px rgb(2, 255, 18) dashed";
                    }
                    else if(mangiv==2){
                        sd=30;
                        ss=20;
                        document.getElementById("shot3img").style.border="2px rgb(250, 0, 80) dashed";
                    }
                    document.getElementById("shot3img").style.top="10px";
                    document.getElementById("shot3img").style.left=`${document.getElementById("shot2amocnt").offsetLeft+32.25*2+10-2}px`;

                    document.getElementById("shot1img").style.border="none";
                    document.getElementById("shot1img").style.top="11px";
                    document.getElementById("shot1img").style.left="11px";
                    document.getElementById("shot2img").style.border="none";
                    document.getElementById("shot2img").style.top="10px";
                    document.getElementById("shot2img").style.left=`${10 + document.getElementById("shot1img").clientWidth+15+2+46.93+32.25}px`;
                }
                break;
        }
    }
} 

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'a' || event.key === 'A' || event.key === 'd' || event.key === 'D') {
        space.setAttribute("src", "file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/spaceship.png");
    }
});

function createShot(leftp, topp) {
    let el = document.createElement("span");
    let shipimg = document.getElementById("ship");
    shipimg.before(el);
    iddc++;
    el.id = `shotcon${iddc}`;
    el.style.position = 'absolute';

    let shotContent = '';
    if (shottyp == 0) {
        shotContent = nl == 1 
            ? `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shoot1.png' alt='shot' height='50'><audio id='myAudio' autoplay><source src='C:/Users/shrey/Desktop/Shreyansh/Nova Petrol/resources/blaster0.mpeg' type='audio/mpeg'></audio>` 
            : `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shoot1.png' alt='shot' height='50'>`;
    }
    else if (shottyp == 1) {
        shotContent = nl == 1 
            ? `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/blaster2.png' alt='shot' height='44'><audio id='myAudio' autoplay><source src='C:/Users/shrey/Desktop/Shreyansh/Nova Petrol/resources/blaster1.mpeg' type='audio/mpeg'></audio>` 
            : `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/blaster2.png' alt='shot' height='44'>`;
    } 
    else if (shottyp == 2){
        if(mangiv==1){
            shotContent = nl == 1
                ? `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%203-1.png' alt='shot' height='44'><audio id='myAudio' autoplay><source src='C:/Users/shrey/Desktop/Shreyansh/Nova Petrol/resources/blaster2_aud.mpeg' type='audio/mpeg'></audio>` 
                : `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%203-1.png' alt='shot' height='44'>`;
        }
        else if(mangiv==2){
            shotContent = nl == 1
                ? `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%203-2.png' alt='shot' height='44'><audio id='myAudio' autoplay><source src='C:/Users/shrey/Desktop/Shreyansh/Nova Petrol/resources/blaster2_aud.mpeg' type='audio/mpeg'></audio>` 
                : `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%203-2.png' alt='shot' height='44'>`;
        }
    }

    el.innerHTML = shotContent;

    // Wait for the content to render before positioning
    requestAnimationFrame(() => {
        var shotcon = document.getElementById(`shotcon${iddc}`);
        shotcon.style.left = `${leftp + shipimg.offsetWidth / 2 - shotcon.offsetWidth / 2}px`;
        shotcon.style.top = `${topp - 10}px`;

        let shotImg = shotcon.querySelector('img');
        moveShot(shotcon, shotImg);
    });
}


//advance Utility for enemyships
let mangiv
function manual(X){
    let rp=1;
    let mancon=document.getElementById("manual");//manual container
    mangiv=Math.floor(Math.random()*(2-1+1))+1;//which manual will loose
    if(mangiv==1){
        mancon.innerHTML=`<img src=file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/Project%20G64.png height=${document.getElementById('ship').offsetHeight/1.5}px>`;
    }
    else if(mangiv==2){
        mancon.innerHTML=`<img src=file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/Project%20K9.png height=${document.getElementById('ship').offsetHeight/1.5}px>`;
    }
    if(enmyHP2>0){
        mancon.style.top=`${document.getElementById("enemy1").offsetTop}px`;
    }
    else if(enmyHP3>0){
        mancon.style.top=`${document.getElementById("enemy2").offsetTop}px`;
    }
    mancon.style.left=`${X}px`;
    mancon.style.display="block";
    function manconani(){
        if(mancon.offsetTop+4+mancon.offsetHeight<sh){
            mancon.style.top=`${mancon.offsetTop+4}px`;
            
            let shptop = space.offsetTop;
            let shpleft = space.offsetLeft;
            let shotleft = mancon.offsetLeft;
            if(mancon.offsetTop + mancon.clientHeight >= shptop && mancon.offsetTop <= shptop + space.clientHeight &&
            shpleft + space.clientWidth >= shotleft && shotleft + mancon.clientWidth >= shpleft){
                mancon.innerHTML="";
                rp=0;
                document.getElementById("documentPickup").play();
                document.getElementById("shot3img").style.top=`${document.getElementById("shot2img").offsetTop}px`;
                document.getElementById("shot3amocnt").style.top=`${document.getElementById("shot2amocnt").offsetTop}px`;
                document.getElementById("shot3img").style.left=`${document.getElementById("shot2amocnt").offsetLeft+32.25*2+10}px`;
                if(mangiv==2){
                    document.getElementById("shot3img").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shoot%203-2.png");
                }
                document.getElementById("shot3img").style.display="inline";
                document.getElementById("shot3amocnt").style.left=`${66.66+document.getElementById("shot3img").offsetLeft}px`;
                document.getElementById("shot3amocnt").style.display="inline";
                document.getElementById("shot3amocnt").innerHTML="<b>0</b>";
                document.getElementById("shot3amocnt").style.top="10px";
                nhelp++;
                document.getElementById("HPcon").style.left=`${32.25*2+10+document.getElementById("shot3amocnt").offsetLeft}px`;
            }
            else{
                setTimeout(manconani,50);
            }
        }
        else{
            mancon.innerHTML="";
            rp=0;
        }
    }
    if(rp==1){
        manconani();
    }
}

var looseManlvl2=Math.floor(Math.random()*(2-1+1))+1;;//decide which space ship will loose manual

function moveShot(shotcon, shotImg) {
    let intervalId = setInterval(function() {
        let currentTop = parseInt(shotcon.style.top) - ss;
        shotcon.style.top = `${currentTop}px`;

        if (currentTop <= 0) {
            clearInterval(intervalId);
            shotcon.remove();
            return;
        }

        if(lvl==1){
            let enemy = document.getElementById('enemy');
            let enemyRect = enemy.getBoundingClientRect();
            let shotRect = shotImg.getBoundingClientRect();

            if(enmyHP1>0){
                if (shotRect.top <= enemyRect.bottom && shotRect.bottom >= enemyRect.top &&
                    shotRect.left <= enemyRect.right && shotRect.right >= enemyRect.left) {
                    clearInterval(intervalId);
                    if(nl==1){
                        document.getElementById("blast").currentTime= 0;
                        document.getElementById("blast").play();//blast sound
                    }
                    enmyHP1=enmyHP1-sd;
                    document.getElementById("enmy1HPdis").style.width=`${enmyHP1}px`;
                    if(enmyHP1<=0){
                        if(nl==1){
                            document.getElementById('explosion').play();
                        }
                        document.getElementById("enemy").setAttribute("src","https://cdn4.iconfinder.com/data/icons/explosion/512/as_897-1024.png");
                        document.getElementById("enmyHPcon").remove();
                        setTimeout(()=>{document.getElementById("enemy").remove();},1000);
                        lvl=2;
                        game();
                    }
                    shotcon.remove();
                    return;
                }
            }
        }
        else if(lvl==2){
            let shotRect = shotImg.getBoundingClientRect();
            if(enmyHP2>0){
                let enemy1 = document.getElementById('enemy1');
                let enemyRect1 = enemy1.getBoundingClientRect();
                if (shotRect.top <= enemyRect1.bottom && shotRect.bottom >= enemyRect1.top &&
                    shotRect.left <= enemyRect1.right && shotRect.right >= enemyRect1.left) {
                    clearInterval(intervalId);
                    if(nl==1){
                        document.getElementById("blast").currentTime= 0;
                        document.getElementById("blast").play();//blast sound
                    }
                    shotcon.remove();
                    enmyHP2=enmyHP2-sd;
                    document.getElementById("enmy2HPdis").style.width=`${enmyHP2}px`;
                    if(enmyHP2<=0){
                        if(nl==1){
                            document.getElementById('explosion').play();
                        }
                        document.getElementById("enmyHPcon2").remove();
                        document.getElementById("enemy1").setAttribute("src","https://cdn4.iconfinder.com/data/icons/explosion/512/as_897-1024.png");
                        if(looseManlvl2==1){
                            manual(document.getElementById("enemy1").offsetLeft+document.getElementById("enemy1").offsetWidth/3);
                        }
                        setTimeout(()=>{document.getElementById("enemy1").remove();},1000);
                    }
                    return;
                }
            }
            if(enmyHP3>0){
                let enemy2 = document.getElementById('enemy2');
                let enemyRect2 = enemy2.getBoundingClientRect();
                if (shotRect.top <= enemyRect2.bottom && shotRect.bottom >= enemyRect2.top &&
                    shotRect.left <= enemyRect2.right && shotRect.right >= enemyRect2.left) {
                    clearInterval(intervalId);
                    if(nl==1){
                        document.getElementById("blast").currentTime= 0;
                        document.getElementById("blast").play();//blast sound
                    }
                    shotcon.remove();
                    enmyHP3=enmyHP3-sd;
                    document.getElementById("enmy3HPdis").style.width=`${enmyHP3}px`;
                    if(enmyHP3<=0){
                        if(nl==1){
                            document.getElementById('explosion').play();
                        }
                        document.getElementById("enmyHPcon3").remove();
                        document.getElementById("enemy2").setAttribute("src","https://cdn4.iconfinder.com/data/icons/explosion/512/as_897-1024.png");
                        if(looseManlvl2==2){
                            manual(document.getElementById("enemy2").offsetLeft+document.getElementById("enemy2").offsetWidth/3);
                        }
                        setTimeout(()=>{document.getElementById("enemy2").remove();},1000);
                    }
                    return;
                }
            }
            if(enmyHP2<=0 && enmyHP3<=0){
                lvl=3;
                game();
            }
        }
        else if(lvl==3){
            console.log("Welcome to level 3");
        }
    }, 50);
}

// Utility
let nl = 1;
let auds = document.getElementById("auds");
auds.onclick = () => {
    nl = nl * -1;
    auds.style.opacity = nl > 0 ? "1" : "0.7";
};

let muss = document.getElementById('muss');
let ml = 1;
muss.onclick = () => {
    if(myshipHP>0 && pshipHP>0){
        ml = ml * -1;
        let music = document.getElementById('music');
        if (ml < 0) {
            music.pause();
            muss.style.opacity = '0.7';
        } else {
            music.play();
            muss.style.opacity = '1';
        }
    }
};

function handleKeyDown(event) {
    if (event.key === 'M' || event.key === 'm') {
        ml = ml * -1;
        let music = document.getElementById('music');
        if (ml < 0) {
            music.pause();
            muss.style.opacity = '0.7';
        } else {
            music.play();
            muss.style.opacity = '1';
        }
    } else if (event.key === "n" || event.key === 'N') {
        nl = nl * -1;
        auds.style.opacity = nl > 0 ? "1" : "0.7";
    }
}
document.addEventListener('keydown', handleKeyDown);

let video = document.getElementById('myVideo');
video.onended = function() {
    var container = document.getElementById('commander');
    container.style.display = 'none';
};

function blani(){//this will add blast animation to pship
    document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.01.52.png");
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.04.33.png");},200);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.05.27.png");},400);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.05.46.png");},600);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.05.56.png");},800);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.06.04.png");},1000);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.06.14.png");},1200);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.06.27.png");},1400);
    setTimeout(()=>{document.getElementById("pshipID").setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_08-03-10.06.27.png");},1600);
}

function help(){
    let sid=Math.floor(Math.random()*(3-1+1))+1;//on which side the help go
    let res=Math.floor(Math.random()*(nhelp-1+1))+1;//which type of help will release
    let con=document.getElementById("helpcon");
    if (res==1){
        con.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%201%20help.png' id='help' height=${document.getElementById('ship').offsetHeight/2}px>`;
    }
    else if(res==2){
        con.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/shot%202%20help.png' id='help' height=${document.getElementById('ship').offsetHeight/2}px>`;
    }
    else if(res==3){
        con.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/HP%20help.png' id='help' height=${document.getElementById('ship').offsetHeight/2}px>`;
    }
    else if(res=4){
        if(mangiv==1){
            con.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_09-21-06.15.42.png' id='help' height=${document.getElementById('ship').offsetHeight/2}px>`;
        }
        else if(mangiv==2){
            con.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/PicsArt_09-21-06.14.07.png' id='help' height=${document.getElementById('ship').offsetHeight/2}px>`;
        }
    }

    con.style.display="inline";
    con.style.left=`${sw/2-document.getElementById("help").offsetWidth/2}px`;
    con.style.top=`${sh-document.getElementById('ship').offsetHeight/2-5}px`;

    if(sid==1){
        function help1ani(){
            if(con.offsetTop-1>0){
                con.style.top=`${con.offsetTop-1}px`;

                let shptop = space.offsetTop;
                let shpleft = space.offsetLeft;
                let shotleft = con.offsetLeft;
                if(con.offsetTop < sh - document.getElementById("pshipID").offsetHeight - con.clientHeight &&
                con.offsetTop + con.clientHeight >= shptop && con.offsetTop <= shptop + space.clientHeight &&
                shpleft + space.clientWidth >= shotleft && shotleft + con.clientWidth >= shpleft){
                    con.innerHTML="";
                    if(nl==1){
                        document.getElementById("itemPickup").play();
                    }
                    if(res==1){
                        shot1amo=shot1amo+10;
                        document.getElementById("shot1amocnt").innerHTML=`<b>${shot1amo}</b>`;
                        document.getElementById("shot1img").style.opacity="1";
                    }
                    else if(res==2){
                        shot2amo=shot2amo+2;
                        document.getElementById("shot2amocnt").innerHTML=`<b>${shot2amo}</b>`;
                        document.getElementById("shot2img").style.opacity="1";
                    }
                    else if(res==3){
                        if(100-myshipHP>=10){
                            myshipHP=myshipHP+10;
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+10}px`;
                        }
                        else{
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+(100-myshipHP)}px`;
                            myshipHP=myshipHP+(100-myshipHP);
                        }
                    }
                    else if(res==4){
                        shot3amo=shot3amo+1;
                        document.getElementById("shot3amocnt").innerHTML=`<b>${shot3amo}</b>`;
                        document.getElementById("shot3img").style.opacity="1";
                    }
                    setTimeout(help,5000);
                }
                else{
                    setTimeout(help1ani,15);
                }
            }
            else{
                con.innerHTML="";
                setTimeout(help,5000);
            }
        }
        help1ani();
    }
    else if(sid==2){
        function help2ani(){
            let Yreach=sh/2;
            let rAng=Math.atan(Yreach/(sw/2-con.offsetWidth/2));
            if(con.offsetTop>sh/2){
                let Yreached=con.offsetTop-1;
                let Xreached=(Yreached-Yreach-1)/Math.tan(rAng);
                con.style.left=`${Xreached}px`;
                con.style.top=`${Yreached}px`;
                
                let shptop = space.offsetTop;
                let shpleft = space.offsetLeft;
                let shotleft = con.offsetLeft;
                if(con.offsetTop + con.clientHeight >= shptop && con.offsetTop <= shptop + space.clientHeight &&
                shpleft + space.clientWidth >= shotleft && shotleft + con.clientWidth >= shpleft){
                    con.innerHTML="";
                    if(nl==1){
                        document.getElementById("itemPickup").play();
                    }
                    if(res==1){
                        shot1amo=shot1amo+10;
                        document.getElementById("shot1amocnt").innerHTML=`<b>${shot1amo}</b>`;
                        document.getElementById("shot1img").style.opacity="1";
                    }
                    else if(res==2){
                        shot2amo=shot2amo+2;
                        document.getElementById("shot2amocnt").innerHTML=`<b>${shot2amo}</b>`;
                        document.getElementById("shot2img").style.opacity="1";
                    }
                    else if(res==3){
                        if(100-myshipHP>=10){
                            myshipHP=myshipHP+10;
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+10}px`;
                        }
                        else{
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+(100-myshipHP)}px`;
                            myshipHP=myshipHP+(100-myshipHP);
                        }
                    }
                    else if(res==4){
                        shot3amo=shot3amo+1;
                        document.getElementById("shot3amocnt").innerHTML=`<b>${shot3amo}</b>`;
                        document.getElementById("shot3img").style.opacity="1";
                    }
                    setTimeout(help,5000);
                }
                else{
                    setTimeout(help2ani,40);
                }
            }
            else{
                con.innerHTML="";
                setTimeout(help,5000);
            }
        }
        help2ani();
    }
    else if(sid==3){
        function help3ani(){
            let Yreach=sh/2;
            let rAng=Math.atan(Yreach/(sw/2+con.offsetWidth/2));
            if(con.offsetTop>=sh/2 || con.offsetLeft+con.offsetWidth+1/Math.tan(rAng)<sw){
                let Yreached=con.offsetTop-1;
                let Xreached=1/Math.tan(rAng);
                con.style.left=`${con.offsetLeft+Xreached}px`;
                con.style.top=`${Yreached}px`;
                let shptop = space.offsetTop;
                let shpleft = space.offsetLeft;
                let shotleft = con.offsetLeft;
                if(con.offsetTop + con.clientHeight >= shptop && con.offsetTop <= shptop + space.clientHeight &&
                shpleft + space.clientWidth >= shotleft && shotleft + con.clientWidth >= shpleft){
                    con.innerHTML="";
                    if(nl==1){
                        document.getElementById("itemPickup").play();
                    }
                    if(res==1){
                        shot1amo=shot1amo+10;
                        document.getElementById("shot1amocnt").innerHTML=`<b>${shot1amo}</b>`;
                        document.getElementById("shot1img").style.opacity="1";
                    }
                    else if(res==2){
                        shot2amo=shot2amo+2;
                        document.getElementById("shot2amocnt").innerHTML=`<b>${shot2amo}</b>`;
                        document.getElementById("shot2img").style.opacity="1";
                    }
                    else if(res==3){
                        if(100-myshipHP>=10){
                            myshipHP=myshipHP+10;
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+10}px`;
                        }
                        else{
                            document.getElementById("HP").style.width=`${document.getElementById("HP").offsetWidth+(100-myshipHP)}px`;
                            myshipHP=myshipHP+(100-myshipHP);
                        }
                    }
                    else if(res==4){
                        shot3amo=shot3amo+1;
                        document.getElementById("shot3amocnt").innerHTML=`<b>${shot3amo}</b>`;
                        document.getElementById("shot3img").style.opacity="1";
                    }
                    setTimeout(help,5000);
                }
                else{
                    setTimeout(help3ani,40);
                }
            }
            else{
                con.innerHTML="";
                setTimeout(help,5000);
            }
        }
        help3ani();
    }
}


// Game
function game(){
    if (lvl == 1) {
        let enemy = document.getElementById("enemy");
        let dh = document.documentElement.scrollHeight; // measure screen height
        enemy.style.left = "50%"; // adjusting enemy ship position along X axis
        enemy.style.transform = "translateX(-50%)";

        function lvl1() {

            enemy.style.display = "inline";

            var eng = document.getElementById("engine");
            if(nl==1){
                eng.play();
            }

            var m = 5;
            function sani() { // spaceship animation
                enemy.style.top = `${m}px`;
                m += 5;
                if (m / dh * 100 < 10) {
                    setTimeout(sani, 100);
                } else {
                    eng.pause();
                    stc = 0;
                    if(enmyHP1>0){
                        document.getElementById("enmyHPcon").style.top=`${enemy.offsetTop-14}px`;
                        document.getElementById("enmyHPcon").style.left=`${sw/2 - 52}px`;
                        document.getElementById("enmyHPcon").style.display="inline";
                    }

                    function shotani() {
                        stc++;
                        let att = document.getElementById("att");
                        att.innerHTML = `<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/enemyshot.png' height='7%' id=shot${stc} alt='shot' style='display:none;'>`; // adding shoot image
                        var sto = document.getElementById(`shot${stc}`);
                        sto.style.position = "absolute";
                        sto.style.left = "50%"; // adjusting shoot along X axis
                        sto.style.transform = "translateX(-50%)";
                        sto.style.top = `${enemy.offsetTop + enemy.clientHeight / 2}px`; // adjusting shoot position along Y axis
                        let spu = enemy.offsetTop + enemy.clientHeight / 2; // shoot position update
                        sto.style.display = "inline";
                        let stud = document.getElementById("shotadi"); // shoot audio handle
                        let shtsud = document.getElementById("blast"); // blast audio handle
                        if(nl==1){
                            stud.play();
                        }

                        function positUpd() {
                            sto.style.top = `${spu}px`;
                            spu += 5;

                            let shptop = space.offsetTop;
                            let shpleft = space.offsetLeft;
                            let shotleft = sto.offsetLeft;

                            if (spu < dh - document.getElementById("pshipID").offsetHeight - sto.clientHeight &&
                                spu + sto.clientHeight >= shptop && spu <= shptop + space.clientHeight &&
                                shpleft + space.clientWidth >= shotleft && shotleft + sto.clientWidth >= shpleft) {
                                if(nl==1){
                                    shtsud.currentTime= 0;
                                    shtsud.play();//blast sound
                                }
                                myshipHP=myshipHP-5;
                                sto.remove();
                                document.getElementById("HP").style.width=`${myshipHP}px`;
                                if(myshipHP<=0){
                                    document.getElementById("music").pause();
                                    document.getElementById("lose").play();
                                    space.setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/spaceshipBlast.png");
                                    setTimeout(()=>{space.style.display="none";},1000);
                                    setTimeout(()=>{document.getElementById("tryAgain").style.display="block";},500);
                                }
                                if(enmyHP1>0 && myshipHP>0){
                                    shotani();
                                }
                            } else if (spu >= dh - document.getElementById('pshipID').offsetHeight-document.getElementById(`shot${stc}`).offsetHeight) {
                                if(nl==1){
                                    shtsud.currentTime= 0;
                                    shtsud.play(); // blast sound
                                }
                                sto.remove();
                                pshipHP= pshipHP-5;
                                document.getElementById("pshipHPdis").style.width=`${pshipHP}px`;
                                if(pshipHP<=0){
                                    document.getElementById("music").pause();
                                    if(nl==1){
                                        document.getElementById("mulblast").play();
                                    }
                                    blani();
                                    setTimeout(()=>{document.getElementById("pshipID").style.display="none";document.getElementById("mulblast").pause();},1800);
                                    setTimeout(()=>{document.getElementById("tryAgain").style.display="block";document.getElementById("lose").play();},1900);
                                }
                                if(enmyHP1>0 && myshipHP>0 && pshipHP>0){
                                    shotani();
                                }
                            } else {
                                setTimeout(positUpd, 40);
                            }
                        }
                        setTimeout(positUpd, 200);
                    }
                    shotani();
                }
            }
            setTimeout(sani, 100);
        }
        setTimeout(lvl1, 8000);
    }

    else if(lvl==2){
        console.log("Welcome to level 2");
        let enemy1 = document.getElementById("enemy1");
        let enemy2 = document.getElementById("enemy2");
        enemy1.style.left = "33%"; // adjusting enemy ship position along X axis
        enemy1.style.transform = "translateX(-67%)";
        enemy2.style.left = "66%"; // adjusting enemy ship position along X axis
        enemy2.style.transform = "translateX(-34%)";
        help();
        function lvl2() {

            enemy1.style.display = "inline";
            enemy2.style.display = "inline";

            var eng = document.getElementById("engine");
            if(nl==1){
                eng.play();
            }

            var m = 5;
            function sanilvl2() { // spaceship animation
                enemy1.style.top = `${m}px`;
                enemy2.style.top = `${m}px`;
                m += 5;
                let eshtdmg=10;
                if (m / sh * 100 < 10) {
                    setTimeout(sanilvl2, 100);
                }
                else{
                    let ang1=Math.atan(-1*(sh-document.getElementById("pshipID").offsetHeight - m+enemy1.offsetHeight)/(document.getElementById("pshipID").offsetLeft+document.getElementById("pshipID").offsetWidth/2-enemy1.offsetLeft+enemy1.offsetWidth/2));//idal rotation of ship
                    let ang2=Math.atan(-1*(sh-document.getElementById("pshipID").offsetHeight - m+enemy1.offsetHeight)/(document.getElementById("pshipID").offsetLeft+document.getElementById("pshipID").offsetWidth/2-enemy2.offsetLeft+enemy2.offsetWidth/2))
                    ang1=ang1*(180/Math.PI);
                    ang2=ang2*(180/Math.PI);
                    let s1ang=0;//actual rotation of ship
                    let s2ang=0;
                    function rot (){
                        s1ang=s1ang-1;
                        s2ang=s2ang+1;
                        if(-1*(ang1+s1ang)<90){
                            enemy1.style.transform=`rotate(${s1ang}deg)`;
                        }
                        if(ang2+s2ang<90){
                            enemy2.style.transform=`rotate(${s2ang}deg)`;
                        }
                        if(-1*(ang1+s1ang)<90 && ang2+s2ang<90){
                            setTimeout(rot,100);                            
                        }
                        else{
                            eng.pause();
                            if(enmyHP2>0){
                                document.getElementById("enmyHPcon2").style.display="inline";
                                document.getElementById("enmyHPcon2").style.top=`${m-16}px`;
                                document.getElementById("enmyHPcon2").style.left=`${enemy1.offsetLeft+enemy1.offsetWidth/2-52}px`;
                            }
                            if(enmyHP3>0){
                                document.getElementById("enmyHPcon3").style.display="inline";
                                document.getElementById("enmyHPcon3").style.top=`${m-16}px`;
                                document.getElementById("enmyHPcon3").style.left=`${enemy2.offsetLeft+enemy2.offsetWidth/2-52}px`;
                            }
                            let enemy1h=enemy1.offsetWidth*Math.sin(s1ang*(Math.PI/180))+enemy1.offsetHeight*Math.sin(Math.PI/2+s1ang*(Math.PI/180));
                            let enemy1w=enemy1.offsetHeight*Math.cos(ang1*(Math.PI/180))+enemy1.offsetWidth*Math.sin(s1ang*(Math.PI/180));
                            function shotanilvl2(){
                                function enemy1sht(){
                                    let att=document.getElementById("att");
                                    att.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/enemyshot2.png' height='7%' id=shot${stc} alt='shot' style='display:none; position: absolute'>`;
                                    let attsht1=document.getElementById(`shot${stc}`);
                                    attsht1.style.top=`${m+enemy1h/2}px`;//decides the intial position from top of shot
                                    attsht1.style.left=`${enemy1.offsetLeft+enemy1w/2+0.7/100*sw - (document.getElementById(`shot${stc}`).offsetHeight*Math.cos(Math.PI/2+s1ang*(Math.PI/180))+document.getElementById(`shot${stc}`).offsetWidth*Math.cos(s1ang*(Math.PI/180)))/2}px`;//decides the intial position from left of shot
                                    attsht1.style.transform=`rotate(${s1ang}deg)`;
                                    if(nl==1){
                                        document.getElementById("shotadi").currentTime= 0;
                                        document.getElementById("shotadi").play(); // shot sound
                                    }
                                    attsht1.style.display="inline";
                                    stc++;
                                    function enemy1shtani(){
                                        let shptop = space.offsetTop;
                                        let shpleft = space.offsetLeft;
                                        let shotleft = attsht1.offsetLeft;
                                        attsht1.style.top=`${attsht1.offsetTop+5}px`;
                                        attsht1.style.left=`${attsht1.offsetLeft+Math.abs(5/Math.tan(ang1*(Math.PI/180)))}px`;
                                        if(attsht1.offsetTop < sh - document.getElementById("pshipID").offsetHeight - attsht1.clientHeight &&
                                        attsht1.offsetTop + attsht1.clientHeight >= shptop && attsht1.offsetTop <= shptop + space.clientHeight &&
                                        shpleft + space.clientWidth >= shotleft && shotleft + attsht1.clientWidth >= shpleft){
                                            attsht1.remove();
                                            myshipHP=myshipHP-eshtdmg;
                                            document.getElementById("HP").style.width=`${myshipHP}px`;
                                            if(nl==1){
                                                document.getElementById("blast").currentTime= 0;
                                                document.getElementById("blast").play(); // blast sound
                                            }
                                            if(myshipHP<=0){
                                                document.getElementById("music").pause();
                                                document.getElementById("lose").play();
                                                space.setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/spaceshipBlast.png");
                                                setTimeout(()=>{space.style.display="none";},1000);
                                                setTimeout(()=>{document.getElementById("tryAgain").style.display="block";},500);
                                            }
                                            if(enmyHP2>0 && myshipHP>0){
                                                enemy1sht();
                                            }
                                        }
                                        else if (attsht1.offsetTop+ attsht1.offsetWidth*Math.sin(s1ang*(Math.PI/180))+attsht1.offsetHeight*Math.sin(Math.PI/2+s1ang*(Math.PI/180))+5<sh-document.getElementById("pshipID").offsetHeight){
                                            setTimeout(enemy1shtani,30);
                                        }
                                        else if(attsht1.offsetTop+ attsht1.offsetWidth*Math.sin(s1ang*(Math.PI/180))+attsht1.offsetHeight*Math.sin(Math.PI/2+s1ang*(Math.PI/180))+5>=sh-document.getElementById("pshipID").offsetHeight){
                                            attsht1.remove();
                                            if(nl==1){
                                                document.getElementById("blast").currentTime= 0;
                                                document.getElementById("blast").play();
                                            }
                                            pshipHP=pshipHP-eshtdmg;
                                            document.getElementById("pshipHPdis").style.width=`${pshipHP}px`;
                                            if(pshipHP<=0){
                                                document.getElementById("music").pause();
                                                if(nl==1){
                                                    document.getElementById("mulblast").play();
                                                }
                                                blani();
                                                setTimeout(()=>{document.getElementById("pshipID").style.display="none";document.getElementById("mulblast").pause();},1800);
                                                setTimeout(()=>{document.getElementById("tryAgain").style.display="block";document.getElementById("lose").play();},1900);
                                            }
                                            if(enmyHP2>0 && pshipHP>0){
                                                enemy1sht();
                                            }
                                        }
                                    }
                                    enemy1shtani();
                                }
                                function enemy2sht(){
                                    stc++;
                                    let att=document.getElementById("att2");
                                    att.innerHTML=`<img src='file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/enemyshot2.png' height='7%' id=shot${stc} alt='shot' style='display:none; position: absolute'>`;
                                    let attsht2=document.getElementById(`shot${stc}`);
                                    attsht2.style.top=`${m+enemy1h/2}px`;
                                    attsht2.style.left=`${enemy2.offsetLeft+enemy1w/2+0.7/100*sw}px`;
                                    attsht2.style.transform=`rotate(${s2ang}deg)`;
                                    attsht2.style.display="inline";
                                    if(nl==1){
                                        document.getElementById("shotadi").currentTime= 0;
                                        document.getElementById("shotadi").play(); // shot sound
                                    }
                                    function enemy2shtani(){
                                        attsht2.style.top=`${attsht2.offsetTop+5}px`;
                                        attsht2.style.left=`${attsht2.offsetLeft-Math.abs(5/Math.tan(ang1*(Math.PI/180)))}px`;
                                        let shptop = space.offsetTop;
                                        let shpleft = space.offsetLeft;
                                        let shotleft = attsht2.offsetLeft;
                                        if(attsht2.offsetTop < sh - document.getElementById("pshipID").offsetHeight - attsht2.clientHeight &&
                                        attsht2.offsetTop + attsht2.clientHeight >= shptop && attsht2.offsetTop <= shptop + space.clientHeight &&
                                        shpleft + space.clientWidth >= shotleft && shotleft + attsht2.clientWidth >= shpleft){
                                            attsht2.remove();
                                            myshipHP=myshipHP-eshtdmg;
                                            document.getElementById("HP").style.width=`${myshipHP}px`;
                                            if(myshipHP<=0){
                                                document.getElementById("music").pause();
                                                document.getElementById("lose").play();
                                                space.setAttribute("src","file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/spaceshipBlast.png");
                                                setTimeout(()=>{space.style.display="none";},1000);
                                                setTimeout(()=>{document.getElementById("tryAgain").style.display="block";},500);
                                            }
                                            if(nl==1){
                                                document.getElementById("blast").currentTime= 0;
                                                document.getElementById("blast").play(); // blast sound
                                            }
                                            if(enmyHP3>0 && myshipHP>0){
                                                enemy2sht();
                                            }
                                        }
                                        else if (attsht2.offsetTop+ attsht2.offsetWidth*Math.sin(s1ang*(Math.PI/180))+attsht2.offsetHeight*Math.sin(Math.PI/2+s1ang*(Math.PI/180))+5<sh-document.getElementById("pshipID").offsetHeight){
                                            setTimeout(enemy2shtani,30);
                                        }
                                        else if(attsht2.offsetTop+ attsht2.offsetWidth*Math.sin(s1ang*(Math.PI/180))+attsht2.offsetHeight*Math.sin(Math.PI/2+s1ang*(Math.PI/180))+5>=sh-document.getElementById("pshipID").offsetHeight){
                                            attsht2.remove();
                                            if(nl==1){
                                                document.getElementById("blast").currentTime= 0;
                                                document.getElementById("blast").play();
                                            }
                                            pshipHP=pshipHP-eshtdmg;
                                            document.getElementById("pshipHPdis").style.width=`${pshipHP}px`;
                                            if(pshipHP<=0){
                                                document.getElementById("music").pause();
                                                if(nl==1){
                                                    document.getElementById("mulblast").play();
                                                }
                                                blani();
                                                setTimeout(()=>{document.getElementById("pshipID").style.display="none";document.getElementById("mulblast").pause();},1800);
                                                setTimeout(()=>{document.getElementById("tryAgain").style.display="block";document.getElementById("lose").play();},1900);
                                            }
                                            if(enmyHP3>0 && pshipHP>0){
                                                enemy2sht();
                                            }
                                        }
                                    }
                                    enemy2shtani();
                                }
                                enemy1sht();
                                setTimeout(enemy2sht,1200);
                            }
                            shotanilvl2();
                        }
                    }
                    rot();
                }
            }
            sanilvl2();
        }
        setTimeout(lvl2,1000);
    }
}
game();