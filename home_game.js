let st=document.getElementById("sett");
let bp=0;
st.onclick=()=>{
    let t=document.getElementById("sto");
    let h=window.innerHeight;
    let w=window.innerWidth;
    t.style.height=`${h}`;
    t.style.width=`${w}`;
    t.style.display="flex";
    t.style.justifyContent="center";
    t.style.alignItems="center";
    let tt=document.getElementById("can");
    tt.style.display="inline-block";
    bgp=document.getElementById("can");
    if(bp==0){
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/219131cd9573d9b.gif) center center/cover no-repeat";
        bp=bp+1;
    }
    else if(bp==1){
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/d05eabb7a322c7b.gif) center center/cover no-repeat";
        bp=bp+1;
    }
    else if(bp==2){
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/sr2f38bd0f7f1aws3.gif) center center/cover no-repeat";
        bp=bp+1;
    }
    else if(bp==3){
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/2d170da060852ea.png) center center/cover no-repeat";
        bp=bp+1;
    }
    else if(bp==4){
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/c64aa970c5ea373.gif) center center/cover no-repeat";
        bp=bp+1;
    }
    else{
        bgp.style.background="url(file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/resources/sr2f9a902feb5aws3.webp) center center/cover no-repeat";
        bp=0;
    }

}

let canb=document.getElementById("canb");
canb.onclick=()=>{
    let a=document.getElementById('sto');
    a.style.display="none";
}

let mg=document.getElementById("m");
let k=1;
let optbgiv=0;
mg.onclick=()=>{
    let opt=document.getElementById("moropt");
    k=k*(-1);
    if (k<0){
        opt.style.display="inline-block";
    }
    else if(k>0){
        opt.style.display="none";
    }
    if(optbgiv==0){
        opt.style.backgroundImage="url(https://art.pixilart.com/18395d4f847f.png)";
        optbgiv++;
    }
    else if(optbgiv==1){
        opt.style.backgroundImage="url(https://art.pixilart.com/sr23ef392192a1b.png)";
        optbgiv++;
    }
    else if(optbgiv==2){
        opt.style.backgroundImage="url(https://art.pixilart.com/sr2849c32e366aws3.png)";
        optbgiv++;
    }
    else if(optbgiv==3){
        opt.style.backgroundImage="url(https://art.pixilart.com/sr205373663baaws3.png)";
        optbgiv++;
    }
    else{
        opt.style.backgroundImage="url(https://art.pixilart.com/sr29efcee8285aws3.png)";
        optbgiv=0;
    }
}

let aud2=document.getElementById("aud2");
let ac=1;
aud2.onclick=()=>{
    ac=ac*(-1);
    let sw=document.getElementById("music");
    if(ac<0){
        aud2.style.opacity="0.7";
        sw.innerHTML="";
    }
    else if(ac>0){
        aud2.style.opacity="1";
        sw.innerHTML="<audio autoplay loop><source src='C:/Users/shrey/Desktop/Shreyansh/Nova Petrol/resources/ROCKETRY.mp3' type='audio/mpeg'></audio>";
    }
}

let ibut=document.getElementById('ibut');
ibut.onclick=()=>{
    i=document.getElementById('i');
    i.style.display='flex';
    i.style.justifyContent='center';
    i.style.alignItems='center';
}
i=document.getElementById('i');
i.onclick=()=>{
    i.style.display='none';
}

let strt=document.getElementById("stid");//target start button
strt.onclick=()=>{
    document.getElementById("musicPlay").pause();
    document.getElementById("videocon").style.display="block";
    document.getElementById("video").play();
}
let vid=document.getElementById("video");//target start loading video
vid.addEventListener("ended", function() {
    window.location.href = "file:///C:/Users/shrey/Desktop/Shreyansh/Nova%20Petrol/game.html";
});


//Sound Management System
let aud1=document.getElementById("aud1");
let sc=1;
aud1.onclick=()=>{
    sc=sc*(-1);
    if (sc>0){
        aud1.style.opacity="1";
    }
    else if(sc<0){
        aud1.style.opacity="0.7";
    }
}

let hoverSetObject = document.getElementById('sett');
hoverSetObject.onmouseenter = () => {
    if (sc>0){
        document.getElementById('hover-sound').play();
    }
}
hoverSetObject.onmouseleave = () => {
    let sound = document.getElementById('hover-sound');
    sound.pause();
    sound.currentTime = 0;
}

let hoveriBObject = document.getElementById('ibut');
hoveriBObject.onmouseenter = () => {
    if (sc>0){
        document.getElementById('hover-sound').play();
    }
}
hoverSetObject.onmouseleave = () => {
    let sound = document.getElementById('hover-sound');
    sound.pause();
    sound.currentTime = 0;
}

let hoverStrObject = document.getElementsByClassName('st');
hoverStrObject[0].onmouseenter = () => {
    if (sc>0){
        document.getElementById('hover-sound').play();
    }
}
hoverStrObject[0].onmouseleave = () => {
    let sound = document.getElementById('hover-sound');
    sound.pause();
    sound.currentTime = 0;
}

let hoverMoObject = document.getElementsByClassName('mo');
hoverMoObject[0].onmouseenter = () => {
    if (sc>0){
        document.getElementById('hover-sound').play();
    }
}
hoverMoObject[0].onmouseleave = () => {
    let sound = document.getElementById('hover-sound');
    sound.pause();
    sound.currentTime = 0;
}