
import { financialDataYearOne, financialDataA , financialDataB , financialDataC , financialDataD  , financialDataE , financialDataF , financialDataG, financialDataH , financialDataI , financialDataJ , financialDataK , financialDataL, financialDataM , financialDataN , financialDataO , financialDataP, financialDataQ } from './FinancialDataMulti.js'; // Adjust the path based on your folder structure

const { waitUntilSymbol } = require("next/dist/server/web/spec-extension/fetch-event");
const { should } = require("chai");


describe('Testing of the SPreading Tool', function() {

    beforeEach(() => {
        cy.login();
        cy.wait(2000);
         cy.xpath('/html/body/main/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]/div').click();
         cy.xpath('/html/body/div[2]/div[3]/ul/li[3]').click();

      });

 
      it('Add Three Financials', () => {

        cy.wait(3000)
          //click on a reference number
        cy.get('[id="244"]').click();
        
        //Clicking the Add new financial button 
        cy.get('#new_financial_statement').as('AddNewFinancialButton');
        cy.get('@AddNewFinancialButton').click();
        
        //Clicking the plus button to add a financial statement 
        cy.get('#add_financial').as('plusToAddaStatement');
        cy.get('@plusToAddaStatement').click();
        
        //Financial Date selection
        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2020");
        cy.get('#annualized_no').click
        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
        
        // //The Warning M
        // cy.xpath('/html/body/div[1]/div/div/div[2]')
        //   .should('be.visible') // Ensure the warning message is visible
        //   .invoke('text') // Retrieve the text content of the element
        //   .then((text) => {
        //     expect(text).to.contain('A financial is already added for the selected year'); // Assert the text contains the expected message
        //   });
        
        
        
        //Financial Types
        cy.get('#statement_type').click();
        // cy.get('.MuiButtonBase-root[id="1"]').as('Audited');
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
const firstYearColumn="2_";
const secondYearColumn="3_";
const thirdYearColumn="4_";
//P&L 
//Total Sales & Rental Income
cy.get('[id="'+firstYearColumn+'salesAndIncome"]').type(financialDataG.salesRentalIncome);
cy.get('[id="'+firstYearColumn+'costOfGoodsSold"]').type(financialDataG.costOfGoodsSold);
//Gross Profit
cy.get('[id="'+firstYearColumn+'otherOperatingExpenses"]').type(financialDataG.otherOperatingExpenses);
cy.get('[id="'+firstYearColumn+'salariesAndWages"]').type(financialDataG.salariesWages);
cy.get('[id="'+firstYearColumn+'depreciation"]').type(financialDataG.depreciation);
cy.get('[id="'+firstYearColumn+'amortization"]').type(financialDataG.amortization);
cy.get('[id="'+firstYearColumn+'floorplanInterest"]').type(financialDataG.floorplanInterest);
cy.get('[id="'+firstYearColumn+'otherInterest"]').type(financialDataG.leasingHPCharges);
cy.get('[id="'+firstYearColumn+'directorsRenumeration"]').type(financialDataG.directorsRemuneration);
cy.get('[id="'+firstYearColumn+'rent"]').type(financialDataG.rent);
cy.get('[id="'+firstYearColumn+'otherIncome"]').type(financialDataG.otherIncomeFI);
cy.get('[id="'+firstYearColumn+'taxation"]').type(financialDataG.taxation);
cy.get('[id="'+firstYearColumn+'unusualItems"]').type(financialDataG.unusualItems);
cy.get('[id="'+firstYearColumn+'devidends"]').type(financialDataG.dividendsPaid);
cy.get('[id="'+firstYearColumn+'accumilatedProfits"]').type(financialDataG.accumulatedProfits);
//Balance Sheet
//Assets
//Total Current Assets
cy.get('[id="'+firstYearColumn+'cashAndMarketable"]').type(financialDataG.cashMarketableSec);
cy.get('[id="'+firstYearColumn+'financeCont"]').type(financialDataG.financeContVehRec);
cy.get('[id="'+firstYearColumn+'accountsRec"]').type(financialDataG.accountsRec);
cy.get('[id="'+firstYearColumn+'vehiclesRecievables"]').type(financialDataG.vehicleReceivables);
cy.get('[id="'+firstYearColumn+'inventNew"]').type(financialDataG.inventNewDemos);
cy.get('[id="'+firstYearColumn+'inventUsed"]').type(financialDataG.inventUsed);
cy.get('[id="'+firstYearColumn+'inventPartsAndAccess"]').type(financialDataG.inventPartsAccess);
cy.get('[id="'+firstYearColumn+'prepaidExpenses"]').type(financialDataG.prepaidExpenses);
cy.get('[id="'+firstYearColumn+'tax"]').type(financialDataG.taxGST);
cy.get('[id="'+firstYearColumn+'loansToRelatedParties"]').type(financialDataG.loansRelatedParties);
cy.get('[id="'+firstYearColumn+'otherCurrentReceivables"]').type(financialDataG.otherCurrentReceivables);
//Total Fixed Assets
cy.get('[id="'+firstYearColumn+'motorVehicles"]').type(financialDataG.motorVehicles);
cy.get('[id="'+firstYearColumn+'land"]').type(financialDataG.landBuildings);
cy.get('[id="'+firstYearColumn+'equipment"]').type(financialDataG.equipment);
cy.get('[id="'+firstYearColumn+'accumulatedDepriciation"]').type(financialDataG.accumulatedDepreciation);
cy.get('[id="'+firstYearColumn+'other"]').type(financialDataG.otherNonCurrentAssets);
//Total Other Assets
cy.get('[id="'+firstYearColumn+'goodWill"]').type(financialDataG.goodwill);
cy.get('[id="'+firstYearColumn+'investments"]').type(financialDataG.investments);
cy.get('[id="'+firstYearColumn+'fitb"]').type(financialDataG.fitb);
cy.get('[id="'+firstYearColumn+'dueFromAssoc"]').type(financialDataG.dueFromAssocCos);
cy.get('[id="'+firstYearColumn+'dueFromOfficers"]').type(financialDataG.dueFromOfficers);
cy.get('[id="'+firstYearColumn+'otherIntengibles"]').type(financialDataG.otherIntangibles);
cy.get('[id="'+firstYearColumn+'defferedTaxAsset"]').type(financialDataG.deferredTaxAsset);
//Total Assets
//Liabilities and Networth
//Total Current Liabilities
cy.get('[id="'+firstYearColumn+'staffAccruals"]').type(financialDataG.staffAccruals);
cy.get('[id="'+firstYearColumn+'otherAccruals"]').type(financialDataG.otherAccrualsProvision);
cy.get('[id="'+firstYearColumn+'accountsPaybleNew"]').type(financialDataG.accountsPayable);
cy.get('[id="'+firstYearColumn+'notesPayble"]').type(financialDataG.vehiclePayableNewDemo);
cy.get('[id="'+firstYearColumn+'accountsPaybleUsed"]').type(financialDataG.vehiclePayableUsed);
cy.get('[id="'+firstYearColumn+'wholeSale"]').type(financialDataG.wholesaleSoldNotPaid);
cy.get('[id="'+firstYearColumn+'shortTermDebt"]').type(financialDataG.shortTermDebtHP);
cy.get('[id="'+firstYearColumn+'loansFromOfficersRelatedCompanies"]').type(financialDataG.loansFromOfficers);
cy.get('[id="'+firstYearColumn+'bankOverDraft"]').type(financialDataG.bankOverdraft);
cy.get('[id="'+firstYearColumn+'taxLiabilities"]').type(financialDataG.taxLiabilities);
cy.get('[id="'+firstYearColumn+'otherCurrentLiabilities"]').type(financialDataG.otherCurrentLiabilities);
//Total Non-current Liabilities
cy.get('[id="'+firstYearColumn+'mortgageBankLoans"]').type(financialDataG.mortgageBankLoans);
cy.get('[id="'+firstYearColumn+'loansFromOfficers"]').type(financialDataG.loansFromOfficersOrRelatedCompanies);
cy.get('[id="'+firstYearColumn+'hirePurchase"]').type(financialDataG.longTermDebtHP);
cy.get('[id="'+firstYearColumn+'subordinatedLoansFromOfficers"]').type(financialDataG.subordinatedLoans);
cy.get('[id="'+firstYearColumn+'otherNonCurrentLiabilities"]').type(financialDataG.otherNonCurrentLiabilities);
cy.get('[id="'+firstYearColumn+'paidUpCapital"]').type(financialDataG.paidUpCapital);
cy.get('[id="'+firstYearColumn+'assetRevalAndReserve"]').type(financialDataG.assetRevalReserve);
cy.get('[id="'+firstYearColumn+'otherReserves"]').type(financialDataG.otherReserves);
cy.get('[id="'+firstYearColumn+'adjustments"]').type(financialDataG.adjustments);
cy.get('[id="'+firstYearColumn+'devidendsOrWithdrawals"]').type(financialDataG.dividendsWithdrawals);
cy.get('[id="'+firstYearColumn+'retainedEarnings"]').type(financialDataG.retainedEarningsPreviousYear);

// Handling balance correction
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    cy.log(number); // Log the number for debugging
    const balanceCorrector=financialDataG.landBuildings+number;
    cy.get('[id="'+firstYearColumn+'land"]').clear().type(balanceCorrector);
  });
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.wait(2000);



//Adding the second Year
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
cy.get('@Audited').click();

//selecting Classification 
cy.get('#classification_type').click();
cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
cy.get('.MuiButtonBase-root[id="2"]').as('External');

//click on the clssification type
cy.get('@Internal').click();

//Financial Date selection
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2021");
cy.get('#annualized_no').click
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();

// cy.wait(3000)

//Click on the Next button
cy.get('#next_financial_config').click();

//Click on the save button in financial Congiguration
cy.get('#save_manual_data_entry').click();


  cy.get('#financial_statement_save').click();
// P&L  
// Total Sales & Rental Income
cy.get('[id="'+secondYearColumn+'salesAndIncome"]').type(financialDataK.salesRentalIncome);
cy.get('[id="'+secondYearColumn+'costOfGoodsSold"]').type(financialDataK.costOfGoodsSold);
// Gross Profit
cy.get('[id="'+secondYearColumn+'otherOperatingExpenses"]').type(financialDataK.otherOperatingExpenses);
cy.get('[id="'+secondYearColumn+'salariesAndWages"]').type(financialDataK.salariesWages);
cy.get('[id="'+secondYearColumn+'depreciation"]').type(financialDataK.depreciation);
cy.get('[id="'+secondYearColumn+'amortization"]').type(financialDataK.amortization);
cy.get('[id="'+secondYearColumn+'floorplanInterest"]').type(financialDataK.floorplanInterest);
cy.get('[id="'+secondYearColumn+'otherInterest"]').type(financialDataK.leasingHPCharges);
cy.get('[id="'+secondYearColumn+'directorsRenumeration"]').type(financialDataK.directorsRemuneration);
cy.get('[id="'+secondYearColumn+'rent"]').type(financialDataK.rent);
cy.get('[id="'+secondYearColumn+'otherIncome"]').type(financialDataK.otherIncomeFI);
cy.get('[id="'+secondYearColumn+'taxation"]').type(financialDataK.taxation);
cy.get('[id="'+secondYearColumn+'unusualItems"]').type(financialDataK.unusualItems);
cy.get('[id="'+secondYearColumn+'devidends"]').type(financialDataK.dividendsPaid);
cy.get('[id="'+secondYearColumn+'accumilatedProfits"]').type(financialDataK.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="'+secondYearColumn+'cashAndMarketable"]').type(financialDataK.cashMarketableSec);
cy.get('[id="'+secondYearColumn+'financeCont"]').type(financialDataK.financeContVehRec);
cy.get('[id="'+secondYearColumn+'accountsRec"]').type(financialDataK.accountsRec);
cy.get('[id="'+secondYearColumn+'vehiclesRecievables"]').type(financialDataK.vehicleReceivables);
cy.get('[id="'+secondYearColumn+'inventNew"]').type(financialDataK.inventNewDemos);
cy.get('[id="'+secondYearColumn+'inventUsed"]').type(financialDataK.inventUsed);
cy.get('[id="'+secondYearColumn+'inventPartsAndAccess"]').type(financialDataK.inventPartsAccess);
cy.get('[id="'+secondYearColumn+'prepaidExpenses"]').type(financialDataK.prepaidExpenses);
cy.get('[id="'+secondYearColumn+'tax"]').type(financialDataK.taxGST);
cy.get('[id="'+secondYearColumn+'loansToRelatedParties"]').type(financialDataK.loansRelatedParties);
cy.get('[id="'+secondYearColumn+'otherCurrentReceivables"]').type(financialDataK.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="'+secondYearColumn+'motorVehicles"]').type(financialDataK.motorVehicles);
cy.get('[id="'+secondYearColumn+'land"]').type(financialDataK.landBuildings);
cy.get('[id="'+secondYearColumn+'equipment"]').type(financialDataK.equipment);
cy.get('[id="'+secondYearColumn+'accumulatedDepriciation"]').type(financialDataK.accumulatedDepreciation);
cy.get('[id="'+secondYearColumn+'other"]').type(financialDataK.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="'+secondYearColumn+'goodWill"]').type(financialDataK.goodwill);
cy.get('[id="'+secondYearColumn+'investments"]').type(financialDataK.investments);
cy.get('[id="'+secondYearColumn+'fitb"]').type(financialDataK.fitb);
cy.get('[id="'+secondYearColumn+'dueFromAssoc"]').type(financialDataK.dueFromAssocCos);
cy.get('[id="'+secondYearColumn+'dueFromOfficers"]').type(financialDataK.dueFromOfficers);
cy.get('[id="'+secondYearColumn+'otherIntengibles"]').type(financialDataK.otherIntangibles);
cy.get('[id="'+secondYearColumn+'defferedTaxAsset"]').type(financialDataK.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="'+secondYearColumn+'staffAccruals"]').type(financialDataK.staffAccruals);
cy.get('[id="'+secondYearColumn+'otherAccruals"]').type(financialDataK.otherAccrualsProvision);
cy.get('[id="'+secondYearColumn+'accountsPaybleNew"]').type(financialDataK.accountsPayable);
cy.get('[id="'+secondYearColumn+'notesPayble"]').type(financialDataK.vehiclePayableNewDemo);
cy.get('[id="'+secondYearColumn+'accountsPaybleUsed"]').type(financialDataK.vehiclePayableUsed);
cy.get('[id="'+secondYearColumn+'wholeSale"]').type(financialDataK.wholesaleSoldNotPaid);
cy.get('[id="'+secondYearColumn+'shortTermDebt"]').type(financialDataK.shortTermDebtHP);
cy.get('[id="'+secondYearColumn+'loansFromOfficersRelatedCompanies"]').type(financialDataK.loansFromOfficers);
cy.get('[id="'+secondYearColumn+'bankOverDraft"]').type(financialDataK.bankOverdraft);
cy.get('[id="'+secondYearColumn+'taxLiabilities"]').type(financialDataK.taxLiabilities);
cy.get('[id="'+secondYearColumn+'otherCurrentLiabilities"]').type(financialDataK.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="'+secondYearColumn+'mortgageBankLoans"]').type(financialDataK.mortgageBankLoans);
cy.get('[id="'+secondYearColumn+'loansFromOfficers"]').type(financialDataK.loansFromOfficersOrRelatedCompanies);
cy.get('[id="'+secondYearColumn+'hirePurchase"]').type(financialDataK.longTermDebtHP);
cy.get('[id="'+secondYearColumn+'subordinatedLoansFromOfficers"]').type(financialDataK.subordinatedLoans);
cy.get('[id="'+secondYearColumn+'otherNonCurrentLiabilities"]').type(financialDataK.otherNonCurrentLiabilities);
cy.get('[id="'+secondYearColumn+'paidUpCapital"]').type(financialDataK.paidUpCapital);
cy.get('[id="'+secondYearColumn+'assetRevalAndReserve"]').type(financialDataK.assetRevalReserve);
cy.get('[id="'+secondYearColumn+'otherReserves"]').type(financialDataK.otherReserves);
cy.get('[id="'+secondYearColumn+'adjustments"]').type(financialDataK.adjustments);
cy.get('[id="'+secondYearColumn+'devidendsOrWithdrawals"]').type(financialDataK.dividendsWithdrawals);
cy.get('[id="'+secondYearColumn+'retainedEarnings"]').type(financialDataK.retainedEarningsPreviousYear);

// Handling balance correction
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[3]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    cy.log(number); // Log the number for debugging
    const balanceCorrector=financialDataK.landBuildings+number;
    cy.get('[id="'+secondYearColumn+'land"]').clear().type(balanceCorrector);
  });
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.wait(2000);




