import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    
    return (
   <>
<form>
   <div className="box1">
   <div className="row" style={{ marginTop: "20px" }}>
     <div className="col-sm-6">
       <div className="form-group">
         <label htmlFor="name" className="label">
          First Name <strong style={{ color: "red" }}>*</strong>
         </label>
         <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon1">
               <i className="fa fa-user"></i>
             </span>
           </div>
           <input
             type="text"
             name="name"
             onChange={this.props.handleChange}
             className="form-control"
             required
             
           />
         </div>
         </div>
         </div>
         </div>
       </div>
       <div className="box1">
   <div className="row" style={{ marginTop: "20px" }}>
     <div className="col-sm-6">
       <div className="form-group">
         <label htmlFor="name" className="label">
           Last Name <strong style={{ color: "red" }}>*</strong>
         </label>
         <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon1">
               <i className="fa fa-user"></i>
             </span>
           </div>
           <input
             type="text"
             name="name"
             onChange={this.props.handleChange}
             className="form-control"
             required
             
           />
         </div>
         </div>
         </div>
         </div>
       </div>
       

   <div className="col-sm-6">
   <div className="form-group">
     <label htmlFor="Email" className="label">
       Email <strong style={{ color: "red" }}>*</strong>
     </label>
     <div class="input-group mb-3">
       <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">
           @
         </span>
       </div>
       <input
         type="email"
         name="email"
         onChange={this.props.handleChange}
         className="form-control"
         required
       />
       </div>
     </div>
   </div>

   {/* This is For Phone Number */}
   <div className="form-group">
     <label htmlFor="Phone" className="label">
       Phone Number <strong style={{ color: "red" }}>*</strong>
     </label>
     <div class="input-group mb-3">
       <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">
           <i className="fa fa-phone"></i>
         </span>
       </div>
       <input
         type="text"
         name="phone"
         onChange={this.props.handleChange}
         className="form-control"
         required
       />
     </div>
   </div>
   <div className="form-group">
      <label htmlFor="about" className="label">
      About Yourself <strong style={{ color: "red" }}>*</strong>
    </label>
  <textarea
     className="form-control"
         name="about"
        rows={3}
        onChange={this.props.handleChange}
        required
         ></textarea>
   </div>
   <center>
     <button
       onClick={this.saveAndContinue}
        className="btn btn-success btn-block"
        style={{ marginTop: "10px", height: "45px" }}
   >
       Save And Continue{" "}
       </button>
              </center>
   </form>
   </>
    )}
}

export default Profile;