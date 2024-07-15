let sheep=[undefined, null, false,true]
function countSheeps(sheep) {
    let counter =0;
        for (let i= 0; i < sheep.length; i++) {
            if (sheep[i]=== true ){
                counter++;
            }
            
        }
        return counter
    }
    console.log(countSheeps(sheep))
