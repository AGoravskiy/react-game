import React, { Component } from 'react';
import './Menu.style.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleClickNewGame = this.handleClickNewGame.bind(this);
    }

    handleClickNewGame() {
        this.props.onNewGameClick();
    }

    render() {
        return (
            <>
                <nav className={`${this.props.isMenuOpen ? 'nav' : 'nav close'}`} >
                    <ul className="nav__list">
                        <li className="nav__list__item">
                            <h2 className="nav__list__item-name" onClick={this.handleClickNewGame}>New game</h2>
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
