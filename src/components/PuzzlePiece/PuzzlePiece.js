import React, { Component } from 'react';
import './PuzzlePiece.style.scss';

export default class PuzzlePiece extends Component {
    constructor(props) {
        super(props);
        this.handleClickPuzzlePiece = this.handleClickPuzzlePiece.bind(this);

        this.isEmpty = !this.props.num;
    }

    handleClickPuzzlePiece() {
        this.props.onClick();
    }

    render() {
        return (
            <>
                <div 
                    className="field__puzzlePiece" 
                    key={this.props.num}
                    data-empty={this.isEmpty ? true : false}
                    style={{ 
                        left: `${this.props.row*10}rem`, 
                        top: `${this.props.line*10}rem`,
                        width: "10rem",
                        height: "10rem",
                    }}
                    onClick={this.handleClickPuzzlePiece}
                >
                    {this.props.num}
                </div>
            </>
        );
    }
}
