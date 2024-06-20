let a = undefined;
let b = ' ';
let c = !b;

let d = Boolean(a)
let e = Boolean(b)
let f = Boolean(c)
console.log(d,e,f)
//d = false, e = true, f = false
//undefined เป็นfalse
//stringเปล่าเป็นtrue
//เพราะมี ! เลยเป็น false
