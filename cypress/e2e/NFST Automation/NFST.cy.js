
import { financialDataYearOne, financialDataYearTwo, financialDataYearThree } from './FinancialData.js'; // Adjust the path based on your folder structure
// import { EBIT, EBITDA, GrossProfit, NetIncomeProfit, operatingExpenses, OperatingProfitBeforeTax, totalSalesAndRentalIncome } from './FinancialEquations.js';
// Import all calculations from financialCalculations.js
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
  TotalLiabilitiesToNetWorth 
} from './FinancialEquations.js';  // Adjust the path based on your project structure

const { waitUntilSymbol } = require("next/dist/server/web/spec-extension/fetch-event");
const { should } = require("chai");


describe('Testing of the SPreading Tool', function() {

 
  it('Login url Verification', () => {
    
    cy.visit('https://qa.st.xgencredit.com');

    cy.url().should('include','xgencredit')
    .and('contain','qa')
  });
  
    it('Login', () => {
      cy.visit('https://qa.st.xgencredit.com');
    cy.get('.mui-1tb6yvl').contains("Welcome Back");
    cy.get('#username').type('pasal');
    cy.get('#password').type('st@123');
    cy.get('.MuiButtonBase-root[tabindex="0"]').click();
    cy.xpath('/html/body/main/div/div[2]/div[2]/div/div/div[3]/div/button').click();
  
 });
 
 beforeEach(() => {
  cy.login();
  cy.wait(2000);
});

 

it('Add Financial', () => {

  //click on a reference number
cy.get('[id="212"]').click();

//Clicking the Add new financial button 
cy.get('#new_financial_statement').as('AddNewFinancialButton');
cy.get('@AddNewFinancialButton').click();

//Clicking the plus button to add a financial statement 
cy.get('#add_financial').as('plusToAddaStatement');
cy.get('@plusToAddaStatement').click();

//Financial Types
cy.get('#statement_type').click();
cy.get('.MuiButtonBase-root[id="1"]').as('Audited');
cy.get('.MuiButtonBase-root[id="2"]').as('Unadited');
cy.get('.MuiButtonBase-root[id="3"]').as('Projected');
cy.get('.MuiButtonBase-root[id="4"]').as('Management');
cy.get('.MuiButtonBase-root[id="5"]').as('Draft');
cy.get('.MuiButtonBase-root[id="6"]').as('Other');

//click on the Financial Type
cy.get('@Unadited').click();

//selecting Classification 
cy.get('#classification_type').click();
cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
cy.get('.MuiButtonBase-root[id="2"]').as('External');

//click on the clssification type
cy.get('@Internal').click();

//Financial Date selection
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2020");
cy.get('#annualized_no').click
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();


// cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();

// cy.wait(3000)

//Click on the Next button
cy.get('#next_financial_config').click();

//Click on the save button in financial Congiguration
cy.get('#save_manual_data_entry').click();

// //Selecting no as the for the "Adding financials for one year?"
// cy.get('#annualized_no').click

// .MuiSelect-select[haspopup='listbox']

//Close button in the financial confiiguration 
//cy.get('#close_financial_config').click();

// //Cloning Previous Financials
// cy.get('#clone_prev_financials').check();

// //Selecting the cloning year
// cy.get('.MuiSelect-select[aria-controls=":r7c:"]').click();
// cy.get('[id="650"]')

//Adding the values for the statement

//cy.get('').type('');

cy.wait(3000)

//P&L
//Total Sales & Rental Income
cy.get('[id="2_salesAndIncome"]').type(financialDataYearOne.salesRentalIncome);
cy.get('[id="2_costOfGoodsSold"]').type(financialDataYearOne.costOfGoodsSold);
//Gross Profit
cy.get('[id="2_otherOperatingExpenses"]').type(financialDataYearOne.otherOperatingExpenses);
cy.get('[id="2_salariesAndWages"]').type(financialDataYearOne.salariesWages);
cy.get('[id="2_depreciation"]').type(financialDataYearOne.depreciation);
cy.get('[id="2_amortization"]').type(financialDataYearOne.amortization);
cy.get('[id="2_floorplanInterest"]').type(financialDataYearOne.floorplanInterest);
cy.get('[id="2_otherInterest"]').type(financialDataYearOne.leasingHPCharges);
cy.get('[id="2_directorsRenumeration"]').type(financialDataYearOne.directorsRemuneration);
cy.get('[id="2_rent"]').type(financialDataYearOne.rent);
cy.get('[id="2_otherIncome"]').type(financialDataYearOne.otherIncomeFI);
cy.get('[id="2_taxation"]').type(financialDataYearOne.taxation);
cy.get('[id="2_unusualItems"]').type(financialDataYearOne.unusualItems);
cy.get('[id="2_devidends"]').type(financialDataYearOne.dividendsPaid);
cy.get('[id="2_accumilatedProfits"]').type(financialDataYearOne.accumulatedProfits);
//Balance Sheet
//Assets
//Total Current Assets
cy.get('[id="2_cashAndMarketable"]').type(financialDataYearOne.cashMarketableSec);
cy.get('[id="2_financeCont"]').type(financialDataYearOne.financeContVehRec);
cy.get('[id="2_accountsRec"]').type(financialDataYearOne.accountsRec);
cy.get('[id="2_vehiclesRecievables"]').type(financialDataYearOne.vehicleReceivables);
cy.get('[id="2_inventNew"]').type(financialDataYearOne.inventNewDemos);
cy.get('[id="2_inventUsed"]').type(financialDataYearOne.inventUsed);
cy.get('[id="2_inventPartsAndAccess"]').type(financialDataYearOne.inventPartsAccess);
cy.get('[id="2_prepaidExpenses"]').type(financialDataYearOne.prepaidExpenses);
cy.get('[id="2_tax"]').type(financialDataYearOne.taxGST);
cy.get('[id="2_loansToRelatedParties"]').type(financialDataYearOne.loansRelatedParties);
cy.get('[id="2_otherCurrentReceivables"]').type(financialDataYearOne.otherCurrentReceivables);
//Total Fixed Assets
cy.get('[id="2_motorVehicles"]').type(financialDataYearOne.motorVehicles);
cy.get('[id="2_land"]').type(financialDataYearOne.landBuildings);
cy.get('[id="2_equipment"]').type(financialDataYearOne.equipment);
cy.get('[id="2_accumulatedDepriciation"]').type(financialDataYearOne.accumulatedDepreciation);
cy.get('[id="2_other"]').type(financialDataYearOne.otherNonCurrentAssets);
//Total Other Assets
cy.get('[id="2_goodWill"]').type(financialDataYearOne.goodwill);
cy.get('[id="2_investments"]').type(financialDataYearOne.investments);
cy.get('[id="2_fitb"]').type(financialDataYearOne.fitb);
cy.get('[id="2_dueFromAssoc"]').type(financialDataYearOne.dueFromAssocCos);
cy.get('[id="2_dueFromOfficers"]').type(financialDataYearOne.dueFromOfficers);
cy.get('[id="2_otherIntengibles"]').type(financialDataYearOne.otherIntangibles);
cy.get('[id="2_defferedTaxAsset"]').type(financialDataYearOne.deferredTaxAsset);
//Total Assets
//Liabilities and Networth
//Total Current Liabilities
cy.get('[id="2_staffAccruals"]').type(financialDataYearOne.staffAccruals);
cy.get('[id="2_otherAccruals"]').type(financialDataYearOne.otherAccrualsProvision);
cy.get('[id="2_accountsPaybleNew"]').type(financialDataYearOne.accountsPayable);
cy.get('[id="2_notesPayble"]').type(financialDataYearOne.vehiclePayableNewDemo);
cy.get('[id="2_accountsPaybleUsed"]').type(financialDataYearOne.vehiclePayableUsed);
cy.get('[id="2_wholeSale"]').type(financialDataYearOne.wholesaleSoldNotPaid);
cy.get('[id="2_shortTermDebt"]').type(financialDataYearOne.shortTermDebtHP);
cy.get('[id="2_loansFromOfficersRelatedCompanies"]').type(financialDataYearOne.loansFromOfficers);
cy.get('[id="2_bankOverDraft"]').type(financialDataYearOne.bankOverdraft);
cy.get('[id="2_taxLiabilities"]').type(financialDataYearOne.taxLiabilities);
cy.get('[id="2_otherCurrentLiabilities"]').type(financialDataYearOne.otherCurrentLiabilities);
//Total Non-current Liabilities
cy.get('[id="2_mortgageBankLoans"]').type(financialDataYearOne.mortgageBankLoans);
cy.get('[id="2_loansFromOfficers"]').type(financialDataYearOne. loansFromOfficersOrRelatedCompanies);
cy.get('[id="2_hirePurchase"]').type(financialDataYearOne.longTermDebtHP);
cy.get('[id="2_subordinatedLoansFromOfficers"]').type(financialDataYearOne.subordinatedLoans);
cy.get('[id="2_otherNonCurrentLiabilities"]').type(financialDataYearOne.otherNonCurrentLiabilities);
cy.get('[id="2_paidUpCapital"]').type(financialDataYearOne.paidUpCapital);
cy.get('[id="2_assetRevalAndReserve"]').type(financialDataYearOne.assetRevalReserve);
cy.get('[id="2_otherReserves"]').type(financialDataYearOne.otherReserves);
cy.get('[id="2_adjustments"]').type(financialDataYearOne.adjustments);
cy.get('[id="2_devidendsOrWithdrawals"]').type(financialDataYearOne.dividendsWithdrawals);
cy.get('[id="2_retainedEarnings"]').type(financialDataYearOne.retainedEarningsPreviousYear);
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
//Calculation Verification

// Function to verify financial values
const verifyFinancialValue = (xpath, expectedValue, description) => {
  cy.xpath(xpath) // Use the provided XPath
    .invoke('text') // Get the text content of the element
    .then((text) => {
      const actualValue = Number(text.replace(/,/g, '')); // Convert the text to a number
      expect(actualValue).to.eq(expectedValue); // Assert that they are equal
      cy.log(`The Actual value is ${actualValue}. The expected value is ${expectedValue}. (${description})`);
    });
};

// Verification of Sales and Rental Income
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[2]/td[2]', totalSalesAndRentalIncome, 'Sales and Rental Income');

// Verification of Gross Profit
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[5]/td[2]', GrossProfit, 'Gross Profit');

// Verification of Operating Expenses
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[6]/td[2]', operatingExpenses, 'Operating Expenses');

// Verification of Operating Profit Before Tax
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[15]/td[2]', OperatingProfitBeforeTax, 'Operating Profit Before Tax');

// Verification of Net Income (Profit)
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[17]/td[2]', NetIncomeProfit, 'Net Income (Profit)');

// Log Equation Values
cy.log(`Equation Values ${EBIT} = ${NetIncomeProfit} ${financialDataYearOne.floorplanInterest} ${financialDataYearOne.leasingHPCharges}`);

// Verification of EBIT
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[18]/td[2]', EBIT, 'EBIT');

// Verification of EBITDA
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[19]/td[2]', EBITDA, 'EBITDA');


// Verification of Net Profit After Tax
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[21]/td[2]', NetProfitAfterTax, 'Net Profit After Tax');

// Verification of Net Profit After Tax and Extraordinaries
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[23]/td[2]', NetProfitAfterTaxAndExtraordinaries, 'Net Profit After Tax and Extraordinaries');

// Verification of Retained Profits
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[26]/td[2]', RetainedProfits, 'Retained Profits');

// Verification of Total Current Assets
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[29]/td[2]', totalCurrentAssets, 'Total Current Assets');

// Verification of Total Fixed Assets
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[41]/td[2]', totalFixedAssets, 'Total Fixed Assets');

// Verification of Total Other Assets
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[47]/td[2]', totalOtherAssets, 'Total Other Assets');

// Log Total Assets
cy.log(`Total Assets: ${TotalAssets}`);

// Verification of Total Assets
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[55]/td[2]', TotalAssets, 'Total Assets');

// Verification of Total Current Liabilities
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[57]/td[2]', totalCurrentLiabilities, 'Total Current Liabilities');

// Verification of Total Non-Current Liabilities
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[69]/td[2]', totalNoncurrentLiabilities, 'Total Non-Current Liabilities');

// Verification of Total Liabilities
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[75]/td[2]', TotalLiabilities, 'Total Liabilities');

// Verification of Total Net Worth
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[76]/td[2]', TotalNetWorth, 'Total Net Worth');

// Verification of Profit/(Loss) After Taxes
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[83]/td[2]/div', NetProfitAfterTaxAndExtraordinaries, 'Profit/(Loss) After Taxes');

// Verification of Total Liabilities and Net Worth
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[84]/td[2]', TotalLiabilitiesAndNetWorth, 'Total Liabilities and Net Worth');

// Verification of BalanceChecker
verifyFinancialValue('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[85]/td[2]', BalanceChecker, 'BalanceChecker');

  cy.wait(2000)
  cy.get('#financial_statement_save').click();

});
});











