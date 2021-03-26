import React, { useEffect} from 'react';

import fadeInFadeOutScroll from '../style/fadeInFadeOutScroll';
import {vertFadeInScroll} from '../style/verticalFadeInPresentation';

import StarBackground from '../style/starTwinklingEffect';
import PresentationComponent from '../components/home/PresentationComponent';
import IntroComponent from '../components/home/school/IntroComponent';

import SchoolComponent from '../components/home/school/SchoolComponent';
import {SchoolDescriptorComponent, SchoolDescriptorViewOfLife, SchoolDescriptorOneParticularMoment} from '../components/home/school/SchoolDescriptorComponent'

import ArianneComponent from '../components/ArianneComponent';


const HomeScreen = props => {

    useEffect(() => {
        fadeInFadeOutScroll("#curriculum", "+=750");
        fadeInFadeOutScroll("#school", "+=750");
        vertFadeInScroll("#jupiter_planet");
    }, []);

    return(
        <div className="HomeScreen wrapper">
            <StarBackground className="w-full min-h-full h-full h-screen min-h-screen"/>
            <PresentationComponent/>
            <IntroComponent/>
            <SchoolComponent/>
            <SchoolDescriptorComponent/>
            <SchoolDescriptorViewOfLife/>
            <SchoolDescriptorOneParticularMoment/>
            <ArianneComponent/>
        </div>
    );
}


export default HomeScreen;