import {TweenMax, Power3} from 'gsap';


const increaseHeight = (item, duration, delay) => {
    TweenMax.fromTo(item, duration, {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top"
    },
    {
        opacity:1,
        scaleY:1,
        ease: Power3.easeOut
    }).delay(delay);
}

export default increaseHeight;