import React, { Component } from 'react';
class Assignment extends Component {
    render() { 
        return ( 
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <td>{this.props.assignment.username}</td>
                            <td>{this.props.assignment.assignmentReport}</td>
                            <td>{this.props.assignment.timeSubmitted}</td>
                        </tr>
                    </thead>
                </table>
                <td>
                        <a href="#"  className='btn btn-info' onClick={() => {
                        this.props.deleteAssignment(this.props.assignment._id)
                    } }>Delete</a> 
                </td>
            </div>
         );
    }
}
export default Assignment;