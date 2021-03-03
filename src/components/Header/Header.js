import React, { Component } from 'react';
import './Header.style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return (
            <>
                <div className="header">
                    <div className="header__time__move__wrapper">
                        <div className="header__timer">
                            <h2 className="header__timer-title">
                                Time:
                            </h2>
                            <h2 className="header__timer-value" >
                                {this.props.time}
                            </h2>
                        </div>
                        <div className="header__moves">
                            <h2 className="header__timer-title">
                                Moves:
                            </h2>
                            <h2 className="header__timer-value" ref={this.props.stepsRef}>
                                0
                            </h2>
                        </div>
                    </div>
                    <h2 className="header__menu" onClick={this.handleClick}>
                        Menu
                    </h2>
                </div>
            </>
        );
    }
}