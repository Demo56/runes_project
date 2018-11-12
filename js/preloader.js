function preloader() {


    const wrapperEl = document.querySelector('.loader');
    const numberOfEls = 90;
    const duration = 6000;
    const delay = duration / numberOfEls;

    var tl = anime.timeline({
        duration: delay,
        complete: function () {
            tl.restart();
        }
    });

    function createEl(i) {
        var el = document.createElement('div');
        const rotate = (360 / numberOfEls) * i;
        const translateY = -50;
        const hue = Math.round(360 / numberOfEls * i);
        el.classList.add('el');
        el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
        el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
        tl.add({
            begin: function () {
                anime({
                    targets: el,
                    backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
                    rotate: [rotate + 'deg', rotate + 10 + 'deg'],
                    translateY: [translateY + '%', translateY + 10 + '%'],
                    scale: [1, 1.25],
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    duration: duration * .1
                });
            }
        });
        wrapperEl.appendChild(el);
    };

    preloader = document.getElementById('.loader');
    for (var i = 0; i < numberOfEls; i++) createEl(i);
    function fadeOutnojquery(el) {
        el.style.opacity = 1;
        preloader = setInterval(function () {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(preloader());
                preloader().style.display = "none";
            }
        }, 16);
    }

    window.onload = function () {
        setTimeout(function () {
            fadeOutnojquery(preloader());
        }, 1000);
    };
}



