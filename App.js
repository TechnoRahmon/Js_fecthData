 

let baseUrl = 'https://adventure-app-29076.firebaseio.com/characters.json';
var sub_data=[];

async function Ldata() {


   try {

   let motherArr = [];
   let eachObject = [];
   let response = await fetch(baseUrl);
   let data = await response.json();
   
         for (let i in data){
            motherArr.push(data[i]);
         }

         //console.log(motherArr);
         sub_data =[...motherArr]; 


        
        DOM_inset(Get_sub_Data(sub_data)[0]);
       
       
        //  for(var i=0; i<motherArr.length; i++) {

        //     if(i<4) {
        //        eachObject.push(motherArr[i]);
        //     }
        //  }
        console.log(sub_data)



   
        var UserSelection = document.getElementsByClassName('ch_box');
        var UserSelection2 = document.getElementsByClassName('bk_img');
        
            
        // loop eventLitsener
        //lookFor_active formula :(queryallclass,id,id squene, active classname)
        var lookFor_active=(active,squence,classname, nodeClass)=>{
            for ( let i=0;i <  active.length;i++) {
                active[i].addEventListener('click',()=>{
                    console.log('clicked :'+i)
                    click_btn(nodeClass,i,squence,classname)
                    // push data into DOM 
                    let data = Get_sub_Data(sub_data)[i];
                    console.log(' event fired '+data.length)
                    if(data.length > 0){
                        DOM_inset(data);
        
                    }else{
                        DOM_inset(data);
                        if ( document.getElementById('msg')==null){
                            insert_msg();
        
                        }
                    }
                });
            }
        
        }

        
        // call click evnt for nav buttons 
        lookFor_active(UserSelection,'ChBtn-','active','ch_box');
        lookFor_active(UserSelection2,'ch-','scale_active','bk_img');
        
        
        

        
    }catch(e){
         window.alert("Error! check your connection or url");
         document.getElementById(container).style.display='flex';
         console.log(e);

      }
      return sub_data;
}

 var data = Ldata();

console.log(data.then())




 






// click btn func 
        function click_btn(node_id,i,squence,classname){//  get the spesifice id and passt it. 


            var NodeList = document.querySelectorAll('.'+node_id);
            var x=[];
            Array.from( NodeList).forEach(element => {
                    x.push(element);
                    if ( element.className.match(classname) !== null && element.id !== squence+i){
                        document.getElementById(element.id).classList.remove(classname);
                        document.getElementById(element.id).style.backgroundPosition='top';
                        document.getElementById(element.id).style.backgroundSize = '';

                        


                        //console.log('was active '); 
                    }else if (element.id == squence+i){
                        document.getElementById(element.id).classList.add(classname);

                        //console.log('id active')
                    }else{
                        document.getElementById(element.id).classList.remove(classname);
                        //console.log('NOT active ')

                    }
            });
            
            //console.log( x[0]);
        }//end click btn 







// var sub_data = [{currentClass:'rogue',
//                 head : {class:'default', index:0},
//                 leftarm : { class:'scribe',index :3},
//                 rightarm:{ class:'scribe',index :3},
//                 torso:{ class:'berserker',index :1},
//                 leftleg:{ class:'engineer',index :4},
//                 rightleg:{ class:'scribe',index :3}

//                 },
//                 {currentClass:'berserker',
//                 head : {class:'default', index:0},
//                 leftarm : { class:'scribe',index :3},
//                 rightarm:{ class:'scribe',index :3},
//                 torso:{ class:'berserker',index :1},
//                 leftleg:{ class:'engineer',index :4},
//                 rightleg:{ class:'scribe',index :3}

//                 },
//                 {currentClass:'berserker',
//                 head : {class:'default', index:0},
//                 leftarm : { class:'scribe',index :3},
//                 rightarm:{ class:'scribe',index :3},
//                 torso:{ class:'berserker',index :1},
//                 leftleg:{ class:'engineer',index :4},
//                 rightleg:{ class:'scribe',index :3}

//                 },
//                 {currentClass:'berserker',
//                 head : {class:'default', index:0},
//                 leftarm : { class:'scribe',index :3},
//                 rightarm:{ class:'scribe',index :3},
//                 torso:{ class:'berserker',index :1},
//                 leftleg:{ class:'engineer',index :4},
//                 rightleg:{ class:'scribe',index :3}

