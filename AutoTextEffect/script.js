const containerEl = document.querySelector(".container");

const temp = ["Web Developer", "Freelancer", "Albatroz"];

let tempIndex = 0;
let charIndex = 0;

updateText();

function updateText(){
    charIndex++;
    containerEl.innerHTML = `<h1>I am ${temp[tempIndex].slice(0,1) === "A" ? "an":"a"} 
                            ${temp[tempIndex].slice(0,charIndex)}</h1>`;
                            
    if(charIndex === temp[tempIndex].length){
        tempIndex++;
        charIndex = 0;
    }

    if(tempIndex === temp.length){
        tempIndex = 0;
    }

    setTimeout(updateText, 400)
};