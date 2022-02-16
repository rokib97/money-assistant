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
  if (incomeInputValue < 0) {
  }

  const totalExpenses =
    parseFloat(foodInputValue) +
    parseFloat(rentInputValue) +
    parseFloat(clothesInputValue);

  // update total expenses and balance
  const previousTotalExpenses = document.getElementById("total-expenses");
  previousTotalExpenses.innerText = totalExpenses;
  const balance = document.getElementById("balance");
  balance.innerText = incomeInputValue - totalExpenses;
}
// function to calculate the saving
function calculateSaving() {
  const incomeInputValue = getInputValue("income-input");
  //   const getPercentageValue = document.getElementById("percentage-input").value;
  const getPercentageValue = getInputValue("percentage-input");
  const previousSaving = document.getElementById("saving-amount");
  previousSaving.innerText = (incomeInputValue * getPercentageValue) / 100;

  //   update savings and remain balance
  const balance = document.getElementById("balance");
  const previousRemainingBalance = document.getElementById("previous-balance");
  previousRemainingBalance.innerText =
    balance.innerText - previousSaving.innerText;
}
// event handle for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculateExpenses();
});
document.getElementById("save-btn").addEventListener("click", function () {
  calculateSaving();
});
