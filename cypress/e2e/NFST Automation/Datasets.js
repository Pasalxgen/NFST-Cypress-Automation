

  
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
export const financialDataA = generateFinancialData(
    financialDataYearOne,
    +100 // +10 * 10
  );
  export const financialDataB = generateFinancialData(
    financialDataYearOne,
    +200 // +20 * 10
  );
  export const financialDataC = generateFinancialData(
    financialDataYearOne,
    +300 // +30 * 10
  );
  export const financialDataD = generateFinancialData(
    financialDataYearOne,
    +400 // +40 * 10
  );
  export const financialDataE = generateFinancialData(
    financialDataYearOne,
    +500 // +50 * 10
  );
  export const financialDataF = generateFinancialData(
    financialDataYearOne,
    +600 // +60 * 10
  );
  export const financialDataG = generateFinancialData(
    financialDataYearOne,
    +700 // +70 * 10
  );
  export const financialDataH = generateFinancialData(
    financialDataYearOne,
    +800 // +80 * 10
  );
  export const financialDataI = generateFinancialData(
    financialDataYearOne,
    +900 // +90 * 10
  );
  export const financialDataJ = generateFinancialData(
    financialDataYearOne,
    +1000 // +100 * 10
  );
  export const financialDataK = generateFinancialData(
    financialDataYearOne,
    +1100 // +110 * 10
  );
  export const financialDataL = generateFinancialData(
    financialDataYearOne,
    +1200 // +120 * 10
  );
  export const financialDataM = generateFinancialData(
    financialDataYearOne,
    +1300 // +130 * 10
  );
  export const financialDataN = generateFinancialData(
    financialDataYearOne,
    +1400 // +140 * 10
  );
  export const financialDataO = generateFinancialData(
    financialDataYearOne,
    +1500 // +150 * 10
  );
  export const financialDataP = generateFinancialData(
    financialDataYearOne,
    +1600 // +160 * 10
  );
  export const financialDataQ = generateFinancialData(
    financialDataYearOne,
    +1700 // +170 * 10
  );
  export const financialDataR = generateFinancialData(
    financialDataYearOne,
    +1800 // +180 * 10
  );

// const array = [100, 200, 300];
const keys = ['A', 'B', 'C'];

let financialData = {};
let value = 100;
  
for (let index = 0; index < array.length; index++) {
  // const element = array[index];

  financialData[keys[index]] = generateFinancialData(
    financialDataYearOne,
    value
  );

  value += 100;
}

export const financialDataObj = financialData;


financialData = {
  'A': 1000,
  'B': 2000,
  'C': 3000,
}


financialDataObj['A'] => 1000