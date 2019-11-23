import React from 'react'
import Employee from './Employee'
import Form from './Form'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showEmployees:false,
          employees: [],
          showForm: false,
          isLoading: true,
        };
        this.cancelForm = this.cancelForm.bind(this);
        this.showEmployees = this.showEmployees.bind(this);
        this.componentGet = this.componentGet.bind(this);
        this.form = this.form.bind(this);
    }

    cancelForm(){
        this.setState({showForm : false});
    }

    form(){
        this.state.showForm ? this.setState({showForm:false}) : this.setState({showForm: true});
    }


    componentDidMount() {
        this.componentGet();
    }

    componentGet(){
        this.setState({ isLoading:true});
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
    }

    showEmployees(){
        this.state.showEmployees ? this.setState({showEmployees: false} ): this.setState({showEmployees: true});
    }

    render(){
    const allEmployees = this.state.employees.map(employeeInfo =>
          <Employee key={employeeInfo.id} data={employeeInfo}/>
    )
    return(
          <div>
            {this.state.isLoading ? <h3>Loading...</h3> :
              <div>
              <button onClick={this.showEmployees} style={{borderRadius:'1px', margin:'20px', width:'140px', height:'40px'}}>All employees: </button>
              <button onClick={this.form} style={{borderRadius:'1px', width:'140px', height:'40px'}}>Create new User </button>
              <br/>
              {this.state.showEmployees ? allEmployees : ""}
              {this.state.showForm ? <Form /> : ""}
              </div>
            }
          </div>
        )
    }
}
export default Component