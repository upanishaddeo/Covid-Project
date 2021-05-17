import React, { Component } from 'react'
import { Col, Row,Spinner } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import plasmaStyle from '../styles/Home.module.css'
import { Regex } from "../components/utility";
export class plasma extends Component {
    constructor(props) {
    super(props);
    this.state = {
        data: {
          f_name: {
            type: "text",
            value: "puneet",
            error: "",
            valid: true,
          },
          email: {
            type: "email",
            value: "",
            error: "",
            valid: true,
          },
          address:{
           type:"any",
           value:"",
           error:"",
           valid:true
          },
          age:{
            type:"number",
            value:"",
            error:"",
            valid:true
          },
          get_covid:{
            type:"text",
            value:"Y",
            error:"",
            valid:true
          },
          sex:{
            type:"text",
            value:"F",
            error:"",
            valid:true
          },
          city:{
            type:"text",
            value:"",
            error:"",
            valid:true
          },
          date:{
            type:"any",
            value:"",
            error:"",
            valid:true
          },
          phone_no: {
            type: "number",
            value: "",
            error: "",
            valid: true,
          },
          blood_group:{
              type:"any",
              value:"A+",
              error:"",
              valid:true
          }
          
          
          
          
        },
        common_error:"",
        loader:false,
        show:false
      };
    }

    

    handleChange=(evt)=>{
        let data = this.state.data
        let name = evt.target.name
        let value = evt.target.value
        data[name]['value'] = value
        this.setState({data},()=>{
            console.log("this is the event",data)
        })
        function isFilled(value) {
            if (value != null && value != "") return true;
            else return false;
          }
      
          function validType(value, type) {
            if (value.match(Regex[type])) return true;
            else return false;
          }
      
          if (data[name]["valid"] == true) {
            if (!isFilled(data[name]["value"])) {
              data[name]["error"] = "*Required";
            } else if (!validType(data[name]["value"], data[name].type)) {
              data[name]["error"] = "*not valid";
            } else if (
              name == "phone_no" &&
              (parseInt(value) > 9999999999 || parseInt(value) < 6000000000)
            ) {
              data[name]["error"] = "*not valid";
             } 
             else if (
                name == "age" &&
                (parseInt(value) > 65 || parseInt(value) < 15)
              ) {
                data[name]["error"] = "*value greater than 15 smaller than 65";
               }
               else if (
                name == "date" 
              ) {
                if(value.length == 14){
                    let date1 = new Date()
                    let date2 = new Date(value)
                }
               }  
            else {
              data[name]["error"] = "";
            }
          } else if (isFilled(data[name])) {
            if (!validType(data[name].value, data[name].type)) {
              data[name].error = "*not valid";
            } else {
              data[name].error = "";
            }
          }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.data;
        let loader = this.state.loader
        function fillValue() {
          let flag = true;
          Object.keys(data).map((item) => {
            if (
              data[item].error.length == 0 &&
              data[item].value.length == 0 &&
              data[item].valid == true
            ) {
              flag = false;
            }
          });
          return flag;
        }
        function validate() {
          let valid = true;
          Object.keys(data).map((item) => {
            if (data[item].error.length > 0) {
              valid = false;
            }
          });
          return valid;
        }
    
        if (validate() && fillValue()) {
        this.setState({loader:true})
    //     fetch("http://13.127.98.247:8080/api/", {
    //      method: "post",
    //       headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
              
    //       },

    //       body: JSON.stringify({
    //         f_name: data.f_name.value,
    //         l_name: data.l_name.value,
    //         mobile_number: data.phone_no.value,
    //         email: data.email.value,
    //         company_name: data.company.value,
    //         monthly_salary: data.m_salary.value,
    //         loan_amount: data.l_amount.value
    //       })

    //   })
       
    //       .then((response) => {
    //         if(response){
              
    //           this.setState({loader:false})
    //         console.log("this is the response",response)
            
    //       setTimeout(() => {
    //         this.handleShow();
    //       }, 500);
    //       data.f_name.value = "",
    //       data.phone_no.value = "",
    //       data.address.value = "",
    //       data.get_covid.value = "Y",
    //       data.phone_no.value= "",
    //       data.email.value= "",
    //       data.sex.value="F",
    //       data.city.value="",
    //       data.date.value="",
    //       data.blood_group.value="A+"
    //     } 
    //   else {
    //       Object.keys(data).map((item) => {
    //         if (
    //           (data[item].error == "" || data[item].error == null) &&
    //           (data[item].value == "" || data[item].value == null) &&
    //           data[item].valid == true
    //         ) {
    //           data[item].error = "*Required";
    //         }
    //       });
        
    //       this.setState(data);
    //     }
      
    //   })
    alert("data uploade sucessfully")
    }
    else{
        Object.keys(data).map((item) => {
                     if (
                       (data[item].error == "" || data[item].error == null) &&
                       (data[item].value == "" || data[item].value == null) &&
                       data[item].valid == true
                     ) {
                       data[item].error = "*Required";
                     }
                   });
    }
    this.setState(data);

  }
  handleClose = () => {this.setState({show:false})};
  handleShow = () => {this.setState({show:true})};
    


