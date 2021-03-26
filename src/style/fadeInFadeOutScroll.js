import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const fadeInFadeOutScroll =(id, duration) => {
    gsap.fromTo(id, {
        opacity: 0,
        translateX: -40
    }, 
        {   
            opacity: 1, 
            translateX: 0,
            duration: 3, 
            ease: Power3.easeOut,
            scrollTrigger: {
                pin: true,
                trigger: id,
                toggleActions: "play reverse play reverse",
                start: "top center",
                end: duration
            }
        });
}

export default fadeInFadeOutScroll;