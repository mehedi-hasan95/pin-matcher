function getPin () {
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4) {
        return pin;
    } else {
        return getPin ();
    }
}

function genaratePin () {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('pin-display');
    displayPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumber = document.getElementById('type-number');
    const prevNumber = typeNumber.value;
    if(isNaN(number)) {
        if(number==='C') {
            typeNumber.value = '';
        } else if (number === '<') {
            const digits = prevNumber.split('')
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumber.value = remainingDigits;
        }
    } else {
        const newNumber = prevNumber + number
        typeNumber.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const inputNumber =  document.getElementById('type-number');
    const inputCurrentNumber = inputNumber.value;
    inputNumber.value = '';
    const machPin = document.getElementById('pin-display');
    const machCurrentPin = machPin.value;
    const displayBtn = document.getElementById('sucess-btn');
    const hideBtn = document.getElementById('fail-btn');
    if(inputCurrentNumber === machCurrentPin) {
        displayBtn.style.display = 'block'
        hideBtn.style.display = 'none'
    } else {
        hideBtn.style.display = 'block'
        displayBtn.style.display = 'none'
    }
});