    render() {
        let data = this.state.data
        return (
            <div className={plasmaStyle.plasmaBody}>
                <div className={plasmaStyle.plasmaHeading}>
                    <h1>Donating plasma can save a life of an innocent and help India overcome Covid-19</h1>
                    <p>(Fill the form below to become a donor of plasma and make India stand on its feet again)</p>
                </div>
                <div className={plasmaStyle.mainContainer}>
                    <div className={plasmaStyle.plasmaImage}>
                        <img src="/plasma2.jpg" />
                    </div>
                    <Row>
                        <Col className={plasmaStyle.firstColPlasma}>
                            <div className={plasmaStyle.firstColflex1}>
                                <p>Did you ever get Covid?</p>
                                <div className={plasmaStyle.checkboxMargin}>
                                <input type="radio"  name="get_covid" value="Y" checked={data.get_covid.value == "Y" ? true : false} onClick={(e)=> this.handleChange(e)} />
                                    <label for="male">Yes</label><br/>
                                    <input type="radio"  name="get_covid" value="N" checked={data.get_covid.value == "N" ? true : false} onClick={(e)=> this.handleChange(e)}/>
                                    <label for="female">No</label><br/>
                                </div>

                            </div>
                            <div className={plasmaStyle.firstColflex1}>
                                <p>Sex</p>
                                <div className={plasmaStyle.checkboxMargin}>
                                   
                                    <input type="radio" id="male" name="sex" value="M" checked={data.sex.value == "M" ? true : false} onClick={(e)=> this.handleChange(e)}/>
                                    <label for="male">Male</label><br/>
                                    <input type="radio" id="female" name="sex" value="F" checked={data.sex.value == "F" ? true : false} onClick={(e)=> this.handleChange(e)}/>
                                    <label for="female">Female</label><br/>
                                     <input type="radio" id="other" name="sex" value="O" checked={data.sex.value == "O" ? true : false} onClick={(e)=> this.handleChange(e)}/>
                                     <label for="female">Other</label><br/>


                                </div>

                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>City</label>
                                <input type="text" className={data.city.error.length>0 ? plasmaStyle.inputError:""} placeholder="City" name="city" value={data.city.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>Date of screening</label>
                                <input type="date"  className={data.date.error.length>0 ? plasmaStyle.inputError:""} placeholder="From" name="date"  value={data.date.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>Phone No.</label>
                                <input type="text" className={data.phone_no.error.length>0 ? plasmaStyle.inputError:""} placeholder="Phone No." maxLength="10" name="phone_no" value={data.phone_no.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label for="blood-group">Blood Group</label>
                                <select name="blood_group"  value={data.blood_group.value} onChange={(e)=> this.handleChange(e)}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="dont-know">Dont Know</option>
                                </select>
                            </div>
                        </Col>
                        <Col className={plasmaStyle.secColPlasma}>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Name <span>*</span></label>
                                <input type="text" className={data.f_name.error.length>0 ? plasmaStyle.inputError:""} placeholder="Name" name="f_name" value={data.f_name.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Email ID</label>
                                <input type="text" className={data.address.error.length>0 ? plasmaStyle.inputError:""} placeholder="Email ID" name="email" value={data.email.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Address <span>*</span></label>
                                <input type="text" className={data.address.error.length>0 ?plasmaStyle.inputError:""} placeholder="Address" name="address" value={data.address.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Age <span>*</span></label>
                                <input type="number" className={data.age.error.length>0 ?plasmaStyle.inputError:""} min="15" max="65" placeholder="Age" name="age" value={data.age.value} onChange={(e)=> this.handleChange(e)} />
                            </div>
                            <button className={plasmaStyle.submitButtonPlasma} onClick={(e) => this.handleSubmit(e)}>Submit</button>
                            { this.state.loader && <Spinner animation="border" />}
                        </Col>
                    </Row>
                </div>
                <div><Modal  className={plasmaStyle.popupModal} show={this.state.show} onHide={this.handleClose} animation={false}>
                 <div>Information Send Sucessfully We Will Contact You Soon</div>
                </Modal>
                </div>
            </div>


        )
    }
}

export default plasma
