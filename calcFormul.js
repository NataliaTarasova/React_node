export function calcFormul(width,length){
    if (width!=0 && length!=0){
         return 2*(width+length)
     }
  else if (width===length) {
        return width* length
     }
 }