import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';
import WorkScreen from './WorkScreen';

import {ME_PATH, WORK_PATH, ABOUT_PATH, CONTACT_PATH} from '../constants/App';

const GenericScreen = props => {
    return (
        <div className="GenericScreen">
            <Switch>
                <Route 
                exact path={ME_PATH}
                render={props => (<HomeScreen {...props}/>)}
                />
                <Route path={ABOUT_PATH}>
                    <AboutScreen/>
                </Route>
                <Route path={CONTACT_PATH}>
                    <ContactScreen/>
                </Route>
                <Route path={WORK_PATH}>
                    <WorkScreen/>
                </Route>
            </Switch>
        </div>
    );
}

export default GenericScreen;