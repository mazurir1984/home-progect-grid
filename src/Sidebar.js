import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="aMenu" href="/">
                HOME
            </a>
            <a className="aMenu" href="/">
                ABOUT
            </a>
            <a className="aMenu" href="/">
                PORTFOLIO
            </a>
            <a className="aMenu" href="/">
                BLOG
            </a>
            <a className="aMenu" href="/">
                CONTACT
            </a>
        </Menu>
    );
};