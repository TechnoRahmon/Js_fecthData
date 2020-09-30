


navigator.getBattery().then(function(battery){

    
    /* This is the initilizing */
  /*  console.log( battery.level * 100 +"%"); */


   /* this is for lestning the Event every time battery gets update */

    battery.addEventListener("levelchange", getUpdateInfo);   

  function getUpdateInfo() {

    var b = Math.round( battery.level *100);

    /*   console.log("Battery level: "+b + " %"); */

      if(b<100 && b>70){

          document.getElementById("div1").style.width="70%";
          document.getElementById("div1").style.backgroundColor="green";
          document.getElementById("info").innerHTML=b+"%";
          document.getElementById("info").style.color="green";
        
      }else if(b==100){
        document.getElementById("div1").style.width="75%";
        document.getElementById("div1").style.backgroundColor="green";
        document.getElementById("info").innerHTML=b+"%";
        document.getElementById("info").style.color="green";

      }else if(b<70 && b>50) {
          document.getElementById("div1").style.width = "55%";
          document.getElementById("div1").style.backgroundColor = "orange";
          document.getElementById("info").innerHTML ="Battery power is "+ b + " %";
          document.getElementById("info").style.color = "orange";
      }else if(b<55 && b>30) {
          document.getElementById("div1").style.width = "27%";
          document.getElementById("div1").style.backgroundColor = "grey";
          document.getElementById("info").innerHTML = "Battery power is " + b + " %";
          document.getElementById("info").style.color = "grey";
      }else if (b<15 && b>1) {
          document.getElementById("div1").style.width = "15%";
          document.getElementById("div1").style.backgroundColor = "red";
          document.getElementById("info").innerHTML = "Battery power is " + b + " %";
          document.getElementById("info").style.color = "red";
      }
  }

getUpdateInfo();




});      







    
