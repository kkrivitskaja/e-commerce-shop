import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './Modal.module.scss';
class Modal extends Component {
    modalReft = React.createRef();

    onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                this.props.onClose();
                break;
            default:
                break;
        }
    };

    handleClickOutside = (event) => {
        if (this.modalReft.current && !this.modalReft.current.contains(event.target)) {
            this.props.onClose();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const { cart, overlay } = this.props;
        return ReactDOM.createPortal(
            <>
                {!cart && (
                    <div
                        onClick={this.props.onClose}
                        className={styles['modal']}
                        ref={this.modalReft}
                    >
                        {this.props.children}
                    </div>
                )}
                {cart && (
                    <div ref={this.cartRef} className={styles['modal']}>
                        {this.props.children}
                    </div>
                )}

                <div
                    className={classNames(styles['overlay'], {
                        [styles['overlay--dark']]: overlay,
                    })}
                />
            </>,
            document.getElementById(this.props.id)
        );
    }
}

export default Modal;
