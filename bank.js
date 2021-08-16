// deposit 

document.getElementById('deposit-button').addEventListener('click',function(){

    const depositInput = document.getElementById('deposit-input');
    const inputValue = parseFloat(depositInput.value);

    const depositText = document.getElementById('deposit-text');
    const previousDepositAmount = depositText.innerText;
    const previousAmount = parseFloat(previousDepositAmount);
    const newDepositTotal = previousAmount + inputValue;

   

    depositText.innerText = newDepositTotal;


// total balance
   const totalBalance = document.getElementById('total-balance');
   
   const totalBalanceText = totalBalance.innerText;
   const previousBalanceTotal = parseFloat(totalBalanceText);
   const newBalanceTotal = previousBalanceTotal + inputValue;

   totalBalance.innerText = newBalanceTotal


   depositInput.value = '';

});

// withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){

const withdrawInput = document.getElementById('withdraw-input');
const withdrawInputValue = parseFloat(withdrawInput.value);
const withdrawText = document.getElementById('withdraw-text');
const withdrawAmount = parseFloat(withdrawText.innerText);
const withdrawTotal = withdrawInputValue + withdrawAmount;
withdrawText.innerText = withdrawTotal;

const withdraw = document.getElementById('total-balance');
const withdrawInner = parseFloat(withdraw.innerText);
const newWithdraw = withdrawInner - withdrawInputValue;

withdraw.innerText = newWithdraw;

withdrawInput.value = '';
})