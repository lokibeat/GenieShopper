var usage = [1251.553, 1313.681, 1446.844,1449.297,1993.918,2116.279,2390.659,2357.002,2174.673,1864.513,1434.318,400];
var disclosurePoints = [500,1000,2000];
var tduCharges = {
    cnpfc: 5.47,
    cnpvc: .042536,
    oncfv: 3.49,
    oncvc:.038271
};

var program1 = {
    provider: "Gexa",
    name: "Choice Freedom 12",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .049
};

var program2 = {
    provider: "Discount Power",
    name: "Super Saver",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .04817
}

var program3 = {
    provider: "Power Express",
    name: "Super",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .0844,
    usesRebates: true,
    rebates: {
        rebateType: "single",
        rebateData: {
            amount: 80,
            threshold: 1000
        }
    }
}

var program4 = {
    provider: "Infuse Energy",
    name: "PTC Lean Green Infusion",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .08421,
    usesRebates: true,
    rebates: {
        rebateType: "range dependent",
        rebateData: [
            {
                amount: 85,
                lowerBoundary: 999,
                upperBoundary: 1501
            },
            {
                amount: 40,
                lowerBoundary: 1500,
                upperBoundary: 2001
            }
        ]},
    baseCharge: 1.5,
    minUsageFee: 4.95,
    minUsageThreshold: 500
}


function runProgram(program) {
    var monthlySpend = [];
    var totalUsage = usage.reduce(add,0)
    
    
    for (i=0; i<usage.length; i++) {
        var holder = usage[i]*program.cnpEnergyCharge;
        console.log("Energy Charge: " + holder);
        if (program.isPassThrough) {
            holder += (usage[i]*tduCharges.cnpvc +tduCharges.cnpfc);
        console.log("plus Passthroughs: "+ holder);
        }; 
        if (program.baseCharge){
            holder += program.baseCharge;
            console.log("Plus Base Charge: " + holder)
        };
        if (program.minUsageFee) {
            if (usage[i]<program.minUsageThreshold) {
                holder += program.minUsageFee;
            console.log("plus minusage fee: " + holder );
            }
        };
        if (program.usesRebates) {
            holder += rebateCalculator(usage[i],program.rebates);
            console.log("plus rebate: " + holder)
        }
        monthlySpend.push(holder);
    }
// for (i=0;i<monthlySpend.length;i++) {
//     console.log("Month: ", i+1 ,"Spend: $", monthlySpend[i].toFixed(2));
//     console.log("-".repeat(25));
// }

var totalSum = monthlySpend.reduce(add, 0);
console.log("Program: ", program.provider, " " ,program.name, "-", program.term)
console.log("Total Usage: ", totalUsage.toFixed(2), " kWh"); 
console.log("Total Spend: $", totalSum.toFixed(2)); 
console.log("Avg Cost per kWh: ", ((totalSum/totalUsage)*100).toFixed(3), "c per kWh")
console.log("-".repeat(25));
}
runProgram(program1);
runProgram(program2);
runProgram(program3);
runProgram(program4);

// helper function to add array values
function add(a, b) {
    return a + b;
}
// trying to debug 
// console.log("stand alone run: ", rebateCalculator(1000,program3.rebates))

// function to calculate applicable rebate
function rebateCalculator(usage, rebate) {
    var rebateAmount;
    // console.log(usage, rebate);
    switch (rebate.rebateType){
        case "single":
            console.log("Single Rebate");
            console.log("usage:" + usage, "threshold: " + rebate.rebateData.threshold)
             if (usage > rebate.rebateData.threshold){
                 rebateAmount = rebate.rebateData.amount*(-1);
                 console.log("rebate amount: " + rebateAmount);
                 return rebateAmount
                } else rebateAmount = 0
                console.log("rebate amount: " + rebateAmount);
                return rebateAmount

            break;
        case "range dependent":
                console.log("Range Rebate")
            console.log(rebate);
            console.log(rebate.rebateData.length)
            for (j=0; j<rebate.rebateData.length; j++){
                console.log("amount: " + rebate.rebateData[j].amount,"lower boundary: "+ rebate.rebateData[j].lowerBoundary, "upper boundary: " + rebate.rebateData[j].upperBoundary);
            }
            // console.log("amount: " + rebate.rebateData[1].amount,"lower boundary: "+ rebate.rebateData[1].boundaries[0], "upper boundary: " + rebate.rebateData[1].boundaries[1]);
            console.log("usage: " + usage)
            rebateAmount = 0
            console.log("rebate amount: " + rebateAmount);
            return rebateAmount
            break;}
    }
