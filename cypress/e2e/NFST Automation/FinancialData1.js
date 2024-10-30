export const financialDataYearOne = {
    salesRentalIncome: 500,
    costOfGoodsSold: 200,
  
    otherOperatingExpenses: 30,
  salariesWages: 10,
  depreciation: 20,
  amortization: 30,
  floorplanInterest: 10,
  leasingHPCharges: 20,
  directorsRemuneration: 30,
  rent: 10,

  otherIncomeFI: 20,

  taxation: 30,
  unusualItems: 10,
  dividendsPaid: 20,
  accumulatedProfits: 30,

  cashMarketableSec: 10,
  financeContVehRec: 20,
  accountsRec: 30,
  vehicleReceivables: 10,
  inventNewDemos: 20,
  inventUsed: 30,
  inventPartsAccess: 10,
  prepaidExpenses: 20,
  taxGST: 30,
  loansRelatedParties: 10,
  otherCurrentReceivables: 20,

  motorVehicles: 30,
  landBuildings: 10,
  equipment: 20,
  accumulatedDepreciation: -30, // Special case with a negative
  otherNonCurrentAssets: 10,

  goodwill: 20,
  investments: 30,
  fitb: 10,
  dueFromAssocCos: 20,
  dueFromOfficers: 30,
  otherIntangibles: 10,
  deferredTaxAsset: 20,

  staffAccruals: 30,
  otherAccrualsProvision: 10,
  accountsPayable: 20,
  vehiclePayableNewDemo: 30,
  vehiclePayableUsed: 10,
  wholesaleSoldNotPaid: 20,
  shortTermDebtHP: 30,
  loansFromOfficers: 10,
  bankOverdraft: 20,
  taxLiabilities: 30,
  otherCurrentLiabilities: 10,

  mortgageBankLoans: 20,
  loansFromOfficersOrRelatedCompanies: 30,
  longTermDebtHP: 10,
  subordinatedLoans: 20,
  otherNonCurrentLiabilities: 30,

  paidUpCapital: 10,
  assetRevalReserve: 20,
  otherReserves: 30,
  adjustments: 10,
  dividendsWithdrawals: 20,
  retainedEarningsPreviousYear: 30,
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
  export const financialDataYearTwo = generateFinancialData(
    financialDataYearOne,
    -10
  );
  export const financialDataYearThree = generateFinancialData(
    financialDataYearOne,
    +10
  );
  