import React from 'react'
import classname from './ErrorModal.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

export const ErrorModal = () => {

    return (
        <div className={classname.backdrop}>
            <Card className={classname.modal}>

                <div className={classname.header}>
                    <h2>Invalid input</h2>
                </div>
                <div className={classname.content}>
                    <p>Please enter a valid age</p>
                </div>
                <div className={classname.actions}>
                    <Button>Okay</Button>
                </div>
            </Card>
        </div>
    )
}
