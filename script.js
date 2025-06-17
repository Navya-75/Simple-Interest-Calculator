function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);
  const result = document.getElementById('result');

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    result.textContent = "Please fill in all fields with valid numbers.";
    return;
  }

  const interest = (principal * rate * time) / 100;
  result.textContent = `Simple Interest: ₹${interest.toFixed(2)}`;
}
