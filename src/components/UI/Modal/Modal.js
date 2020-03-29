import React from 'react';

import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdop/Backdrop';

const modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vH)',
            opacity: props.show ? '1' : '0'
        }}
            className={classes.Modal}>
            {props.children}
        </div>
    </Aux>
);

export default modal;