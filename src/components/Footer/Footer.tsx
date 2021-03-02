import React, { Component } from 'react';

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
                        <img src="./assets/images/rs_school_js.svg" alt="rs"/>
                    </a>
                    <a 
                        className="footer-github"
                        href='https://rs.school/react/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="./assets/icons/git.png" alt="git"/>
                    </a>
                </div>
            </>
        );
    }
}
