import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";
import { Input } from "./input.js";
import { rooms } from "./rooms.js";
import { parser } from "./parser.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      messages: []
    };
  }

  componentDidMount() {
    this.setState({
      messages: [
        this.generateLocationText(
          this.findRoom(this.state.position).description
        )
      ]
    });
  }

  parse = string => {
    const newState = parser({
      string: string,
      state: this.state,
      onPositionChange: this.onPositionChange
    });
    this.setState(newState);
  };

  findRoom = position => {
    return rooms[position[0]][position[1]];
  };

  generateLocationText = description => {
    return `[${this.state.position[0]}, ${
      this.state.position[1]
    }] ${description}`;
  };

  onPositionChange = newPosition => {
    const newState = this.state;
    const currentRoom = this.findRoom(newPosition);
    newState.position = newPosition;
    newState.messages.push(this.generateLocationText(currentRoom.description));
    this.setState(newState);
  };

  render() {
    const messages = this.state.messages.map(message => {
      return <Message>{message}</Message>;
    });

    return (
      <div className="App">
        <View>{messages}</View>
        <Input
          parse={this.parse}
          onPositionChange={this.onPositionChange}
          zIndex={2}
        />
      </div>
    );
  }
}

const View = styled.ul`
  padding: 10px;
  z-index: 1;
  padding-bottom: 70px;
`;

const Message = styled.li`
  list-style-type: none;
  margin-bottom: 12px;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
