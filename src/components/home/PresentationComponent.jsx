import React, { useRef, useEffect } from 'react';

import Rocket from '../../svg/Rocket';
import horFadeInPres from '../../style/horizontalFadeInPresentation';
import {vertFadeInPres} from '../../style/verticalFadeInPresentation';

const PresentationComponent = () => {
    let titlePresentation = useRef(null);
    let contentPresentation = useRef(null);

    useEffect(() => {
        vertFadeInPres(titlePresentation, 3, 2.5);
        horFadeInPres(contentPresentation, 3,3.5);
    }, []);

    return(
        <section className="container display-presentation">
            <div className="flex justify-center">
                <Rocket/>
                <section>
                    <h1 className="text-6xl" ref={element => titlePresentation = element}>
                        <span className="text-white font-bold tracking-wide">skyso</span>
                        <span className="tracking-wide text-warning font-bold">.me( )</span>
                    </h1>
                    <div className="pt-3" ref={element => contentPresentation = element}>
                        <p className="text-warning tracking-wide">L&eacute;o Delpon</p>
                        <p className="text-white tracking-wider mt-3">Jeune &eacute;tudiant &agrave; la d&eacute;couverte</p>
                        <p className="text-white tracking-wider">de ce nouvel univers.</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default PresentationComponent;