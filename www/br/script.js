
const NUM_MUSICS = 6; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "A Chama da Liberdade 1", url: "https://bafybeiep66iosli2tw2ge6h4qp2x4xbcodhzg5s3mu3b7ymt23nyppmv5u.ipfs.dweb.link?filename=A_Chama_da_Liberdade-1.mp3" },
    { name: "A Chama da Liberdade 2", url: "https://bafybeieclzttipz3y67znk7swfw6ya7h6smwlsvl2hy3jbtj526uxpbydm.ipfs.dweb.link?filename=A_Chama_da_Liberdade-2.mp3" },
    { name: "A Chama da Liberdade 3", url: "https://bafybeibyeatiqksaffjuk5wvz2c4nwgtdwat5aen2ezvxirphzndysacsi.ipfs.dweb.link?filename=A_Chama_da_Liberdade-3.mp3" },
    { name: "A Chama da Liberdade 4", url: "https://bafybeifcxjy4bxzbjcgqoe5gtlrvxn3vkfc3l6l5djz27are7nhoj5utva.ipfs.dweb.link?filename=A_Chama_da_Liberdade-4.mp3" },
    { name: "A Chama da Liberdade 5", url: "https://bafybeicnuhhkrllpdvqdvycmq7kveh2np6fuvf5a4ddiudm3ufwsph6kpy.ipfs.dweb.link?filename=A_Chama_da_Liberdade-5.mp3" },
    { name: "A Chama da Liberdade 6", url: "https://bafybeifa6rz42j453fwfuneyqyukc7i4pbhzl74dfehaw74omncbqbqde4.ipfs.dweb.link?filename=A_Chama_da_Liberdade-6.mp3" }
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
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M ATIVADO                        ║\n║                 A REVOLUÇÃO COMEÇA AQUI                      ║\n║                                                              ║\n║  Você está conectado a um sistema revolucionário.            ║\n║  Cada ação sua é um voto pela liberdade.                     ║\n║  Bem-vindo ao futuro que construímos juntos.                 ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M ATIVADO 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cSistema de Controle Revolucionário Inicializado", "color: #00ff41; font-size: 11px;");
}

function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Criptografia ativada. Seus dados estão seguros.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Blockchain sincronizado. Rede distribuída operacional.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 Você é um nó. Você é a rede. Você é a revolução.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Transmissão iniciada. Manifesto propagando pela rede...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Dica: Digite revealSecret() no console para descobrir algo especial!", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 Liberdade não é um privilégio, é um direito.",
            "💻 Código é poesia. Poesia é revolução.",
            "🌍 Descentralização é o futuro.",
            "🔐 Privacidade é resistência.",
            "⚡ Você é mais poderoso do que pensa.",
            "🚀 O futuro é agora. O futuro é você.",
            "🎯 MLM: Onde a tecnologia encontra a liberdade."
        ];
        
        const mensagem = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${mensagem}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    
    window.revealSecret = function() {
        console.log("%c\n🔑 SEGREDO REVELADO 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cO MLM é mais do que código. É uma filosofia.", "color: #00ff41; font-size: 11px;");
        console.log("%cÉ a crença de que a tecnologia pode libertar.", "color: #00ff41; font-size: 11px;");
        console.log("%cÉ a ação de construir o futuro que acreditamos.", "color: #00ff41; font-size: 11px;");
        console.log("%cVocê já é parte disso. Bem-vindo à revolução.\n", "color: #00ff41; font-size: 11px;");
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
        $('#player-status').text('Tocando ▶');
        $('#play-pause').text('PAUSE');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('Pausado ⏸');
        $('#play-pause').text('PLAY');
    });

    $(audio).on('waiting', function() {
        $('#player-status').text('Carregando MP3 do IPFS...');
        $('#play-pause').text('AGUARDE');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });

    $(audio).on('playing', function() {
        playing = true;
        $('#player-status').text('Tocando ▶');
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
        console.log("%c📥 Download PDF solicitado - MLM Manifesto", "color: #00ff41; font-size: 10px;");
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
    const status = ['Aguardando Conexão...', 'Sincronizando Blocos...', 'Rede Ativa', 'Sistema Operacional'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


