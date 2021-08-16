

document.getElementById('submit-button').addEventListener('click',function(){

const email = document.getElementById('input-email');
const password = document.getElementById('input-password');

if(email.value == 'onebank@gmail.com' && password.value == 'onebank'){

    window.location.href = 'bank.html';
}

else{
   
    alert('please give real password');

}




})