//Adding the Third Year
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
cy.get('@Audited').click();

//selecting Classification 
cy.get('#classification_type').click();
cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
cy.get('.MuiButtonBase-root[id="2"]').as('External');

//click on the clssification type
cy.get('@Internal').click();

//Financial Date selection
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2022");
cy.get('#annualized_no').click
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();

// cy.wait(3000)

//Click on the Next button
cy.get('#next_financial_config').click();

//Click on the save button in financial Congiguration
cy.get('#save_manual_data_entry').click();


  cy.get('#financial_statement_save').click();

  // Verify the warning message text in the XPath
cy.xpath('/html/body/div/div/div/div[2]')
.should('be.visible') // Ensure the warning message is visible
.and('contain', 'Error saving profit and loss statement'); // Replace with the actual expected warning message text


// P&L  
// Total Sales & Rental Income
cy.get('[id="'+thirdYearColumn+'salesAndIncome"]').type(financialDataE.salesRentalIncome);
cy.get('[id="'+thirdYearColumn+'costOfGoodsSold"]').type(financialDataE.costOfGoodsSold);
// Gross Profit
cy.get('[id="'+thirdYearColumn+'otherOperatingExpenses"]').type(financialDataE.otherOperatingExpenses);
cy.get('[id="'+thirdYearColumn+'salariesAndWages"]').type(financialDataE.salariesWages);
cy.get('[id="'+thirdYearColumn+'depreciation"]').type(financialDataE.depreciation);
cy.get('[id="'+thirdYearColumn+'amortization"]').type(financialDataE.amortization);
cy.get('[id="'+thirdYearColumn+'floorplanInterest"]').type(financialDataE.floorplanInterest);
cy.get('[id="'+thirdYearColumn+'otherInterest"]').type(financialDataE.leasingHPCharges);
cy.get('[id="'+thirdYearColumn+'directorsRenumeration"]').type(financialDataE.directorsRemuneration);
cy.get('[id="'+thirdYearColumn+'rent"]').type(financialDataE.rent);
cy.get('[id="'+thirdYearColumn+'otherIncome"]').type(financialDataE.otherIncomeFI);
cy.get('[id="'+thirdYearColumn+'taxation"]').type(financialDataE.taxation);
cy.get('[id="'+thirdYearColumn+'unusualItems"]').type(financialDataE.unusualItems);
cy.get('[id="'+thirdYearColumn+'devidends"]').type(financialDataE.dividendsPaid);
cy.get('[id="'+thirdYearColumn+'accumilatedProfits"]').type(financialDataE.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="'+thirdYearColumn+'cashAndMarketable"]').type(financialDataE.cashMarketableSec);
cy.get('[id="'+thirdYearColumn+'financeCont"]').type(financialDataE.financeContVehRec);
cy.get('[id="'+thirdYearColumn+'accountsRec"]').type(financialDataE.accountsRec);
cy.get('[id="'+thirdYearColumn+'vehiclesRecievables"]').type(financialDataE.vehicleReceivables);
cy.get('[id="'+thirdYearColumn+'inventNew"]').type(financialDataE.inventNewDemos);
cy.get('[id="'+thirdYearColumn+'inventUsed"]').type(financialDataE.inventUsed);
cy.get('[id="'+thirdYearColumn+'inventPartsAndAccess"]').type(financialDataE.inventPartsAccess);
cy.get('[id="'+thirdYearColumn+'prepaidExpenses"]').type(financialDataE.prepaidExpenses);
cy.get('[id="'+thirdYearColumn+'tax"]').type(financialDataE.taxGST);
cy.get('[id="'+thirdYearColumn+'loansToRelatedParties"]').type(financialDataE.loansRelatedParties);
cy.get('[id="'+thirdYearColumn+'otherCurrentReceivables"]').type(financialDataE.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="'+thirdYearColumn+'motorVehicles"]').type(financialDataE.motorVehicles);
cy.get('[id="'+thirdYearColumn+'land"]').type(financialDataE.landBuildings);
cy.get('[id="'+thirdYearColumn+'equipment"]').type(financialDataE.equipment);
cy.get('[id="'+thirdYearColumn+'accumulatedDepriciation"]').type(financialDataE.accumulatedDepreciation);
cy.get('[id="'+thirdYearColumn+'other"]').type(financialDataE.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="'+thirdYearColumn+'goodWill"]').type(financialDataE.goodwill);
cy.get('[id="'+thirdYearColumn+'investments"]').type(financialDataE.investments);
cy.get('[id="'+thirdYearColumn+'fitb"]').type(financialDataE.fitb);
cy.get('[id="'+thirdYearColumn+'dueFromAssoc"]').type(financialDataE.dueFromAssocCos);
cy.get('[id="'+thirdYearColumn+'dueFromOfficers"]').type(financialDataE.dueFromOfficers);
cy.get('[id="'+thirdYearColumn+'otherIntengibles"]').type(financialDataE.otherIntangibles);
cy.get('[id="'+thirdYearColumn+'defferedTaxAsset"]').type(financialDataE.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="'+thirdYearColumn+'staffAccruals"]').type(financialDataE.staffAccruals);
cy.get('[id="'+thirdYearColumn+'otherAccruals"]').type(financialDataE.otherAccrualsProvision);
cy.get('[id="'+thirdYearColumn+'accountsPaybleNew"]').type(financialDataE.accountsPayable);
cy.get('[id="'+thirdYearColumn+'notesPayble"]').type(financialDataE.vehiclePayableNewDemo);
cy.get('[id="'+thirdYearColumn+'accountsPaybleUsed"]').type(financialDataE.vehiclePayableUsed);
cy.get('[id="'+thirdYearColumn+'wholeSale"]').type(financialDataE.wholesaleSoldNotPaid);
cy.get('[id="'+thirdYearColumn+'shortTermDebt"]').type(financialDataE.shortTermDebtHP);
cy.get('[id="'+thirdYearColumn+'loansFromOfficersRelatedCompanies"]').type(financialDataE.loansFromOfficers);
cy.get('[id="'+thirdYearColumn+'bankOverDraft"]').type(financialDataE.bankOverdraft);
cy.get('[id="'+thirdYearColumn+'taxLiabilities"]').type(financialDataE.taxLiabilities);
cy.get('[id="'+thirdYearColumn+'otherCurrentLiabilities"]').type(financialDataE.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="'+thirdYearColumn+'mortgageBankLoans"]').type(financialDataE.mortgageBankLoans);
cy.get('[id="'+thirdYearColumn+'loansFromOfficers"]').type(financialDataE.loansFromOfficersOrRelatedCompanies);
cy.get('[id="'+thirdYearColumn+'hirePurchase"]').type(financialDataE.longTermDebtHP);
cy.get('[id="'+thirdYearColumn+'subordinatedLoansFromOfficers"]').type(financialDataE.subordinatedLoans);
cy.get('[id="'+thirdYearColumn+'otherNonCurrentLiabilities"]').type(financialDataE.otherNonCurrentLiabilities);
cy.get('[id="'+thirdYearColumn+'paidUpCapital"]').type(financialDataE.paidUpCapital);
cy.get('[id="'+thirdYearColumn+'assetRevalAndReserve"]').type(financialDataE.assetRevalReserve);
cy.get('[id="'+thirdYearColumn+'otherReserves"]').type(financialDataE.otherReserves);
cy.get('[id="'+thirdYearColumn+'adjustments"]').type(financialDataE.adjustments);
cy.get('[id="'+thirdYearColumn+'devidendsOrWithdrawals"]').type(financialDataE.dividendsWithdrawals);
cy.get('[id="'+thirdYearColumn+'retainedEarnings"]').type(financialDataE.retainedEarningsPreviousYear);

