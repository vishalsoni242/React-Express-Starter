import React, { Component } from 'react';
import './Students.css';

class Students extends Component {
    constructor() {
        super();
        this.state = {
            Students: []
        };
    }
    componentDidMount() {
        fetch('/students')
            .then(res => res.json())
            .then(Students => this.setState({Students}, () => console.log('Students fetched...', Students)));
    }
    render() {
        return (
        <div>
            <h2>Students</h2>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
                {this.state.Students.map(Student => 
                    <tr>
                        <td>{Student.Name}</td>
                        <td>{Student.Country}</td>
                    </tr>    
                )}
            </table>
        </div>
        );
    }
}

export default Students;
