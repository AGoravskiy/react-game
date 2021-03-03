import React, { Component } from 'react';
import './Game.scss';
import Header from '../Header/Header';
import Field from '../Field/Field';
import Footer from '../Footer/Footer';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
      timerId: 0,
      time: '00:00',
      puzzlePieces: [],
      gameSize: 4,
      movesValue: 0,
      randomNumSequence: null,
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickNewGame = this.handleClickNewGame.bind(this);

    this.menu = React.createRef();
    this.timer = React.createRef();
    this.steps = React.createRef();
    this.timerId = null;
    this.timerValueSecond = 0;
    this.timerValueMinutes = 0;
    this.numSequence = [];
  }

  handleClickMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
    if (this.state.isMenuOpen) {
      this.timerId = setInterval(() => this.showTimer(this.timer.current), 1000);
    } else {
      clearInterval(this.timerId);
    }
  }

  handleClickNewGame() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
    if (this.timerId) {
      clearInterval(this.timerId);
      this.setState({time: '00:00'});
      this.timerValueSecond = 0;
      this.timerValueMinutes = 0;
    }
    this.timerId = setInterval(() => this.showTimer(this.timer.current), 1000);
    this.generatePuzzle();
  }

  showTimer(timer) {
    const addZero = (value) => {
      return (parseInt(value, 10) < 10 ? '0' : '') + value;
    }

    this.timerValueSecond++;
    if (this.state.timerValueSecond % 60 === 0) {
      this.timerValueSecond = 0;
      this.timerValueMinutes++;
    }
    this.setState({time: `${addZero(this.timerValueMinutes)}:${addZero(this.timerValueSecond)}`});
  }

  generateRandomSequence(sequence) {
    return sequence.sort(() => Math.random() - 0.5);
  }

  isValidSequence(sequence) {
    console.log(sequence);
    let sum = 0;
    for (let i = 1; i < sequence.length - 1; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (sequence[j] === 0) {
          sum += Math.ceil((j + 1) / this.gameSize);
        }
        if (sequence[j] > sequence[i]) {
          sum++;
        }
      }
    }
    console.log(sum);
    return !(sum % 2);
  }

  generatePuzzle() {
    this.numSequence = [...Array(this.state.gameSize * this.state.gameSize).keys()];
    let randomNumSequence = this.generateRandomSequence(this.numSequence);
    console.log(randomNumSequence);
    while (this.isValidSequence(randomNumSequence)) {
      randomNumSequence = this.generateRandomSequence(this.numSequence);
    }
    this.setState({ randomNumSequence });
  }

  

  render() {
    return (
      <>
        <h1 className="title">
          15-Puzzle
        </h1>
        <Header 
          onClick={this.handleClickMenu} 
          time={this.state.time}
        />
        <Field 
          isMenuOpen={this.state.isMenuOpen} 
          randomNumSequence = {this.state.randomNumSequence}
          gameSize = {this.state.gameSize}
          puzzlePieces={this.state.puzzlePieces} 
          menuRef ={this.menu}

          onNewGameClick={this.handleClickNewGame}
        />
        <Footer />
      </>
    );
  }
}