// Handling balance correction
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[4]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    const balanceCorrector = financialDataE.landBuildings + number;
    cy.get('[id="'+thirdYearColumn+'land"]').clear().type(balanceCorrector);
  });
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.wait(2000);




// //Adding the forth Year
// //Clicking the plus button to add a financial statement 
// cy.get('#add_financial').as('plusToAddaStatement');
// cy.get('@plusToAddaStatement').click();

// //Financial Types
// cy.get('#statement_type').click();
// cy.get('.MuiButtonBase-root[id="1"]').as('Audited');
// cy.get('.MuiButtonBase-root[id="2"]').as('Unadited');
// cy.get('.MuiButtonBase-root[id="3"]').as('Projected');
// cy.get('.MuiButtonBase-root[id="4"]').as('Management');
// cy.get('.MuiButtonBase-root[id="5"]').as('Draft');
// cy.get('.MuiButtonBase-root[id="6"]').as('Other');

// //click on the Financial Type
// cy.get('@Audited').click();

// //selecting Classification 
// cy.get('#classification_type').click();
// cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
// cy.get('.MuiButtonBase-root[id="2"]').as('External');

// //click on the clssification type
// cy.get('@Internal').click();

// //Financial Date selection
// cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2023");
// cy.get('#annualized_no').click
// cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
// cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();