//                 },
//                 {currentClass:'scribe',
//                 head : {class:'default', index:0},
//                 leftarm : { class:'rogue',index :3},
//                 rightarm:{ class:'rogue',index :3},
//                 torso:{ class:'berserker',index :1},
//                 leftleg:{ class:'engineer',index :4},
//                 rightleg:{ class:'scribe',index :3}

//                 }
            
            
//             ];



// loop insid querySelectorAll 
let img_classLoop = (sub_data,class_name,id_name,bp)=>{


    let bp_img_class = document.querySelectorAll('.'+class_name);
    let n=0;
    Array.from(bp_img_class).forEach((el)=>{
        console.log('el :'+n);
            //head
        if (sub_data[n][bp].class == 'default'){
            document.getElementById(id_name+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/'+class_name+'.jpg)';

        }else{
            document.getElementById(id_name+n).style.backgroundImage = 'url(img/'+sub_data[n][bp].class+'/'+class_name+'.jpg)';
        }
        n++;
        })

}

let push_photo= sub_data=>{//push photo func 

        img_classLoop(sub_data,'head','head-','head');
        img_classLoop(sub_data,'LA','LA-','leftarm');
        img_classLoop(sub_data,'RA','RA-','rightarm');
        img_classLoop(sub_data,'Torso','Torso-','torso');
        img_classLoop(sub_data,'LL','LL-','leftleg');
        img_classLoop(sub_data,'RL','RL-','rightleg');




                    // //leftarm 
                    // if (sub_data[n].leftarm.class == 'default'){
                    //     document.getElementById('LA-'+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/leftarm.jpg)';

                    // }else{
                    //     document.getElementById('LA-'+n).style.backgroundImage = 'url(img/'+sub_data[n].leftarm.class+'/LA.jpg)';
                    // }


                    // //rightarm 
                    // if (sub_data[n].rightarm.class == 'default'){
                    //     document.getElementById('RA-'+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/RA.jpg)';

                    // }else{
                    //     document.getElementById('RA-'+n).style.backgroundImage = 'url(img/'+sub_data[n].rightarm.class+'/RA.jpg)';
                    // }


                    // //leftleg
                    // if (sub_data[n].leftleg.class == 'default'){
                    //     document.getElementById('LL-'+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/LL.jpg)';
                    
                    // }else{
                    //     document.getElementById('LL-'+n).style.backgroundImage = 'url(img/'+sub_data[n].leftleg.class+'/LL.jpg)';
                    // }


                    // //rightleg 
                    // if (sub_data[n].rightleg.class == 'default'){
                    //     document.getElementById('head-'+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/head.jpg)';
                    
                    // }else{
                    //     document.getElementById('RL-'+n).style.backgroundImage = 'url(img/'+sub_data[n].rightleg.class+'/RL.jpg)';
                    // }
                    // //torso
                    // if (sub_data[n].head.class == 'default'){
                    //     document.getElementById('head-'+n).style.backgroundImage = 'url(img/'+sub_data[n].currentClass+'/head.jpg)';
                    
                    // }else{
                    //     document.getElementById('head-'+n).style.backgroundImage = 'url(img/'+sub_data[n].head.class+'/head.jpg)';
                    // }
            

}//end push photo func 

            
//take orginal data array and separate all Classes  

var Get_sub_Data = sub_data=> {
    let b,e,r,s; 
    r=[]
    b=[]
    e=[];
    s=[];
        sub_data.findIndex((el,n,arr)=>{
          
            if (el.currentClass == 'rogue'){
                r.push(el); 
                
            }else if(el.currentClass == 'berserker' ){
                b.push(el);
            }else if(el.currentClass == 'engineer' ){
                e.push(el);
            }else if(el.currentClass == 'scribe' ){
                s.push(el);
            }
        });
        return [b,e,r,s];
        }


       



    // DOM_insert function
var DOM_inset = (sub_data)=>{
        console.log('dom insert started ! ')
        // check if there is old .box elements
        if (document.getElementById('msg') !== null){
            document.getElementById('msg').remove();

        }
    let box = document.querySelectorAll('.box');
    if ( box.length == 0 ){
        console.log('**********dom is emptey  ')

        //push ch info for each element into body parts table #bp_info 
        CreateDom(sub_data);

        //push body parts photo into .box
        push_photo(sub_data);


        //calc elements status call CalcStatus function and push the return value into character status table
    }else{
        console.log('**********dom is NOT emptey  ')
      

        box.forEach(el => el.remove());   
        //push ch info for each element into body parts table #bp_info 
        CreateDom(sub_data);

        //push body parts photo into .box
        push_photo(sub_data);


        //calc elements status call CalcStatus function and push the return value into character status table

    }

        }


