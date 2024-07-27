let chosenOperator = '';

function fetchCalculations() {
  // Make an HTTP GET request to /calculations:
  axios({
    method: 'GET',
    url: '/calculations'
  })
    // The response we receive from the server
    // will get passed into the .then's callback fn:
    .then((response) => {
      // VERIFY that the response arrived:
      console.log(response);

      // Call the render function and hand it the data
      // we got back from the server, but ONLY if response.data
      // is NOT an empty array:
      if (response.data.length > 0) {
        renderCalculations(response.data);
      }
    })
}


/*
  Coach:

  for render calculations function --
  what is calculations in renderCalculations(calculations)?
  Will that 'calculations' data have a .result, and will it contain what we expect it to?
  How do we access the data that we need from 'calculations?'


  
 */


function renderCalculations(calculations) {
  // Update the h2#currentResult's text with the most recent result:
  let currentResult = document.getElementById('currentResult');
  const resultToRender = calculations[calculations.length - 1].result;
  currentResult.textContent = resultToRender;

  // Select the part of the DOM I wish to manipulate:
  let calculationHistory = document.getElementById('calculationHistory');

  // Clear out the current contents of ul#calculationHistory:
  calculationHistory.innerHTML = '';

// Loop through calculationHistory and add a <li>
  // into the ul#calculationHistory:
  for (let calc of calculations) {
    calculationHistory.innerHTML += `
      <li>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</li>
    `
  }
}

function handleOperatorClick(event, operator) {
  event.preventDefault();

  // Assign whichever operator was clicked to
  // the global variable that will keep track of
  // the most recently pressed operator:
  chosenOperator = operator;
}

function createCalculation(event) {
    event.preventDefault();
  
    // Obtain the values of the two inputs:
    const numOne = document.getElementById('numOneInput').value
    const numTwo = document.getElementById('numTwoInput').value
  
    // Create the "new calculation" object that I will
    // need to send to the server:
    const newCalculation = {
      numOne: numOne,
      numTwo: numTwo,
      operator: chosenOperator
    }
    
    // Make an HTTP POST request and send the newCalculation
    // object to the server:
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalculation
    })
      // The response we receive from the server
      // will get passed into the .then's callback fn:
      .then((response) => {

            // VERIFY that the response arrived:
      console.log(response)

      fetchCalculations();
    })
}

/*
  Coach:
  for Reset Function:

  What do we want to happen?

  - We want to reset the calculator.

  ok, that's a given. What if we get more specific?

  - We want to reset the information displayed on the DOM

  better, and just a bit more specific

  - We want to reset the information displayed on the DOM,
  which is currently stored in client.js, and currently
  only stored in a variable on line 1 named 'chosen operator'

  -- By being extremely specific and going from big idea to smaller details,
  we were able to discern information about the problem. The most relevant piece
  of information that we were able to gain was that:

  the ONLY information currently stored (globally) in client.js is 'chosen operator'

  currently in our resetCalculator function, we are initializing a variable and setting it on the dom in two different ways

  

  Action Item:
  - Investigate how and where the relevant data is stored on the client
  - Correct DOM clearing in function

  
 */
function resetCalculator(event) {
  event.preventDefault();

  chosenOperator = '';
  const numOne = document.getElementById('numOneInput').value = '';
  const numTwo = document.getElementById('numTwoInput').value = '';
}

fetchCalculations();
