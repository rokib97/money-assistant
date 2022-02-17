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
  } else {
    catchElement("para").style.display = "none";
  }
  const totalExpenses =
    parseFloat(foodInputValue) +
    parseFloat(rentInputValue) +
    parseFloat(clothesInputValue);

  if (totalExpenses > incomeInputValue) {
    catchElement("para-one").style.display = "block";
    return;
  } else {
    catchElement("para-one").style.display = "none";
  }
  // update total expenses
  const previousTotalExpenses = catchElement("total-expenses");
  previousTotalExpenses.innerText = totalExpenses;

  // update balance
  updateBalance(totalExpenses, true);
}
// function to calculate the saving
function calculateSaving() {
  const incomeInputValue = getInputValue("income-input");
  const getPercentageValue = getInputValue("percentage-input");
  if (getPercentageValue < 0 || getPercentageValue == "") {
    catchElement("para-two").style.display = "block";
    return;
  } else {
    catchElement("para-two").style.display = "none";
  }
  // update savings
  const previousSaving = catchElement("saving-amount");
  const savingAmount = (incomeInputValue * getPercentageValue) / 100;
  previousSaving.innerText = savingAmount;

  // update remain balance
  updateBalance(savingAmount, false);
}

// function to update balance and remaining balance
function updateBalance(value, isTrue) {
  if (isTrue == true) {
    const incomeInputValue = getInputValue("income-input");
    const balance = catchElement("balance");
    balance.innerText = incomeInputValue - value;
  } else {
    const previousSaving = catchElement("saving-amount");
    const balance = catchElement("balance");
    const balanceAmount = balance.innerText;
    const previousRemainingBalance = catchElement("previous-balance");
    const remainingBalance = parseFloat(balanceAmount) - parseFloat(value);
    previousRemainingBalance.innerText = remainingBalance;
    if (value > balanceAmount) {
      catchElement("para-three").style.display = "block";
      previousSaving.innerText = "";
      previousRemainingBalance.innerText = "";
      return;
    } else {
      catchElement("para-three").style.display = "none";
    }
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
