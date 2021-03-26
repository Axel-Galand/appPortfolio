import React from 'react';
import './SchoolComponent.scss';

import AstronautFishing from '../../../svg/AstronautFishing';
import NeptuneComponent from '../../../svg/Neptune';

const SchoolComponent = props => {

    return(
        <>
        <section className="container display-presentation trigger-intro-presentation relative mb-52">
            <div id="school">
                <AstronautFishing/>
                    <div className="flex justify-center">
                        <section>
                            <h2 className="text-4xl font-medium tracking-wider">
                                <span className="text-white">
                                    StephenVille.Texas&#60;<span className="text-warning">2015 , 2016</span>&#62;( )
                                </span>
                            </h2>
                        </section>
                        <NeptuneComponent/>
                    </div>
            </div>
        </section>
        </>
    );
}

export default SchoolComponent;