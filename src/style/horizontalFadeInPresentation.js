import {TweenMax, Power3} from 'gsap';


const horFadeInPres = (item, duration, delay) => {
    TweenMax.fromTo(item, duration, {
        opacity: 0,
        x: -30
    },
    {
        opacity:1,
        x:0,
        ease: Power3.easeOut
    }).delay(delay);
}

export default horFadeInPres;