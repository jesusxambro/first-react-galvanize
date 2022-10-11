import './App.css';
import React from 'react';
import { useState, useContext } from "react";




class GroceryListItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state ={
            done:true,
            itemName: this.props.name
            // key:this.props.key
        };
    }

    onMouseHover(){
        this.setState({
            done: !this.state.done
        })
    }


    render() {
        let style = {
            fontWeight: this.state.done ? "normal" : "bold"
        }
        return (
            <li  key={this.itemName} style={style} onMouseOver={this.onMouseHover.bind(this)} onMouseLeave={this.onMouseHover.bind(this)}>
                {this.state.itemName}
            </li>
        );
    }
}

class GroceryList extends React.Component {


    render(){
    const listToBuy = ["Cucumber", "Kale", "Tortillas"];

    const listOfItems = listToBuy.map((value,index) => {
        return(

            <GroceryListItem name={value} key={index}/>

        )
    })
        return (
            <ul >
                {listOfItems}
            </ul>
        )
    }
}

function App() {
  return (

    <GroceryList />

  );
}

export default App;
