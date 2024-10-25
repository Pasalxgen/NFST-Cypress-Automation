
const { waitUntilSymbol } = require("next/dist/server/web/spec-extension/fetch-event");
const { should } = require("chai");


describe('Testing of the SPreading Tool', function() {

 
    beforeEach(() => {
        cy.login();
        cy.wait(2000);
      });

it('Create Entity', () => {

    cy.get('.MuiTypography-root[id="2"]').click();
    //Clicking the Proceed button
    cy.get('#proceed_entity_btn').click();

    //Entity Types
cy.get('#companyDetails_0').click();
cy.get('.MuiButtonBase-root[id="1"]').as('partnership');
cy.get('.MuiButtonBase-root[id="2"]').as('trust');
cy.get('.MuiButtonBase-root[id="3"]').as('proprietary limited');
cy.get('.MuiButtonBase-root[id="4"]').as('limited');
cy.get('.MuiButtonBase-root[id="5"]').as('public listed');


//Verifying the Entity Type List.
 // Expected values for Entity Type List.
 const entityTypeList = ['Trust', 'Limited', 'Proprietary Limited', 'Public Listed', 'Partnership']; // Add your expected texts here

 // Wait for the dropdown to become visible
 cy.get('.MuiList-root[id^=":r"]')  // Use the dynamic part of the ID
   .should('be.visible')  // Ensure the dropdown is visible
   .within(() => {
     // Get all li elements inside the dropdown and verify their texts
     cy.get('li')
       .should('have.length', entityTypeList.length)  // Verify the number of li elements matches the expected count
       .each(($li, index) => {
         // Get the text of each li element and log it
         cy.wrap($li)
           .invoke('text')
           .then((text) => {
             cy.log(`Found text: ${text}, Expected: ${entityTypeList[index]}`);  // Log the found text and expected text
             expect(text).to.equal(entityTypeList[index]);  // Assert that the text matches the expected value
           });
       });
   });
   //Selecting Trust as the Type
   cy.get('@trust').click();


//Entity Name
cy.get('#companyDetails_1').type("Most Wanted PVT LTD");

//Entity Role
cy.get('#companyDetails_2').click();
cy.get('.MuiButtonBase-root[id="1"]').as('dealership');
cy.get('.MuiButtonBase-root[id="2"]').as('property holding entity');
cy.get('.MuiButtonBase-root[id="3"]').as('share holding entity');
cy.get('.MuiButtonBase-root[id="4"]').as('guarantor');
cy.get('.MuiButtonBase-root[id="6"]').as('other');
cy.get('.MuiButtonBase-root[id="5"]').as('fleet');

//Verifying the Entity Role List.
 // Expected values for Entity Role List.
 const entityRoleList = ['Dealership', 'Property Holding Entity', 'Shareholding Entity', 'Guarantor', 'Other', 'Fleet']; // Add your expected texts here

 // Wait for the dropdown to become visible
 cy.get('.MuiList-root[id=":r2g:"]')  // Use the dynamic part of the ID
   .should('be.visible')  // Ensure the dropdown is visible
   .within(() => {
     // Get all li elements inside the dropdown and verify their texts
     cy.get('li')
       .should('have.length', entityRoleList.length)  // Verify the number of li elements matches the expected count
       .each(($li, index) => {
         // Get the text of each li element and log it
         cy.wrap($li)
           .invoke('text')
           .then((text) => {
             cy.log(`Found text: ${text}, Expected: ${entityRoleList[index]}`);  // Log the found text and expected text
             expect(text).to.equal(entityRoleList[index]);  // Assert that the text matches the expected value
           });
       });
   });

  //Selecting dealership as the Role
  cy.get('@dealership').click();

//Entity Industry
cy.get('#companyDetails_3').click();

    // Wait for the dropdown to become visible
    cy.get('.MuiList-root[id=":r2f:"]')  // Use the dynamic part of the ID
      .should('be.visible')  // Ensure the dropdown is visible
      .within(() => {
        // Get all li elements inside the dropdown
        cy.get('li')
          .should('have.length.greaterThan', 0)  // Ensure there are li elements
          .each(($li, index, $list) => {
            // Log the text of each li element
            cy.log(`Item ${index + 1}: ${$li.text()}`);
          });
      });

// // Verify the number of options in the dropdown
// cy.get('.MuiList-root .MuiListItem-root') // Adjust the class names to match the actual list and list items in your app
// .should('have.length', expectedCount)   // Replace `expectedCount` with the number of options you expect
// .then($options => {
//   // Log the number of options
//   cy.log('The dropdown contains ' + $options.length + ' options.');

//   // Verify the text of an option (optional)
//   cy.wrap($options).each(($option, index) => {
//     cy.log('Option ' + (index + 1) + ': ' + $option.text());
//   });
// });

// // Select an option by its text
// cy.get('.MuiList-root .MuiListItem-root')
// .contains('Option Text')  // Replace 'Option Text' with the actual text of the option you want to select
// .click();

// // Verify that the dropdown is now showing the selected option (optional)
// cy.get('#dropdown-field-selector')
// .should('contain', 'Option Text'); // Verify the dropdown displays the selected option


});
});


// cy.get('').click();
//     cy.get('').click();
//     cy.get('').click();
//     cy.get('').click();


