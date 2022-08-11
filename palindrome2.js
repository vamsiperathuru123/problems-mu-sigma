let str="happy";
const ar=str.split('');
console.log(ar);
const rar=ar.reverse();
console.log(rar);
const rstr= rar.join('');
console.log(rstr);

const nrstr=str.split('').reverse().join('');
console.log(rstr,"new palin")