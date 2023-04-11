import strictEquals from "./modules/strictEquiality.js";

console.log("Given the function strictEquals:\n");
console.log("When    1       and   1       are compared, the result is: " + strictEquals(1, 1));
console.log("When   NAN      and  NAN      are compared, the result is: " + strictEquals(NaN, NaN));
console.log("When    0       and  -0       are compared, the result is: " + strictEquals(0, -0));
console.log("When   -0       and   0       are compared, the result is: " + strictEquals(-0, 0));
console.log("When    1       and  \"1\"      are compared, the result is: " + strictEquals(1, "1"));
console.log("When  true      and  false    are compared, the result is: " + strictEquals(true, false));
console.log("When  false     and  false   are compared, the result is: " + strictEquals(false, false));
console.log("When  \"Water\"   and \"oil \"    are compared, the result is: " + strictEquals("Water", "oil"));
