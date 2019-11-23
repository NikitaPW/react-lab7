import React from 'react'
import Employee from './Employee'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showEmployees:false,
          employees: [],
          isLoading: true,
        };
        this.showEmployees = this.showEmployees.bind(this);
        this.componentGet = this.componentGet.bind(this);
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
              <div> <button onClick={this.showEmployees} style={{borderRadius:'1px', margin:'20px', width:'140px', height:'40px'}}>All employees: </button>
              <br/>
              {this.state.showEmployees ? allEmployees : ""}
              </div>

            }
          </div>
        )
    }
}
export default Component