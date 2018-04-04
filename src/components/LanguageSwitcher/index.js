import React from 'react';
import LanguageItem from './LanguageItem';
import languageData from './data';

const LanguageSwitcher = ({switchLanguage}) => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list language-list">
            <ul className="list-unstyled">
                {languageData.map((language, index) => <LanguageItem key={index} language={language}
                                                                     switchLanguage={switchLanguage}/>)}
            </ul>
        </div>
    )
};

export default LanguageSwitcher;

