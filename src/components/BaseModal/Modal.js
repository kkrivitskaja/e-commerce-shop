import { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';
class Modal extends Component {
    onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                this.props.onClose();
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
    }

    render() {
        return ReactDOM.createPortal(
            <>
                <div className={styles['overlay']} onClick={this.props.onClose} />
                <div onClick={this.props.onClose} className={styles['modal']}>
                    {this.props.children}
                </div>
            </>,
            document.getElementById(this.props.id)
        );
    }
}

export default Modal;