// // cy.wait(3000)

// //Click on the Next button
// cy.get('#next_financial_config').click();

// //Click on the save button in financial Congiguration
// cy.get('#save_manual_data_entry').click();


//   cy.get('#financial_statement_save').click();
// // P&L
// // Total Sales & Rental Income
// cy.get('[id="5_salesAndIncome"]').type(financialDataC.salesRentalIncome);
// cy.get('[id="5_costOfGoodsSold"]').type(financialDataC.costOfGoodsSold);
// // Gross Profit
// cy.get('[id="5_otherOperatingExpenses"]').type(financialDataC.otherOperatingExpenses);
// cy.get('[id="5_salariesAndWages"]').type(financialDataC.salariesWages);
// cy.get('[id="5_depreciation"]').type(financialDataC.depreciation);
// cy.get('[id="5_amortization"]').type(financialDataC.amortization);
// cy.get('[id="5_floorplanInterest"]').type(financialDataC.floorplanInterest);
// cy.get('[id="5_otherInterest"]').type(financialDataC.leasingHPCharges);
// cy.get('[id="5_directorsRenumeration"]').type(financialDataC.directorsRemuneration);
// cy.get('[id="5_rent"]').type(financialDataC.rent);
// cy.get('[id="5_otherIncome"]').type(financialDataC.otherIncomeFI);
// cy.get('[id="5_taxation"]').type(financialDataC.taxation);
// cy.get('[id="5_unusualItems"]').type(financialDataC.unusualItems);
// cy.get('[id="5_devidends"]').type(financialDataC.dividendsPaid);
// cy.get('[id="5_accumilatedProfits"]').type(financialDataC.accumulatedProfits);

// // Balance Sheet
// // Assets
// // Total Current Assets
// cy.get('[id="5_cashAndMarketable"]').type(financialDataC.cashMarketableSec);
// cy.get('[id="5_financeCont"]').type(financialDataC.financeContVehRec);
// cy.get('[id="5_accountsRec"]').type(financialDataC.accountsRec);
// cy.get('[id="5_vehiclesRecievables"]').type(financialDataC.vehicleReceivables);
// cy.get('[id="5_inventNew"]').type(financialDataC.inventNewDemos);
// cy.get('[id="5_inventUsed"]').type(financialDataC.inventUsed);
// cy.get('[id="5_inventPartsAndAccess"]').type(financialDataC.inventPartsAccess);
// cy.get('[id="5_prepaidExpenses"]').type(financialDataC.prepaidExpenses);
// cy.get('[id="5_tax"]').type(financialDataC.taxGST);
// cy.get('[id="5_loansToRelatedParties"]').type(financialDataC.loansRelatedParties);
// cy.get('[id="5_otherCurrentReceivables"]').type(financialDataC.otherCurrentReceivables);

// // Total Fixed Assets
// cy.get('[id="5_motorVehicles"]').type(financialDataC.motorVehicles);
// cy.get('[id="5_land"]').type(financialDataC.landBuildings);
// cy.get('[id="5_equipment"]').type(financialDataC.equipment);
// cy.get('[id="5_accumulatedDepriciation"]').type(financialDataC.accumulatedDepreciation);
// cy.get('[id="5_other"]').type(financialDataC.otherNonCurrentAssets);

// // Total Other Assets
// cy.get('[id="5_goodWill"]').type(financialDataC.goodwill);
// cy.get('[id="5_investments"]').type(financialDataC.investments);
// cy.get('[id="5_fitb"]').type(financialDataC.fitb);
// cy.get('[id="5_dueFromAssoc"]').type(financialDataC.dueFromAssocCos);
// cy.get('[id="5_dueFromOfficers"]').type(financialDataC.dueFromOfficers);
// cy.get('[id="5_otherIntengibles"]').type(financialDataC.otherIntangibles);
// cy.get('[id="5_defferedTaxAsset"]').type(financialDataC.deferredTaxAsset);

