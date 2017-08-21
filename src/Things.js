import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import Button from './Button/Button';
import Intro from './Intro/Intro';
import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG} from './config/firebase/db_config.js';

class Things extends Component {
  constructor(props){
    super(props);
    

    this.state= {
      cards: [],
      currentCard: {},
      track: "things"
    }

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child("things");
    
    this.updateCard = this.updateCard.bind(this);
    this.switchThing = this.switchThing.bind(this);
    this.switchFood = this.switchFood.bind(this);    
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.val().id,
        eng: snap.val().eng,
        esp: snap.val().esp
      })

      this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
      })

    })

    
  }

  getRandomCard(currentCards){
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    console.log(this.state.track);
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  switchThing(){
    this.setState({
      track: "things"
    })
  }

  switchFood(){
    this.setState({
      track: "food"
    })
  }

  render() {
    return (
      <div className="App">
        <Intro changeFood={this.switchFood} changeThing={this.switchThing} />
        <div className="cardRow">
        <Card eng={this.state.currentCard.eng} esp={this.state.currentCard.esp}/>
        </div>
        <div className="buttonRow">
        <Button drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

export default Things;
