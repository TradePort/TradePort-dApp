import React from 'react';


const messageHandlers = {};

const showMessage = (type, content, duration) => {
    const messageKey = new Date();

    const handleClose = () => {
        delete messageHandlers[messageKey];
    }

    const handleDismiss = () => {
        if (messageHandlers[messageKey]) {
            messageHandlers[messageKey]();
            handleClose();
        }
    }

    const messageBody = (
        <span>
            {content}
        </span>
    );

    messageHandlers[messageKey] = message[type](messageBody, duration, handleClose);
    return handleDismiss;
};

export default showMessage;