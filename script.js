// Define the text content for each language
const translationsEN = {
    'top-of-page': 'Home',
    'code-of-conduct': 'Code of Conduct',
    'programs-link': 'Programs',
    'team': 'Team',
    'sponsors': 'Sponsors',
    'donate': 'Donate',
    'window-title': 'Scalar School of Bitcoin Developers',
    'programs-title': 'Programs',
    'programs-description': 'The Scalar School was founded to accommodate a real need in early-stage Bitcoin developer training: establishing a strong theoretical foundation. We focus on in-depth studies of \'Mastering Bitcoin\' and \'Mastering the Lightning Network\', essential textbooks for developers aiming to tackle advanced programs like those offered by Chaincode Labs. Our frequent study sessions involve following the tutorials recommended in these books, facilitating group discussions to ensure a thorough understanding of the concepts. Additionally, Scalar actively fuels community growth and strengthening by hosting developer meetups, such as Bitdevs Ribeirão Preto. We provide the foundational knowledge. You choose your path.',
    'title-bitcoinbook': 'bitcoinbook Studies',
    'title-lnbook': 'lnbook Studies',
    'apply-button-1': 'Apply',
    'apply-button-2': 'Apply',
    'apply-button-3': 'Attend',
    'team-title': 'Team',
    'title-founder': 'Founder',
    'title-cofounder1-name': 'Rachel Rybarczyk',
    'title-cofounder2-name': 'To be announced...',
    'sponsors-title': 'Sponsors',
    'name-sponsor1': '',
    'name-sponsor2': '',
    'name-sponsor3': '',
    'sponsors-description': 'If you wish to become a sponsor or support the project in any way, please',
    'contact-link': 'contact us.',
    'donate-title': 'Donate',
    'donate-description': 'The prosperity of Bitcoin, the Lightning Network, and other related free and open-source software is significantly enhanced by the positive aspects of decentralization and diversity. These technologies thrive best when there\'s a wide-ranging and globally distributed array of contributors, each bringing their unique perspectives and backgrounds to the table. Organizations like ours play a crucial role in harnessing this diversity. We focus on organizing developer training, talent acquisition, fundraising, and the efficient allocation of resources. Our efforts are fueled by donations from individuals and corporations who share our vision of diversifying the engineering talent in the Bitcoin ecosystem. This decentralized approach not only ensures a continuous stream of improvements to Bitcoin but also fosters the creation of tools that make it more accessible to everyone, everywhere. This inclusive approach is not just our strength; it\'s the foundation of our mission.',
    'donate-button': 'Donate with Bitcoin',
    'footer-contact-link': 'Contact us',
    'footer-text': '2024 Scalar School — Coded with 🧡 by a junior developer.'
};

const translationsPT = {
    'top-of-page': 'Início',
    'code-of-conduct': 'Código de Conduta',
    'programs-link': 'Programas',
    'team': 'Equipe',
    'sponsors': 'Patrocinadores',
    'donate': 'Doar',
    'window-title': 'Scalar Escola de Desenvolvedores Bitcoin',
    'programs-title': 'Programas',
    'programs-description': 'A Escola Scalar foi fundada para atender a uma necessidade real no treinamento de desenvolvedores Bitcoin em estágios iniciais: estabelecer uma base teórica sólida. Concentramos nossos estudos aprofundados nos livros \'Mastering Bitcoin\' e \'Mastering the Lightning Network\', pré-requisitos essenciais para desenvolvedores que almejam enfrentar programas avançados, como os oferecidos pela Chaincode Labs. Nossas frequentes sessões de estudo envolvem seguir os tutoriais recomendados nesses livros, facilitando discussões em grupo para garantir uma completa compreensão conceitos. Além disso, a Scalar estimula ativamente o crescimento e fortalecimento da comunidade hospedando encontros de desenvolvedores, como o Bitdevs Ribeirão Preto. Nós oferecemos o conhecimento fundamental. Você escolhe seu caminho.',
    'title-bitcoinbook': 'Estudos bitcoinbook',
    'title-lnbook': 'Estudos lnbook',
    'apply-button-1': 'Participar',
    'apply-button-2': 'Participar',
    'apply-button-3': 'Participar',
    'team-title': 'Equipe',
    'title-founder': 'Fundadora',
    'title-cofounder1-name': 'Rachel Rybarczyk',
    'title-cofounder2-name': 'Em breve...',
    'donate-title': 'Doar',
    'sponsors-title': 'Patrocinadores',
    "name-sponsor1": '',
    "name-sponsor2": '',
    "name-sponsor3": '',
    'sponsors-description': 'Se você deseja se tornar um patrocinador ou apoiar o projeto de qualquer forma, por favor',
    'contact-link': 'entre em contato.',
    'donate-description': 'A prosperidade do Bitcoin, da Lightning Network e de outros softwares livres e de código aberto é significativamente ampliada pelos aspectos positivos da descentralização e diversidade. Estas tecnologias prosperam melhor quando há uma ampla e globalmente distribuída variedade de colaboradores, cada um trazendo suas perspectivas e experiências únicas para a mesa. Organizações como a nossa desempenham um papel crucial no aproveitamento desta diversidade. Nosso foco está na organização de treinamento e capacitação de desenvolvedores, aquisição de talentos, captação, e eficiente alocação de recursos. Nossos esforços são impulsionados por doações de indivíduos e empresas que compartilham nossa visão de diversificar o talento em engenharia no ecossistema do Bitcoin. Esta abordagem descentralizada não só garante um fluxo contínuo de melhorias no Bitcoin, mas também promove a criação de ferramentas que o tornam mais acessível para todos, em todos os lugares. Esta abordagem inclusiva não é apenas nossa força; é a própria base da nossa missão.',
    'donate-button': 'Doar em Bitcoin',
    'footer-contact-link': 'Fale conosco',
    'footer-text': '2024 Scalar School — Feito com 🧡 por uma desenvolvedora júnior.'
};

