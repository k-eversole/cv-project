import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      jobHistory: [],
      id: uniqid(),
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      jobDescription: '',
      isEditable: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      jobHistory: this.state.jobHistory.concat(
        {
          id: this.state.id,
          position: this.state.position,
          company: this.state.company,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          jobDescription: this.state.jobDescription
      }),
      id: uniqid(),
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      jobDescription: '',
      isEditable: false
    })
  }

  toggleEdit = () => {
      this.setState(previous => ({
        isEditable:!previous.isEditable
      }))
  }

  handleDelete = (selected_id) => {
    this.setState({
      jobHistory: this.state.jobHistory.filter((e) => e.id !== selected_id)
    })
  }

  handlePositionChange = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  handleCompanyChange = (e) => {
    this.setState({
      company: e.target.value
    })
  }

  handleStartDateChange= (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  handleJobDescriptionChange = (e) => {
    this.setState({
      jobDescription: e.target.value
    })
  }

  render() {
    const { jobHistory, id, position, company, startDate, endDate, jobDescription, isEditable } = this.state;

    return (
      <div id="Education">
        <h2>Education</h2>

          {jobHistory.map(job => {
            if (!job.isEditable){
            return (
                <div key={ job.id } className="Component">
                <div>Position: { job.position }</div>
                <div>Company: { job.company }</div>
                <div>Start: { job.startDate }</div>
                <div>End: { job.endDate }</div>
                <div>Job Description: { job.jobDescription }</div>

                <button onClick={ () => this.toggleEdit() }>Edit</button>
                <button onClick={ () => this.handleDelete(job.id) }>Delete</button>
              </div>
            )
          } else
            return (
              <div key={ job.id } className="Component">
              <form>
                <label>
                  Position:
                    <input
                      id="position"
                      type="text"
                      placeholder="Comedian"
                      value={ position }
                      onChange={ this.handlePositionChange }
                      />
                </label>

                <label>
                  Company:
                    <input
                      id="company"
                      type="text"
                      value={ company }
                      onChange={ this.handleCompanyChange }
                      />
                </label>


                <label>
                  Start Date:
                    <input
                      id="jobStart"
                      type="date"
                      value={ startDate }
                      onChange={ this.handleStartDateChange }
                      />
                </label>

                <label>
                  End Date:
                    <input
                      id="jobEnd"
                      type="date"
                      value={ endDate }
                      onChange={ this.handleEndDateChange }
                      />
                </label>

                <label>
                  Job description:
                    <textarea
                      id="jobDescription"
                      value={ jobDescription }
                      rows="5"
                      cols="33"
                      onChange={ this.handleJobDescriptionChange }
                      >
                        List job duties here.
                    </textarea>
                </label>
                <button onClick={ this.handleSubmit }>Submit</button>
              </form>
              </div>
            )
          })}
        </div>
    )
      }
}
export default Experience;