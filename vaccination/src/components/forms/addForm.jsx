import React from "react";
import * as api from '../../API/public';
import List from "../List/List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        {id: 1, name: 'name'},
        {id: 2, name: 'serial'}
      ],
      values: {},
      datalist: [],
      keys: []
    }
  }

  componentDidMount() {

  }

  async log() {
    const {inputs} = this.props
    for (let i = 0; i < inputs.length; i++) {
      // if (this.state[inputs[i].name] === undefined)
      // {
      //   return toast("لطفا فرم را کامل پر کنید", {
      //     type: "warning",
      //     theme: "dark"
      //   })
      //
      // }
      this.state.values[inputs[i].name] = this.state[inputs[i].name]
    }

    switch (this.props.type) {
      case 'employee':
        await api.add_user(this.state.values)
            .then(() => {
              toast("کاربر با موفقیت ثبت شد",{
                type: "info",
                theme: "dark"
              })
              window.location.reload()
            })
            .catch(() => {
              toast("هنگام ثبت با مشکل مواجه شد",{
                type: "warning",
                theme: "dark"
              })
            })
        break;
      case 'livestock':
        await api.add_livestock(this.state.values)
            .then((res) => {
              toast("کاربر با موفقیت ثبت شد",{
                type: "info",
                theme: "dark"
              })
              window.location.reload()
            })
        break;
      case 'information_livestock':
        await api.add_lifestock_information(this.state.values)
            .then((res) => {
              toast("کاربر با موفقیت ثبت شد",{
                type: "info",
                theme: "dark"
              })
              // window.location.reload()
            })
        break;
      case 'vaccines':
        await api.add_vaccines(this.state.values)
            .then((res) => {
              console.log(res)
            })
        break;
      case 'lifestock_address':
        await api.add_address(this.state.values)
            .then((res) => {
              console.log(res)
            })
        break;
      default:
        console.log('def')
    }
  }

  async get_employees(option) {
    switch (option) {
      case 'get_employee':
        await api.get_user().then((res) => {
          this.setState({
            datalist: res.data.data,
            keys: ['name','lastname', 'personnel_code']
          })
        })
        break;
      case 'get_livestock':
        await api.get_livestock().then((res) => {
          this.setState({
            datalist: res.data.data,
            keys: ['name','lastname']
          })
        })
        break;
      default:

    }

  }

  render() {
    return(
        <main>
          <div className="text-center mt-5 col-md-5 mx-auto font-20">
            <h2 className="font-blod">{this.props.title}</h2>
            <div className="font-medium">
              <ToastContainer
                  position="bottom-center"
              />
            </div>
            <div className="font-Thin row">
              {this.props.inputs.map((item, inpIndex) => {

                if (item.type === 'select') {
                  return(
                      <div key={inpIndex} className="col-md-6 pt-3 mt-2">
                        <select
                            onChange={(e) => {
                              this.setState({
                                [item.name]: e.target.value
                              })
                            }}
                            className="w-100 f-20">
                          <option
                              defaultValue>{item.placeholder}</option>
                          {item.options.map((op, index) => (
                              <option key={index} value={op.eValue} >{op.value}</option>
                          ))}
                        </select>
                      </div>
                  )
                }

                if (item.type === 'datalist')
                {
                  return(
                      <div className="col-md-6 mt-2" key={inpIndex}>
                        <input list={item.list} placeholder={item.placeholder}
                               className="mt-3"
                               onClick={() => { this.get_employees(item.options) }}
                               onChange={(e) => {
                                 this.setState({
                                   [item.name]: e.target.value
                                 })
                               }}
                        />
                        <datalist id={item.list}>
                          {this.state.datalist.map((item, index) => (
                              // console.log(item)
                              <option key={index} value={item.id}>{this.state.keys.map((res) => (
                                  item[res] + " "
                              ))}</option>
                          ))}
                        </datalist>
                      </div>
                  )
                }

                if (item.type === 'text')
                {
                  return(
                      <div className="col-md-6 mt-2" key={inpIndex}>
                        <input
                            placeholder={item.placeholder}
                            className="add-form-input-shodow w-100 mt-3 border-0 radius-10 px-2 text-right f-20"
                            type="text"
                            onChange={(e) => {
                              this.setState({
                                [item.name]: e.target.value
                              })
                            }}
                        />
                      </div>
                  )
                }
                return null
              })}
            </div>
            <button className="mt-4 font-medium border-0 px-5 f-20 submit-btn cursor" onClick={() => { this.log() }}>ثبت</button>
          </div>
          <div className="mt-5">
            <List
                type={this.props.type}
            />
          </div>
        </main>
    )
  }
}