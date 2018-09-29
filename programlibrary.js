var usage = [1251.553, 1313.681, 1446.844,1449.297,1993.918,2116.279,2390.659,2357.002,2174.673,1864.513,1434.318,1019.758];
var monthlySpend = [];

var tduCharges = {
    cnpfc: 5.47,
    cnpvc: .042536,
    oncfv: 3.49,
    oncvc:.038271
}

var program1 = {
    provider: "Gexa",
    name: "Choice Freedom 12",
    term: 12,
    isPassThrough: true,
    energyCharge: .049
}

function runProgram(program) {


for (i=0; i<usage.length; i++) {
//  if (this.isPassThrough) {
    monthlySpend.push((usage[i]*tduCharges.cnpvc + usage[i]*program.energyCharge + tduCharges.cnpfc));
//  } else {
    //  monthamt = usage[i]*this.energyCharge
    
}
console.log(monthlySpend)
}
runProgram(program1);

var sum = monthlySpend.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); 