
import { financialDataYearOne, financialDataYearTwo, financialDataYearThree } from './FinancialData.js'; // Adjust the path based on your folder structure

// Function to calculate financial KPIs for a given year of data
const calculateFinancialKPI = (financialData) => {
  
  // Total Sales and Rental Income
  const totalSalesAndRentalIncome = financialData.salesRentalIncome;

  // Gross Profit = Total Sales & Rental Income - Cost of Goods Sold
  const GrossProfit = financialData.salesRentalIncome - financialData.costOfGoodsSold;

  // Operating Expenses = Sum of all operating expenses
  const operatingExpenses = 
    financialData.otherOperatingExpenses +
    financialData.salariesWages +
    financialData.depreciation +
    financialData.amortization +
    financialData.floorplanInterest +
    financialData.leasingHPCharges +
    financialData.directorsRemuneration +
    financialData.rent;

  // Total Current Assets = Sum of all current assets
  const totalCurrentAssets =
    financialData.cashMarketableSec +
    financialData.financeContVehRec +
    financialData.accountsRec +
    financialData.vehicleReceivables +
    financialData.inventNewDemos +
    financialData.inventUsed +
    financialData.inventPartsAccess +
    financialData.prepaidExpenses +
    financialData.taxGST +
    financialData.loansRelatedParties +
    financialData.otherCurrentReceivables;

  // Total Fixed Assets = Sum of all fixed assets
  const totalFixedAssets =
    financialData.motorVehicles +
    financialData.landBuildings +
    financialData.equipment +
    financialData.accumulatedDepreciation +
    financialData.otherNonCurrentAssets;

  // Total Other Assets = Sum of other non-current assets
  const totalOtherAssets =
    financialData.goodwill +
    financialData.investments +
    financialData.fitb +
    financialData.dueFromAssocCos +
    financialData.dueFromOfficers +
    financialData.otherIntangibles +
    financialData.deferredTaxAsset;

  // Total Current Liabilities = Sum of all current liabilities
  const totalCurrentLiabilities =
    financialData.staffAccruals +
    financialData.otherAccrualsProvision +
    financialData.accountsPayable +
    financialData.vehiclePayableNewDemo +
    financialData.vehiclePayableUsed +
    financialData.wholesaleSoldNotPaid +
    financialData.shortTermDebtHP +
    financialData.loansFromOfficers +
    financialData.bankOverdraft +
    financialData.taxLiabilities +
    financialData.otherCurrentLiabilities;

  // Total Noncurrent Liabilities = Sum of all noncurrent liabilities
  const totalNoncurrentLiabilities =
    financialData.mortgageBankLoans +
    financialData.loansFromOfficersOrRelatedCompanies +
    financialData.longTermDebtHP +
    financialData.subordinatedLoans +
    financialData.otherNonCurrentLiabilities;

  // Operating Profit Before Tax = Gross Profit - Operating Expenses
  const OperatingProfitBeforeTax = GrossProfit - operatingExpenses;

  // Net Income (Profit) = Operating Profit Before Tax + Other Income (F & I Income)
  const NetIncomeProfit = OperatingProfitBeforeTax + financialData.otherIncomeFI;

  // EBIT = Net Income (Profit) + Floorplan Interest + Leasing & HP Charges
  const EBIT = NetIncomeProfit + financialData.floorplanInterest + financialData.leasingHPCharges;

  // EBITDA = EBIT + Depreciation + Amortization
  const EBITDA = financialData.depreciation + financialData.amortization + EBIT;

  // Net Profit After Tax = Net Income (Profit) - Taxation
  const NetProfitAfterTax = NetIncomeProfit - financialData.taxation;

  // Net Profit after Tax and Extraordinaries = Net Profit After Tax + Unusual Items
  const NetProfitAfterTaxAndExtraordinaries = NetProfitAfterTax + financialData.unusualItems;

  // Retained Profits = Net Profit after Tax and Extraordinaries - Dividends + Accumulated Profits
  const RetainedProfits = NetProfitAfterTaxAndExtraordinaries - financialData.dividendsPaid + financialData.accumulatedProfits;

  // Total Assets = Total Current Assets + Total Fixed Assets + Total Other Assets
  const TotalAssets = totalCurrentAssets + totalFixedAssets + totalOtherAssets;

  // Total Liabilities = Total Current Liabilities + Total Noncurrent Liabilities
  const TotalLiabilities = totalCurrentLiabilities + totalNoncurrentLiabilities;

  // Total Net Worth = Paid-Up Capital + Reserves + Adjustments + Retained Earnings Previous Year + Net Profit After Tax and Extraordinaries
  const TotalNetWorth =
    financialData.paidUpCapital +
    financialData.assetRevalReserve +
    financialData.otherReserves +
    financialData.adjustments +
    financialData.dividendsWithdrawals +
    financialData.retainedEarningsPreviousYear +
    NetProfitAfterTaxAndExtraordinaries;

  // Interest Expenses = Floorplan Interest + Leasing & HP Charges
  const InterestExpensesIC = financialData.floorplanInterest + financialData.leasingHPCharges;

  // Interest Expenses = Floorplan Interest + Leasing & HP Charges+Depriciation
  const InterestExpensesDSC = financialData.floorplanInterest + financialData.leasingHPCharges + financialData.depreciation;
  // Total Liabilities and Net Worth = Total Liabilities + Total Net Worth
  const TotalLiabilitiesAndNetWorth = TotalNetWorth + TotalLiabilities;

  // Balance Checker = Total Liabilities and Net Worth - Total Assets
  const BalanceChecker = TotalLiabilitiesAndNetWorth - TotalAssets;

  // KPIs Tab
  // Total Revenue = Sales and Rental Income
  const TotalRevenue =  totalSalesAndRentalIncome;

  // EBITDA KPI
  const EBITDAKPI =  EBITDA;

  // Gross Profit Margin % = Gross Profit / Total Revenue * 100
  const GrossProfitMargin =  ((GrossProfit / totalSalesAndRentalIncome) * 100).toFixed(2) ;

  // Expenses/Sales % = Operating Expenses / Total Revenue * 100
  const ExpensesSales = ((operatingExpenses / totalSalesAndRentalIncome) * 100).toFixed(2);

  // Net Profit Margin % = Net Income (Profit) / Total Revenue * 100
  const ProfitMargin = ((NetIncomeProfit / totalSalesAndRentalIncome) * 100).toFixed(2);


  // Net Worth = Total Assets - Total Liabilities
  const Networth = (TotalAssets - TotalLiabilities);



  // Working Capital = Total Current Assets - Total Current Liabilities
  const WorkingCapital = (totalCurrentAssets - totalCurrentLiabilities);

  // Current Ratio = Total Current Assets / Total Current Liabilities
  const CurrentRatio = ((totalCurrentAssets / totalCurrentLiabilities)).toFixed(2)+ " : 1";

  // Debtors Turnover (Days) = ((Accounts Receivable + Vehicle Receivables + Finance Cont. & Veh. Rec.) / Total Revenue) * 365
  const DebtorsTurnoverDays = (((financialData.accountsRec + financialData.vehicleReceivables + financialData.financeContVehRec) / TotalRevenue) * 365).toFixed(2);

  // Creditors Turnover (Days) = (Accounts Payable / Cost of Goods Sold) * 365
  const CreditorsTurnoverDays = parseFloat(((financialData.accountsPayable / financialData.costOfGoodsSold) * 365).toFixed(2));

  // Stock Turnover (Days) = ((Inventories - New + Inventories - Used + Inventories - Parts) / Cost of Goods Sold) * 365
  const StockTurnoverDays = 
    (((financialData.inventNewDemos + financialData.inventUsed + financialData.inventPartsAccess) / financialData.costOfGoodsSold).toFixed(2) * 365);

  // Stock Equity = (Inventories - New + Inventories - Used + Finance Cont. & Veh. Rec. + Vehicle Receivables) - (Vehicle Payable - New/Demo + Wholesale Sold Not Paid + Vehicle Payable - Used)
  const StockEquityEQ = 
    (financialData.inventNewDemos + financialData.inventUsed  + financialData.financeContVehRec + financialData.vehicleReceivables) - 
    (financialData.vehiclePayableNewDemo + financialData.wholesaleSoldNotPaid + financialData.vehiclePayableUsed);
    const StockEquityValue =  StockEquityEQ < 0 ? `(${Math.abs(StockEquityEQ)})` : StockEquityEQ;
    const StockEquity=StockEquityValue;

      // Interest Coverage = EBIT / Interest Expenses
  const InterestCoverage = (EBIT / InterestExpensesIC).toFixed(2);

  // Total Liabilities to Net Worth = Total Liabilities / Total Net Worth
  const TotalLiabilitiesToNetWorth = (TotalLiabilities / TotalNetWorth).toFixed(2);

    // Net Debt = Total Liabilities - Vehicle Payable New/Demo Inv. - Wholesale Sold Not Paid 
    const NetDebt =TotalLiabilities- financialData.vehiclePayableNewDemo-financialData.wholesaleSoldNotPaid

    //Loans Out = Due From Assoc Cos. + Due From Officers & Own.
    const loansOut = financialData.dueFromAssocCos + financialData.dueFromOfficers;


    //Adjusted Net Equity = Net Worth - (Goodwill + Other Intangibles + Loans Out + Asset Reval'n Reserve + Investments + Contingent Liabilities + Adjustments + FITB ) + Subordinated Loans From Officers or Related companies
    const adjustedNetequity = TotalNetWorth+financialData.subordinatedLoans-(financialData.goodwill +financialData.otherIntangibles  + loansOut  +financialData.assetRevalReserve  +financialData.investments  +financialData.contigentLiabilities + financialData.adjustments +financialData.fitb );

    // Debt Service Cover = EBITDA / (Interest expense + Monthly principal repayments on loans) 
    const DebtServiceCover = (EBITDAKPI/(InterestExpensesDSC + financialData.monthlyPrincipleRepayment)).toFixed(2);

  // Return all calculated values
  return {
    totalSalesAndRentalIncome,
    GrossProfit,
    operatingExpenses,
    totalCurrentAssets,
    totalFixedAssets,
    totalOtherAssets,
    totalCurrentLiabilities,
    totalNoncurrentLiabilities,
    OperatingProfitBeforeTax,
    NetIncomeProfit,
    EBIT,
    EBITDA,
    NetProfitAfterTax,
    NetProfitAfterTaxAndExtraordinaries,
    RetainedProfits,
    TotalAssets,
    TotalLiabilities,
    TotalNetWorth,
    InterestExpenses: InterestExpensesIC,
    TotalLiabilitiesAndNetWorth,
    BalanceChecker,
    TotalRevenue,
    EBITDAKPI,
    GrossProfitMargin,
    ExpensesSales,
    ProfitMargin,
    Networth,
    InterestCoverage,
    WorkingCapital,
    CurrentRatio,
    DebtorsTurnoverDays,
    CreditorsTurnoverDays,
    StockTurnoverDays,
    StockEquity,
    TotalLiabilitiesToNetWorth,
    DebtServiceCover
  };
};

// Calculate financial KPIs for each year
export const financialKPIsYearOne = calculateFinancialKPI(financialDataYearOne);
export const financialKPIsYearTwo = calculateFinancialKPI(financialDataYearTwo);
export const financialKPIsYearThree = calculateFinancialKPI(financialDataYearThree);
