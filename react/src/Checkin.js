
import React from 'react';
import Cookies from 'js-cookie';
import CheckInTable from './CheckInTable.js';

class Checkin extends React.Component {
    state = {
        data: [],
        checkinData: '',
    };

    constructor(props) {
        super(props);
        this.updateCheckinData = this.updateCheckinData.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.renderEditable = this.renderEditable.bind(this);
    }

    componentDidMount() {
        this.requestAttempts();
    }

    async requestAttempts() {
        const res = await fetch('/getCheckIn');
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

        console.log("formdata",formData)
        const res = await fetch('/postAttempts', {
            method: 'POST',
            headers,
            credentials: 'include',
            body: JSON.stringify(formData),
        })
    }

    updateCheckinData(e) {
        this.setState({checkinData: e.target.value});
    }
    
    renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
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
    
    const attemptsElements = this.state.data.map((person) => {
    return <div key ={person.person_id}> {person.person_name} </div>;
    });

    const formElements = this.renderForm();

      return (<div>
          Checkin
          
          <CheckInTable data= {this.state.data}/>

      </div>);
    }
}

export default Checkin;
