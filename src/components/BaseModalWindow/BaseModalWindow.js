import { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { closeModalWindow } from '../../views/modals/modalActions';
import withStorage from '../../helpers/withStorage';

import styles from './BaseModalWindow.module.scss';

class BaseModalWindow extends Component {
    onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                closeModalWindow();
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
        const { isModalWindow, modalMessage } = this.props.storageVar;

        return (
            isModalWindow &&
            ReactDOM.createPortal(
                <>
                    <div
                        className={classNames(styles['modal'], {
                            [styles['modal--active']]: isModalWindow,
                        })}
                        onClick={closeModalWindow}
                    >
                        <div
                            className={classNames(styles['modal__content'], {
                                [styles['modal__content--active']]: isModalWindow,
                            })}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {modalMessage}
                        </div>
                    </div>
                </>,
                document.getElementById('modal')
            )
        );
    }
}
BaseModalWindow.propTypes = {
    showModalWindow: PropTypes.bool,
    modalMessage: PropTypes.element,
};

export default withStorage(BaseModalWindow);
