$(document).ready(function() {
  $("#calculate-change").click(e => {
    e.preventDefault();
    const amountDue = Number($("#amount-due").val());
    const amountReceived = Number($("#amount-received").val());
    handleCalculateChange(amountDue, amountReceived);
  });
});

const handleCalculateChange = (cost, payment) => {
  $("#dollars-output").empty();
  $("#quarters-output").empty();
  $("#dimes-output").empty();
  $("#nickels-output").empty();
  $("#pennies-output").empty();
  // $("#amount-due").val("");
  // $("#amount-received").val("");

  let change = (payment - cost) * 1000;

  if (change < 0) {
    alert("Insufficient Funds");
  }

  const coinTypes = ["dollars", "quarters", "dimes", "nickels", "pennies"];
  const coinValues = [1000, 250, 100, 50, 10];

  var amount;

  for (var i = 0; i < coinValues.length; i++) {
    amount = Math.floor(change / coinValues[i]);
    if (amount > 0) {
      $(`#${coinTypes[i]}-output`).append(`${amount}`);
      change = change % coinValues[i];
    } else {
      $(`#${coinTypes[i]}-output`).append("0");
    }
  }
};
