import React from 'react';
import './SchoolDescriptorComponent.scss';
import EarthComponent from '../../../svg/Earth';
import JupiterComponent from '../../../svg/Jupiter';
import BlackHoleComponent from '../../../svg/BlackHole';
import RedRocket from '../../../svg/RedRocket';
import CubeComponent from '../../../svg/Cube';

export const SchoolDescriptorComponent = () => {
    return(
        <section id="school-presentation" className="container display-presentation trigger-intro-presentation mb-72 relative mt-96">
                    <EarthComponent/>
                    <JupiterComponent/>
            <div className="ml-60 flex justify-center">
                <section className="w-2/3 relative z-50">
                    <h2 className="text-5xl font-medium tracking-wider ">
                        <span className="text-white">
                            Pendant pr&egrave;s de 10 mois, j'ai pu d&eacute;velopper <span className="text-warning">mes comp&eacute;tences transversales</span>
                        </span>
                    </h2>
                    <div className="text-grey tracking-wider mt-3">
                        <span className="font-medium">
                            J'ai pu d&eacute;couvrir de nombreuses choses comme le Football Am&eacute;ricain, le Baseball,
                            un point de vue sur l'&eacute;ducation diff&eacute;rent
                        </span>
                    </div>
                </section>
            </div>
        </section>
    )
}

export const SchoolDescriptorViewOfLife = () => {
    return(
        <section id="school-presentation" className="container display-presentation trigger-intro-presentation mb-72 relative">
            <BlackHoleComponent/>
            <div className="ml-60 flex justify-center">
                <section className="w-2/3 relative">
                <RedRocket/>
                    <h2 className="text-5xl font-medium tracking-wider">
                        <span className="text-white">
                            Lorsque j'étais en "High School", j'ai pu m'am&eacute;liorer en termes de <span className="text-warning">travail d'équipe</span>.
                        </span>
                    </h2>
                    <div className="text-grey tracking-wider mt-3">
                        <span className="font-medium">
                            Lorsque je jouais dans l'équipe de football, j'ai pu d&eacute;couvrir ce qu'&eacute;tait la vraie
                            d&eacute;termination, la volont&eacute; de gagner, d'entreprendre et de guider.
                        </span>
                    </div>
                </section>
            </div>
            <CubeComponent/>
        </section>
    )
}

export const SchoolDescriptorOneParticularMoment = () => {
    return(
        <section id="school-presentation" className="container display-presentation trigger-intro-presentation mb-72">
            <div className="ml-60 flex justify-center">
                <section className="w-2/3">
                    <h2 className="text-5xl font-medium tracking-wider">
                        <span className="text-white">
                            Merci encore à
                            <span className="text-warning"> STS Foundation</span> pour cette exp&eacute;rience !
                        </span>
                    </h2>
                    <div className="text-grey tracking-wider mt-3">
                        <span className="font-medium">
                            Merci &eacute;galement à ma famille d'accueil de m'avoir "adopt&eacute;" le temps d'une petite
                            ann&eacute;e
                        </span>
                    </div>
                </section>
            </div>
        </section>
    )
}