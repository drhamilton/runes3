import React, { Component } from 'react';

class UsernameForm extends Component {
    static propTypes = {};
    static defaultProps = {};
    state = {};

    constructor() {
      super();
      // componentWillMount handler
    }

    componentDidMount() {
      // ...
    }

    componentWillUnmount() {
      // ...
    }

    shouldComponentUpdate() {
      // ...
    }
    
    render() {
      return (
        <form>
            <label>Enter your summoner username here:
                <input type="text"></input>
            </label>
        </form>
      );
    }
}

export default UsernameForm;
