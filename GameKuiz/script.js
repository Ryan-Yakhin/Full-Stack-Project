// DOM elements (fix id)
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("kuiz-screen");
const resultScreen = document.getElementById("hasil-screen");

const startButton = document.getElementById("bmulai");
const questionText = document.getElementById("pertanyaan");
const answersContainer = document.getElementById("container-jawaban");

const currentQuestionSpan = document.getElementById("nomor-pertanyaan");
const totalQuestionsSpan = document.getElementById("total-pertanyaan");
const scoreSpan = document.getElementById("hasil");

const finalScoreSpan = document.getElementById("skor-akhir");
const maxScoreSpan = document.getElementById("max-skor");
const resultMessage = document.getElementById("pesan-akhir");

const restartButton = document.getElementById("bulang");
const progressBar = document.getElementById("progress");

// data
const pertanyaan = [
    {
        soal:"Apa nama ibukota indonesia",
        jawaban:["Bogor","Papua","Surabaya","Jakarta"],
        benar:3
    },
    {
        soal:"Bahasa Inggris Jeruk",
        jawaban:["Apple","Orange","Papaya","Coconut"],
        benar:1
    },
    {
        soal:"Negara terkecil di dunia ?",
        jawaban:["Russia","Indonesia","Vatikan","Portugal"],
        benar:2
    },
    {
        soal:"3 + 2 x 5 = ?",
        jawaban:[13,25,50,33],
        benar:0
    },
];

// state
let indexSaatIni = 0;
let nilai = 0;

totalQuestionsSpan.textContent = pertanyaan.length;
maxScoreSpan.textContent = pertanyaan.length;

// event
startButton.addEventListener("click", startKuiz);
restartButton.addEventListener("click", restartKuiz);

function startKuiz(){
    indexSaatIni = 0;
    nilai = 0;
    scoreSpan.textContent = nilai;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion(){
    const q = pertanyaan[indexSaatIni];

    currentQuestionSpan.textContent = indexSaatIni + 1;

    const progresPercent = (indexSaatIni / pertanyaan.length) * 100;
    progressBar.style.width = progresPercent + "%";

    questionText.textContent = q.soal;

    answersContainer.innerHTML = "";

    q.jawaban.forEach((jawaban, index) => {
        const btn = document.createElement("button");
        btn.textContent = jawaban;

        btn.addEventListener("click", () => pilihJawaban(index));
        answersContainer.appendChild(btn);
    });
}

function pilihJawaban(indexDipilih){
    const q = pertanyaan[indexSaatIni];

    if(indexDipilih === q.benar){
        nilai++;
        scoreSpan.textContent = nilai;
    }

    indexSaatIni++;

    if(indexSaatIni < pertanyaan.length){
        showQuestion();
    } else {
        tampilHasil();
    }
}

function tampilHasil(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = nilai;

    if(nilai === pertanyaan.length){
        resultMessage.textContent = "Sempurna!";
    } else if(nilai > 2){
        resultMessage.textContent = "Lumayan!";
    } else {
        resultMessage.textContent = "Coba lagi!";
    }
}

function restartKuiz(){
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");
}