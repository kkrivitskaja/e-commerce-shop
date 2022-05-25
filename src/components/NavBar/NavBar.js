import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './NavBar.module.css';

class NavBar extends Component {
    render() {
        const categories = this.props.category;
        return (
            <>
                <div className={styles['nav']}>
                    {categories.map((category) => (
                        <NavLink
                            to={`/categories/${category.name}`}
                            key={category.name}
                            className={({ isActive }) =>
                                classnames(styles['nav-link'], {
                                    [styles['nav-link--active']]: isActive,
                                })
                            }
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </>
        );
    }
}

NavBar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
};

export default NavBar;
