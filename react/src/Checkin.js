
import React from 'react';

class Checkin extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        this.requestAttempts();
    }

    async requestAttempts() {
        const res = await fetch('/attemptsJSON');
        const data = await res.json();
        this.setState({data});
    }

    render() {
      console.log(this.state.data);

      return <div>Checkin</div>;
    }
}

export default Checkin;
