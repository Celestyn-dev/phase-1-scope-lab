// Write your solution in this file!
// 1️⃣ Declare customerName in global scope using var
var customerName = 'bob';

// 2️⃣ Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3️⃣ Function to declare bestCustomer in global scope inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declared without var/let/const, making it global
}

// 4️⃣ Function to overwrite bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5️⃣ Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6️⃣ Function that attempts to change a constant variable (this should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will cause an error
}
