import { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
        const { showModalWindow, modalMessage } = this.props.storageVar;

        return (
            showModalWindow &&
            ReactDOM.createPortal(
                <>
                    <div
                        className={classNames(styles['modal'], {
                            [styles['modal--active']]: showModalWindow,
                        })}
                        onClick={closeModalWindow}
                    >
                        <div
                            className={classNames(styles['modal__content'], {
                                [styles['modal__content--active']]: showModalWindow,
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

export default withStorage(BaseModalWindow);
