import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="header__time__move__wrapper">
                        <div className="header__timer">
                            <h2 className="header__timer-title">
                                Time:
                            </h2>
                            <h2 className="header__timer-value">
                                00:00
                            </h2>
                        </div>
                        <div className="header__moves">
                            <h2 className="header__timer-title">
                                Moves:
                            </h2>
                            <h2 className="header__timer-value">
                                0
                            </h2>
                        </div>
                    </div>
                    <h2 className="header__menu">
                        Menu
                    </h2>
                </div>
            </>
        );
    }
}
