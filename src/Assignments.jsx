import React, { Component } from 'react';
import axios from 'axios'
import Assignment from './Assignment'

class Assignments extends Component {
    constructor(){
        super()
        this.state = {
            assignments:[]
        }
        this.deleteAssignment = this.deleteAssignment.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5000/assignment/')
            .then(response =>{
                this.setState({
                    assignments:response.data
                })
            })
    }
    deleteAssignment(id){
        axios.delete('http://localhost:5000/assignment/'+ id)
            .then(response => console.log(response.data))
        this.setState({
            assignments:this.state.assignments.filter(astodel => astodel._id !== id)
        })
    }
    assignmentStack(){
        return this.state.assignments.map(singledOutAssignment =>{
            return <Assignment  assignment={singledOutAssignment} deleteAssignment={this.deleteAssignment} key={singledOutAssignment._id} />
        })
    }
    render() { 
        return ( 
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Student's Username</th>
                            <th>Teacher's Report</th>
                            <th>Submission Time</th>
                            <th>Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.assignmentStack()}
                    </tbody>
                </table>
            </div>
         );
    }
}
export default Assignments;