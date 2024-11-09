const currencyFirstEl = document.getElementById('currency-first');
const currencySecondEl = document.getElementById('currency-second');
const worthFirstEl = document.getElementById('worth-first');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');

const updateRate = () => {
    fetch(` https://v6.exchangerate-api.com/v6/9db771ef39d2716da168c363/latest/${currencyFirstEl.value}`).then((res)=>res.json());
};

currencyFirstEl.addEventListener('change', updateRate);
currencySecondEl.addEventListener('change', updateRate);
worthFirstEl.addEventListener('input', updateRate);

// alert("hey bro");
