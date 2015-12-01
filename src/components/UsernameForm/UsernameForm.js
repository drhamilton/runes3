import React, { Component } from 'react';

class UsernameForm extends Component {
    state = { name: '' };

    setName = (name) => {
        this.setState({name: name});
        console.log('state is', this.state);
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setName(ev.target[0].value);
    }

    render() {
      const { name } = this.state.name;
      return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter your summoner username here:
                    <input type="text" value={name} />
                    <input type="submit"></input>
                </label>
            </form>
        );
    }
}

export default UsernameForm;
