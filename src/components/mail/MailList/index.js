import React from 'react';
import MailListItem from './MailListItem';

const MailList = ({mails, onMailSelect, onMailChecked, onStartSelect}) => {
    return (
        <div className="module-list mail-list">
            <div className="module-list-scroll">
                {mails.map((mail, index) =>
                    <MailListItem key={index} mail={mail} onMailSelect={onMailSelect} onMailChecked={onMailChecked}
                                  onStartSelect={onStartSelect}/>
                )}
            </div>
        </div>
    )
};

export default MailList;