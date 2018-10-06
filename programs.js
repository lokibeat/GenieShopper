var programs = [
    { 
    provider: "Gexa",
    name: "Choice Freedom 12",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .049
    },
    {   
    provider: "Discount Power",
    name: "Super Saver",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .04817
    },
    {
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
            threshold: 999
        }
    }
    },
    {
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
    },
    {
    provider: "Express Energy",
    name: "Fast Lane",
    term: 12,
    isPassThrough: false,
    cnpEnergyCharge: 0,
    usesTiers: true,
    tiers: {
        tierData: [
            {
                tierType: "rate",
                lowerBoundary: 1,
                upperBoundary: 500,
                rate: .155
            },
            {
                tierType: "fixed amount",
                lowerBoundary: 500,
                upperBoundary: 1001,
                amount: 57
            },
            {
                tierType: "rate",
                lowerBoundary: 1001,
                upperBoundary: 10000,
                rate: .139
            }
        ]
    }
    },
    {   
    provider: "V247",
    name: "Autumn Breeze",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .049
    },
    {   
    provider: "Power Express",
    name: "Turbo ",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .0491
    },
    {   
    provider: "Southwest Power & Light",
    name: "Spirit of Texas Fixed Rate AutoPay E-Plan",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .05,
    minUsageFee: 9.95,
    minUsageThreshold: 1000 
    },
    {   
    provider: "YEP",
    name: "YEP's Fixed Rate AutoPay E-Plan",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .051,
    minUsageFee: 9.95,
    minUsageThreshold: 1000 
    },
    {
    provider: "Frontier Utilities",
    name: "Straight Power",
    term: 12,
    isPassThrough: false,
    cnpEnergyCharge: 0,
    baseCharge: 155,
    usesTiers: true,
    tiers: {
        tierData: [
            {
                tierType: "rate",
                lowerBoundary: 1,
                upperBoundary: 2000,
                rate: 0
            },
            {
                tierType: "rate",
                lowerBoundary: 2000,
                upperBoundary: 10000,
                rate: .155
            }],
        }
    },
    {
    provider: "Frontier Utilities",
    name: "Beat the Heat",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: 0.065,
    baseCharge: 7.95,
    usesRebates: true,
    rebates: {
        rebateType: "range dependent",
        rebateData: [
            {
                amount: 40,
                lowerBoundary: 1900,
                upperBoundary: 2400
            }
        ]},
    }  
];

module.exports = programs;
