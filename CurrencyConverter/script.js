const currencyEl = document.getElementById("currency");
const convertEl = document.getElementById("convert");

const exchangeRate= document.getElementById("exchange-rate")

const inputCurEl = document.getElementById("curinput");
const inputConEl = document.getElementById("conOutput");

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/7ae4d8f8f175d153280c0eb4/latest/${currencyEl.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[convertEl.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${currencyEl.value} = ${rate + " " +convertEl.value}`;
    
        const amount = parseFloat(inputCurEl.value);
        inputConEl.value = (amount * rate).toFixed(2);
    });

}

currencyEl.addEventListener("change", updateRate);
convertEl.addEventListener("change", updateRate);
inputCurEl.addEventListener("input", updateRate)
 