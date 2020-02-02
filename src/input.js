import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.parse(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Field 
          onChange={this.handleChange} 
          value={this.state.value}
          zIndex={this.props.zIndex}
        />
      </Form>
    );
  }
}

function handleSubmit(event) {}

const Form = styled.form`
  position: fixed;
  bottom: 10px;
  left: 5px;
  right: 10px;
`;

const Field = styled.input`
  color: #d2ede6;
  width: 100%;
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
  padding: 10px 0 10px 5px;
  z-index: ${props => props.zIndex || 0};
  background: #144040;
  border: none;
  border-bottom: 2px solid #a1babb;
  outline: none;
`;
