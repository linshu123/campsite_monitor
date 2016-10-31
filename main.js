var request = require('request');

request.post(
  'http://www.reserveamerica.com/camping/upper-pines/r/campgroundDetails.do', // URL
  { form: 
    {
      parkId: '70925',
      campingDate : 'Wed+Nov+16+2016',
      lengthOfStay : '2',
      contractCode : 'NRSO',
      resetAllFilters:   'false',
      filtersFormSubmitted: 'true',
      sortBy:   'RELEVANCE',
      category: 'camping',
      availability: 'all',
      interest: 'camping',
      usingCampingForm: 'false',
    }
  }, // params
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      log(body);
    } else if (error) {
      log(error);
    } else {
      log(response);
    }
  }
);

function log(logText) {
  console.log(logText);
}