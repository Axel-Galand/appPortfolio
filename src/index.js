import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import AppScreen from './screen/AppScreen';
import GenericScreen from './screen/GenericScreen';
import I18nProvider from './i18n/intlProvider';

import {LOCAL_STORAGE_LANG_KEY, HOME_PATH} from './constants/App';

const DefaultLayout = ({component: Component, setLocale, ...rest}) => {
  return(
    <Route
      {...rest}
      render={matchProps => (
        <AppScreen>
          <Component {...matchProps}/>
        </AppScreen>
      )}
    />
  );
}


ReactDOM.render(
  <React.StrictMode>
    <I18nProvider lang={localStorage.getItem(LOCAL_STORAGE_LANG_KEY)}>
      {({setLocale}) => (
        <Router>
          <Switch>
            <DefaultLayout path={HOME_PATH} component={GenericScreen} setLocale={setLocale}/>
          </Switch>
        </Router>
      )}
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
