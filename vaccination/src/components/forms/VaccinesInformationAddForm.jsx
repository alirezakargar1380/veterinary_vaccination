import React from "react";
import * as api from '../../API/public';
import List from "../List/List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class VaccinesInformationAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        {id: 1, name: 'name'},
        {id: 2, name: 'serial'}
      ],
      values: {}
    }
  }

  componentDidMount() {
  }

  async log() {
    const {inputs} = this.props
    for (let i = 0; i < inputs.length; i++) {
      if (this.state[inputs[i].name] === undefined)
      {
        return toast("لطفا فرم را کامل پر کنید", {
          type: "warning",
          theme: "dark"
        })

      }
      this.state.values[inputs[i].name] = this.state[inputs[i].name]
    }

    await api.add_livestock(this.state.values)
        .then((res) => {
          toast("کاربر با موفقیت ثبت شد", {
            type: "info",
            theme: "dark"
          })
          window.location.reload()
        })

  }

  render() {
    return(
        <main>
          <div className="text-center mt-5 col-md-4 mx-auto font-20">
            <h2 className="font-blod">{this.props.title}</h2>
            <div className="font-medium">
              <ToastContainer
                  position="bottom-center"
              />
            </div>
            <div>
                {/*  <form>*/}
            {/*    <input list="browsers" name="browser"/>*/}
            {/*    <datalist id="browsers"/>*/}
            {/*    <option value="Internet Explorer"/>*/}
            {/*    <option value="Firefox"/>*/}
            {/*    <option value="Chrome"/>*/}
            {/*    <option value="Opera"/>*/}
            {/*    <option value="Safari"/>*/}
            {/*  </datalist>*/}
            {/*  <input type="submit"/>*/}
            {/*</form>*/}
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