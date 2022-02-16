// function to get the value of input fields
function getInputValue(inputId) {
  return document.getElementById(inputId).value;
}

// function to calculate the expenses
function calculateExpenses() {
  const incomeInputValue = getInputValue("income-input");
  const foodInputValue = getInputValue("food-input");
  const rentInputValue = getInputValue("rent-input");
  const clothesInputValue = getInputValue("clothes-input");
  if (incomeInputValue < 0 || incomeInputValue == "") {
    alert("Error 404! Please Enter a Positive Number");
    return;
  }
  const totalExpenses =
    parseFloat(foodInputValue) +
    parseFloat(rentInputValue) +
    parseFloat(clothesInputValue);

  if (totalExpenses > incomeInputValue) {
    alert("You Don't have Enough Balance to Expense");
    return;
  }

  // update total expenses and balance
  const previousTotalExpenses = document.getElementById("total-expenses");
  previousTotalExpenses.innerText = totalExpenses;
  const balance = document.getElementById("balance");
  balance.innerText = incomeInputValue - totalExpenses;
}
// function to calculate the saving
function calculateSaving() {
  const incomeInputValue = getInputValue("income-input");
  const getPercentageValue = getInputValue("percentage-input");
  if (getPercentageValue < 0) {
    alert("Error 404! Please Enter a Positive Number");
    return;
  }
  const previousSaving = document.getElementById("saving-amount");
  const savingAmount = (incomeInputValue * getPercentageValue) / 100;
  previousSaving.innerText = savingAmount;

  //   update savings and remain balance
  const balance = document.getElementById("balance");
  const balanceAmount = balance.innerText;
  const previousRemainingBalance = document.getElementById("previous-balance");
  const remainingBalance = balanceAmount - savingAmount;
  previousRemainingBalance.innerText = remainingBalance;
  if (savingAmount > balanceAmount) {
    alert("You do not have enough taka for saving");
    previousSaving.innerText = "";
    previousRemainingBalance.innerText = "";
    return;
  }
}
// event handle for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculateExpenses();
});
document.getElementById("save-btn").addEventListener("click", function () {
  calculateSaving();
});
