import React, { Component } from 'react';
import request from 'superagent';

class UsernameForm extends Component {
    state = { name: '' };

    setName = (name) => {
        this.setState({name: name});
        console.log('state is', this.state);
    }
    getSummonerId = (name) => {
        let api = 'df0f2c4b-4e06-40c4-86c8-1731f1dd2d60';
        let url = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${api}`;

        request
            .get('/test')
            .set('Accept', 'application/json')
            .end(function(err, res){
                console.log('error', err);
                console.log('res', res);
            });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        const name = ev.target[0].value;

        this.setName(name);
        this.getSummonerId(name);
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
