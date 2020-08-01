import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import axios from 'axios'

class CreateAssignment extends Component {
    constructor(){
        super()
        this.state = {
            students: [],
            username:'',
            assignmentReport:'',
            timeSubmitted:'',
            date: new Date(),
        }
        this.changedAssignmentReport = this.changedAssignmentReport.bind(this)
        this.changedUsername = this.changedUsername.bind(this)
        this.changedTimeSubmitted = this.changedTimeSubmitted.bind(this)
        this.changedDate = this.changedDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5000/student')
            .then(response =>{
                if (response.data.length > 0) {
                    this.setState({
                        students:response.data.map(student => student.username),
                        username: response.data[0].username
                    })
                }
            })
    }
    changedUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changedAssignmentReport(event){
        this.setState({
            assignmentReport:event.target.value
        })
    }
    changedTimeSubmitted(event){
        this.setState({
            timeSubmitted:event.target.value
        })
    }
    changedDate(date){
        this.setState({
            date:date
        })
    }
    onSubmit(event){
        event.preventDefault()
        const assignment = {
            username : this.state.username,
            assignmentReport : this.state.assignmentReport,
            timeSubmitted : this.state.timeSubmitted,
            date : this.state.date
        }
        console.log(assignment)
        axios.post('http://localhost:5000/assignment/create', assignment)
            .then(response => console.log(response.data))
        window.location = '/'
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.onSubmit} className='formSize'>
                    <label>Enter Student Name</label>
                    <select required className='form-group form-control' value={this.state.username} onChange={this.changedUsername} > 
                        {this.state.students.map(student =>{
                            return <option key={student} value = {student} >  {student} </option>
                        })}
                    </select>
                    <label>Teacher's Report</label>
                    <input type='text' className='form-control form-group' required 
                    onChange={this.changedAssignmentReport} 
                    value={this.state.assignmentReport} />
                    <label>Time Of Submission</label>
                    <input type='text'
                    onChange={this.changedTimeSubmitted}
                    value={this.state.timeSubmitted}
                    className='form-control form-group' />
                    <label>Date of Submission</label>
                    <div>
                        <DatePicker 
                        selected = {this.state.date}
                        onChange = {this.changedDate}
                        className='form-group form-control'
                        />
                    </div>
                    <input type='submit' className='btn btn-outline-info' value='Create Report' />
                </form>
            </div>
         );
    }
}
export default CreateAssignment;