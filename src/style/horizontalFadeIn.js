import {TweenMax, Power3} from 'gsap';


const horFadeIn = (item, duration, delay) => {
    TweenMax.fromTo(item, duration, {
        opacity: 0,
        x: 0
    },
    {
        opacity:1,
        x:30,
        ease: Power3.easeOut
    }).delay(delay);
}

export default horFadeIn;