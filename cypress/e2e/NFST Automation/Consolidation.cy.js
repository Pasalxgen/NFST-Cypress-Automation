import {
    financialDataYearOne,
    financialDataYearTwo,
    financialDataYearThree,
  } from "./FinancialData1.js"; // Adjust the path based on your folder structure
  // import { EBIT, EBITDA, GrossProfit, NetIncomeProfit, operatingExpenses, OperatingProfitBeforeTax, totalSalesAndRentalIncome } from './FinancialEquations.js';
  // Import all calculations from financialCalculations.js
  import {financialKPIsYearOne} from "./FinancialEquations.js"; // Adjust the path based on your project structure
  
  const {
    waitUntilSymbol,
  } = require("next/dist/server/web/spec-extension/fetch-event");
  const { should } = require("chai");
  
  describe("Testing of the SPreading Tool", function () {
     
    beforeEach(() => {
      cy.login();
      cy.wait(2000);
    });
  
    it("Add Consolidation", () => {
    
        cy.get('.MuiButtonBase-root[id="2"]').click();
        // Example: Selecting an element with class ".my-class" that contains the text "Sample Text"
cy.get('.MuiButtonBase-root').contains('206').click();

//New Consolidation button
cy.get('#new-consolidation-btn').click();




    });
});
  
  