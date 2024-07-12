document.addEventListener('DOMContentLoaded', init);

function init() {
    const bgm = document.getElementById('bgm');
    const bgmIcon = document.getElementById('bgm-icon');
    let nihahahaSoundSrc = './sounds/nihahaha.ogx';
    let uwahSoundSrc = './sounds/uwah.ogx';
    let isBgmOn = false;

    document.getElementById('bgm-toggle').addEventListener('click', (e) => {
        e.stopPropagation();  // Prevents click event from propagating to the body
        toggleBgm();
    });
    
    document.body.addEventListener('click', (e) => handleBodyClick(e));

    function toggleBgm() {
        isBgmOn = !isBgmOn;
        if (isBgmOn) {
            bgm.play();
            bgmIcon.src = './img/bgm_on.png';
        } else {
            bgm.pause();
            bgmIcon.src = './img/bgm_off.png';
        }
    }

    function handleBodyClick(event) {
        if (event.target.id === 'bgm-icon') return;  // Ensure the click on BGM icon does not spawn another icon
        const iconType = Math.random() < 0.9 ? 'nihahaha' : 'uwah';
        playSound(iconType);
        addIcon(event, iconType);
    }

    function playSound(type) {
        const sound = new Audio(type === 'nihahaha' ? nihahahaSoundSrc : uwahSoundSrc);
        sound.play();
    }

    function addIcon(event, iconType) {
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.style.left = `${event.clientX}px`;
        icon.style.top = `${event.clientY}px`;
        icon.src = `./img/${iconType}.png`;
        document.body.appendChild(icon);
    }
}
