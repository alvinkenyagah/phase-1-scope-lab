// declare customerName to be bob in global scope
var customerName = 'bob';

// upperCaseCustomerName() function
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer() function
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// overwriteBestCustomer() function
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// changeLeastFavoriteCustomer() function (using const)
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // this should throw an error
}
