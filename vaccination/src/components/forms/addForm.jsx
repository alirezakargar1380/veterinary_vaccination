import React from "react";
import * as api from '../../API/public';
import List from "../List/List";

export default class AddForm extends React.Component {
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
        // return alert('فرم رو کامل پر کنید!')
      }

      this.state.values[inputs[i].name] = this.state[inputs[i].name]

    }

    switch (this.props.type) {
      case 'employee':
        await api.add_user(this.state.values)
            .then((res) => {
              console.log(res)
            })
        break;
      case 'livestock':
        await api.add_livestock(this.state.values)
            .then((res) => {
              console.log(res)
            })
        break;
      default:
        console.log('def')
    }
  }

  render() {
    return(
        <div className="text-center mt-5">
          <h2 className="font-blod">{this.props.title}</h2>

          <div className="font-Thin">
            {this.props.inputs.map((item) => {

              if (item.type === 'select')
              {
                return(
                    <select
                        key={item.id}
                        onChange={(e) => {
                          this.setState({
                            [item.name]: e.target.value
                          })
                        }}
                        className="px-3">
                      <option
                          key={item.id}
                          defaultValue>{item.placeholder}</option>
                      {item.options.map((op) => (
                          <option key={op.id} value={op.eValue} >{op.value}</option>
                      ))}
                    </select>
                )
              }

              if (item.type === 'text')
              {
                return(
                    <input
                        key={item.id}
                        placeholder={item.placeholder}
                        className="add-form-input-shodow mt-3 border-0 radius-10 mx-3 px-2 text-right" type="text"
                        onChange={(e) => {
                          this.setState({
                            [item.name]: e.target.value
                          })
                        }}
                    />
                )
              }
              return null
            })}
          </div>

          <button
              className="mt-4"
              onClick={() => {
                this.log()
              }}
          >ثبت</button>
          <div className="mt-5">
            <List
                type={this.props.type}
            />
          </div>
        </div>
    )
  }
}