//Create DOM box function 
var CreateDom =(sub_data)=>{
        // 
        let section = document.getElementById('Ch_section'); 
        let n = 0
        console.log('**********Creating DOM!!!***********  ')

        sub_data.forEach((el)=>{
            
            console.log(el.currentClass+n+' lengeth :'+sub_data.length)


                // creating new DOM and insert tabels data. 
            section.insertAdjacentHTML('beforeend',
            "      <div class='box' id="+n+"><div>\
        <h2 id='section_title'> All "+el.currentClass+" Characters</h2>\
            <div class='sub-box'>\
            <div>\
                <table>\
                    <caption>CHARACTER STATUS:</caption>\
                    <tr>\
                        <th>STR</th>\
                        <th>DEX</th>\
                        <th>INT</th>\
                        <th>HP</th>\
                    </tr>\
                    <tr>\
                        <td>300</td>\
                        <td>24</td>\
                        <td>3</td>\
                        <td>600</td>\
     \
                    </tr>\
                </table>\
                <table id='bp_info'>\
                    <caption>BODY PART CLASS:</caption>\
                    <tr>\
                        <th>Head</th>\
                        <td>"+el.head.class+"</td>\
                         \
                    </tr>\
                    <tr>\
                        <th>Torso</th>\
                        <td>"+el.torso.class+"</td>\
     \
                    </tr>\
                    <tr>\
                        <th>Left Arm</th>\
                        <td>"+el.leftarm.class+"</td>\
                         \
                    </tr>\
                    <tr>\
                        <th>Right Arm</th>\
                        <td>"+el.rightarm.class+"</td>\
     \
                    </tr>\
                    <tr>\
                        <th>Left Leg</th>\
                        <td>"+el.leftleg.class+"</td>\
                         \
                    </tr>\
                    <tr>\
                        <th>Right Leg</th>\
                        <td>"+el.rightleg.class+"</td>\
     \
                    </tr>\
                </table>\
     \
            </div>\
            <!-- *****   Character representation ****-->\
                    <div class='ch_representation' >\
                        <h2 >Character "+Number(n+1)+"-"+el.currentClass+"</h2>\
     \
                        <div class='head'id=head-"+n+" ></div>\
                        <div >\
                            <div class='LA' id=LA-"+n+"></div>\
                             \
                            <div class='T_L-box'>\
                                <div class='Torso' id=Torso-"+n+"></div>\
                                <div>\
                                    <div class='LL' id=LL-"+n+"></div>\
                                    <div class='RL' id=RL-"+n+"></div>\
                                </div>\
                             \
                            </div>\
                            <div class='RA' id=RA-"+n+"></div>\
                        </div>\
                        <!-- ***** end Ch_img_box ****--> \
                    </div>\
                    <div>\
                    \
        </div><!-- ***** end box ****--> \
        "); 

            n++;
            }); 

}


let insert_msg =()=>{
    let section = document.getElementById('Ch_section'); 
   
      // creating new DOM and insert tabels data. 
        section.insertAdjacentHTML('beforeend',"\
        <h2 id='msg'> There is NO Data to present !!</h2>");
        
}

// EventListener for Ch_box 
 


//init Dom insert 









//active btns 
// document.getElementById('design1').addEventListener('click',btn_active1);
// document.getElementById('design2').addEventListener('click',btn_active2);


// function btn_active1(){
//         document.getElementById('container1').classList.add('active');
//         document.getElementById('container2').classList.remove('active');
//         document.getElementById('design2').classList.remove('btn-active');
//         document.getElementById('design1').classList.add('btn-active');


//         document.getElementById('header').classList.remove('dark_active');
//         document.getElementById('sub_header').classList.remove('dark_active');
// }

// function btn_active2(){
//     document.getElementById('container1').classList.remove("active");
//     document.getElementById('container2').classList.add('active');
//     document.getElementById('design1').classList.remove('btn-active');
//     document.getElementById('design2').classList.add('btn-active');

//     document.getElementById('header').classList.add('dark_active');
//     document.getElementById('sub_header').classList.add('dark_active');


// }



    //  fetch('https://adventure-app-29076.firebaseio.com/characters.json')
    //   .then(response=> response.json())
    //   .then(data=> console.log(data['-MGnVL54c5ul9ONUyGLo'].head))