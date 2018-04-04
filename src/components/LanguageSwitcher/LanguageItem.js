import React from 'react';


const LanguageItem = ({language, switchLanguage}) => {
    const {icon, name} = language;
    return (
        <li className="pointer" onClick={() => switchLanguage(language)}>
            <div className="d-flex align-items-center">
                <i className={`flag flag-32 flag-${icon}`}/>
                <h4 className="mb-0 ml-2">{name}</h4>
            </div>
        </li>
    );
};

export default LanguageItem;
