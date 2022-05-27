import { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            <>
                <div onClick={this.props.onClose} className={styles['modal']}>
                    {this.props.children}
                </div>
            </>,
            document.getElementById('portal')
        );
    }
}

export default Modal;
