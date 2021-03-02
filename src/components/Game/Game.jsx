import React, { Component } from 'react';
import Header from '../Header/Header';
import Field from '../Field/Field';
import Footer from '../Footer/Footer';

export default class Game extends Component {

    render() {
        return (
            <>
                <h1 className="title">
                    15-Puzzle
                </h1>
                <Header />
                <Field />
                <Footer />
            </>
        );
    }
}
