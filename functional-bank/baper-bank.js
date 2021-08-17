/* function getInputID(inputId){
  const inputBanlance = parseFloat( document.getElementById(inputId).value);
  document.getElementById(inputId).value = '';
  return inputBanlance;
}

function updateBalance(liftingId,inputBanlance){
    const previousAmount = parseFloat(document.getElementById(liftingId).innerText);
    return (document.getElementById(liftingId).innerText = previousAmount + inputBanlance);
}

document.getElementById('deposit-button').addEventListener('click', function(){

    const inputBanlance =  getInputID('deposit-input');
    updateBalance('deposit-total',inputBanlance);
    updateBalance('balance-total',inputBanlance);

});

document.getElementById('withdraw-button').addEventListener('click', function(){

    const inputBanlance =  getInputID('withdraw-input');
    updateBalance('withdraw-total',inputBanlance);
    updateBalance('balance-total', -inputBanlance);

}); */


/*    function getInputID(inputId){
       const inputid = parseFloat(document.getElementById(inputId).value);
       document.getElementById(inputId).value = '';
       return inputid;
   }

   function updateBalance(liftingId,balance){

    const previousAmount = parseFloat(document.getElementById(liftingId).innerText);
    return (document.getElementById(liftingId).innerText = previousAmount + balance);

   }

   document.getElementById('deposit-button').addEventListener('click',function(){

    const balance = getInputID('deposit-input');
    updateBalance('deposit-total',balance);
    updateBalance('balance-total',balance);

   });
   document.getElementById('withdraw-button').addEventListener('click',function(){

    const balance = getInputID('withdraw-input');
    updateBalance('withdraw-total',balance);
    updateBalance('balance-total',-balance);

   }); */


function getBalanceTotal(inputid){
    const depositInput = document.getElementById(inputid);
    const depositValue = parseFloat(depositInput.value);
    return depositValue;

}

function amountTotal(liftingId,amount){

    const balanceTotal = document.getElementById(liftingId);
    const balanceTotalValue = parseFloat(balanceTotal.innerText);
    const totalAmount = balanceTotalValue + amount;
    return balanceTotal.innerText = totalAmount;

}








document.getElementById('deposit-button').addEventListener('click', function(){

/* const depositInput = document.getElementById('deposit-input');
const depositValue = parseFloat(depositInput.value);
const depositText = document.getElementById('deposit-total');
const depositInner = parseFloat(depositText.innerText);
const deppostiTotal = depositInner + depositValue;
depositText.innerText = deppostiTotal;  */

/* const balanceTotal = document.getElementById('balance-total');
const balanceTotalValue = parseFloat(balanceTotal.innerText);
const totalAmount = balanceTotalValue + depositValue;
balanceTotal.innerText = totalAmount;

depositInput.value = ''; */
const amount = getBalanceTotal('deposit-input');
amountTotal('deposit-total',amount)
amountTotal('balance-total',amount)

});

document.getElementById('withdraw-button').addEventListener('click', function(){

/* const withdrawInput = document.getElementById('withdraw-input');
const withdrawValue = parseFloat(withdrawInput.value);
const withdrawText = document.getElementById('withdraw-total');
const withdrawInner = parseFloat(withdrawText.innerText);
const withdrawTotal = withdrawInner + withdrawValue;
withdrawText.innerText = withdrawTotal;

const balanceTotal = document.getElementById('balance-total');
const balanceInner = parseFloat(balanceTotal.innerText);
const amountTotal = balanceInner - withdrawValue;
balanceTotal.innerText = amountTotal; 

withdrawInput.value = '';
 */

const amount = getBalanceTotal('withdraw-input');
amountTotal('withdraw-total',amount)
amountTotal('balance-total',-amount)

});