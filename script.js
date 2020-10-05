
  
let baseUrl = 'https://adventure-app-29076.firebaseio.com/characters.json';

async function Ldata() {


   try {

   let motherArr = [];
   let eachObject = [];

   let response = await fetch(baseUrl);
   let data = await response.json();
   
         for (let i in data){
            motherArr.push(data[i]);
         }

         console.log(motherArr);

         for(var i=0; i<motherArr.length; i++) {

            if(i<4) {
               eachObject.push(motherArr[i]);
            }
         }

         console.log(eachObject);

    }catch(e){
         window.alert("Error! check your connection or url");
         console.log(e);
      }
 
}

Ldata();



