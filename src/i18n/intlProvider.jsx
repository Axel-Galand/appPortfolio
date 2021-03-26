import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';

// const messages = require('./message.json');
const messages = 'leo'

const I18nProvider = ({children, lang}) => {
    const [locale, setLocale] = useState(lang);
    const localizedMessage = messages[locale];

    return(
        <IntlProvider
            locale={locale}
            messages={localizedMessage}
            textComponent={React.Fragment}
        >
            {
                children({
                    setLocale
                })
            }
        </IntlProvider>
    );
}

export default I18nProvider;