// Phrases for the typing animation
const phrasesEN = [
    "Inspiring the next generation of Bitcoin developers.",
    "Continental dimensions require continental efforts.",
    "We are here to change the world.",
    "Start small, then scale."
];

const phrasesPT = [
    "Inspirando a próxima geração de desenvolvedores Bitcoin.",
    "Dimensões continentais requerem esforços continentais.",
    "Estamos aqui para mudar o mundo.",
    "Comece pequeno, depois escale."
];

let currentLanguage = 'EN';
let phrases = phrasesEN;
let currentPhrase = 0;
let currentChar = 0;
let typingSpeed = 50;

function typeNextChar() {
    let typingContainer = document.querySelector('.code-content');
    if (currentChar < phrases[currentPhrase].length) {
        typingContainer.lastElementChild.textContent += phrases[currentPhrase][currentChar++];
        setTimeout(typeNextChar, typingSpeed);
    } else {
        currentPhrase++;
        if (currentPhrase < phrases.length) {
            addNewLineWithPrompt(typingContainer);
            currentChar = 0;
            setTimeout(typeNextChar, typingSpeed);
        }
    }
}

function addNewLineWithPrompt(typingContainer) {
    typingContainer.appendChild(document.createElement('br'));
    let newPrompt = document.createElement('span');
    newPrompt.className = 'static-prompt';
    newPrompt.textContent = 'scalar@bitcoin: ~$ ';
    typingContainer.appendChild(newPrompt);
}

function startTypingAnimation() {
    let typingContainer = document.querySelector('.code-content');
    typingContainer.innerHTML = '<span class="static-prompt">scalar@bitcoin: ~$ </span>';
    currentPhrase = 0;
    currentChar = 0;
    typeNextChar();
}

// Initialize the typing animation on page load
window.onload = function() {
    startTypingAnimation();
    updateText(); // To initialize text based on the default language
};

function scrollToTop() {
    window.scrollTo(0, 0);
}



function toggleLanguage() {
    currentLanguage = currentLanguage === 'EN' ? 'PT' : 'EN';
    document.getElementById('language-toggle').textContent = currentLanguage === 'EN' ? 'pt-BR' : 'en-US';
    updateText();
}

function updateText() {
    const translations = currentLanguage === 'EN' ? translationsEN : translationsPT;
    phrases = currentLanguage === 'EN' ? phrasesEN : phrasesPT;
    restartTypingAnimation();
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[id];
        }
    });
}

function restartTypingAnimation() {
    const typingContainer = document.querySelector('.code-content');
    typingContainer.innerHTML = '<span class="static-prompt">scalar@bitcoin: ~$ </span>';
    currentPhrase = 0;
    currentChar = 0;
    typeNextChar();
}

// Smooth scrolling to specific sections
function smoothScrollTo(elementId) {
    const yOffset = -80; // Height of the header, adjust accordingly
    const element = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}


document.getElementById('top-of-page').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('programs-link').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo('programs-section');
});

document.getElementById('team').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo('team-section');
});

// Add similar event listeners for 'Sponsors' and 'Donate'
document.getElementById('sponsors').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo('sponsors-section');
});

document.getElementById('donate').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo('donate-section');
});

document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

window.addEventListener('scroll', function() {
    const codeWindow = document.querySelector('.code-window');
    const programsSection = document.getElementById('programs-section');
    
    if (codeWindow && programsSection) {
        const programsPosition = programsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const startMoving = windowHeight - programsPosition;

        if (startMoving > 0) {
            codeWindow.style.transform = 'translate(-50%, -50%) translateY(-' + startMoving + 'px)';
        } else {
            codeWindow.style.transform = 'translate(-50%, -50%)';
        }
    }
});

document.getElementById('programs-link').addEventListener('click', function(event) {
    event.preventDefault();
    const programsSection = document.getElementById('programs-section');
    programsSection.scrollIntoView({ behavior: 'smooth' });
});