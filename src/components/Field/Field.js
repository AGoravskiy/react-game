import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import PuzzlePiece from '../PuzzlePiece/PuzzlePiece'
import './Field.style.scss';

export default class Field extends Component {
    constructor(props) {
        super(props);
        this.puzzlePieces = [];
        this.handleClickPuzzlePiece = this.handleClickPuzzlePiece.bind(this);
    }

    handleClickPuzzlePiece() {
        const emptyPiece = this.puzzlePieces.find((piece) => piece.props.num === 0);
        console.log(emptyPiece);
    }

    createPuzzlePieces() {
        for (let i = 0; i < (this.props.gameSize * this.props.gameSize); i++) {
            const row = i % this.props.gameSize;
            const line = i === 0 ? 0 : (i - row) / this.props.gameSize;
            this.puzzlePieces.push(
                <PuzzlePiece
                    num = {this.props.randomNumSequence[i]}
                    row = {row}
                    line = {line}
                    gameSize = {this.props.gameSize}
                    onClick = {this.handleClickPuzzlePiece}
                />
            )
        }
        return this.puzzlePieces;
    }

    render() {
        return (
            <>
                <div className="field">
                    <Menu isMenuOpen={this.props.isMenuOpen} onNewGameClick={this.props.onNewGameClick}/>
                    {this.props.randomNumSequence === null ? undefined : this.createPuzzlePieces()}
                </div>
            </>
        );
    }
}
