
function totalDeposit_Withdraw(inputId){

    const depositInput = document.getElementById(inputId);
    const inputValue = parseFloat(depositInput.value);
    depositInput.value = '';
    return inputValue;
}

function updateTotalField(totalFieldId,deposit_withdraw_amount){

    const depositText = document.getElementById(totalFieldId);
    const previousDepositAmount = depositText.innerText;
    const previousAmount = parseFloat(previousDepositAmount);
    const newDepositTotal = previousAmount + deposit_withdraw_amount; 
    depositText.innerText = newDepositTotal;
 

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}



function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}





document.getElementById('deposit-button').addEventListener('click',function(){


const deposit_withdraw_amount = totalDeposit_Withdraw('deposit-input');

if(deposit_withdraw_amount > 0 ){
    updateTotalField('deposit-text',deposit_withdraw_amount);
    updateBalance(deposit_withdraw_amount, true);
}



});


document.getElementById('withdraw-button').addEventListener('click',function(){

    const depositAmount = totalDeposit_Withdraw('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (depositAmount > 0 && depositAmount < currentBalance) {
        updateTotalField('withdraw-text', depositAmount);
        updateBalance(depositAmount, false);
    }
    if (depositAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});