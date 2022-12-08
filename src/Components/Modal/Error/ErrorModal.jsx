import React from 'react'
import ReactDOM  from 'react-dom';
import classname from './ErrorModal.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

export const ErrorModal = (props) => {

    const closeModalHandler = (e) => {
        props.onClose(true);
    };
    
    const Backdrop = (props) => {
        return <div className={classname.backdrop} onClick = {closeModalHandler} />
    }
    
    const ModalOverlay = (props) => {
        return <Card className={classname.modal}>
    
        <div className={classname.header}>
            <h2>{props.err.title}</h2>
        </div>
        <div className={classname.content}>
            <p>{props.err.message}</p>
        </div>
        <div className={classname.actions}>
            <Button onClick={closeModalHandler}>Okay</Button>
        </div>
    </Card>
    }
 

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={closeModalHandler} />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay err={props.err} />,
                document.getElementById('overlay-root')
            )}
        </>
            
    )
}
