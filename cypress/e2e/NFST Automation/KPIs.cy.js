import {
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
  InterestExpenses,
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
  
} from "./FinancialEquations.js"; // Adjust the path based on your project structure
import {
  financialDataYearOne,
  financialDataYearTwo,
  financialDataYearThree,
} from "./FinancialData.js"; // Adjust the path based on your folder structure




import {
  financialKPIsYearOne,
  financialKPIsYearTwo,
  financialKPIsYearThree,
} from "./FinancialEquations.js";

const {
  waitUntilSymbol,
} = require("next/dist/server/web/spec-extension/fetch-event");
const { should } = require("chai");



describe("Testing of the SPreading Tool", function () {
  beforeEach(() => {
    cy.login();
    cy.wait(2000);
  });

  it("KPIs Verification", () => {

    // cy.log("The Value of fyear1" + financialKPIsYearOne.);

    //click on a reference number
    cy.get('[id="250"]').click();
    cy.get("#kpis").click();

    // Function to verify financial values
    const verifyKPIValues = (id, expectedValue, description) => {
      cy.get(id) // Use the provided XPath
        .invoke("text") // Get the text content of the element
        .then((text) => {
          const actualValue = text; // Convert the text to a number
          expect(actualValue).to.eq(expectedValue); // Assert that they are equal
          cy.log(
            `The Actual value is ${actualValue}. The expected value is ${expectedValue}. (${description})`
          );
        });
    };


    //Profitability Measures

    cy.log("The EBITDAKPI is " +"$" +financialKPIsYearOne.EBITDAKPI);
    // Verification of EBITDAKPI
    verifyKPIValues("#profitability_ebitda_0", "$" +financialKPIsYearOne.EBITDAKPI, "EBITDA");


    cy.log("The Total Revenue ($) is" +financialKPIsYearOne.TotalRevenue);
    // Verification of Total Revenue
    verifyKPIValues("#profitability_totalRevenue_0", "$" +financialKPIsYearOne.TotalRevenue, "Total Revenue");

    cy.log("The Gross Profit Margin (%) is " +financialKPIsYearOne.GrossProfitMargin+"%");
    // Verification of Gross Profit Margin (%
    verifyKPIValues("#profitability_grossProfitMargin_0", financialKPIsYearOne.GrossProfitMargin+"%", "Gross Profit Margin");
    
    cy.log("The Expenses / Sales Ratio (%) is " +financialKPIsYearOne.ExpensesSales+"%");
    // Verification of Expenses / Sales Ratio (%)
    verifyKPIValues("#profitability_expensesSales_0", financialKPIsYearOne.ExpensesSales+"%", "Expenses / Sales Ratio (%)");
    
    cy.log("The Net Profit Margin (%) is " +financialKPIsYearOne.ProfitMargin+"%");
    // Verification of Net Profit Margin (%)
    verifyKPIValues("#profitability_netProfitMargin_0", financialKPIsYearOne.ProfitMargin+"%", "Net Profit Margin (%)");
    

    //Growth Measures

    cy.log("The Net Worth ($) is" +"$" +financialKPIsYearOne.Networth);
    // Verification of Net Worth ($)
    verifyKPIValues("#growth_netWorth_0", "$" +financialKPIsYearOne.Networth, "Net Worth ($)");
    
    // cy.log("The Revenue Growth ($) is" +financialKPIsYearOne.);
    // // Verification of Revenue Growth ($)
    // verifyKPIValues("#growth_revenueGrowth_0", financialKPIsYearOne., "Revenue Growth ($)");

    //Efficiency Measures
  
    cy.log("The Working Capital ($) is " +"$"+financialKPIsYearOne.WorkingCapital);
    // Verification of Working Capital ($)
    verifyKPIValues("#working_capital_0", "$"+financialKPIsYearOne.WorkingCapital, "Working Capital ($)");
  
    cy.log("The Current Ratio is" +financialKPIsYearOne.CurrentRatio);
    // Verification of Current Ratio
    verifyKPIValues("#current_ratio_0", financialKPIsYearOne.CurrentRatio, "Current Ratio");
  
    cy.log("The Debtors Turnover (Days) is" +financialKPIsYearOne.DebtorsTurnoverDays+" day(s)");
    // Verification of Debtors Turnover (Days)
    verifyKPIValues("#debtors_turnover_0", financialKPIsYearOne.DebtorsTurnoverDays+" day(s)", "Debtors Turnover (Days)");
  
    cy.log("The Creditors Turnover (Days) is" +financialKPIsYearOne.CreditorsTurnoverDays+" day(s)");
    // Verification of Creditors Turnover (Days)
    verifyKPIValues("#creditors_turnover_0", financialKPIsYearOne.CreditorsTurnoverDays+" day(s)", "Creditors Turnover (Days)");
  
    cy.log("The Stock Turnover (Days) is" +financialKPIsYearOne.StockTurnoverDays+" day(s)");
    // Verification of Stock Turnover (Days)
    verifyKPIValues("#stock_turnover_0", financialKPIsYearOne.StockTurnoverDays+" day(s)", "Stock Turnover (Days)");

    cy.log("The stock_equity is" + "$"+financialKPIsYearOne.StockEquity);
    // Verification of stock_equity
    verifyKPIValues("#stock_equity_0", "$"+financialKPIsYearOne.StockEquity, "stock_equity");

    //Coverage Measures
  
    cy.log("The Interest Coverage is" +financialKPIsYearOne.InterestCoverage);
    // Verification of Interest Coverage
    verifyKPIValues("#interest_coverage_0", financialKPIsYearOne.InterestCoverage, "Interest Coverage");
    
  
    cy.log("The Debt Service Cover is" +financialKPIsYearOne.DebtServiceCover);
    // Verification of Debt Service Cover
    verifyKPIValues("#debt_service_cover_0", financialKPIsYearOne.DebtServiceCover, "Debt Service Cover");
  

    //Leverage Measures

    cy.log("The Total Liabilities to Net Worth is" +financialKPIsYearOne.TotalLiabilitiesToNetWorth);
    // Verification of Total Liabilities to Net Worth
    verifyKPIValues("#liabilities_net_worth_0", financialKPIsYearOne.TotalLiabilitiesToNetWorth, "Total Liabilities to Net Worth");


  
    // cy.log("The  is" +financialKPIsYearOne.);
    // // Verification of 
    // verifyKPIValues("#", financialKPIsYearOne., "");
  
    // cy.log("The  is" +financialKPIsYearOne.);
    // // Verification of 
    // verifyKPIValues("#", financialKPIsYearOne., "");
  
    // cy.log("The  is" +financialKPIsYearOne.);
    // // Verification of 
    // verifyKPIValues("#", financialKPIsYearOne., "");
  
    // cy.log("The  is" +financialKPIsYearOne.);
    // // Verification of 
    // verifyKPIValues("#", financialKPIsYearOne., "");
  
    // cy.log("The  is" +financialKPIsYearOne.);
    // // Verification of 
    // verifyKPIValues("#", financialKPIsYearOne., "");
  
    
  });
});
