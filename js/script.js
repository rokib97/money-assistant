// function to get the value of input fields
function getInputValue(inputId) {
  return document.getElementById(inputId).value;
}

// function to calculate the expenses
function calculateExpenses() {
  //   const incomeInputValue = document.getElementById("income-input").value;
  //   const foodInputValue = document.getElementById("food-input").value;
  //   const rentInputValue = document.getElementById("rent-input").value;
  //   const clothesInputValue = document.getElementById("clothes-input").value;
  const incomeInputValue = getInputValue("income-input");
  const foodInputValue = getInputValue("food-input");
  const rentInputValue = getInputValue("rent-input");
  const clothesInputValue = getInputValue("clothes-input");

  const totalExpenses =
    parseFloat(foodInputValue) +
    parseFloat(rentInputValue) +
    parseFloat(clothesInputValue);

  const previousTotalExpenses = document.getElementById("total-expenses");
  previousTotalExpenses.innerText = totalExpenses;
  const balance = document.getElementById("balance");
  balance.innerText = incomeInputValue - totalExpenses;
}
// event handle for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculateExpenses();
});
