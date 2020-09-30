 

var battery,batteryColor; 
let isBatterySupported = 'getBattery' in navigator;
if(!isBatterySupported) {
    console.log("Battery not supported");
    window.alert('Battery not supported!')
 }else{
    console.log("Battery  supported!");


 }


navigator.getBattery().then(function(batteryM){
    battery = batteryM;
    battery.addEventListener('levelchange',runEvnt);
    // init app
    updateLevelInfo()
    DomUpdate(updateLevelInfo)
    
});

function runEvnt(){
    //levelchanege event 
    updateLevelInfo()
    DomUpdate(updateLevelInfo)
}


function updateLevelInfo(){
     let batteryObj;
    let batteryStatus =battery.level *100;
    let divWidth=0;
    if ( batteryStatus == 100){ 
        batteryColor ='rgb(53, 250, 18)'; 
        divWidth=75;
    }else if ( batteryStatus < 100 && batteryStatus >= 80){ 
        batteryColor ='rgb(53, 250, 18)'; 
        divWidth=70;
    }else if( batteryStatus < 80 && batteryStatus >= 60){
        batteryColor ='rgb(255, 251, 10)'; 
        divWidth=54;

    }else if( batteryStatus < 60 && batteryStatus >= 40){
        batteryColor ='rgb(255, 141, 10)'; 
        divWidth=37;

    }else if( batteryStatus < 40 && batteryStatus >= 0){

        batteryColor ='rgb(255, 72, 47)'; 
        divWidth=18;

    }

    batteryObj={'level':batteryStatus , 'color':batteryColor,'width':divWidth};
    
    return batteryObj ; 
};


function DomUpdate(func){

    // get dom ids 
    var _battery,_percent,obj; 
    _battery=document.getElementById('Bbattery'); 
    _percent = document.getElementById('_percent');
    // get the returned obj 

    obj = func(); 
    //update the dom element

    _battery.style.backgroundColor = obj.color;
    _battery.style.width =Math.round(obj.width)+'%';

    _percent.innerHTML = Math.round(obj.level)+'%';
    _percent.style.color = obj.color;



    console.log(obj.color + Math.round(obj.level)+'%'+Math.round(obj.width)+'%');
        
}


//active btns 
document.getElementById('design1').addEventListener('click',btn_active1);
document.getElementById('design2').addEventListener('click',btn_active2);


function btn_active1(){
        document.getElementById('container1').classList.add('active');
        document.getElementById('container2').classList.remove('active');
        document.getElementById('design2').classList.remove('btn-active');
        document.getElementById('design1').classList.add('btn-active');


        document.getElementById('header').classList.remove('dark_active');
        document.getElementById('sub_header').classList.remove('dark_active');
}

function btn_active2(){
    document.getElementById('container1').classList.remove("active");
    document.getElementById('container2').classList.add('active');
    document.getElementById('design1').classList.remove('btn-active');
    document.getElementById('design2').classList.add('btn-active');

    document.getElementById('header').classList.add('dark_active');
    document.getElementById('sub_header').classList.add('dark_active');


}