// // Liabilities and Networth
// // Total Current Liabilities
// cy.get('[id="5_staffAccruals"]').type(financialDataC.staffAccruals);
// cy.get('[id="5_otherAccruals"]').type(financialDataC.otherAccrualsProvision);
// cy.get('[id="5_accountsPaybleNew"]').type(financialDataC.accountsPayable);
// cy.get('[id="5_notesPayble"]').type(financialDataC.vehiclePayableNewDemo);
// cy.get('[id="5_accountsPaybleUsed"]').type(financialDataC.vehiclePayableUsed);
// cy.get('[id="5_wholeSale"]').type(financialDataC.wholesaleSoldNotPaid);
// cy.get('[id="5_shortTermDebt"]').type(financialDataC.shortTermDebtHP);
// cy.get('[id="5_loansFromOfficersRelatedCompanies"]').type(financialDataC.loansFromOfficers);
// cy.get('[id="5_bankOverDraft"]').type(financialDataC.bankOverdraft);
// cy.get('[id="5_taxLiabilities"]').type(financialDataC.taxLiabilities);
// cy.get('[id="5_otherCurrentLiabilities"]').type(financialDataC.otherCurrentLiabilities);

// // Total Non-current Liabilities
// cy.get('[id="5_mortgageBankLoans"]').type(financialDataC.mortgageBankLoans);
// cy.get('[id="5_loansFromOfficers"]').type(financialDataC.loansFromOfficersOrRelatedCompanies);
// cy.get('[id="5_hirePurchase"]').type(financialDataC.longTermDebtHP);
// cy.get('[id="5_subordinatedLoansFromOfficers"]').type(financialDataC.subordinatedLoans);
// cy.get('[id="5_otherNonCurrentLiabilities"]').type(financialDataC.otherNonCurrentLiabilities);
// cy.get('[id="5_paidUpCapital"]').type(financialDataC.paidUpCapital);
// cy.get('[id="5_assetRevalAndReserve"]').type(financialDataC.assetRevalReserve);
// cy.get('[id="5_otherReserves"]').type(financialDataC.otherReserves);
// cy.get('[id="5_adjustments"]').type(financialDataC.adjustments);
// cy.get('[id="5_devidendsOrWithdrawals"]').type(financialDataC.dividendsWithdrawals);
// cy.get('[id="5_retainedEarnings"]').type(financialDataC.retainedEarningsPreviousYear);

// // Click and wait
// cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
// cy.wait(2000);





cy.get('#financial_statement_save').click();
cy.wait(3000)

});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
it('Add Three Financials B', () => {

    cy.wait(3000)
      //click on a reference number
    cy.get('[id="234"]').click();
    
    //Clicking the Add new financial button 
    cy.get('#new_financial_statement').as('AddNewFinancialButton');
    cy.get('@AddNewFinancialButton').click();
    
    //Clicking the plus button to add a financial statement 
    cy.get('#add_financial').as('plusToAddaStatement');
    cy.get('@plusToAddaStatement').click();
    
    //Financial Date selection
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2020");
    cy.get('#annualized_no').click
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    
    // //The Warning M
    // cy.xpath('/html/body/div[1]/div/div/div[2]')
    //   .should('be.visible') // Ensure the warning message is visible
    //   .invoke('text') // Retrieve the text content of the element
    //   .then((text) => {
    //     expect(text).to.contain('A financial is already added for the selected year'); // Assert the text contains the expected message
    //   });
    
    
    
    //Financial Types
    cy.get('#statement_type').click();
    cy.get('.MuiButtonBase-root[id="1"]').as('Audited');
    cy.get('.MuiButtonBase-root[id="2"]').as('Unadited');
    cy.get('.MuiButtonBase-root[id="3"]').as('Projected');
    cy.get('.MuiButtonBase-root[id="4"]').as('Management');
    cy.get('.MuiButtonBase-root[id="5"]').as('Draft');
    cy.get('.MuiButtonBase-root[id="6"]').as('Other');
    
    //click on the Financial Type
    cy.get('@Audited').click();
    
    //selecting Classification 
    cy.get('#classification_type').click();
    cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
    cy.get('.MuiButtonBase-root[id="2"]').as('External');
    
    //click on the clssification type
    cy.get('@Internal').click();
    
    
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
    
    // P&L
// Total Sales & Rental Income
cy.get('[id="2_salesAndIncome"]').type(financialDataQ.salesRentalIncome);
cy.get('[id="2_costOfGoodsSold"]').type(financialDataQ.costOfGoodsSold);
// Gross Profit
cy.get('[id="2_otherOperatingExpenses"]').type(financialDataQ.otherOperatingExpenses);
cy.get('[id="2_salariesAndWages"]').type(financialDataQ.salariesWages);
cy.get('[id="2_depreciation"]').type(financialDataQ.depreciation);
cy.get('[id="2_amortization"]').type(financialDataQ.amortization);
cy.get('[id="2_floorplanInterest"]').type(financialDataQ.floorplanInterest);
cy.get('[id="2_otherInterest"]').type(financialDataQ.leasingHPCharges);
cy.get('[id="2_directorsRenumeration"]').type(financialDataQ.directorsRemuneration);
cy.get('[id="2_rent"]').type(financialDataQ.rent);
cy.get('[id="2_otherIncome"]').type(financialDataQ.otherIncomeFI);
cy.get('[id="2_taxation"]').type(financialDataQ.taxation);
cy.get('[id="2_unusualItems"]').type(financialDataQ.unusualItems);
cy.get('[id="2_devidends"]').type(financialDataQ.dividendsPaid);
cy.get('[id="2_accumilatedProfits"]').type(financialDataQ.accumulatedProfits);
// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="2_cashAndMarketable"]').type(financialDataQ.cashMarketableSec);
cy.get('[id="2_financeCont"]').type(financialDataQ.financeContVehRec);
cy.get('[id="2_accountsRec"]').type(financialDataQ.accountsRec);
cy.get('[id="2_vehiclesRecievables"]').type(financialDataQ.vehicleReceivables);
cy.get('[id="2_inventNew"]').type(financialDataQ.inventNewDemos);
cy.get('[id="2_inventUsed"]').type(financialDataQ.inventUsed);
cy.get('[id="2_inventPartsAndAccess"]').type(financialDataQ.inventPartsAccess);
cy.get('[id="2_prepaidExpenses"]').type(financialDataQ.prepaidExpenses);
cy.get('[id="2_tax"]').type(financialDataQ.taxGST);
cy.get('[id="2_loansToRelatedParties"]').type(financialDataQ.loansRelatedParties);
cy.get('[id="2_otherCurrentReceivables"]').type(financialDataQ.otherCurrentReceivables);
// Total Fixed Assets
cy.get('[id="2_motorVehicles"]').type(financialDataQ.motorVehicles);
cy.get('[id="2_land"]').type(financialDataQ.landBuildings);
cy.get('[id="2_equipment"]').type(financialDataQ.equipment);
cy.get('[id="2_accumulatedDepriciation"]').type(financialDataQ.accumulatedDepreciation);
cy.get('[id="2_other"]').type(financialDataQ.otherNonCurrentAssets);
// Total Other Assets
cy.get('[id="2_goodWill"]').type(financialDataQ.goodwill);
cy.get('[id="2_investments"]').type(financialDataQ.investments);
cy.get('[id="2_fitb"]').type(financialDataQ.fitb);
cy.get('[id="2_dueFromAssoc"]').type(financialDataQ.dueFromAssocCos);
cy.get('[id="2_dueFromOfficers"]').type(financialDataQ.dueFromOfficers);
cy.get('[id="2_otherIntengibles"]').type(financialDataQ.otherIntangibles);
cy.get('[id="2_defferedTaxAsset"]').type(financialDataQ.deferredTaxAsset);
// Total Assets
// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="2_staffAccruals"]').type(financialDataQ.staffAccruals);
cy.get('[id="2_otherAccruals"]').type(financialDataQ.otherAccrualsProvision);
cy.get('[id="2_accountsPaybleNew"]').type(financialDataQ.accountsPayable);
cy.get('[id="2_notesPayble"]').type(financialDataQ.vehiclePayableNewDemo);
cy.get('[id="2_accountsPaybleUsed"]').type(financialDataQ.vehiclePayableUsed);
cy.get('[id="2_wholeSale"]').type(financialDataQ.wholesaleSoldNotPaid);
cy.get('[id="2_shortTermDebt"]').type(financialDataQ.shortTermDebtHP);
cy.get('[id="2_loansFromOfficersRelatedCompanies"]').type(financialDataQ.loansFromOfficers);
cy.get('[id="2_bankOverDraft"]').type(financialDataQ.bankOverdraft);
cy.get('[id="2_taxLiabilities"]').type(financialDataQ.taxLiabilities);
cy.get('[id="2_otherCurrentLiabilities"]').type(financialDataQ.otherCurrentLiabilities);
// Total Non-current Liabilities
cy.get('[id="2_mortgageBankLoans"]').type(financialDataQ.mortgageBankLoans);
cy.get('[id="2_loansFromOfficers"]').type(financialDataQ.loansFromOfficersOrRelatedCompanies);
cy.get('[id="2_hirePurchase"]').type(financialDataQ.longTermDebtHP);
cy.get('[id="2_subordinatedLoansFromOfficers"]').type(financialDataQ.subordinatedLoans);
cy.get('[id="2_otherNonCurrentLiabilities"]').type(financialDataQ.otherNonCurrentLiabilities);
cy.get('[id="2_paidUpCapital"]').type(financialDataQ.paidUpCapital);
cy.get('[id="2_assetRevalAndReserve"]').type(financialDataQ.assetRevalReserve);
cy.get('[id="2_otherReserves"]').type(financialDataQ.otherReserves);
cy.get('[id="2_adjustments"]').type(financialDataQ.adjustments);
cy.get('[id="2_devidendsOrWithdrawals"]').type(financialDataQ.dividendsWithdrawals);
cy.get('[id="2_retainedEarnings"]').type(financialDataQ.retainedEarningsPreviousYear);
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[2]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    const balanceCorrector=financialDataQ.landBuildings+number
    cy.get('[id="2_land"]').clear().type(balanceCorrector);
  });
  cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
  cy.wait(2000)

    
    
    
    //Adding the second Year
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
    cy.get('@Audited').click();
    
    //selecting Classification 
    cy.get('#classification_type').click();
    cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
    cy.get('.MuiButtonBase-root[id="2"]').as('External');
    
    //click on the clssification type
    cy.get('@Internal').click();
    
    //Financial Date selection
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2021");
    cy.get('#annualized_no').click
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    
    // cy.wait(3000)
    
    //Click on the Next button
    cy.get('#next_financial_config').click();
    
    //Click on the save button in financial Congiguration
    cy.get('#save_manual_data_entry').click();
    
    
      cy.get('#financial_statement_save').click();
    
    // P&L 
