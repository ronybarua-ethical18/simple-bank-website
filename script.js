// login button event handler
const login = document.getElementById('login');
login.addEventListener('click', function () {
    const loginBtn = document.getElementById('login-area');
    loginBtn.style.display = "none";
    const transaction = document.getElementById('transaction-area');
    transaction.style.display = 'block';
})

// deposit button event handler
const deposit = document.getElementById('addDeposit');
deposit.addEventListener('click', function () {
    const depositNumber = getInput("depositAmount");
    updateSpanText("currentBalance", depositNumber);
    updateSpanText("currentDeposit", depositNumber);
    document.getElementById('depositAmount').value = "";
});

 // withdraw button event handler 
 const withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click', function () {
    const withdrawNumber = getInput('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = "";
})
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}
function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
