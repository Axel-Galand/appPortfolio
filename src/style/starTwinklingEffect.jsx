import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import {TweenMax, Power3} from 'gsap';


const StarBackground = () => {
    const state = {
        num: 500,
        vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };

    let ref = useRef(null);
    
    const starryNight = () => {
        anime({
            targets: ["#sky .star"],
            opacity: [
            {
                duration: 700,
                value: "0"
            },
            {
                duration: 700,
                value: "1"
            }
            ],
            easing: "linear",
            loop: true,
            delay: (el, i) => 50 * i
        });
    };

    const starsAppearing = (item) => {
      TweenMax.fromTo(item, 1, {
          opacity: 0,
      },
      {
          opacity:1,
          ease: Power3.easeOut
      }).duration(3);
  }

    const shootingStars = () => {
        anime({
          targets: ["#shootingstars .wish"],
          easing: "linear",
          loop: true,
          delay: (el, i) => 2000 * i,
          opacity: [
            {
              duration: 700,
              value: "1"
            }
          ],
          width: [
            {
              value: "150px"
            },
            {
              value: "0px"
            }
          ],
          translateX: 350
        });
    };

    const randomRadius = () => {
        return Math.random() * 0.7 + 0.6;
    };

    const getRandomX = () => {
        return Math.floor(Math.random() * Math.floor(state.vw)).toString();
    };

    const getRandomY = () => {
        return Math.floor(Math.random() * Math.floor(state.vh)).toString();
    };
    
    useEffect(() => {
      starsAppearing(ref);
    }, []); 

    useEffect(() => {
        starryNight();
        shootingStars();
    });

    return(
      <>
          <svg className="w-full fixed m-0 p-0 z-0 overflow-hidden min-h-full h-full h-screen min-h-screen" id="sky" ref={element => ref = element}>
            {[...Array(state.num)].map((x, y) => (
              <circle
                cx={getRandomX()}
                cy={getRandomY()}
                r={randomRadius()}
                stroke="none"
                strokeWidth="0"
                fill="white"
                key={y}
                className="star"
              />
            ))}
          </svg>
          <div id="shootingstars">
            {[...Array(60)].map((x, y) => (
              <div
                key={y}
                className="wish"
                style={{
                  left: `${getRandomY()}px`,
                  top: `${getRandomX()}px`
                }}
              />
            ))}
          </div>
      </>
    );
}

export default StarBackground;