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
    'programs-description': 'The Scalar School was founded to accommodate a real need for early-stage Bitcoin developer training: to provide a solid theoretical foundation. We concentrate on comprehensive studies of \'Mastering Bitcoin\' and \'Mastering the Lightning Network,\' as these are essential textbooks for any developer aspiring to delve into more advanced programs like Chaincode Labs and Vinteum. Our frequent study sessions involve following the tutorials recommended in these books and holding group discussions, ensuring a thorough understanding of the concepts. Scalar also hosts developer meetups, such as Bitdevs Ribeirão Preto. We provide the foundational knowledge. You choose your path.',
    'title-bitcoinbook': 'bitcoinbook Study Group',
    'title-lnbook': 'lnbook Study Group',
    'apply-button-1': 'Apply',
    'apply-button-2': 'Apply',
    'apply-button-3': 'Next seminars',
    'team-title': 'Team',
    'title-founder': 'Founder | Executive Director',
    'title-cofounder1-name': 'To be announced...',
    'title-cofounder2-name': 'To be announced...',
    'sponsors-title': 'Sponsors',
    'name-sponsor1': 'To be announced...',
    'name-sponsor2': 'To be announced...',
    'name-sponsor3': 'To be announced...',
    'sponsors-description': 'If you wish to become a sponsor or support the project in any way, please',
    'contact-link': 'contact us.',
    'donate-title': 'Donate',
    'donate-description': 'The flourishing of Bitcoin, the Lightning Network, and other related free and open-source software is significantly enhanced by the positive aspects of decentralization and diversity. These technologies thrive best when there\'s a wide-ranging and globally distributed array of contributors, each bringing their unique perspectives and backgrounds to the table. Organizations like ours play a crucial role in harnessing this diversity. We focus on organizing fundraising, talent acquisition, and the efficient allocation of resources. Our efforts are fueled by donations from individuals and corporations who share our vision of diversifying the engineering talent in the Bitcoin ecosystem. This decentralized approach not only ensures a continuous stream of improvements to Bitcoin but also fosters the creation of tools that make it more accessible to everyone, everywhere. This inclusive approach is not just our strength; it\'s the very foundation of our mission.',
    'donate-button': 'Donate with Bitcoin',
    'footer-contact-link': 'Contact us',
    'footer-text': '© 2024 All Rights Reserved | Scalar School of Bitcoin Developers'
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
    'programs-description': 'A Escola Scalar foi fundada para atender a uma necessidade real de treinamento de desenvolvedores Bitcoin: fornecer uma base teórica sólida. Nosso foco é nos livros \'Mastering Bitcoin\' e \'Mastering the Lightning Network\', pré-requisitos essenciais para qualquer desenvolvedor que aspire se aprofundar em programas mais avançados como os da Chaincode Labs e Vinteum. Nossas sessões de estudo envolvem discutir e seguir os tutoriais recomendados nesses livros, garantindo uma compreensão completa dos conceitos. A Scalar também organiza encontros de desenvolvedores, como o Bitdevs Ribeirão Preto. Nós oferecemos o conhecimento fundamental. Você escolhe seu caminho.',
    'title-bitcoinbook': 'Estudos bitcoinbook',
    'title-lnbook': 'Estudos lnbook',
    'apply-button-1': 'Participar',
    'apply-button-2': 'Participar',
    'apply-button-3': 'Próximos seminários',
    'team-title': 'Equipe',
    'title-founder': 'Founder | Diretora Executiva',
    'title-cofounder1-name': 'Em breve...',
    'title-cofounder2-name': 'Em breve...',
    'donate-title': 'Doar',
    'sponsors-title': 'Patrocinadores',
    "name-sponsor1": 'Em breve...',
    "name-sponsor2": 'Em breve...',
    "name-sponsor3": 'Em breve...',
    'sponsors-description': 'Se você deseja se tornar um patrocinador ou apoiar o projeto de qualquer forma, por favor',
    'contact-link': 'entre em contato.',
    'donate-description': 'O florescimento do Bitcoin, da Lightning Network e de outros softwares livres e de código aberto é significativamente realçado pelos aspectos positivos da descentralização e diversidade. Estas tecnologias prosperam melhor quando há uma ampla e globalmente distribuída gama de colaboradores, cada um trazendo suas perspectivas e experiências únicas para a mesa. Organizações como a nossa desempenham um papel crucial no aproveitamento desta diversidade. Nosso foco está na organização de captação de recursos, aquisição de talentos e na eficiente alocação de recursos. Nossos esforços são alimentados por doações de indivíduos e corporações que compartilham nossa visão de diversificar o talento de engenharia no ecossistema do Bitcoin. Esta abordagem descentralizada não só garante um fluxo contínuo de melhorias no Bitcoin, mas também fomenta a criação de ferramentas que tornam a tecnologia mais acessível para todos, em qualquer lugar. Esta abordagem inclusiva não é apenas nossa força; é a própria fundação da nossa missão.',
    'donate-button': 'Doar em Bitcoin',
    'footer-contact-link': 'Fale conosco',
    'footer-text': '© 2024 Todos os Direitos Reservados | Scalar Escola de Desenvolvedores Bitcoin'
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
    const yOffset = -60; // Adjust based on your header height
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