
const NUM_MUSICS = 6; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "La Llama de la Libertad 1", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-1.mp3" },
    { name: "La Llama de la Libertad 2", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-2.mp3" },
    { name: "La Llama de la Libertad 3", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-3.mp3" },
    { name: "La Llama de la Libertad 4", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-4.mp3" },
    { name: "La Llama de la Libertad 5", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-5.mp3" },
    { name: "La Llama de la Libertad 6", url: "https://bafybeiffg7uxqndsorsberrniwm4lry3i5eyf3bywuwdrt2yahytjiaxe4.ipfs.dweb.link/La_Llama_de_la_Libertad-6.mp3" }
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
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M ACTIVADO                        ║\n║                 LA REVOLUCIÓN COMIENZA AQUÍ                   ║\n║                                                              ║\n║  Estás conectado a un sistema revolucionario.                ║\n║  Cada acción que tomas es un voto por la libertad.           ║\n║  Bienvenido al futuro que construimos juntos.                ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M ACTIVADO 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cSistema de Control Revolucionario Inicializado", "color: #00ff41; font-size: 11px;");
}


function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Cifrado activado. Tus datos están seguros.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Blockchain sincronizado. Red distribuida operativa.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 Eres un nodo. Eres la red. Eres la revolución.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Transmisión iniciada. Manifiesto propagándose por la red...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Consejo: Escribe revealSecret() en la consola para descubrir algo especial!", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 La libertad no es un privilegio, es un derecho.",
            "💻 El código es poesía. La poesía es revolución.",
            "🌍 La descentralización es el futuro.",
            "🔐 La privacidad es resistencia.",
            "⚡ Eres más poderoso de lo que piensas.",
            "🚀 El futuro es ahora. El futuro eres tú.",
            "🎯 MLM: Donde la tecnología encuentra la libertad."
        ];
        
        const mensaje = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${mensaje}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    
    window.revealSecret = function() {
        console.log("%c\n🔑 SECRETO REVELADO 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cMLM es más que código. Es una filosofía.", "color: #00ff41; font-size: 11px;");
        console.log("%cEs la creencia de que la tecnología puede liberar.", "color: #00ff41; font-size: 11px;");
        console.log("%cEs la acción de construir el futuro que creemos.", "color: #00ff41; font-size: 11px;");
        console.log("%cYa eres parte de esto. Bienvenido a la revolución.\n", "color: #00ff41; font-size: 11px;");
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
        $('#player-status').text('Reproduciendo ▶');
        $('#play-pause').text('PAUSA');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('Pausa ⏸');
        $('#play-pause').text('TOCAR');
    });
    
    $(audio).on('waiting', function() {
        $('#player-status').text('Cargando MP3 desde IPFS...');
        $('#play-pause').text('ESPERAR');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });
    
    $(audio).on('playing', function() {
        playing = true;
        $('#player-status').text('Reproduciendo ▶');
        $('#play-pause').text('PAUSA');
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
    
    console.log(`%c🎵 Música cargada: ${music.name}`, "color: #00ff41; font-size: 10px;");
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
        console.log("%c📥 Descarga el PDF solicitado: Manifiesto de MLM", "color: #00ff41; font-size: 10px;");
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
    const status = ['Esperando conexión...', 'Bloques de sincronización...', 'Red activa', 'Sistema operativo'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


