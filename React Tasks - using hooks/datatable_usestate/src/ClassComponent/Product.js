// import React, { Component } from "react";
// import { API_URL } from "../Services/Api";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// class Product extends Component {
//   nav = useNavigate();
//   constructor(props) {
//     super(props);

//     this.state = {
//       Object: {
//         name: "",
//         amount: "",
//         company: "",
//         status: "inactive",
//         date: "",
//         email: "",
//       },
//       nameError: "",
//       amountError: "",
//       companyError: "",
//       statusError: false,
//       dateError: "",
//       emailError: "",
//     };
//   }

//   async componentDidMount() {
//     if (this.props.id) {
//       const getData = async (data) => {
//         console.log(data);
//         const res = await axios.get(API_URL + data);
//         console.log(res);
//         this.setState(res.data);
//       };
//       this.getData(this.props.id);
//     }
//   }

//   submit = async (e) => {
//     e.preventDefault();
//     const { Object } = this.state;
//     console.log(Object);
//     const valid = await this.validation();
//     if (valid) {
//       if (this.props.id) {
//         console.log(Object);
//         await this.Edit(this.params.id, this.state.Object);
//       } else {
//         await this.post(this.state.Object);
//       }
//     } else {
//       return;
//     }

//     this.setState({
//       Object: {
//         name: "",
//         amount: "",
//         company: "",
//         status: "",
//         date: "",
//         email: "",
//       },
//     });
//   };

//   validation = async () => {
//     let hasError = false;
//     const { Object } = this.state;

//     if (Object.name.length < 3) {
//       this.setState({ nameError: "**Name required" });
//       hasError = true;
//     } else {
//       this.setState({ nameError: "" });
//     }

//     if (Object.amount === "") {
//       this.setState({ amountError: "**Amount required" });
//       hasError = true;
//     } else {
//       this.setState({ emailError: "" });
//     }

//     if (Object.company === "") {
//       this.setState({ companyError: "**Company required" });
//       hasError = true;
//     } else {
//       this.setState({ companyError: "" });
//     }

//     if (Object.date === "") {
//       this.setState({ dateError: "**Date required" });
//       hasError = true;
//     } else {
//       this.setState({ dateError: "" });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(Object.email)) {
//       this.setState({ emailError: "**Email required" });
//       hasError = true;
//     } else {
//       this.setState({ emailError: "" });
//     }

//     if (hasError) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   post = async (Object) => {
//     const res = await axios.post(API_URL, Object);
//     this.props.nav(`/classlist`);
//   };

//   Edit = async (id, Object) => {
//     const res = await axios.put(API_URL + id, Object);
//     this.props.nav(`/classlist`);
//   };

//   statuscheck = (e) => {
//     const value = e.target.checked;
//     if (value) {
//       this.setState({
//         Object: { ...this.state.Object, status: "active" },
//       });
//     } else {
//       this.setState({
//         Object: { ...this.state.Object, status: "inactive" },
//       });
//     }
//   };

//   render() {
//     const { Object } = this.state;

//     return (
//       <div className="container main">
//         <div className="form">
//           <form className="form_change">
//             <div className="input-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={Object.name}
//                 onChange={(e) => {
//                   this.setState({
//                     Object: { ...Object, name: e.target.value },
//                   });
//                   this.setState({ nameError: "" });
//                 }}
//               ></input>
//               <p id="name_error" className="text-danger">
//                 {this.state.nameError}
//               </p>
//             </div>
//             <div className="input-group">
//               <label>Amount</label>
//               <input
//                 type="number"
//                 id="amount"
//                 value={Object.amount}
//                 onChange={(e) => {
//                   this.setState({
//                     Object: { ...Object, amount: e.target.value },
//                   });
//                   this.setState({ amountError: "" });
//                 }}
//               ></input>
//               <p id="amount_error" className="text-danger">
//                 {this.state.amountError}
//               </p>
//             </div>
//             <div className="input-group">
//               <label>Company</label>
//               <select
//                 value={Object.company}
//                 onChange={(e) => {
//                   this.setState({
//                     Object: { ...Object, company: e.target.value },
//                   });
//                   this.setState({ companyError: "" });
//                 }}
//               >
//                 <option value=""></option>
//                 <option value="Nestlé">Nestlé</option>
//                 <option value="Cadbury">Cadbury</option>
//               </select>
//               <p id="company_error" className="text-danger">
//                 {this.state.companyError}
//               </p>
//             </div>
//             <div className="input-group">
//               <label>Status</label>
//               <input
//                 type="checkbox"
//                 checked={Object.status === "active"}
//                 onChange={this.statuscheck}
//                 className="status-check"
//                 id="status"
//               />
//               <p id="status_error" className="text-danger">
//                 {this.state.statusError}
//               </p>
//             </div>
//             <div className="input-group">
//               <label>Date</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={Object.date}
//                 onChange={(e) => {
//                   this.setState({
//                     Object: { ...Object, date: e.target.value },
//                   });
//                   this.setState({ dateError: "" });
//                 }}
//               ></input>
//               <p id="date_error" className="text-danger">
//                 {this.state.dateError}
//               </p>
//             </div>
//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={Object.email}
//                 onChange={(e) => {
//                   this.setState({
//                     Object: { ...Object, email: e.target.value },
//                   });
//                   this.setState({ emailError: "" });
//                 }}
//               ></input>
//               <p id="email_error" className="text-danger">
//                 {this.state.emailError}
//               </p>
//             </div>
//             <div className="text-center mt-2">
//               <button
//                 type="submit"
//                 onClick={this.submit}
//                 className="rounded fw-bold"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Product;

