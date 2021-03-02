import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name">New game</h2>
                        </li>
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name">Load game</h2>
                        </li>
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name">Save game</h2>
                        </li>
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name">Best results</h2>
                        </li>
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name">Settings</h2>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}
