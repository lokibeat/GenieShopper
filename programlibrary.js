const programs = require("./programs.js")
var usage = [400, 900, 1400,1449.297,1993.918,2116.279,2390.659,2357.002,2174.673,1864.513,1434.318,400];
var totalUsage = usage.reduce(add,0)
var usage500 = [500];
var usage1000 = [1000];
var usage2000 = [2000];
var resultsArray = [];

var tduCharges = {
    cnpfc: 5.47,
    cnpvc: .042536,
    oncfv: 3.49,
    oncvc:.038271
};


// Run analysis
for (p=0; p<programs.length; p++){
    
runProgram(programs[p],usage);
}
// Main Function to calculate and aggregate monthly spend

function runProgram(program,usageProfile) {
    var monthlySpend = [];
    
    
    for (i=0; i<usageProfile.length; i++) {
        var holder = usageProfile[i]*program.cnpEnergyCharge;
        // console.log("usage: " + usage[i]);
        // console.log("Energy Charge: " + holder);
        // console.log("-".repeat(15));
        if (program.isPassThrough) {
            holder += (usageProfile[i]*tduCharges.cnpvc +tduCharges.cnpfc);
        // console.log("plus Passthroughs: "+ holder);
        // console.log("-".repeat(15));
        }; 
        if (program.baseCharge){
            holder += program.baseCharge;
            // console.log("Plus Base Charge: " + holder)
            // console.log("-".repeat(15));
        };
        if (program.minUsageFee) {
            if (usageProfile[i]<program.minUsageThreshold) {
                holder += program.minUsageFee;
                // console.log("plus minusage fee: " + holder );
                // console.log("-".repeat(15));
            }
        };
        if (program.usesRebates) {
            holder += rebateCalculator(usageProfile[i],program.rebates);
            // console.log("plus rebate: " + holder)
            // console.log("-".repeat(15));
        }
        if (program.usesTiers) {
            holder += tierCalculator(usageProfile[i],program.tiers)
        }
        monthlySpend.push(parseFloat(holder.toFixed(2)));
    }
// for (i=0;i<monthlySpend.length;i++) {
//     console.log("Month: ", i+1 ,"Spend: $", monthlySpend[i].toFixed(2));
//     console.log("-".repeat(25));
// }
// console.log(monthlySpend);
var totalSum = monthlySpend.reduce(add, 0);
objectifyResults(totalSum.toFixed(2),((totalSum/totalUsage)*100).toFixed(3),monthlySpend);
resultsArray.push(results);
// console.log("-".repeat(25));
// console.log("Program: ", program.provider, " " ,program.name, "-", program.term)
// console.log("Total Usage: ", totalUsage.toFixed(2), " kWh"); 
// console.log("Total Spend: $", totalSum.toFixed(2)); 
// console.log("Avg Cost per kWh: ", ((totalSum/totalUsage)*100).toFixed(3), "c per kWh")
// console.log("-".repeat(25));
}
console.log(resultsArray)

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
            // console.log("Single Rebate");
            // console.log("usage:" + usage, "threshold: " + rebate.rebateData.threshold)
             if (usage > rebate.rebateData.threshold){
                 rebateAmount = rebate.rebateData.amount*(-1);
                //  console.log("rebate amount: " + rebateAmount);
                 return rebateAmount
                } else rebateAmount = 0
                // console.log("rebate amount: " + rebateAmount);
                return rebateAmount

            break;
        case "range dependent":
            //     console.log("Range Rebate")
            // console.log(rebate);
            for (j=0; j<rebate.rebateData.length; j++){
                // console.log("amount: " + rebate.rebateData[j].amount,"lower boundary: "+ rebate.rebateData[j].lowerBoundary, "upper boundary: " + rebate.rebateData[j].upperBoundary);
                if(usage > rebate.rebateData[j].lowerBoundary && usage < rebate.rebateData[j].upperBoundary){
                    rebateAmount = rebate.rebateData[j].amount*(-1);
                    break;
                } else rebateAmount = 0
            }
            // console.log("amount: " + rebate.rebateData[1].amount,"lower boundary: "+ rebate.rebateData[1].boundaries[0], "upper boundary: " + rebate.rebateData[1].boundaries[1]);
            // console.log("usage: " + usage)
            // console.log("rebate amount: " + rebateAmount);
            return rebateAmount
            break;}
};

// Calculate tier based rates
function tierCalculator(usage,tiers) {
    var tierAmount;
    for (t=0; t< tiers.tierData.length; t++){
        // console.log("Calculating Tiers for usage: " + usage);
        if(usage > tiers.tierData[t].lowerBoundary && usage < tiers.tierData[t].upperBoundary){
            // console.log(tiers.tierData[t]);
            switch (tiers.tierData[t].tierType){
                case "rate":
                // console.log("Rate based tier");
                tierAmount = usage * tiers.tierData[t].rate
                // console.log("rate based tier: $" + tierAmount);
                break;
                
                case "fixed amount":
                // console.log("fixed amount tier")
                tierAmount = tiers.tierData[t].amount
                // console.log("fixed amount based tier: $" + tierAmount);
                break;
            }
        }
    }
return tierAmount;
};

function objectifyResults (totalSpend, perKWhMetric,monthlySpend){
    results = {
        totalSpend,
        perKWhMetric,
        monthlySpend

    };
    return results;
}
