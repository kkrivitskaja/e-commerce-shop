import { Component } from 'react';
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
        const { showModalWindow } = this.props.storageVar;

        return (
            <>
                {showModalWindow && (
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
                                {this.props.children}
                            </div>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default withStorage(BaseModalWindow);
