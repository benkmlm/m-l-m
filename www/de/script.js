
const NUM_MUSICS = 6; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "D'Flamme vo de Freiheit 1", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-1.mp3" },
    { name: "D'Flamme vo de Freiheit 2", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-2.mp3" },
    { name: "D'Flamme vo de Freiheit 3", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-3.mp3" },
    { name: "D'Flamme vo de Freiheit 4", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-4.mp3" },
    { name: "D'Flamme vo de Freiheit 5", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-5.mp3" },
    { name: "D'Flamme vo de Freiheit 6", url: "https://bafybeiblnzj7zhm2yajo4ewslwxtjfnsznjwvgv3e5i5evjpr4jfqgpmxi.ipfs.dweb.link/D_Flamme_vo_de_Freiheit-6.mp3" }
];


$(document).ready(function() {
    showBannerConsole();
    startMatrixRain();
    startPlayer();
    startEventos();
    startMenu();
    updateStatusConsole();
    showMensagensConsole();
});


function startMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }
    
    function drawMatrixRain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrixRain, 50);
    
    $(window).on('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


function startMenu() {
    const menuToggle = $('#menu-toggle');
    const menuNavigation = $('#menu-navigation');
    const menuLinks = $('.menu-link');
    
    menuToggle.on('click', function() {
        menuNavigation.toggleClass('menu-visible');
    });
    
    menuLinks.on('click', function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        menuNavigation.removeClass('menu-visible');
        
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });
    
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#menu-navigation, #menu-toggle').length) {
            menuNavigation.removeClass('menu-visible');
        }
    });
}

function showBannerConsole() {
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M AKTIVIERT                          ║\n║                 DIE REVOLUTION BEGINNT HIER                  ║\n║                                                              ║\n║  Du bist mit einem revolutionären System verbunden.          ║\n║  Jede deiner Handlungen ist eine Stimme für die Freiheit.    ║\n║  Willkommen in der Zukunft, die wir gemeinsam erschaffen.    ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M AKTIVIERT 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cRevolutionäres Kontrollsystem Initialisiert", "color: #00ff41; font-size: 11px;");
}


function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Verschlüsselung aktiviert. Ihre Daten sind sicher.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Blockchain synchronisiert. Verteiltes Netzwerk in Betrieb.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 Du bist ein Knoten. Du bist das Netzwerk. Du bist die Revolution.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Übertragung gestartet. Manifest verbreitet sich im Netzwerk...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Tipp: Tippe revealSecret() in die Konsole, um etwas Besonderes zu entdecken!", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 Freiheit ist kein Privileg, sondern ein Recht.",
            "💻 Code ist Poesie. Poesie ist Revolution.",
            "🌍 Dezentralisierung ist die Zukunft.",
            "🔐 Privatsphäre ist Widerstand.",
            "⚡ Du bist mächtiger, als du denkst.",
            "🚀 Die Zukunft ist jetzt. Die Zukunft bist du.",
            "🎯 MLM: Wo Technologie auf Freiheit trifft."
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${message}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    window.revealSecret = function() {
        console.log("%c\n🔑 GEHEIMNIS ENTHÜLLT 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cMLM ist mehr als Code. Es ist eine Philosophie.", "color: #00ff41; font-size: 11px;");
        console.log("%cEs ist der Glaube, dass Technologie befreien kann.", "color: #00ff41; font-size: 11px;");
        console.log("%cEs ist die Tat, die Zukunft zu gestalten, an die wir glauben.", "color: #00ff41; font-size: 11px;");
        console.log("%cDu bist schon Teil davon. Willkommen zur Revolution.\n", "color: #00ff41; font-size: 11px;");
    };
}





function startPlayer() {
    const audio = $('#player-audio')[0];
    
    updateMusic();
    
    $(audio).on('ended', function() {
        playing = true;
        nextMusic();
    });
    
    $(audio).on('play', function() {
        playing = true;
        $('#player-status').text('Spielen ▶');
        $('#play-pause').text('PAUSE');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('Pausiert ⏸');
        $('#play-pause').text('PLAY');
    });

    $(audio).on('waiting', function() {
        $('#player-status').text('MP3 wird von IPFS geladen...');
        $('#play-pause').text('WARTEN');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });

    $(audio).on('playing', function() {
        playing = true;
        $('#player-status').text('Spielen ▶');
        $('#play-pause').text('PAUSE');
        $('#play-pause').css("opacity", 1);
        $('#play-pause').css("pointer-events", "");
    });
}

function updateMusic() {
    const audio = $('#player-audio')[0];
    const music = MUSICS[currentMusic];
    
    audio.src = music.url;
    $('#music-current-name').text(`[${currentMusic + 1}/${NUM_MUSICS}] ${music.name}`);
    
    $('#download-music').attr('href', music.url);
    $('#download-music').attr('download', `${music.name}.mp3`);
    
    console.log(`%c🎵 Musik geladen: ${music.name}`, "color: #00ff41; font-size: 10px;");
}

function nextMusic() {
    currentMusic = (currentMusic + 1) % NUM_MUSICS;
    updateMusic();
    
    if (playing) {
        $('#player-audio')[0].play();
    }
}

function musicAnterior() {
    currentMusic = (currentMusic - 1 + NUM_MUSICS) % NUM_MUSICS;
    updateMusic();
    
    if (playing) {
        $('#player-audio')[0].play();
    }
}

function togglePlayPause() {
    const audio = $('#player-audio')[0];
    
    if (playing) {
        audio.pause();
    } else {
        audio.play();
    }
}

function startEventos() {
    
    $('#play-pause').on('click', togglePlayPause);
    $('#next').on('click', nextMusic);
    $('#previous').on('click', musicAnterior);
    
    
    $('#download-pdf').on('click', function(e) {
        console.log("%c📥 Laden Sie das angeforderte PDF herunter – MLM-Manifest", "color: #00ff41; font-size: 10px;");
    });
    

    
    $('.button-continue, .seta-continue').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
}

function updateStatusConsole() {
    const status = ['Warten auf Verbindung...', 'Blöcke werden synchronisiert...', 'Aktives Netzwerk', 'Betriebssystem'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


