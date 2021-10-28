let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
});

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo(
        '#Robot',
        {
            y: 2.5,
        },
        {
            y: -2.5,
        }
    )
    .to(
        '#Shadow',
        {
            scale: 0.75,
        },
        '<'
    );

const btnFast = document.querySelector('.js-fast');
const btnNormal = document.querySelector('.js-normal');
const btnSlow = document.querySelector('.js-slow');

btnFast.onclick = () => tl.timeScale(2);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(0.5);

const pause = document.querySelector('.js-pause');

pause.onclick = () => {
    if (tl.paused()) tl.play();
    else tl.pause();
};
