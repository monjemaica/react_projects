import React from 'react'
import classname from './ErrorModal.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

export const ErrorModal = (props) => {

    const closeModalHandler = (e) => {
         props.onClose(true);
    };

    return (
        <div className={classname.backdrop}>
            <Card className={classname.modal}>

                <div className={classname.header}>
                    <h2>Invalid input</h2>
                </div>
                <div className={classname.content}>
                    <p>{props.msg}</p>
                </div>
                <div className={classname.actions}>
                    <Button onClick={closeModalHandler}>Okay</Button>
                </div>
            </Card>
        </div>
    )
}
