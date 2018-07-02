import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import newItem from "./../redux/actions/addItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    text: ""
  };

  handleText(e) {
    this.setState({
      text: e.value
    });
  }

  render() {
    return (
      <form action="">
        <Input
          autoFocus
          label="Title"
          value={this.state.text}
          onChange={e => {
            this.handleText(e.target);
          }}
        />
        <Button
          color="crimson"
          className="pink"
          href="#"
          waves="light"
          onClick={e => {
            e.preventDefault();
            this.props.callThis({
              text: this.state.text[0].toUpperCase() + this.state.text.slice(1)
            });
          }}
        >
          Add
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  callThis: PropTypes.func.isRequired
};

const mapActions = { callThis: newItem };

export default connect(
  undefined,
  mapActions
)(Form);
