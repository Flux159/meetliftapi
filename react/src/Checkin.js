
import React from 'react';
import Cookies from 'js-cookie';

class Checkin extends React.Component {
    state = {
        data: [],
        checkinData: '',
    };

    constructor(props) {
        super(props);

        this.updateCheckinData = this.updateCheckinData.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.requestAttempts();
    }

    async requestAttempts() {
        const res = await fetch('/attemptsJSON');
        const data = await res.json();
        this.setState({data});
    }

    async submitForm() {
        console.log('submitting form');
        console.log(this.state);

        const formData = {
            checkinData: this.state.checkinData,
        };

        // TODO: This is not working because of security issue w/ xsrf
        
        const xsrfCookie = Cookies.get('XSRF-TOKEN');

        const headers = new Headers({
            'XSRF-TOKEN': xsrfCookie,
            '_csrf': xsrfCookie,
        });

        console.log(formData)
        const res = await fetch('/postAttempts', {
            method: 'POST',
            headers,
            credentials: 'include',
            body: JSON.stringify(formData),
        })

        console.log(res);
    }

    updateCheckinData(e) {
        this.setState({checkinData: e.target.value});
    }

    renderForm() {
        return (
            <form>
                <input type="text" placeholder="Checkindata" value={this.state.checkinData} onChange={this.updateCheckinData} />
                <button onClick={this.submitForm}>Submit</button>
            </form>
        );
    }

    render() {
    console.log(this.state.data)
      const attemptsElements = this.state.data.map((person) => {
        return <div key ={person.person_id}> {person.person_last_name}  {person.person_first_name} </div>;
      });

      const formElements = this.renderForm();

      return (<div>
          Checkin
          {attemptsElements}
          {formElements}
      </div>);
    }
}

export default Checkin;