// Total Sales & Rental Income
cy.get('[id="3_salesAndIncome"]').type(financialDataK.salesRentalIncome);
cy.get('[id="3_costOfGoodsSold"]').type(financialDataK.costOfGoodsSold);
// Gross Profit
cy.get('[id="3_otherOperatingExpenses"]').type(financialDataK.otherOperatingExpenses);
cy.get('[id="3_salariesAndWages"]').type(financialDataK.salariesWages);
cy.get('[id="3_depreciation"]').type(financialDataK.depreciation);
cy.get('[id="3_amortization"]').type(financialDataK.amortization);
cy.get('[id="3_floorplanInterest"]').type(financialDataK.floorplanInterest);
cy.get('[id="3_otherInterest"]').type(financialDataK.leasingHPCharges);
cy.get('[id="3_directorsRenumeration"]').type(financialDataK.directorsRemuneration);
cy.get('[id="3_rent"]').type(financialDataK.rent);
cy.get('[id="3_otherIncome"]').type(financialDataK.otherIncomeFI);
cy.get('[id="3_taxation"]').type(financialDataK.taxation);
cy.get('[id="3_unusualItems"]').type(financialDataK.unusualItems);
cy.get('[id="3_devidends"]').type(financialDataK.dividendsPaid);
cy.get('[id="3_accumilatedProfits"]').type(financialDataK.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="3_cashAndMarketable"]').type(financialDataK.cashMarketableSec);
cy.get('[id="3_financeCont"]').type(financialDataK.financeContVehRec);
cy.get('[id="3_accountsRec"]').type(financialDataK.accountsRec);
cy.get('[id="3_vehiclesRecievables"]').type(financialDataK.vehicleReceivables);
cy.get('[id="3_inventNew"]').type(financialDataK.inventNewDemos);
cy.get('[id="3_inventUsed"]').type(financialDataK.inventUsed);
cy.get('[id="3_inventPartsAndAccess"]').type(financialDataK.inventPartsAccess);
cy.get('[id="3_prepaidExpenses"]').type(financialDataK.prepaidExpenses);
cy.get('[id="3_tax"]').type(financialDataK.taxGST);
cy.get('[id="3_loansToRelatedParties"]').type(financialDataK.loansRelatedParties);
cy.get('[id="3_otherCurrentReceivables"]').type(financialDataK.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="3_motorVehicles"]').type(financialDataK.motorVehicles);
cy.get('[id="3_land"]').type(financialDataK.landBuildings);
cy.get('[id="3_equipment"]').type(financialDataK.equipment);
cy.get('[id="3_accumulatedDepriciation"]').type(financialDataK.accumulatedDepreciation);
cy.get('[id="3_other"]').type(financialDataK.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="3_goodWill"]').type(financialDataK.goodwill);
cy.get('[id="3_investments"]').type(financialDataK.investments);
cy.get('[id="3_fitb"]').type(financialDataK.fitb);
cy.get('[id="3_dueFromAssoc"]').type(financialDataK.dueFromAssocCos);
cy.get('[id="3_dueFromOfficers"]').type(financialDataK.dueFromOfficers);
cy.get('[id="3_otherIntengibles"]').type(financialDataK.otherIntangibles);
cy.get('[id="3_defferedTaxAsset"]').type(financialDataK.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="3_staffAccruals"]').type(financialDataK.staffAccruals);
cy.get('[id="3_otherAccruals"]').type(financialDataK.otherAccrualsProvision);
cy.get('[id="3_accountsPaybleNew"]').type(financialDataK.accountsPayable);
cy.get('[id="3_notesPayble"]').type(financialDataK.vehiclePayableNewDemo);
cy.get('[id="3_accountsPaybleUsed"]').type(financialDataK.vehiclePayableUsed);
cy.get('[id="3_wholeSale"]').type(financialDataK.wholesaleSoldNotPaid);
cy.get('[id="3_shortTermDebt"]').type(financialDataK.shortTermDebtHP);
cy.get('[id="3_loansFromOfficersRelatedCompanies"]').type(financialDataK.loansFromOfficers);
cy.get('[id="3_bankOverDraft"]').type(financialDataK.bankOverdraft);
cy.get('[id="3_taxLiabilities"]').type(financialDataK.taxLiabilities);
cy.get('[id="3_otherCurrentLiabilities"]').type(financialDataK.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="3_mortgageBankLoans"]').type(financialDataK.mortgageBankLoans);
cy.get('[id="3_loansFromOfficers"]').type(financialDataK.loansFromOfficersOrRelatedCompanies);
cy.get('[id="3_hirePurchase"]').type(financialDataK.longTermDebtHP);
cy.get('[id="3_subordinatedLoansFromOfficers"]').type(financialDataK.subordinatedLoans);
cy.get('[id="3_otherNonCurrentLiabilities"]').type(financialDataK.otherNonCurrentLiabilities);
cy.get('[id="3_paidUpCapital"]').type(financialDataK.paidUpCapital);
cy.get('[id="3_assetRevalAndReserve"]').type(financialDataK.assetRevalReserve);
cy.get('[id="3_otherReserves"]').type(financialDataK.otherReserves);
cy.get('[id="3_adjustments"]').type(financialDataK.adjustments);
cy.get('[id="3_devidendsOrWithdrawals"]').type(financialDataK.dividendsWithdrawals);
cy.get('[id="3_retainedEarnings"]').type(financialDataK.retainedEarningsPreviousYear);
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[3]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    const balanceCorrector=financialDataK.landBuildings+number
    cy.get('[id="3_land"]').clear().type(balanceCorrector);
  });
  cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
  cy.wait(2000)

    
    
    
    
    //Adding the Third Year
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
    cy.get('@Audited').click();
    
    //selecting Classification 
    cy.get('#classification_type').click();
    cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
    cy.get('.MuiButtonBase-root[id="2"]').as('External');
    
    //click on the clssification type
    cy.get('@Internal').click();
    
    //Financial Date selection
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2022");
    cy.get('#annualized_no').click
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    
    // cy.wait(3000)
    
    //Click on the Next button
    cy.get('#next_financial_config').click();
    
    //Click on the save button in financial Congiguration
    cy.get('#save_manual_data_entry').click();
    
    
      cy.get('#financial_statement_save').click();
    
      // Verify the warning message text in the XPath
    cy.xpath('/html/body/div/div/div/div[2]')
    .should('be.visible') // Ensure the warning message is visible
    .and('contain', 'Error saving profit and loss statement'); // Replace with the actual expected warning message text
    
    
    // P&L
