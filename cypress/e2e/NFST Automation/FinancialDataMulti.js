export const financialDataYearOne = {
    salesRentalIncome: 90000,
    costOfGoodsSold: 20000,
    
    otherOperatingExpenses: 4000,
    salariesWages: 5000,
    depreciation: 6000,
    amortization: 7000,
    floorplanInterest: 8000,
    leasingHPCharges: 9000,
    directorsRemuneration: 1000, // Resets back to 1,000
    rent: 2000,
    
    otherIncomeFI: 3000,
    
    taxation: 4000,
    unusualItems: 5000,
    dividendsPaid: 6000,
    accumulatedProfits: 7000,
    
    cashMarketableSec: 8000,
    financeContVehRec: 9000,
    accountsRec: 1000, // Resets back to 1,000
    vehicleReceivables: 2000,
    inventNewDemos: 3000,
    inventUsed: 4000,
    inventPartsAccess: 5000,
    prepaidExpenses: 6000,
    taxGST: 7000,
    loansRelatedParties: 8000,
    otherCurrentReceivables: 9000,
    
    motorVehicles: 1000, // Resets back to 1,000
    landBuildings: 2000,
    equipment: 3000,
    accumulatedDepreciation: -4000,
    otherNonCurrentAssets: 5000,
    
    goodwill: 6000,
    investments: 7000,
    fitb: 8000,
    dueFromAssocCos: 9000,
    dueFromOfficers: 1000, // Resets back to 1,000
    otherIntangibles: 2000,
    deferredTaxAsset: 3000,
    
    staffAccruals: 4000,
    otherAccrualsProvision: 5000,
    accountsPayable: 6000,
    vehiclePayableNewDemo: 7000,
    vehiclePayableUsed: 8000,
    wholesaleSoldNotPaid: 9000,
    shortTermDebtHP: 1000, // Resets back to 1,000
    loansFromOfficers: 2000,
    bankOverdraft: 3000,
    taxLiabilities: 4000,
    otherCurrentLiabilities: 5000,
    
    mortgageBankLoans: 6000,
    loansFromOfficersOrRelatedCompanies: 6000,
    longTermDebtHP: 7000,
    subordinatedLoans: 8000,
    otherNonCurrentLiabilities: 9000,
    
    paidUpCapital: 1000, // Resets back to 1,000
    assetRevalReserve: 2000,
    otherReserves: 3000,
    adjustments: 4000,
    dividendsWithdrawals: 5000,
    retainedEarningsPreviousYear: 6000,
    
    //Values for KPI calculations
    overdraftLimit:0,
    monthlyPrincipleRepayment:0,
    contigentLiabilities:0,
    marketableSecurities:0,
    unUsedUsedCarFloorplan:0
  
  };
  
  // Function to generate financial data for a different year with a modifier (e.g., -10 or +10)
  const generateFinancialData = (data, modifier) => {
    const newData = {};
    for (let key in data) {
      if (typeof data[key] === "number") {
        newData[key] = data[key] + modifier;
      } else {
        newData[key] = data[key]; // For non-numeric fields, keep the original value
      }
    }
    return newData;
  };
  
// Generate financial data for Year Two and Year Three
export const financialDataA = generateFinancialData(
    financialDataYearOne,
    +100 // +10 * 10
  );
  export const financialDataB = generateFinancialData(
    financialDataYearOne,
    +200 // +20 * 10
  );
  export const financialDataC = generateFinancialData(
    financialDataYearOne,
    +300 // +30 * 10
  );
  export const financialDataD = generateFinancialData(
    financialDataYearOne,
    +400 // +40 * 10
  );
  export const financialDataE = generateFinancialData(
    financialDataYearOne,
    +500 // +50 * 10
  );
  export const financialDataF = generateFinancialData(
    financialDataYearOne,
    +600 // +60 * 10
  );
  export const financialDataG = generateFinancialData(
    financialDataYearOne,
    +700 // +70 * 10
  );
  export const financialDataH = generateFinancialData(
    financialDataYearOne,
    +800 // +80 * 10
  );
  export const financialDataI = generateFinancialData(
    financialDataYearOne,
    +900 // +90 * 10
  );
  export const financialDataJ = generateFinancialData(
    financialDataYearOne,
    +1000 // +100 * 10
  );
  export const financialDataK = generateFinancialData(
    financialDataYearOne,
    +1100 // +110 * 10
  );
  export const financialDataL = generateFinancialData(
    financialDataYearOne,
    +1200 // +120 * 10
  );
  export const financialDataM = generateFinancialData(
    financialDataYearOne,
    +1300 // +130 * 10
  );
  export const financialDataN = generateFinancialData(
    financialDataYearOne,
    +1400 // +140 * 10
  );
  export const financialDataO = generateFinancialData(
    financialDataYearOne,
    +1500 // +150 * 10
  );
  export const financialDataP = generateFinancialData(
    financialDataYearOne,
    +1600 // +160 * 10
  );
  export const financialDataQ = generateFinancialData(
    financialDataYearOne,
    +1700 // +170 * 10
  );
  export const financialDataR = generateFinancialData(
    financialDataYearOne,
    +1800 // +180 * 10
  );
  