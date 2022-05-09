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
            full,
            outlined,
            disabled,
            textWrap,
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
                        [styles['base-button--disabled']]: disabled,
                        [styles['base-button--full']]: full,
                        [styles['base-button--wrap']]: textWrap,
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
    full: PropTypes.bool,
    outlined: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    textWrap: PropTypes.bool,
    children: PropTypes.string,
};

export default BaseButton;
