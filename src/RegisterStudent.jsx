import React, { Component } from 'react';
import axios from 'axios'
import './index.css'


class RegisterStudent extends Component {
    constructor(){
        super()
        this.state = {
            username:''
        }
        this.changedUsername = this.changedUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changedUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const student = {
            username : this.state.username,
        }
        console.log(student)
        axios.post('http://localhost:5000/students/create', student)
            .then(response => console.log(response.data))
        this.setState({
            username:''
        })
    }
    render() { 
        return ( 
           <div>
               <div className="accordion mt-5" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Student Registration Form
                            </button>
                        </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                </div>
               <form onSubmit={this.onSubmit}>
                   <label>Student Name</label>
                   <input type='text'
                   onChange={this.changedUsername}
                   value={this.state.username}
                   className='form-group form-control' />
                   <input type='submit' className='btn btn-outline-info' value='Submit' /> 
               </form>
               <div className='bar bg-info mt-5'>
               </div>
           </div>
        );
    }
}
export default RegisterStudent;