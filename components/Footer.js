import React, { Component } from 'react'
import { Row, Col , Spinner} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import footerStyles from '../styles/Home.module.css';
import { Regex } from "../components/utility";

class Footer extends Component {
    constructor(props) {
        super(props);
    this.state = {
        data: {
          f_name: {
            type: "text",
            value: "",
            error: "",
            valid: true,
          },
          l_name: {
            type: "text",
            value: "",
            error: "",
            valid: false,
          },
          phone_no: {
            type: "number",
            value: "",
            error: "",
            valid: true,
          },
          email: {
            type: "email",
            value: "",
            error: "",
            valid: true,
          },
          company: {
            type: "text",
            value: "",
            error: "",
            valid: true,
          },
          l_amount: {
            type: "number",
            value: "",
            error: "",
            valid: true,
          },
          m_salary: {
            type: "number",
            value: "",
            error: "",
            valid: true,
          },
          
        },
        loader:false,
        show:false
      };
    }

     handleClose = () => {this.setState({show:false})};
     handleShow = () => {this.setState({show:true})};


  
    handleChange = (evt) => {
        let data = this.state.data;
        let name = evt.target.name;
        let value = evt.target.value;
        let validateData = this.state.validateData;
        data[name]["value"] = value;
        this.setState({ data }, ()=>{
           
        });
    
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
          } else {
            data[name]["error"] = "";
          }
        } else if (isFilled(data[name])) {
          if (!validType(data[name].value, data[name].type)) {
            data[name].error = "*not valid";
          } else {
            data[name].error = "";
          }
        }
      };

      //*Form Submmit

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
        fetch("http://13.127.98.247:8080/api/", {
         method: "post",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              
          },

          body: JSON.stringify({
            f_name: data.f_name.value,
            l_name: data.l_name.value,
            mobile_number: data.phone_no.value,
            email: data.email.value,
            company_name: data.company.value,
            monthly_salary: data.m_salary.value,
            loan_amount: data.l_amount.value
          })

      })
       
          .then((response) => {
            if(response){
              
              this.setState({loader:false})
            console.log("this is the response",response)
            
          setTimeout(() => {
            this.handleShow();
          }, 500);
          data.f_name.value = "",
          data.l_name.value = "",
          data.phone_no.value= "",
          data.email.value= "",
          data.company.value= "",
          data.m_salary.value= "",
          data.l_amount.value= ""
        } 
      else {
          Object.keys(data).map((item) => {
            if (
              (data[item].error == "" || data[item].error == null) &&
              (data[item].value == "" || data[item].value == null) &&
              data[item].valid == true
            ) {
              data[item].error = "*Required";
            }
          });
        
          this.setState(data);
        }
      
      })
    }
  }
    



    render() {
        let { data } = this.state
        return (
            <div className={footerStyles.mainFooter}>
                <div className={footerStyles.footerHeading}>
                    <span>Looking for Financial Help</span> <br />
                    Afinoz Can Help you with Emergency Loans
                </div>
                <Row>
                    <Col className={footerStyles.footerCol1}>
                        <img src="/together.svg" alt="together we will win" />
                        <img src="/AfinozBack.svg" alt="afinoz LLC" className={footerStyles.backgroundImage} />
                    </Col>
                    <Col className={footerStyles.footerCol2}>
                        <div className={footerStyles.mainForm}>
                            <div className={footerStyles.mainpadding}>
                                <p className={footerStyles.headingFirst}>Lets find the best<br /> Loan for you</p>
                                <div className={footerStyles.flex1}>
                                    <input className={data.f_name.error.length>0 && footerStyles.inputError} type="text" placeholder="First Name*"  name="f_name" value={data.f_name.value} onChange={(e) => this.handleChange(e)} />
                                    <input  className={data.l_name.error.length>0 && footerStyles.inputError} type="text" placeholder="Last Name" name="l_name"  value={data.l_name.value}  onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div className={footerStyles.flex3}>
                                    <input type="text" className={data.phone_no.error.length>0 && footerStyles.inputError} placeholder="+91-__________*" name="phone_no" maxLength="10" value={data.phone_no.value} onChange={(e) => this.handleChange(e)} />
                                    
                                </div>
                                <div className={footerStyles.flex3}>
                                    <input type="text" className={data.email.error.length>0 && footerStyles.inputError}  placeholder="Enter Your Email*" name="email" value={data.email.value} onChange={(e) => this.handleChange(e)}/>
                                    <input type="text" className={data.company.error.length>0 && footerStyles.inputError} placeholder="Name of Company*" name="company" value={data.company.value} onChange={(e) => this.handleChange(e)}/>
                                    <input type="text" className={data.l_amount.error.length>0 && footerStyles.inputError} placeholder="Loan Amount*" name="l_amount" value={data.l_amount.value} onChange={(e) => this.handleChange(e)}/>
                                    <input type="text" className={data.m_salary.error.length>0 && footerStyles.inputError} placeholder="Monthly Salary*" name="m_salary" value={data.m_salary.value} onChange={(e) => this.handleChange(e)} />
                                </div>

                                <div className={footerStyles.getQuote}  onClick={(e) => this.handleSubmit(e)}>Get a quote</div>
                                { this.state.loader && <Spinner animation="border" />}
                            </div>
                        </div>
                    </Col>
                </Row>
                 <div><Modal  className={footerStyles.popupModal} show={this.state.show} onHide={this.handleClose} animation={false}>
                 <div>Information Send Sucessfully We Will Contact You Soon</div>
                </Modal>
                </div>
      
            </div>

        )
    }
}

export default Footer
