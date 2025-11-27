
const NUM_MUSICS = 6; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "La Flamme de la Liberté 1", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-1.mp3" },
    { name: "La Flamme de la Liberté 2", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-2.mp3" },
    { name: "La Flamme de la Liberté 3", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-3.mp3" },
    { name: "La Flamme de la Liberté 4", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-4.mp3" },
    { name: "La Flamme de la Liberté 5", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-5.mp3" },
    { name: "La Flamme de la Liberté 6", url: "https://bafybeif2s6i2jyrmfk2qqrvrdiytdvq4ytrjvdev2i6525s2ujzlytr75e.ipfs.dweb.link/La_Flamme_de_la_Liberte-6.mp3" }
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
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M ACTIVÉ                             ║\n║                 LA RÉVOLUTION COMMENCE ICI                   ║\n║                                                              ║\n║  Vous êtes connecté à un système révolutionnaire.            ║\n║  Chacune de vos actions est un vote pour la liberté.         ║\n║  Bienvenue dans le futur que nous construisons ensemble.     ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M ACTIVÉ 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cSystème de Contrôle Révolutionnaire Initialisé", "color: #00ff41; font-size: 11px;");
}


function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Chiffrement activé. Vos données sont en sécurité.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Blockchain synchronisé. Réseau distribué opérationnel.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 Vous êtes un nœud. Vous êtes le réseau. Vous êtes la révolution.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Transmission démarrée. Manifeste se propageant sur le réseau...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Astuce : Tapez revealSecret() dans la console pour découvrir quelque chose de spécial !", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 La liberté n'est pas un privilège, c'est un droit.",
            "💻 Le code est de la poésie. La poésie est une révolution.",
            "🌍 La décentralisation est l'avenir.",
            "🔐 La vie privée est une résistance.",
            "⚡ Vous êtes plus puissant que vous ne le pensez.",
            "🚀 Le futur, c’est maintenant. Le futur, c’est vous.",
            "🎯 MLM : Où la technologie rencontre la liberté."
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${message}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    window.revealSecret = function() {
        console.log("%c\n🔑 SECRET RÉVÉLÉ 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cMLM est plus qu'un code. C'est une philosophie.", "color: #00ff41; font-size: 11px;");
        console.log("%cC'est la croyance que la technologie peut libérer.", "color: #00ff41; font-size: 11px;");
        console.log("%cC'est l'action de construire l'avenir auquel nous croyons.", "color: #00ff41; font-size: 11px;");
        console.log("%cVous en faites déjà partie. Bienvenue dans la révolution.\n", "color: #00ff41; font-size: 11px;");
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
        $('#player-status').text('Jouer ▶');
        $('#play-pause').text('PAUSE');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('En pause ⏸');
        $('#play-pause').text('JOUER');
    });
    
    $(audio).on('waiting', function() {
        $('#player-status').text('Chargement du fichier MP3 depuis IPFS...');
        $('#play-pause').text('ATTENDEZ');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });
    
    $(audio).on('playing', function() {
        playing = true;
        $('#player-status').text('Jouer ▶');
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
    
    console.log(`%c🎵 Música carregada: ${music.name}`, "color: #00ff41; font-size: 10px;");
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
        console.log("%c📥 Télécharger le PDF sollicité - Manifeste MLM", "color: #00ff41; font-size: 10px;");
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
    const status = ['En attente de connexion...', 'Synchronisation des blocs...', 'Réseau actif', 'Système opérateur'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