import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../Services/Api";
import { Navigate, useNavigate } from "react-router-dom";
import Productlist from "./Productlist";
import { useParams } from 'react-router-dom';
 
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params.id}
      navigate={useNavigate()}
    />
  );
};
 


export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Object: {
        name: "",
        amount: "",
        company: "",
        status: "inactive",
        date: "",
        email: "",
      },
      nameError: "",
      amountError: "",
      companyError: "",
      dateError: "",
      emailError: "",
    };
  }

  componentDidMount() {
    if (this.props.params) {
        console.log(this.props.params);
        const getData = async (data) => {
        console.log(data);
        const res = await axios.get(API_URL + data);
        console.log(res);
        this.setState({
          Object: { ...this.state.Object, ...res.data },
      });
     

      };
      getData(this.props.params);
    }
 }

  submit = async (e) => {
    e.preventDefault();
    const { Object } = this.state;
    const valid = await this.validation();

    if (valid) {
      if (this.props.params) {
        await this.edit(this.props.params, this.state.Object);
      } else {
        await this.post(this.state.Object);
      }
    } else {
      return;
    }
    this.setState({
      Object: {
        name: "",
        amount: "",
        company: "",
        status: "",
        date: "",
        email: "",
      },
    });
  };

  validation = async () => {
    let hasError = false;
    const { Object } = this.state;

    if (Object.name.length < 3) {
      this.setState({ nameError: "**Name is required" });
      hasError = true;
    } else {
      this.setState({ nameError: "" });
    }

    if (Object.amount === "") {
      this.setState({ amountError: "**Amount is required" });
      hasError = true;
    } else {
      this.setState({ amountError: "" });
    }

    if (Object.company === "") {
      this.setState({ companyError: "**Company is required" });
      hasError = true;
    } else {
      this.setState({ companyError: "" });
    }

    if (Object.date === "") {
      this.setState({ dateError: "**Date is required" });
      hasError = true;
    } else {
      this.setState({ dateError: "" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Object.email)) {
      this.setState({ emailError: "**Valid Email is required" });
      hasError = true;
    } else {
      this.setState({ emailError: "" });
    }

    return !hasError;
  };

  post = async (Object) => {
    try {
      const res = await axios.post(API_URL, Object);
      this.props.navigate("/productlist");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  edit = async (id, Object) => {
    try {
      const res = await axios.put(API_URL + id, Object);
      this.props.navigate("/productlist");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  statuscheck = (e) => {
    const value = e.target.checked;
    const status = value ? "active" : "inactive";
    this.setState({
      Object: { ...this.state.Object, status },
    });
  };

  render() {
    const { Object } = this.state;

    return (
      <div className="d-flex justify-content-center  mt-5">
        <form className="d-flex justify-content-center card bg-color p-5 shadow">
          <div className="col-4 input-group">
            <lable for="product name">Name : </lable>
            <input
              type="text"
              id="name"
              value={Object.name}
              onChange={(e) => {
                this.setState({
                  Object: { ...Object, name: e.target.value },
                });
                this.setState({ nameError: "" });
              }}
            />
            <p id="name_error" className="text-danger">
              {this.state.nameError}
            </p>
          </div>
          <div className="col-4 input-group">
            <lable for="product amount">Amount : </lable>
            <input
              type="number"
              id="amount"
              value={Object.amount}
              onChange={(e) => {
                this.setState({
                  Object: { ...Object, amount: e.target.value },
                });
                this.setState({ amountError: "" });
              }}
            />
            <p id="amount_error" className="text-danger">
              {this.state.amountError}
            </p>
          </div>
          <div className="col-4 input-group">
            <label for="company name">Company : </label>
            <select
              value={Object.company}
              onChange={(e) => {
                this.setState({
                  Object: { ...Object, company: e.target.value },
                });
                this.setState({ companyError: "" });
              }}
            >
              <option value=""></option>
              <option value="Nestlé">Nestlé</option>
              <option value="Cadbury">Cadbury</option>
            </select>
            <p id="company_error" className="text-danger">
              {this.state.companyError}
            </p>
          </div>
          <div className="col-4 input-group">
            <lable for="Status">Status : </lable>
            <input
              type="checkbox"
              checked={Object.status === "active"}
              onChange={this.statuscheck}
              className="status-check"
              id="status"
            />
            <p id="status_error" className="text-danger">
              {this.state.statusError}
            </p>
          </div>
          <div className="col-4 input-group">
            <lable for="date">Date : </lable>
            <input
              type="date"
              id="date"
              value={Object.date}
              onChange={(e) => {
                this.setState({
                  Object: { ...Object, date: e.target.value },
                });
                this.setState({ dateError: "" });
              }}
            />
            <p id="date_error" className="text-danger">
              {this.state.dateError}
            </p>
          </div>
          <div className="col-4 input-group">
            <lable for="email">Email : </lable>
            <input
              type="email"
              id="email"
              value={Object.email}
              onChange={(e) => {
                this.setState({
                  Object: { ...Object, email: e.target.value },
                });
                this.setState({ emailError: "" });
              }}
            />
            <p id="email_error" className="text-danger">
              {this.state.emailError}
            </p>
          </div>
          <div className="text-center mt-2">
            <button
              type="submit"
              onClick={this.submit}
              className="rounded fw-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Product);
