import React, { Component } from 'react';
import axios from 'axios'

class AddCourse extends Component {
	 constructor (props) {
	    super(props)
	    this.state = {
	    	Course_Name: '',
	    	Description:'',
	    	Term:'',
	    	Level_ID:''
	    }
	    this.handleChangeName = this.handleChangeName.bind(this)
	    this.handleChangeDescription = this.handleChangeDescription.bind(this)
	    this.handleChangeTerm = this.handleChangeTerm.bind(this)
	    this.handleChangeLevel_ID = this.handleChangeLevel_ID.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
	  }
	  handleChangeName (e) {
	    this.setState({
	      Course_Name: e.target.value
	    })
	  }

	  handleChangeDescription (e) {
	    this.setState({
	      Description: e.target.value
	    })
	  }

	  handleChangeTerm (e) {
	    this.setState({
	      Term: e.target.value
	    })
	  }

	  handleChangeLevel_ID (e) {
	  	this.setState({
	  		Level_ID: e.target.value
	  	})
	  }

	  handleSubmit (e) {
	    e.preventDefault()
	    let url = window.Laravel.baseUrl + '/api/course/create'
	    const data = {
	    	Course_Name: this.state.Course_Name,
	    	Description: this.state.Description,
	    	Term: this.state.Term,
	    	Level_ID: this.state.Level_ID
	    }
	    axios.post(url, data)
	      .then(response => {
	        this.props.history.push('/course')
	      })
	      .catch(function (error) {
	        console.log(error)
	      })
	  }

	render () {
		return (
			<div>
				  <section className="content-header">
				    <h1><b>Add COURSE</b>
				    </h1>
				    <ol className="breadcrumb">
				      <li><a href="#"><i className="fa fa-dashboard" /> HOME</a></li>
				      <li><a href="#">COURSE MANAGEMENT</a></li>
				      <li className="active">Add COURSE</li>
				    </ol>
				  </section>
				  <section className="content">
				    <div className="row">
				      <div className="col-xs-12">
				        <div className="box">
				        <form onSubmit={this.handleSubmit}>
					        <div className="box-header">
						        <h3 className="box-title"><b>INFORMATION</b></h3>
						        <p className="pull-right box-title">
							        <button type="button" className="btn btn-primary editLeftRight"><i className="fa fa-reply-all">Back</i></button>
							        <button type="submit" className="btn btn-success"><i className="fa fa-save">Save</i></button>
						        </p>
					        </div>
					        
				                  <div className="row">
					                  <div class="col-sm-4">
										  <div className="box-body">
										      <div className="form-group">
										        <label>Course name</label>
										        <input type="input" className="form-control"  
											   placeholder="Enter name" id='Course_Name' value={this.state.Course_Name} onChange={this.handleChangeName} required />
											
										      </div>
										  </div>
									  </div>
									  <div class="col-sm-4">
										  <div className="box-body">
										     <div className="form-group">
										        <label>Description</label>
										        <textarea className="form-control" rows={2} placeholder="Enter description" id='Description' value={this.state.Description} onChange={this.handleChangeDescription} required/>
											
										      </div>
												<div className="form-group">
												  <label htmlFor="exampleInputPassword1">Level</label>

												  <select className="form-control select2" style={{ width: "100%" }} id='Term' value={this.state.Term} onChange={this.handleChangeTerm} required>
													  <option selected="selected">Term</option>
													  <option>3</option>
													  <option>5</option>
													  <option>6</option>
												  </select>
												</div>

										  </div>
									  </div>

									  <div class="col-sm-4">
										  <div className="box-body">
										    <div className="form-group">
											  <label>Term</label>
											  <select className="form-control select2" style={{ width: "100%" }} id='Level_ID' value={this.state.Level_ID} onChange={this.handleChangeLevel_ID} required>
												  <option selected="selected">Level</option>
												  <option>1</option>
												  <option>2</option>
												  <option>3</option>
											  </select>
											</div>
										      
										  </div>
									  </div>
								  </div>
						  	</form>
						</div>
				        </div>
				      </div>


				  </section>
				</div>
		)
	}
}
export default AddCourse
