import {TweenMax, Power3, gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const vertFadeInPres = (item, duration, delay) => {
    TweenMax.fromTo(item, duration, {
        opacity: 0,
        y: -40
    },
    {
        opacity:1,
        y:0,
        ease: Power3.easeOut
    }).delay(delay);
}

export const vertFadeInScroll = (item) => {
    gsap.fromTo(item, {
        opacity: 0,
        translateX: -40
    }, 
        {   
            opacity: 1, 
            translateX: 0,
            duration: 3, 
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: item,
                once:true
            }
        });
}