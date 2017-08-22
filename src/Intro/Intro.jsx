import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    constructor(props){
        super(props);

        this.changeThing = this.changeThing.bind(this);
        this.changeFood = this.changeFood.bind(this);
    }

    changeThing() {
        this.props.changeThing();
    }

    changeFood() {
        this.props.changeFood();
    }

    render(props) {
        return (
        <div className="intro">
            <h1><span>Learn Spanish with Julio!</span></h1>
            <p>Select a topic to study by clicking a button below. Hover your
            mouse over the card to alternate between English and Spanish. Press the 
            button below the card to study a new word.
            </p>
            <div className="choices">
                <form action="/things">
                  <input type="submit" value="Various" />
                </form>
                <form action="/">
                  <input type="submit" value="Food" />
                </form>
            </div>
        </div>
        )
    }
}

export default Intro;