// Your test file, e.g., sampleTest.cy.js

describe('Conditional Test Triggering', () => {
    before(() => {
      cy.task('getUserInput').then((userInput) => {
        cy.wrap(userInput).as('userInput');
      });
    });
  
    it('Runs test case based on user input', function () {
      cy.get('@userInput').then((userInput) => {
        if (userInput === 'test 1') {
          cy.log('Running Test 1');
          // Code for Test 1 here
  
        } else if (userInput === 'test 2') {
          cy.log('Running Test 2');
          // Code for Test 2 here
  
        } else {
          cy.log('No matching tests to run for the provided input');
        }
      });
    });
  });
  