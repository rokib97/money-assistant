// function to get the value of input fields
function getInputValue(inputId) {
  return document.getElementById(inputId).value;
}
// function to get the element for innerText
function catchElement(inputId) {
  return document.getElementById(inputId);
}

// function to calculate the expenses
function calculateExpenses() {
  const incomeInputValue = getInputValue("income-input");
  const foodInputValue = getInputValue("food-input");
  const rentInputValue = getInputValue("rent-input");
  const clothesInputValue = getInputValue("clothes-input");
  if (
    incomeInputValue < 0 ||
    incomeInputValue == "" ||
    foodInputValue < 0 ||
    foodInputValue == "" ||
    rentInputValue < 0 ||
    rentInputValue == "" ||
    clothesInputValue < 0 ||
    clothesInputValue == ""
  ) {
    catchElement("para").style.display = "block";
    return;
  }
  const totalExpenses =
    parseFloat(foodInputValue) +
    parseFloat(rentInputValue) +
    parseFloat(clothesInputValue);

  if (totalExpenses > incomeInputValue) {
    catchElement("para-one").style.display = "block";
    return;
  }

  // update total expenses and balance
  const previousTotalExpenses = catchElement("total-expenses");
  previousTotalExpenses.innerText = totalExpenses;
  const balance = catchElement("balance");
  balance.innerText = incomeInputValue - totalExpenses;
}
// function to calculate the saving
function calculateSaving() {
  const incomeInputValue = getInputValue("income-input");
  const getPercentageValue = getInputValue("percentage-input");
  if (getPercentageValue < 0 || getPercentageValue == "") {
    catchElement("para-two").style.display = "block";
    return;
  }
  // update savings
  const previousSaving = catchElement("saving-amount");
  const savingAmount = (incomeInputValue * getPercentageValue) / 100;
  previousSaving.innerText = savingAmount;

  // update remain balance
  const balance = catchElement("balance");
  const balanceAmount = balance.innerText;
  const previousRemainingBalance = catchElement("previous-balance");
  const remainingBalance = parseFloat(balanceAmount) - parseFloat(savingAmount);
  previousRemainingBalance.innerText = remainingBalance;
  if (savingAmount > balanceAmount) {
    catchElement("para-three").style.display = "block";
    previousSaving.innerText = "";
    previousRemainingBalance.innerText = "";
    return;
  }
}
// event handle for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculateExpenses();
});
// event handle for save button
document.getElementById("save-btn").addEventListener("click", function () {
  calculateSaving();
});