// Total Sales & Rental Income
cy.get('[id="4_salesAndIncome"]').type(financialDataG.salesRentalIncome);
cy.get('[id="4_costOfGoodsSold"]').type(financialDataG.costOfGoodsSold);
// Gross Profit
cy.get('[id="4_otherOperatingExpenses"]').type(financialDataG.otherOperatingExpenses);
cy.get('[id="4_salariesAndWages"]').type(financialDataG.salariesWages);
cy.get('[id="4_depreciation"]').type(financialDataG.depreciation);
cy.get('[id="4_amortization"]').type(financialDataG.amortization);
cy.get('[id="4_floorplanInterest"]').type(financialDataG.floorplanInterest);
cy.get('[id="4_otherInterest"]').type(financialDataG.leasingHPCharges);
cy.get('[id="4_directorsRenumeration"]').type(financialDataG.directorsRemuneration);
cy.get('[id="4_rent"]').type(financialDataG.rent);
cy.get('[id="4_otherIncome"]').type(financialDataG.otherIncomeFI);
cy.get('[id="4_taxation"]').type(financialDataG.taxation);
cy.get('[id="4_unusualItems"]').type(financialDataG.unusualItems);
cy.get('[id="4_devidends"]').type(financialDataG.dividendsPaid);
cy.get('[id="4_accumilatedProfits"]').type(financialDataG.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="4_cashAndMarketable"]').type(financialDataG.cashMarketableSec);
cy.get('[id="4_financeCont"]').type(financialDataG.financeContVehRec);
cy.get('[id="4_accountsRec"]').type(financialDataG.accountsRec);
cy.get('[id="4_vehiclesRecievables"]').type(financialDataG.vehicleReceivables);
cy.get('[id="4_inventNew"]').type(financialDataG.inventNewDemos);
cy.get('[id="4_inventUsed"]').type(financialDataG.inventUsed);
cy.get('[id="4_inventPartsAndAccess"]').type(financialDataG.inventPartsAccess);
cy.get('[id="4_prepaidExpenses"]').type(financialDataG.prepaidExpenses);
cy.get('[id="4_tax"]').type(financialDataG.taxGST);
cy.get('[id="4_loansToRelatedParties"]').type(financialDataG.loansRelatedParties);
cy.get('[id="4_otherCurrentReceivables"]').type(financialDataG.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="4_motorVehicles"]').type(financialDataG.motorVehicles);
cy.get('[id="4_land"]').type(financialDataG.landBuildings);
cy.get('[id="4_equipment"]').type(financialDataG.equipment);
cy.get('[id="4_accumulatedDepriciation"]').type(financialDataG.accumulatedDepreciation);
cy.get('[id="4_other"]').type(financialDataG.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="4_goodWill"]').type(financialDataG.goodwill);
cy.get('[id="4_investments"]').type(financialDataG.investments);
cy.get('[id="4_fitb"]').type(financialDataG.fitb);
cy.get('[id="4_dueFromAssoc"]').type(financialDataG.dueFromAssocCos);
cy.get('[id="4_dueFromOfficers"]').type(financialDataG.dueFromOfficers);
cy.get('[id="4_otherIntengibles"]').type(financialDataG.otherIntangibles);
cy.get('[id="4_defferedTaxAsset"]').type(financialDataG.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="4_staffAccruals"]').type(financialDataG.staffAccruals);
cy.get('[id="4_otherAccruals"]').type(financialDataG.otherAccrualsProvision);
cy.get('[id="4_accountsPaybleNew"]').type(financialDataG.accountsPayable);
cy.get('[id="4_notesPayble"]').type(financialDataG.vehiclePayableNewDemo);
cy.get('[id="4_accountsPaybleUsed"]').type(financialDataG.vehiclePayableUsed);
cy.get('[id="4_wholeSale"]').type(financialDataG.wholesaleSoldNotPaid);
cy.get('[id="4_shortTermDebt"]').type(financialDataG.shortTermDebtHP);
cy.get('[id="4_loansFromOfficersRelatedCompanies"]').type(financialDataG.loansFromOfficers);
cy.get('[id="4_bankOverDraft"]').type(financialDataG.bankOverdraft);
cy.get('[id="4_taxLiabilities"]').type(financialDataG.taxLiabilities);
cy.get('[id="4_otherCurrentLiabilities"]').type(financialDataG.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="4_mortgageBankLoans"]').type(financialDataG.mortgageBankLoans);
cy.get('[id="4_loansFromOfficers"]').type(financialDataG.loansFromOfficersOrRelatedCompanies);
cy.get('[id="4_hirePurchase"]').type(financialDataG.longTermDebtHP);
cy.get('[id="4_subordinatedLoansFromOfficers"]').type(financialDataG.subordinatedLoans);
cy.get('[id="4_otherNonCurrentLiabilities"]').type(financialDataG.otherNonCurrentLiabilities);
cy.get('[id="4_paidUpCapital"]').type(financialDataG.paidUpCapital);
cy.get('[id="4_assetRevalAndReserve"]').type(financialDataG.assetRevalReserve);
cy.get('[id="4_otherReserves"]').type(financialDataG.otherReserves);
cy.get('[id="4_adjustments"]').type(financialDataG.adjustments);
cy.get('[id="4_devidendsOrWithdrawals"]').type(financialDataG.dividendsWithdrawals);
cy.get('[id="4_retainedEarnings"]').type(financialDataG.retainedEarningsPreviousYear);
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[4]/table/tbody/tr[85]/td[2]')
  .invoke('text') // Get the text content of the element
  .then((text) => {
    const number = parseFloat(text.replace(/,/g, '')); // Convert text to number
    const balanceCorrector=financialDataG.landBuildings+number
    cy.get('[id="4_land"]').clear().type(balanceCorrector);
  });
  cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
  cy.wait(2000)

    
    
//     //Adding the forth Year
//     //Clicking the plus button to add a financial statement 
//     cy.get('#add_financial').as('plusToAddaStatement');
//     cy.get('@plusToAddaStatement').click();
    
