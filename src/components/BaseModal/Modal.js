import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { closeDropdownList } from '../../views/modals/modalActions';
import withStorage from '../../helpers/withStorage';

import styles from './Modal.module.scss';
class Modal extends Component {
    modalReft = React.createRef();

    onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                closeDropdownList();
                break;
            default:
                break;
        }
    };

    handleClickOutside = (event) => {
        if (this.modalReft.current && !this.modalReft.current.contains(event.target)) {
            closeDropdownList();
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
        const { cart, overlay, children, id } = this.props;

        return ReactDOM.createPortal(
            <>
                {!cart && (
                    <div
                        onClick={closeDropdownList}
                        className={styles['modal']}
                        ref={this.modalReft}
                    >
                        {children}
                    </div>
                )}
                {cart && (
                    <>
                        <div
                            className={styles['modal']}
                            // ref={this.modalReft}
                            // onClick={closeDropdownList}
                        >
                            {children}
                        </div>
                    </>
                )}
                <div
                    className={classNames(styles['overlay'], {
                        [styles['overlay--dark']]: overlay,
                    })}
                />
            </>,
            document.getElementById(id)
        );
    }
}

Modal.propTypes = {
    cart: PropTypes.bool,
    overlay: PropTypes.bool,
    children: PropTypes.node,
    id: PropTypes.string,
};

export default withStorage(Modal);
