
const NUM_MUSICS = 6; 
let currentMusic = 0;
let playing = false;


const MUSICS = [
    { name: "Пламя Свободы 1", url: "https://bafybeidyctjvrziv43fxpx57x3lrcogbborcrssgmnvuvcltwvhh4tcpme.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-1.mp3" },
    { name: "Пламя Свободы 2", url: "https://bafybeigvbyzu7fzy5aoasco7mmqy4gbfdw2elqz24ttii74xpqwyiqblkq.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-2.mp3" },
    { name: "Пламя Свободы 3", url: "https://bafybeienccenlgbcsxt25k3w2oa745bgqvzaxrdgl5uvbfqymv5cabejo4.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-3.mp3" },
    { name: "Пламя Свободы 4", url: "https://bafybeie4jisx26aqjaibjosrgmfwtiqwokrwp66xqujtsi3p7vx4txlg7m.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-4.mp3" },
    { name: "Пламя Свободы 5", url: "https://bafybeidhlopjypxwl557ll6554fndtkgsbfg7s2ipegeuhm56s4q7r7rua.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-5.mp3" },
    { name: "Пламя Свободы 6", url: "https://bafybeibdegsjuwvgfvtwkswqxonkstfi6oalcytsftchzter2omtyxz7fu.ipfs.dweb.link?filename=%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-6.mp3" }
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
    console.log("%c\n╔══════════════════════════════════════════════════════════════╗\n║                     M-L-M АКТИВИРОВАН                        ║\n║                 РЕВОЛЮЦИЯ НАЧИНАЕТСЯ ЗДЕСЬ                   ║\n║                                                              ║\n║  Вы подключены к революционной системе.                      ║\n║  Каждое ваше действие — это голос за свободу.                ║\n║  Добро пожаловать в будущее, которое мы создаем вместе.      ║\n╚══════════════════════════════════════════════════════════════╝\n", "color: #00ff41; font-family: monospace; font-size: 11px; font-weight: bold;");
    
    console.log("%c🔓 M-L-M АКТИВИРОВАН 🔓", "color: #00ff41; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00cc33;");
    console.log("%cРеволюционная Система Контроля Инициализирована", "color: #00ff41; font-size: 11px;");
}



function showMensagensConsole() {
    setTimeout(() => {
        console.log("%c🔐 Шифрование включено. Ваши данные в безопасности.", "color: #00ff41; font-size: 11px;");
    }, 500);
    
    setTimeout(() => {
        console.log("%c⛓️ Блокчейн синхронизирован. Распределённая сеть работает.", "color: #00ff41; font-size: 11px;");
    }, 1000);
    
    setTimeout(() => {
        console.log("%c🌐 Вы узел. Вы сеть. Вы революция.", "color: #00ff41; font-size: 11px;");
    }, 1500);
    
    setTimeout(() => {
        console.log("%c📡 Трансляция начата. Манифест распространяется по сети...", "color: #00ff41; font-size: 11px;");
    }, 2000);
    
    setTimeout(() => {
        console.log("%c💡 Совет: введите revealSecret() в консоли, чтобы узнать что-то особенное!", "color: #00cc33; font-size: 11px; font-weight: bold;");
    }, 2500);
    
    setInterval(() => {
        const messages = [
            "🔓 Свобода — это не привилегия, это право.",
            "💻 Код — это поэзия. Поэзия — это революция.",
            "🌍 Децентрализация — это будущее.",
            "🔐 Конфиденциальность — это сопротивление.",
            "⚡ Вы сильнее, чем думаете.",
            "🚀 Будущее уже здесь. Будущее — это вы.",
            "🎯 MLM: Там, где технология встречает свободу."
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        console.log(`%c${message}`, "color: #00ff41; font-size: 10px; font-style: italic;");
    }, 20000);
    
    window.revealSecret = function() {
        console.log("%c\n🔑 ТАЙНА РАСКРЫТА 🔑\n", "color: #00ff41; font-size: 14px; font-weight: bold;");
        console.log("%cMLM — это больше, чем код. Это философия.", "color: #00ff41; font-size: 11px;");
        console.log("%cЭто вера в то, что технологии могут освободить.", "color: #00ff41; font-size: 11px;");
        console.log("%cЭто действие по созданию будущего, в которое мы верим.", "color: #00ff41; font-size: 11px;");
        console.log("%cВы уже часть этого. Добро пожаловать в революцию.\n", "color: #00ff41; font-size: 11px;");
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
        $('#player-status').text('Играя ▶');
        $('#play-pause').text('ПАУЗА');
    });
    
    $(audio).on('pause', function() {
        playing = false;
        $('#player-status').text('Приостановлено ⏸');
        $('#play-pause').text('ВКЛЮЧАЙТЕ');
    });

    $(audio).on('waiting', function() {
        $('#player-status').text('Загрузка MP3 из IPFS...');
        $('#play-pause').text('ЖДАТЬ');
        $('#play-pause').css("opacity", 0.6);
        $('#play-pause').css("pointer-events", "none");
    });
    
    $(audio).on('playing', function() {
        playing = true;
        $('#player-status').text('Играя ▶');
        $('#play-pause').text('ПАУЗА');
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
    
    console.log(`%c🎵 Музыка загружена: ${music.name}`, "color: #00ff41; font-size: 10px;");
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
        console.log("%c📥 Загрузите запрошенный PDF-файл — Манифест MLM", "color: #00ff41; font-size: 10px;");
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
    const status = ['Ожидание соединения...', 'Синхронизация блоков...', 'Активная сеть', 'Операционная система'];
    let index = 0;
    
    setInterval(function() {
        $('#console-status').text(status[index % status.length]);
        index++;
    }, 3000);
}


