export function getFactorial(num){
    return (num != 1) ? num * getFactorial(num - 1) : 1;
}