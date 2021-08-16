function getInputId (input){
    const inputFild = document.getElementById(input);
    const inputText = inputFild.value;
    const inputTotal = parseFloat(inputText);
    inputFild.value = '';
    return inputTotal;
};

function gertInnerFind (ineer,amount){
    const ineerFild = document.getElementById(ineer);
    const ineerText = ineerFild.innerText;
    const ineerTotal = parseFloat(ineerText);
    ineerFild.innerText =  ineerTotal + amount;
}

function getBalanceFild (banlace,bankBalance){
    const balanceFild = document.getElementById('balance_total');
    const balanceText = balanceFild.innerText;
    const balanceTotal = parseFloat(balanceText);
    if(bankBalance == true){
        balanceFild.innerText = balanceTotal + banlace;
    } 
    else{
        balanceFild.innerText = balanceTotal - banlace;
    }
};


document.getElementById('deposit_button').addEventListener('click', function(){
    
    const deposit = getInputId('deposit_input');
    if(deposit > 0){
        gertInnerFind('deposit_taka', deposit);
        getBalanceFild(deposit, true);
    }
});

document.getElementById('withdraw_button').addEventListener('click', function(){

    const withDraw = getInputId('withdraw_input');
    if(withDraw > 0){
        gertInnerFind('withdraw_blance', withDraw);
        getBalanceFild(withDraw, false);
    }

});