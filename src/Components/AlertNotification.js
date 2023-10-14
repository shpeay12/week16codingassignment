import React, { useState, useEffect } from 'react'; //Imports state and dependencies
import { Alert } from 'react-bootstrap';

function AlertNotification({ variant, message }) {
    const [show, setShow] = useState(true);

    useEffect(() => { //creates alert messages and clearout timer
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000); 
    
            return () => {
                clearTimeout(timer);
            };
        }
    }, [show]);

    return show ? ( //Renders alert messages
        <Alert variant={variant}>
            {message}
        </Alert>
    ) : null;
}

export default AlertNotification;
