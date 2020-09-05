
function garageDoor(e){
    let elements=e.split(''),
     p=false,
     counter=0,
     output='';

    elements.forEach(element=>{
        switch(element){

            case '.':
            if(counter===0 || counter===5){
                output+=counter;
                break;
            }else{
                if(p===false){
                    counter-=1;
                    output+=counter;
                    break;
                }else{
                    counter+=1;
                    output+=counter;
                    break;
                }
            }

            case 'P':
                if(p===false){
                    p=true;
                    counter+=1;
                    output+=counter;
                    break;
                }else{
                    p=false;
                    counter-=1;
                    output+=counter;
                    break;
                }
            
            case 'O':
                if(counter===0 || counter===5){
                    output+=counter;
                    break;
                }else{
                    if(p===false){
                        p=true;
                        counter+=1;
                        output+=counter;
                        break;
                    }else{
                        p=false;
                        counter-=1;
                        output+=counter;
                        break;
                    }  
                }




        }
    })
    return output.split('');
}

document.getElementById('result2').innerHTML=garageDoor('..P...O.....');