//     //Financial Types
//     cy.get('#statement_type').click();
//     cy.get('.MuiButtonBase-root[id="1"]').as('Audited');
//     cy.get('.MuiButtonBase-root[id="2"]').as('Unadited');
//     cy.get('.MuiButtonBase-root[id="3"]').as('Projected');
//     cy.get('.MuiButtonBase-root[id="4"]').as('Management');
//     cy.get('.MuiButtonBase-root[id="5"]').as('Draft');
//     cy.get('.MuiButtonBase-root[id="6"]').as('Other');
    
//     //click on the Financial Type
//     cy.get('@Audited').click();
    
//     //selecting Classification 
//     cy.get('#classification_type').click();
//     cy.get('.MuiButtonBase-root[id="1"]').as('Internal');
//     cy.get('.MuiButtonBase-root[id="2"]').as('External');
    
//     //click on the clssification type
//     cy.get('@Internal').click();
    
//     //Financial Date selection
//     cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/input').type("30/09/2023");
//     cy.get('#annualized_no').click
//     cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
//     cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div/div[2]/div[1]/div/div/div/button').click();
    
//     // cy.wait(3000)
    
//     //Click on the Next button
//     cy.get('#next_financial_config').click();
    
//     //Click on the save button in financial Congiguration
//     cy.get('#save_manual_data_entry').click();
    
    
//       cy.get('#financial_statement_save').click();
//    // P&L 
// // Total Sales & Rental Income
// cy.get('[id="5_salesAndIncome"]').type(financialDataG.salesRentalIncome);
// cy.get('[id="5_costOfGoodsSold"]').type(financialDataG.costOfGoodsSold);
// // Gross Profit
// cy.get('[id="5_otherOperatingExpenses"]').type(financialDataG.otherOperatingExpenses);
// cy.get('[id="5_salariesAndWages"]').type(financialDataG.salariesWages);
// cy.get('[id="5_depreciation"]').type(financialDataG.depreciation);
// cy.get('[id="5_amortization"]').type(financialDataG.amortization);
// cy.get('[id="5_floorplanInterest"]').type(financialDataG.floorplanInterest);
// cy.get('[id="5_otherInterest"]').type(financialDataG.leasingHPCharges);
// cy.get('[id="5_directorsRenumeration"]').type(financialDataG.directorsRemuneration);
// cy.get('[id="5_rent"]').type(financialDataG.rent);
// cy.get('[id="5_otherIncome"]').type(financialDataG.otherIncomeFI);
// cy.get('[id="5_taxation"]').type(financialDataG.taxation);
// cy.get('[id="5_unusualItems"]').type(financialDataG.unusualItems);
// cy.get('[id="5_devidends"]').type(financialDataG.dividendsPaid);
// cy.get('[id="5_accumilatedProfits"]').type(financialDataG.accumulatedProfits);

// // Balance Sheet
// // Assets
// // Total Current Assets
// cy.get('[id="5_cashAndMarketable"]').type(financialDataG.cashMarketableSec);
// cy.get('[id="5_financeCont"]').type(financialDataG.financeContVehRec);
// cy.get('[id="5_accountsRec"]').type(financialDataG.accountsRec);
// cy.get('[id="5_vehiclesRecievables"]').type(financialDataG.vehicleReceivables);
// cy.get('[id="5_inventNew"]').type(financialDataG.inventNewDemos);
// cy.get('[id="5_inventUsed"]').type(financialDataG.inventUsed);
// cy.get('[id="5_inventPartsAndAccess"]').type(financialDataG.inventPartsAccess);
// cy.get('[id="5_prepaidExpenses"]').type(financialDataG.prepaidExpenses);
// cy.get('[id="5_tax"]').type(financialDataG.taxGST);
// cy.get('[id="5_loansToRelatedParties"]').type(financialDataG.loansRelatedParties);
// cy.get('[id="5_otherCurrentReceivables"]').type(financialDataG.otherCurrentReceivables);

// // Total Fixed Assets
// cy.get('[id="5_motorVehicles"]').type(financialDataG.motorVehicles);
// cy.get('[id="5_land"]').type(financialDataG.landBuildings);
// cy.get('[id="5_equipment"]').type(financialDataG.equipment);
// cy.get('[id="5_accumulatedDepriciation"]').type(financialDataG.accumulatedDepreciation);
// cy.get('[id="5_other"]').type(financialDataG.otherNonCurrentAssets);

// // Total Other Assets
// cy.get('[id="5_goodWill"]').type(financialDataG.goodwill);
// cy.get('[id="5_investments"]').type(financialDataG.investments);
// cy.get('[id="5_fitb"]').type(financialDataG.fitb);
// cy.get('[id="5_dueFromAssoc"]').type(financialDataG.dueFromAssocCos);
// cy.get('[id="5_dueFromOfficers"]').type(financialDataG.dueFromOfficers);
// cy.get('[id="5_otherIntengibles"]').type(financialDataG.otherIntangibles);
// cy.get('[id="5_defferedTaxAsset"]').type(financialDataG.deferredTaxAsset);

// // Liabilities and Networth
// // Total Current Liabilities
// cy.get('[id="5_staffAccruals"]').type(financialDataG.staffAccruals);
// cy.get('[id="5_otherAccruals"]').type(financialDataG.otherAccrualsProvision);
// cy.get('[id="5_accountsPaybleNew"]').type(financialDataG.accountsPayable);
// cy.get('[id="5_notesPayble"]').type(financialDataG.vehiclePayableNewDemo);
// cy.get('[id="5_accountsPaybleUsed"]').type(financialDataG.vehiclePayableUsed);
// cy.get('[id="5_wholeSale"]').type(financialDataG.wholesaleSoldNotPaid);
// cy.get('[id="5_shortTermDebt"]').type(financialDataG.shortTermDebtHP);
// cy.get('[id="5_loansFromOfficersRelatedCompanies"]').type(financialDataG.loansFromOfficers);
// cy.get('[id="5_bankOverDraft"]').type(financialDataG.bankOverdraft);
// cy.get('[id="5_taxLiabilities"]').type(financialDataG.taxLiabilities);
// cy.get('[id="5_otherCurrentLiabilities"]').type(financialDataG.otherCurrentLiabilities);

// // Total Non-current Liabilities
// cy.get('[id="5_mortgageBankLoans"]').type(financialDataG.mortgageBankLoans);
// cy.get('[id="5_loansFromOfficers"]').type(financialDataG.loansFromOfficersOrRelatedCompanies);
// cy.get('[id="5_hirePurchase"]').type(financialDataG.longTermDebtHP);
// cy.get('[id="5_subordinatedLoansFromOfficers"]').type(financialDataG.subordinatedLoans);
// cy.get('[id="5_otherNonCurrentLiabilities"]').type(financialDataG.otherNonCurrentLiabilities);
// cy.get('[id="5_paidUpCapital"]').type(financialDataG.paidUpCapital);
// cy.get('[id="5_assetRevalAndReserve"]').type(financialDataG.assetRevalReserve);
// cy.get('[id="5_otherReserves"]').type(financialDataG.otherReserves);
// cy.get('[id="5_adjustments"]').type(financialDataG.adjustments);
// cy.get('[id="5_devidendsOrWithdrawals"]').type(financialDataG.dividendsWithdrawals);
// cy.get('[id="5_retainedEarnings"]').type(financialDataG.retainedEarningsPreviousYear);

    
//     // Click and wait
//     cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
//     cy.wait(2000);
    
    
    
    
    
    cy.get('#financial_statement_save').click();
    
    });

});


