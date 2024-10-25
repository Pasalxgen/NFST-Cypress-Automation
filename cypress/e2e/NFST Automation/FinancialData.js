export const financialDataYearOne = {
  salesRentalIncome: 900,
  costOfGoodsSold: 200,

  otherOperatingExpenses: 40,
  salariesWages: 50,
  depreciation: 60,
  amortization: 70,
  floorplanInterest: 80,
  leasingHPCharges: 90,
  directorsRemuneration: 10, // Resets back to 10
  rent: 20,

  otherIncomeFI: 30,

  taxation: 40,
  unusualItems: 50,
  dividendsPaid: 60,
  accumulatedProfits: 70,

  cashMarketableSec: 80,
  financeContVehRec: 90,
  accountsRec: 10, // Resets back to 10
  vehicleReceivables: 20,
  inventNewDemos: 30,
  inventUsed: 40,
  inventPartsAccess: 50,
  prepaidExpenses: 60,
  taxGST: 70,
  loansRelatedParties: 80,
  otherCurrentReceivables: 90,

  motorVehicles: 10, // Resets back to 10
  landBuildings: 20,
  equipment: 30,
  accumulatedDepreciation: -40,
  otherNonCurrentAssets: 50,

  goodwill: 60,
  investments: 70,
  fitb: 80,
  dueFromAssocCos: 90,
  dueFromOfficers: 10, // Resets back to 10
  otherIntangibles: 20,
  deferredTaxAsset: 30,

  staffAccruals: 40,
  otherAccrualsProvision: 50,
  accountsPayable: 60,
  vehiclePayableNewDemo: 70,
  vehiclePayableUsed: 80,
  wholesaleSoldNotPaid: 90,
  shortTermDebtHP: 10, // Resets back to 10
  loansFromOfficers: 20,
  bankOverdraft: 30,
  taxLiabilities: 40,
  otherCurrentLiabilities: 50,

  mortgageBankLoans: 60,
  loansFromOfficersOrRelatedCompanies: 60,
  longTermDebtHP: 70,
  subordinatedLoans: 80,
  otherNonCurrentLiabilities: 90,

  paidUpCapital: 10, // Resets back to 10
  assetRevalReserve: 20,
  otherReserves: 30,
  adjustments: 40,
  dividendsWithdrawals: 50,
  retainedEarningsPreviousYear: 60,

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
