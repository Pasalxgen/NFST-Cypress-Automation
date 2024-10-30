
const {
    waitUntilSymbol,
  } = require("next/dist/server/web/spec-extension/fetch-event");
  const { should } = require("chai");
const { expect } = require("chai");
  
  
  
  describe("Testing of the SPreading Tool", function () {
    beforeEach(() => {
      cy.login();
      cy.wait(2000);
    });
  
    it("Compare Verification", () => {
  
      // cy.log("The Value of fyear1" + financialKPIsYearOne.);
  
      //click on a reference number
      cy.get('[id="250"]').click();
      cy.get("#compare").click();
      cy.xpath("/html/body/main/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div").click();
     // cy.get('.MuiSelect-select[aria-controls="\\:r4v\\:"]').click();
     //cy.get('#\\:r4v\\: li').eq(0).click(); // Selects the first li item
     // Selects the second li item
     cy.xpath("/html/body/div[3]/div[3]/ul/li[3]").click();
     cy.xpath("/html/body/main/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[2]/div/div/div").click();
     cy.xpath("/html/body/div[3]/div[3]/ul/li[2]").click();
     cy.xpath("/html/body/main/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[3]/div/div/div").click();
     cy.xpath("/html/body/div[3]/div[3]/ul/li[1]").click();

     cy.get('.MuiButtonBase-root').contains('Search').click();  // Clicks the 'About' item

    //  cy.xpath("/html/body/main/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[4]/button[2]").click();
     
    // cy.get('#totalRevenue_0').invoke('text').then((text) => {
    //     const cleanedText0 = parseFloat(text.replace(/[$%]/g, '').trim());
    //     cy.log(cleanedText0); // Logs the value without $ and % signs
    //   });
      

    // cy.get('#totalRevenue_1').invoke('text').then((text) => {
    //     const cleanedText1 = parseFloat(text.replace(/[$%]/g, '').trim());
      
    //     cy.get('#totalRevenue_2').invoke('text').then((text) => {
    //       const cleanedText2 = parseFloat(text.replace(/[$%]/g, '').trim());
    //       cy.log(`Cleaned Text 2: ${cleanedText2}`);
      
    //       cy.get('#totalRevenue_0').invoke('text').then((text) => {
    //         const cleanedText0 = parseFloat(text.replace(/[$%]/g, '').trim());
    //         cy.log(`Cleaned Text 0: ${cleanedText0}`);
      
    //         // Calculate ((cleanedText2 - cleanedText0) / |cleanedText0|) * 100
    //         const result = (((cleanedText2 - cleanedText0) / Math.abs(cleanedText0)) * 100).toFixed(2);
    //         const resultWithPercentage = `${result}%`;
      
    //         // Perform the assertion
    //         expect(resultWithPercentage).to.eq(cleanedText1+"%");
      
    //         // Log the actual and expected values for clarity
    //         cy.log(`The Actual value is ${resultWithPercentage}. The expected value is ${cleanedText1}%`);
    //       });
    //     });
    //   });
      
      
    //   cy.get('#totalRevenue_4').invoke('text').then((text) => {
    //     const cleanedText4 = parseFloat(text.replace(/[$%]/g, '').trim());
    //     cy.log(cleanedText4); // Logs the value without $ and % signs


    //     cy.get('#totalRevenue_2').invoke('text').then((text) => {
    //       const cleanedText2 = parseFloat(text.replace(/[$%]/g, '').trim());
    //       cy.log(`Cleaned Text 2: ${cleanedText2}`);
      
    //       cy.get('#totalRevenue_3').invoke('text').then((text) => {
    //         const cleanedText3 = parseFloat(text.replace(/[$%]/g, '').trim());
    //         cy.log(`Cleaned Text 3: ${cleanedText3}`);
      
    //         // Calculate ((cleanedText2 - cleanedText0) / |cleanedText0|) * 100
    //         const result = (((cleanedText4 - cleanedText2) / Math.abs(cleanedText2)) * 100).toFixed(2);
    //         const resultWithPercentage = `${result}%`;
      
    //         // Perform the assertion
    //         expect(resultWithPercentage).to.eq(cleanedText3+"%");
      
    //         // Log the actual and expected values for clarity
    //         cy.log(`The Actual value is ${resultWithPercentage}. The expected value is ${cleanedText3}%`);
    //       });
    //     });
    //   });




      const verifyChange = (idc1,idc2,idc3,idc4,idc5,description) => {


        cy.get(idc1).invoke('text').then((text) => {
          const cleanedText1 = parseFloat(text.replace(/[$%]/g, '').trim());
        
          cy.get(idc2).invoke('text').then((text) => {
            const cleanedText2 = parseFloat(text.replace(/[$%]/g, '').trim());
            cy.log(`Cleaned Text 2: ${cleanedText2}`);
        
            cy.get(idc3).invoke('text').then((text) => {
              const cleanedText3 = parseFloat(text.replace(/[$%]/g, '').trim());
              cy.log(`Cleaned Text 3: ${cleanedText3}`);
        
              cy.get(idc4).invoke('text').then((text) => {
                const cleanedText4 = parseFloat(text.replace(/[$%]/g, '').trim());
                cy.log(`Cleaned Text 3: ${cleanedText4}`);

                cy.get(idc5).invoke('text').then((text) => {
                  const cleanedText5 = parseFloat(text.replace(/[$%]/g, '').trim());
                  cy.log(`Cleaned Text 3: ${cleanedText5}`);
              // Calculate ((cleanedText2 - cleanedText0) / |cleanedText0|) * 100
            
              const resultc1 = (((cleanedText3 - cleanedText1) / Math.abs(cleanedText1)) * 100).toFixed(2);
              const resultc1WithPercentage = `${resultc1}%`;

              const resultc2 = (((cleanedText5 - cleanedText3) / Math.abs(cleanedText3)) * 100).toFixed(2);
              const resultc2tWithPercentage = `${resultc2}%`;

              cy.log(description +" Verification");
              // Perform the assertion
              // Ensure cleanedText2 has the '%' suffix before comparison
              expect(resultc1WithPercentage).to.eq(`${cleanedText2}%`);


             // Perform the assertion
              expect(resultc2tWithPercentage).to.eq(cleanedText4+"%");

              cy.log(description +" Verification");

              cy.log(
            `The Actual value is ${resultc1WithPercentage}. The expected value is ${cleanedText2}%. (${description})`
          );
        
              // Log the actual and expected values for clarity
              cy.log(`The Actual value is ${resultc1WithPercentage}. The expected value is ${cleanedText2}%`);

               // Log the actual and expected values for clarity
               cy.log(`The Actual value is ${resultc2tWithPercentage}. The expected value is ${cleanedText4}%`);

            });
          });
        });
      });
    });
      };

//Total Revenue Change Verification
       verifyChange('#totalRevenue_0','#totalRevenue_1','#totalRevenue_2','#totalRevenue_3','#totalRevenue_4',"Total Revenue Change")
  
//Total Revenue Change Verification
verifyChange('#ebitda_0','#ebitda_1','#ebitda_2','#ebitda_3','#ebitda_4')

    
})
})  