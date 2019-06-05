const words = document.getElementById('words');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.interimResults = true;
let p = document.createElement('p');
words.appendChild(p);

rec.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
    console.log(transcript);
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});

rec.addEventListener('end', rec.start);

rec.start();