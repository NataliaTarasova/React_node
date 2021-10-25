export function showNumberPerfectMinMax (a, b){
    const arr =[];
    for (let i=a; i<b; i++){
        let sum =0; 
       for (let n = 1; n <= i/2; n++) {
     if (i % n === 0) sum += n;
     }
    if (i === sum) arr.push(i);
  }
  return arr;
};

