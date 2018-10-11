var programs = [
    { 
    ptcIndex: 11810,
    eflUrl: "https://www.gexaenergy.com/UI/Handlers/DynamicRatePdf.ashx?pdfid=57844&rkey=8480|2440|1002|24626",
    enrollUrl: "https://enroll.gexaenergy.com/home/index?rkey=8480|2440|1002|24626",
    enrollPhone: "(866) 329-4392",
    provider: "Gexa",
    name: "Choice Freedom 12",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .049
    },
    {   
    ptcIndex: 11863,
    eflUrl: "https://signup.discountpowertx.com/EFL.aspx?i=29833",
    enrollUrl: "https://signup.discountpowertx.com/SelectPlan.aspx?Zip=77082&PromoCode=PTCCNPSSR&ReferralCode=&TDSP=3&Type=1&Service=Electricity&meter=1&StateCode=TX",
    enrollPhone: "(877) 909-7693",
    provider: "Discount Power",
    name: "Super Saver",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .04817
    },
    {
    eflUrl: "https://www.power-express.com/ViewPdf.aspx?pdf=efl_TOS_YRAC/CNP_Super12_PTC_09192018.pdf",
    enrollUrl:"https://www.power-express.com/Default.aspx?promo=PTC_cnp_Super12#get_quote" ,
    enrollPhone: "(877) 400-0232",
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
    ptcIndex: 11501,
    eflUrl: "https://88fd201f32c53c2bd0fb-11ba98ed637230a2314ec7c228a44bda.ssl.cf5.rackcdn.com/201810/EFL-20181002-130920-PTC Lean Green Infusion 12 (English).pdf",
    enrollUrl:"https://www.infuseenergy.com/signup/signup-step1/?id=515589&promotion=NONE&valid=N&referral=&landingpage=ptc" ,
    enrollPhone: "(844) 463-8732",
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
    ptcIndex: 17621,
    eflUrl: "https://www.myexpressenergy.com/viewpdf.aspx/?Docs/efl_fastva12fah_c.pdf",
    enrollUrl:"https://www.myexpressenergy.com/personalized-plans-and-rates?utm_source=ptc&utm_medium=CENTERP_12&utm_campaign=affiliate&promocode=ee_ptc&utm_content=fastva" ,
    enrollPhone: "(844) 361-2075",
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
    ptcIndex:17488,
    eflUrl: "https://v247power.com/EFL/Resi/E/2018-10-05289FLEXCNP4.912.pdf",
    enrollUrl:" https://v247power.com/products/?zip=77377&pcode=BRKGCNPPTC1" ,
    enrollPhone: "(855) 888-9888",
    provider: "V247",
    name: "Autumn Breeze",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .049
    },
    {   
    ptcIndex:18705 ,
    eflUrl: "https://www.power-express.com/ViewPdf.aspx?pdf=efl_TOS_YRAC/cnp_Turbo12_PTC_10082018.pdf",
    enrollUrl:"https://www.power-express.com/Default.aspx?promo=PTC_CNP_Turbo12#get_quote" ,
    enrollPhone: "(877) 400-0232",
    provider: "Power Express",
    name: "Turbo ",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .0491
    },
    {   
    ptcIndex: 12840,
    eflUrl: "https://www.southwestpl.com/Docs/swpl-efl-fixed-12-nongreen-ptc.pdf",
    enrollUrl:"https://www.southwestpl.com/Enroll/Enroll1.aspx" ,
    enrollPhone: "(866) 941-7975",
    provider: "Southwest Power & Light",
    name: "Spirit of Texas Fixed Rate AutoPay E-Plan",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .05,
    minUsageFee: 9.95,
    minUsageThreshold: 1000 
    },
    {   
    ptcIndex: 12838,
    eflUrl: "https://www.yeptexas.com/Docs/yep-efl-fixed-12-nongreen-ptc.pdf",
    enrollUrl:"https://www.yeptexas.com/Enroll/Enroll1.aspx" ,
    enrollPhone: "(866) 937-5937",
    provider: "YEP",
    name: "YEP's Fixed Rate AutoPay E-Plan",
    term: 12,
    isPassThrough: true,
    cnpEnergyCharge: .051,
    minUsageFee: 9.95,
    minUsageThreshold: 1000 
    },
    {   
    ptcIndex:12899 ,
    eflUrl: "http://portal.frontierutilities.com/frontierefl2/eflviewer.aspx?lang=EN&prodcode=SP12C&tdspcode=CNP",
    enrollUrl:"https://portal.frontierutilities.com/Webenrollment/LandingPage.aspx?TDSP_Code=CNP&Ref_ID=PTC&promo_code=SP12C&Ref_Code=PTC" ,
    enrollPhone: "(877) 261-1024",
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
    ptcIndex: 18571,
    eflUrl: "http://portal.frontierutilities.com/frontierefl2/eflviewer.aspx?lang=EN&prodcode=BTH12%2b&tdspcode=CNP",
    enrollUrl:"https://portal.frontierutilities.com/Webenrollment/LandingPage.aspx?TDSP_Code=CNP&Ref_ID=PTC&promo_code=BTH12%2B" ,
    enrollPhone: "(877) 261-1024",
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
