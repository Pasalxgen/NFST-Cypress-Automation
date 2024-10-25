
import { financialDataYearOne, financialDataA, financialDataB, financialDataC, financialDataD, financialDataE, financialDataF, financialDataG, financialDataH, financialDataI, financialDataJ, financialDataK, financialDataL, financialDataM, financialDataN, financialDataO, financialDataP, financialDataQ } from './FinancialDataMulti.js'; // Adjust the path based on your folder structure

const { waitUntilSymbol } = require("next/dist/server/web/spec-extension/fetch-event");
const { should } = require("chai");


describe('Testing of the SPreading Tool', function() {

    beforeEach(() => {
        cy.login();
        cy.wait(2000);
      });

 
it('Add Three Financials', () => {

cy.wait(3000)
  //click on a reference number
cy.get('[id="242"]').click();

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
cy.get('[id="3_salesAndIncome"]').type(financialDataYearTwo.salesRentalIncome);
cy.get('[id="3_costOfGoodsSold"]').type(financialDataYearTwo.costOfGoodsSold);
// Gross Profit
cy.get('[id="3_otherOperatingExpenses"]').type(financialDataYearTwo.otherOperatingExpenses);
cy.get('[id="3_salariesAndWages"]').type(financialDataYearTwo.salariesWages);
cy.get('[id="3_depreciation"]').type(financialDataYearTwo.depreciation);
cy.get('[id="3_amortization"]').type(financialDataYearTwo.amortization);
cy.get('[id="3_floorplanInterest"]').type(financialDataYearTwo.floorplanInterest);
cy.get('[id="3_otherInterest"]').type(financialDataYearTwo.leasingHPCharges);
cy.get('[id="3_directorsRenumeration"]').type(financialDataYearTwo.directorsRemuneration);
cy.get('[id="3_rent"]').type(financialDataYearTwo.rent);
cy.get('[id="3_otherIncome"]').type(financialDataYearTwo.otherIncomeFI);
cy.get('[id="3_taxation"]').type(financialDataYearTwo.taxation);
cy.get('[id="3_unusualItems"]').type(financialDataYearTwo.unusualItems);
cy.get('[id="3_devidends"]').type(financialDataYearTwo.dividendsPaid);
cy.get('[id="3_accumilatedProfits"]').type(financialDataYearTwo.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="3_cashAndMarketable"]').type(financialDataYearTwo.cashMarketableSec);
cy.get('[id="3_financeCont"]').type(financialDataYearTwo.financeContVehRec);
cy.get('[id="3_accountsRec"]').type(financialDataYearTwo.accountsRec);
cy.get('[id="3_vehiclesRecievables"]').type(financialDataYearTwo.vehicleReceivables);
cy.get('[id="3_inventNew"]').type(financialDataYearTwo.inventNewDemos);
cy.get('[id="3_inventUsed"]').type(financialDataYearTwo.inventUsed);
cy.get('[id="3_inventPartsAndAccess"]').type(financialDataYearTwo.inventPartsAccess);
cy.get('[id="3_prepaidExpenses"]').type(financialDataYearTwo.prepaidExpenses);
cy.get('[id="3_tax"]').type(financialDataYearTwo.taxGST);
cy.get('[id="3_loansToRelatedParties"]').type(financialDataYearTwo.loansRelatedParties);
cy.get('[id="3_otherCurrentReceivables"]').type(financialDataYearTwo.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="3_motorVehicles"]').type(financialDataYearTwo.motorVehicles);
cy.get('[id="3_land"]').type(financialDataYearTwo.landBuildings);
cy.get('[id="3_equipment"]').type(financialDataYearTwo.equipment);
cy.get('[id="3_accumulatedDepriciation"]').type(financialDataYearTwo.accumulatedDepreciation);
cy.get('[id="3_other"]').type(financialDataYearTwo.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="3_goodWill"]').type(financialDataYearTwo.goodwill);
cy.get('[id="3_investments"]').type(financialDataYearTwo.investments);
cy.get('[id="3_fitb"]').type(financialDataYearTwo.fitb);
cy.get('[id="3_dueFromAssoc"]').type(financialDataYearTwo.dueFromAssocCos);
cy.get('[id="3_dueFromOfficers"]').type(financialDataYearTwo.dueFromOfficers);
cy.get('[id="3_otherIntengibles"]').type(financialDataYearTwo.otherIntangibles);
cy.get('[id="3_defferedTaxAsset"]').type(financialDataYearTwo.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="3_staffAccruals"]').type(financialDataYearTwo.staffAccruals);
cy.get('[id="3_otherAccruals"]').type(financialDataYearTwo.otherAccrualsProvision);
cy.get('[id="3_accountsPaybleNew"]').type(financialDataYearTwo.accountsPayable);
cy.get('[id="3_notesPayble"]').type(financialDataYearTwo.vehiclePayableNewDemo);
cy.get('[id="3_accountsPaybleUsed"]').type(financialDataYearTwo.vehiclePayableUsed);
cy.get('[id="3_wholeSale"]').type(financialDataYearTwo.wholesaleSoldNotPaid);
cy.get('[id="3_shortTermDebt"]').type(financialDataYearTwo.shortTermDebtHP);
cy.get('[id="3_loansFromOfficersRelatedCompanies"]').type(financialDataYearTwo.loansFromOfficers);
cy.get('[id="3_bankOverDraft"]').type(financialDataYearTwo.bankOverdraft);
cy.get('[id="3_taxLiabilities"]').type(financialDataYearTwo.taxLiabilities);
cy.get('[id="3_otherCurrentLiabilities"]').type(financialDataYearTwo.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="3_mortgageBankLoans"]').type(financialDataYearTwo.mortgageBankLoans);
cy.get('[id="3_loansFromOfficers"]').type(financialDataYearTwo.loansFromOfficersOrRelatedCompanies);
cy.get('[id="3_hirePurchase"]').type(financialDataYearTwo.longTermDebtHP);
cy.get('[id="3_subordinatedLoansFromOfficers"]').type(financialDataYearTwo.subordinatedLoans);
cy.get('[id="3_otherNonCurrentLiabilities"]').type(financialDataYearTwo.otherNonCurrentLiabilities);
cy.get('[id="3_paidUpCapital"]').type(financialDataYearTwo.paidUpCapital);
cy.get('[id="3_assetRevalAndReserve"]').type(financialDataYearTwo.assetRevalReserve);
cy.get('[id="3_otherReserves"]').type(financialDataYearTwo.otherReserves);
cy.get('[id="3_adjustments"]').type(financialDataYearTwo.adjustments);
cy.get('[id="3_devidendsOrWithdrawals"]').type(financialDataYearTwo.dividendsWithdrawals);
cy.get('[id="3_retainedEarnings"]').type(financialDataYearTwo.retainedEarningsPreviousYear);

// Click and wait
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
cy.get('[id="4_salesAndIncome"]').type(financialDataYearThree.salesRentalIncome);
cy.get('[id="4_costOfGoodsSold"]').type(financialDataYearThree.costOfGoodsSold);
// Gross Profit
cy.get('[id="4_otherOperatingExpenses"]').type(financialDataYearThree.otherOperatingExpenses);
cy.get('[id="4_salariesAndWages"]').type(financialDataYearThree.salariesWages);
cy.get('[id="4_depreciation"]').type(financialDataYearThree.depreciation);
cy.get('[id="4_amortization"]').type(financialDataYearThree.amortization);
cy.get('[id="4_floorplanInterest"]').type(financialDataYearThree.floorplanInterest);
cy.get('[id="4_otherInterest"]').type(financialDataYearThree.leasingHPCharges);
cy.get('[id="4_directorsRenumeration"]').type(financialDataYearThree.directorsRemuneration);
cy.get('[id="4_rent"]').type(financialDataYearThree.rent);
cy.get('[id="4_otherIncome"]').type(financialDataYearThree.otherIncomeFI);
cy.get('[id="4_taxation"]').type(financialDataYearThree.taxation);
cy.get('[id="4_unusualItems"]').type(financialDataYearThree.unusualItems);
cy.get('[id="4_devidends"]').type(financialDataYearThree.dividendsPaid);
cy.get('[id="4_accumilatedProfits"]').type(financialDataYearThree.accumulatedProfits);

// Balance Sheet
// Assets
// Total Current Assets
cy.get('[id="4_cashAndMarketable"]').type(financialDataYearThree.cashMarketableSec);
cy.get('[id="4_financeCont"]').type(financialDataYearThree.financeContVehRec);
cy.get('[id="4_accountsRec"]').type(financialDataYearThree.accountsRec);
cy.get('[id="4_vehiclesRecievables"]').type(financialDataYearThree.vehicleReceivables);
cy.get('[id="4_inventNew"]').type(financialDataYearThree.inventNewDemos);
cy.get('[id="4_inventUsed"]').type(financialDataYearThree.inventUsed);
cy.get('[id="4_inventPartsAndAccess"]').type(financialDataYearThree.inventPartsAccess);
cy.get('[id="4_prepaidExpenses"]').type(financialDataYearThree.prepaidExpenses);
cy.get('[id="4_tax"]').type(financialDataYearThree.taxGST);
cy.get('[id="4_loansToRelatedParties"]').type(financialDataYearThree.loansRelatedParties);
cy.get('[id="4_otherCurrentReceivables"]').type(financialDataYearThree.otherCurrentReceivables);

// Total Fixed Assets
cy.get('[id="4_motorVehicles"]').type(financialDataYearThree.motorVehicles);
cy.get('[id="4_land"]').type(financialDataYearThree.landBuildings);
cy.get('[id="4_equipment"]').type(financialDataYearThree.equipment);
cy.get('[id="4_accumulatedDepriciation"]').type(financialDataYearThree.accumulatedDepreciation);
cy.get('[id="4_other"]').type(financialDataYearThree.otherNonCurrentAssets);

// Total Other Assets
cy.get('[id="4_goodWill"]').type(financialDataYearThree.goodwill);
cy.get('[id="4_investments"]').type(financialDataYearThree.investments);
cy.get('[id="4_fitb"]').type(financialDataYearThree.fitb);
cy.get('[id="4_dueFromAssoc"]').type(financialDataYearThree.dueFromAssocCos);
cy.get('[id="4_dueFromOfficers"]').type(financialDataYearThree.dueFromOfficers);
cy.get('[id="4_otherIntengibles"]').type(financialDataYearThree.otherIntangibles);
cy.get('[id="4_defferedTaxAsset"]').type(financialDataYearThree.deferredTaxAsset);

// Liabilities and Networth
// Total Current Liabilities
cy.get('[id="4_staffAccruals"]').type(financialDataYearThree.staffAccruals);
cy.get('[id="4_otherAccruals"]').type(financialDataYearThree.otherAccrualsProvision);
cy.get('[id="4_accountsPaybleNew"]').type(financialDataYearThree.accountsPayable);
cy.get('[id="4_notesPayble"]').type(financialDataYearThree.vehiclePayableNewDemo);
cy.get('[id="4_accountsPaybleUsed"]').type(financialDataYearThree.vehiclePayableUsed);
cy.get('[id="4_wholeSale"]').type(financialDataYearThree.wholesaleSoldNotPaid);
cy.get('[id="4_shortTermDebt"]').type(financialDataYearThree.shortTermDebtHP);
cy.get('[id="4_loansFromOfficersRelatedCompanies"]').type(financialDataYearThree.loansFromOfficers);
cy.get('[id="4_bankOverDraft"]').type(financialDataYearThree.bankOverdraft);
cy.get('[id="4_taxLiabilities"]').type(financialDataYearThree.taxLiabilities);
cy.get('[id="4_otherCurrentLiabilities"]').type(financialDataYearThree.otherCurrentLiabilities);

// Total Non-current Liabilities
cy.get('[id="4_mortgageBankLoans"]').type(financialDataYearThree.mortgageBankLoans);
cy.get('[id="4_loansFromOfficers"]').type(financialDataYearThree.loansFromOfficersOrRelatedCompanies);
cy.get('[id="4_hirePurchase"]').type(financialDataYearThree.longTermDebtHP);
cy.get('[id="4_subordinatedLoansFromOfficers"]').type(financialDataYearThree.subordinatedLoans);
cy.get('[id="4_otherNonCurrentLiabilities"]').type(financialDataYearThree.otherNonCurrentLiabilities);
cy.get('[id="4_paidUpCapital"]').type(financialDataYearThree.paidUpCapital);
cy.get('[id="4_assetRevalAndReserve"]').type(financialDataYearThree.assetRevalReserve);
cy.get('[id="4_otherReserves"]').type(financialDataYearThree.otherReserves);
cy.get('[id="4_adjustments"]').type(financialDataYearThree.adjustments);
cy.get('[id="4_devidendsOrWithdrawals"]').type(financialDataYearThree.dividendsWithdrawals);
cy.get('[id="4_retainedEarnings"]').type(financialDataYearThree.retainedEarningsPreviousYear);

// Click and wait
cy.xpath('/html/body/main/div/div/div/div[2]/div/div[1]/table[1]/table/thead/tr/th[2]').click();
cy.wait(2000);

cy.get('#financial_statement_save').click();

});

});


