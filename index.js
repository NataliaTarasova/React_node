import { getRes } from "./getRes.js";

import { getFactorial } from "./getFactorial.js";

import { showResult } from "./showResult.js";

import { calcFormul } from "./calcFormul.js";

import { showNumberPerfect} from "./showNumbPerfect.js";

import { showNumberPerfectMinMax } from "./showNumbPerfMinMax.js";

import { setTime } from "./setTime.js";

import { setTimeSec } from "./setTimeSec.js";

import { setTimeSecRevers } from "./setTimeSecRevers.js";

import { showDiffDate } from "./showDiffDate.js" 

console.log (getRes(6,3))
console.log (getRes(1,3))
console.log (getRes(3,3))

console.log (getFactorial(5))

console.log (showResult(4,5,6))

console.log(calcFormul(2,4));
console.log(calcFormul(5,5));

console.log(showNumberPerfect(4));
console.log(showNumberPerfect(20));
console.log(showNumberPerfect(6));
console.log(showNumberPerfect(12));

console.log(showNumberPerfectMinMax(1,1000));

console.log(setTime(12,30,20));

console.log(setTimeSec(10,12,30));

console.log(setTimeSecRevers(30000));
console.log(setTimeSecRevers(26541));

console.log(showDiffDate("04,09,2021", "05,09,2021")); 