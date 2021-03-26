import React from 'react';

const IntroComponent = () => {
    return(
        <>
        <section className="container display-presentation trigger-intro-presentation">
            <div id="curriculum" className="flex justify-center">
                <section>
                    <h1 className="text-4xl font-medium tracking-wide">
                        <span className="text-white">
                            <span className="text-warning">void</span> show_my_life(<span className="text-warning">guest_t</span> you);
                        </span>
                    </h1>
                    <div className="text-grey tracking-wider mt-3">
                        <p><span className="font-medium">#typedef </span> curriculum_vitae <span className="text-warning">my_sweet_life_t</span></p>
                    </div>
                </section>
            </div>
        </section>
        </>
    );
}

export default IntroComponent;