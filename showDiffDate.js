//косячно
 
export function showDiffDate (date1, date2){
  let start = new Date (date1);
  let end =   new Date (date2);
  let diff = (end.getTime()-start.getTime());;
  let hour = Math.floor(diff/(1000*3600*24));
  let minute = Math.floor((diff-hour*(1000*3600*24))/60);
  let sec = diff - hour*(1000*3600*24)-minute*60;
  return `${hour}:${minute}:${sec}`
}