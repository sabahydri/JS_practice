const myArray=[1,2,3];

function multi(e){
        let newArray=myArray.map(function(num){
            return num*e;
        })
            return newArray;
    }

function factory(e){

    
   return multi(e);
    
}


document.getElementById('result1').innerHTML=factory(5);