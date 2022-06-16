import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './BaseButton.module.scss';

class BaseButton extends Component {
    render() {
        const {
            tag = 'button',
            type = 'primary',
            className,
            outlined,
            full,
            disabled,
            secondary,
            small,
            children,
            ...props
        } = this.props;
        const Component = tag;
        return (
            <Component
                className={classnames(
                    styles['base-button'],
                    styles[`base-button--${type}`],
                    {
                        [styles['base-button--outlined']]: outlined,
                        [styles['base-button--full']]: full,
                        [styles['base-button--disabled']]: disabled,
                        [styles['base-button--secondary']]: secondary,
                        [styles['base-button--small']]: small,
                    },
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
}

BaseButton.propTypes = {
    tag: PropTypes.oneOf(['button', 'a']),
    type: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
    outlined: PropTypes.bool,
    full: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    children: PropTypes.string,
};

export default BaseButton;
