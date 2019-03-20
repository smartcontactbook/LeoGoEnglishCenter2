import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CourseRow extends Component {
constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete (e) {
    e.preventDefault()
    if (!confirm('Are your sure you want to delete this item?')) {
      return false
    }
    let url = window.Laravel.baseUrl + '/api/course/' + this.props.obj.id
    axios.delete(url)
      .then(response => {
        this.props.deleteRow(this.props.index)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.Course_Name}
        </td>
        <td>
          {this.props.obj.Description}
        </td>
        <td>
          {this.props.obj.Term}
        </td>
        <td>
          {this.props.obj.Level_ID}
        </td>
        <th>
          <button type="button" className="btn btn-warning editLeftRight"><i className="  fa fa-edit"></i></button>

          <button type="button" className="btn btn-danger" onClick={this.handleDelete}><i className="fa fa-trash-o"></i></button>
          </th>
      </tr>
    )
  }
}

export default CourseRow