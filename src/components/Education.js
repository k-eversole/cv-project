import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      fullEdu: [],
      id: uniqid(),
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      fieldOfStudy: '',
      degree: '',
      isEditable: false
    };
  }

  toggleEdit = () => {
    const prevState = this.state.isEditable
      this.setState({
        isEditable:!prevState
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      fullEdu: this.state.fullEdu.concat(
        {
          id: this.state.id,
          schoolName: this.state.schoolName,
          location: this.state.location,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          fieldOfStudy: this.state.fieldOfStudy,
          degree: this.state.degree,
          isEditable: false
      }),
      id: uniqid(),
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      fieldOfStudy: '',
      degree: '',
      isEditable: true
    })
  }

  handleDelete = (tbd) => {
    this.setState({
      jobHistory: this.state.jobHistory.filter((e) => e.id !== tbd)
    })
  }

  handleSchoolNameChange = (e) => {
    this.setState({
      schoolName: e.target.value
    })
  }

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  handleFieldOfStudyChange = (e) => {
    this.setState({
      fieldOfStudy: e.target.value
    })
  }

  handleDegreeChange = (e) => {
    this.setState({
      degree: e.target.value
    })
  }

  handleIsGraduatedChange = (e) => {
    this.setState({
      isGraduated: e.target.value
    })
  }

  render() {
    const { fullEdu, schoolName, location, startDate, endDate, fieldOfStudy, degree, isGraduated, id, isEditable } = this.state;

    if (!isEditable) {
      return (
        <div className="Component">
          <div>School Name: { schoolName }</div>
          <div>Location: { location }</div>
          <div>Start: {startDate }</div>
          <div>End: { endDate }</div>
          <div>Field of Study: { fieldOfStudy }</div>
          <div>degree: { degree }</div>
          <div>Graduated? { isGraduated }</div>

          <button onClick={ this.toggleEdit }>Edit</button>
          <button>Delete</button>
          <button>Add Experience</button>
        </div>
      )
    }

    else return (
      <div className="Component">
        <header className="Sub-header">
            Education
        </header>
        <form>
          <label>
            School Name:
              <input
                id="schoolName"
                type="text"
                placeholder="The School of Hard Knocks"
                value={ schoolName }
                onChange={ this.handleSchoolNameChange }
                />
          </label>

          <label>
              Location:
              <input
                id="location"
                type="text"
                placeholder="London, England"
                value={ location }
                onChange={ this.handleLocationChange }
                />
          </label>

          <label>
              Start Date:
              <input
                id="schoolStart"
                type="date"
                placeholder="1889"
                value={ startDate }
                onChange={ this.handleStartDateChange }
                />
          </label>

            <label>
              End Date:
              <input
                id="schoolEnd"
                type="date"
                placeholder="1908"
                value={ endDate }
                onChange={ this.handleEndDateChange }
                />
            </label>

            <label>
            Field of Study:
            <input
              id="fieldOfStudy"
              type="text"
              placeholder="Comedy"
              value={ fieldOfStudy }
              onChange={ this.handleFieldOfStudyChange }
              />
           </label>

           <label>
              Graduated?
              <input
                id="degreeStatus"
                type="checkbox"
                value={ isGraduated }
                onChange={ this.handleIsGraduatedChange }
                />
            </label>

            Degree:
            <select
              id="degree"
              value={ degree }
              onChange= { this.handleDegreeChange }>
              <option value="none"></option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>

            <button onClick={ this.handleSubmit }>Submit</button>
        </form>
      </div>
    );
  }
}
export default Education;