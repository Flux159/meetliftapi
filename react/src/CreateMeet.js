
import React from 'react';


class CreateMeet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data,

      };
      this.updateMeetName = this.updateMeetName.bind(this);
    }
    componentDidMount() {
      this.getAttempts();
    }
    updateMeetName(e) {
        this.setState({meetData: e.target.value});
    }
    renderForm() {
        return (
            <form>
                <input type="text" placeholder="Meet Name" value={this.state.meetData} onChange={this.updateMeetName} />
                <button onClick={this.submitForm}>Submit</button>
            </form>
        );
    }

  
    render() { 
  
        return (
            <div></div>
        );
    }
  } 
  
  export default CreateMeet;
  