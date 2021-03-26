import React, { useState, useEffect, useRef } from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {ME_PATH, WORK_PATH, ABOUT_PATH, CONTACT_PATH, NAV_BAR_LABELS} from '../constants/App';
import * as CSS_PROPS from '../constants/properties';
import horFadeIn from '../style/horizontalFadeIn';

const AppScreen = props => {
    const [currentScreen, setCurrentScreen] = useState(NAV_BAR_LABELS[0]);
    let currentScreenLabel = useRef(null);

    const changeCurrent = (newLabel) => {
        setCurrentScreen(newLabel);
    }

    useEffect(() => {
        horFadeIn(currentScreenLabel, 1, 0);
    }, [currentScreen]);

    return(
        <div className={CSS_PROPS.NAV_CONTAINER_CONTENT_CENTER_FIXED}>
            <div className="grid grid-cols-7 fixed w-11/12 pt-8 z-10">
                <div className="col-start-1 text-xl subpixel-antialiased font-semibold text-warning text-opacity-75 tracking-wide" ref={element => currentScreenLabel = element}>
                    {currentScreen}
                </div>
                <Grid
                    className="col-start-6 col-span-2"
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                        <Link 
                        to={ME_PATH} 
                        className={(currentScreen === NAV_BAR_LABELS[0]) ? CSS_PROPS.LABEL_NAV_ACTIVE : CSS_PROPS.LABEL_NAV} 
                        title="Home sweet home" 
                        onClick={() => changeCurrent(NAV_BAR_LABELS[0])}>{NAV_BAR_LABELS[0]}</Link>
                        <Link 
                        to={ABOUT_PATH} 
                        className={(currentScreen === NAV_BAR_LABELS[1]) ? CSS_PROPS.LABEL_NAV_ACTIVE : CSS_PROPS.LABEL_NAV}
                        title="It is the story of my life"
                        onClick={() => changeCurrent(NAV_BAR_LABELS[1])}>{NAV_BAR_LABELS[1]}</Link>
                        <Link 
                        to={WORK_PATH} 
                        className={(currentScreen === NAV_BAR_LABELS[2]) ? CSS_PROPS.LABEL_NAV_ACTIVE : CSS_PROPS.LABEL_NAV}
                        title="Personal projects"
                        onClick={() => changeCurrent(NAV_BAR_LABELS[2])}>{NAV_BAR_LABELS[2]}</Link>
                        <Link 
                        to={CONTACT_PATH} 
                        className={(currentScreen === NAV_BAR_LABELS[3]) ? CSS_PROPS.LABEL_NAV_ACTIVE : CSS_PROPS.LABEL_NAV}
                        title="Contact me ;)"
                        onClick={() => changeCurrent(NAV_BAR_LABELS[3])}>{NAV_BAR_LABELS[3]}</Link>
                </Grid>
            </div>
            <div className="ChildrenComponent w-full">
                {props.children}
            </div>
        </div>
    );
}

export default AppScreen;