// Selecting Elements 
const tipform = document.querySelector('#tip-form');


// Event listener 

tipform.addEventListener('change',tipcalculate);

// function 

function tipcalculate(e){
    const total = Number(document.querySelector('#totalBill').value) ;
    const range = document.querySelector('#tipInput').value;
    const tipshow = document.querySelector('#tipOutput');
    const amount = document.querySelector('#tipAmount');
    const result = document.querySelector('#results');
    const totalbill = document.querySelector('#totalBillWithTip');

    let tipAmount = (total * range) / 100;
    amount.value = tipAmount.toFixed(2);
    tipshow.innerHTML = `${range}%`;
    totalbill.value = (tipAmount + total).toFixed(2);
    result.style.display = 'block';
}
