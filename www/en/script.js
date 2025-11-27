
const NUM_MUSICS = 7; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "The Flame of Freedom 1", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-1.mp3" },
    { name: "The Flame of Freedom 2", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-2.mp3" },
    { name: "The Flame of Freedom 3", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-3.mp3" },
    { name: "The Flame of Freedom 4", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-4.mp3" },
    { name: "The Flame of Freedom 5", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-5.mp3" },
    { name: "The Flame of Freedom 6", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-6.mp3" },
    { name: "The Flame of Freedom 7", url: "https://bafybeigzfxkgkz2ciztnzsq7wbagffu2beib3dqma7a452mknmscdzzsbe.ipfs.dweb.link/The_Flame_of_Freedom-7.mp3" }
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
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M ACTIVATED                          ║\n║                 THE REVOLUTION BEGINS HERE                   ║\n║                                                              ║\n║  You are connected to a revolutionary system.                ║\n║  Every action you take is a vote for freedom.                ║\n║  Welcome to the future we build together.                    ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M ACTIVATED 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cRevolutionary Control System Initialized", "color: #00ff41; font-size: 11px;");
}


function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Encryption enabled. Your data is secure.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Blockchain synchronized. Distributed network operational.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 You are a node. You are the network. You are the revolution.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Transmission started. Manifesto spreading through the network...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Tip: Type revealSecret() in the console to discover something special!", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 Freedom is not a privilege, it is a right.",
            "💻 Code is poetry. Poetry is revolution.",
            "🌍 Decentralization is the future.",
            "🔐 Privacy is resistance.",
            "⚡ You are more powerful than you think.",
            "🚀 The future is now. The future is you.",
            "🎯 MLM: Where technology meets freedom."
        ];
        
        const mensagem = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${mensagem}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    
    window.revealSecret = function() {
        console.log("%c\n🔑 SECRET REVEALED 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cMLM is more than code. It is a philosophy.", "color: #00ff41; font-size: 11px;");
        console.log("%cIt is the belief that technology can liberate.", "color: #00ff41; font-size: 11px;");
        console.log("%cIt is the act of building the future we believe in.", "color: #00ff41; font-size: 11px;");
        console.log("%cYou are already part of it. Welcome to the revolution.\n", "color: #00ff41; font-size: 11px;");
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
        $('#player-status').text('Playing ▶');
        $('#play-pause').text('PAUSE');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('Paused ⏸');
        $('#play-pause').text('PLAY');
    });
    
    $(audio).on('waiting', function() {
        $('#player-status').text('Loading MP3 from IPFS...');
        $('#play-pause').text('WAIT');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });
    
    $(audio).on('playing', function() {
        playing = true;
         $('#player-status').text('Playing ▶');
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
    
    console.log(`%c🎵 Music loaded: ${music.name}`, "color: #00ff41; font-size: 10px;");
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
        console.log("%c📥 Download the requested PDF - MLM Manifesto", "color: #00ff41; font-size: 10px;");
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
    const status = ['Waiting for Connection...', 'Synchronizing Blocks...', 'Active Network', 'Operating System'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


