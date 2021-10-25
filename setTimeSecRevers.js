export function setTimeSecRevers (second){
    let hour = Math.floor(second/3600);
    let minute = Math.floor((second-hour*3600)/60);
    let sec = second - hour*3600-minute*60;
    return `${hour}:${minute}:${sec}`;
}