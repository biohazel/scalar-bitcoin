const phrases = [
    "Inspiring the new generation of Bitcoin developers.",
    "Freedom takes a lot of effort.",
    "We are here to change the world.",
    "Start small, then scale."
];

let currentPhrase = 0;
let currentChar = 0;
let typingSpeed = 50;
let blinkDuration = 500 / 2; // Each blink (on and off) takes half a second
let totalBlinks = 6; // 6 blinks in total

function type() {
    let typingContainer = document.querySelector('.typing-animation');
    if (!typingContainer) return;

    if (currentChar < phrases[currentPhrase].length) {
        // Type each character of the phrase
        typingContainer.textContent += phrases[currentPhrase][currentChar];
        currentChar++;
        setTimeout(type, typingSpeed);
    } else {
        // Start cursor blinking after finishing the sentence
        blinkCursor(typingContainer, totalBlinks);
    }
}

function blinkCursor(container, blinksLeft) {
    if (blinksLeft > 0) {
        // Toggle cursor visibility
        container.style.borderRight = container.style.borderRight === 'none' ? '3px solid #fff' : 'none';
        setTimeout(() => blinkCursor(container, blinksLeft - 1), blinkDuration);
    } else {
        // After blinking, erase the text and move to the next sentence
        container.style.borderRight = '3px solid #fff'; // Ensure cursor is visible
        eraseAndTypeNext(container);
    }
}

function eraseAndTypeNext(container) {
    container.textContent = '';
    currentChar = 0;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, blinkDuration); // Start typing the next sentence after a short pause
}

type(); // Start the typing effect
