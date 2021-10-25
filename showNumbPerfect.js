export function showNumberPerfect(numb){
    let sum =0;
    
    for (let i=1; i<numb; i++){
        if(!(numb%i)){
        sum+=i;
        }
    } 
    return sum == numb;
} 