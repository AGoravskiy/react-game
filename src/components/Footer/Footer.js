import React, { Component } from 'react';
import './Footer.style.scss';
import rs_icon from '../../assets/images/rs_school_js.svg';
import git_icon from '../../assets/images/git.png';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <a 
                        className="footer-school" 
                        href='https://rs.school/react/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={rs_icon} alt="rs"/>
                    </a>
                    <a 
                        className="footer-github"
                        href='https://rs.school/react/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={git_icon} alt="git"/>
                    </a>
                </div>
            </>
        );
    }
}
