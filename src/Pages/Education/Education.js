  
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      university: "",
      majorsubject: "",
      startyear: null,
      endyear: null,
      grade: null,
      total: null,
      ulocation: "",
      degree: ""
    });
    this.setState({
      values
    });
  };

  handleRemoveFields = index => {
    const values = this.props.state;
    values.splice(index, 1);
    this.setState({
      values
    });
  };

  async onChange(e, index) {
    if (
      [
        "university",
        "majorsubject",
        "degree",
        "startyear",
        "endyear",
        "grade",
        "total",
        "ulocation"
      ].includes(e.target.name)
    ) {
      let cats = [...this.props.state];
      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
    console.log(this.props.state);
  }

    async change(e) {
       await this.setState({
         [e.target.name]: e.target.value
       });
       console.log(this.state.education);
     }

     handleSubmit = e => {
       e.preventDefault();
       console.log("inputFields", this.props.state);
     };

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
    <>
   <div id="Main_section"  style={{ paddingBottom: "30px" }}>
        <form  style={{ top: "60px", position: "relative" }}>
          <h1>
            <input
              type="text"
              defaultValue="EDUCATION"
              name="education"
              style={{ border: "none", background: "transparent" }}
              onChange={this.props.handleChange}
            />
            <button
              className="btn btn-success float-right w-25 font-weight-bolder"
              type="button"
              onClick={() => this.handleAddFields()}
            >
              + Add
            </button>
          </h1>

          
          <div className="button">
          <button onClick={this.back} className="btn btn-info">
            Back
          </button>
          <button onClick={this.saveAndContinue} className="btn btn-success">
            Save And Continue{" "}
          </button>
          </div>
          </form>
          </div>
      
    </>
    );
  }
}

export default Education;