import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import AddForm from "./components/forms/addForm";
import * as api from './API/public';

export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    address: []
  }
}
  employee_op() {
    return [
      {
        id: 6785678,
        value: 'کارمند',
        eValue: 'کارمند'
      },
      {
        id: 56786,
        value: 'مدیر',
        eValue: 'مدیر'
      }
    ]
  }

  async address_op() {
    const address = await api.get_address().then((res) => {
      return res.data.data
    })
    var options = []
    for (let i = 0; i < address.length; i++) {
      options.push({
        id: address[i].id,
        eValue: address[i].id,
        value: address[i].address,
      })
    }

    this.setState({
      address: options
    })
  }

  async componentDidMount() {
    await this.address_op()
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route
                path="/add_employee"
                render={ (props) => (
                    <AddForm
                        title={"اضافه کردن کارمند"}
                        type={"employee"}
                        inputs={[
                          {
                            id: 1,
                            name: 'name',
                            type: 'text',
                            placeholder: 'نام کارمند'
                          },
                          {
                            id: 2,
                            name: 'role',
                            type: 'select',
                            options: this.employee_op(),
                            placeholder: 'نقش کاربر'
                          },
                          {
                            id: 3,
                            name: 'phone',
                            type: 'text',
                            placeholder: 'شماره تماس'
                          },
                          {
                            id: 4,
                            name: 'personnel_code',
                            type: 'text',
                            placeholder: 'کد پرسنلی'
                          },
                          {
                            id: 5,
                            name: 'workplace_id',
                            type: 'select',
                            options: this.state.address,
                            placeholder: 'آدرس'
                          },
                          {
                            id: 6,
                            name: 'name',
                            type: 'text',
                            placeholder: 'نام'
                          },
                          {
                            id: 7,
                            name: 'lastname',
                            type: 'text',
                            placeholder: 'نام خانوادگی'
                          },
                          {
                            id: 8,
                            name: 'password',
                            type: 'text',
                            placeholder: 'پسورد'
                          },
                        ]}
                        {...props}
                    />
                )}
            />
            <Route
                path="/add_live_stock"
                render={(props) => (
                    <AddForm
                        title={"اضافه کردن دامدار"}
                        type={"livestock"}
                        inputs={[
                          {
                            id: 1,
                            name: 'name',
                            type: 'text',
                            placeholder: 'نام دامدار'
                          },
                          {
                            id: 2,
                            name: 'lastname',
                            type: 'text',
                            placeholder: 'نام خانوادگی'
                          },
                          {
                            id: 3,
                            name: 'phone',
                            type: 'text',
                            placeholder: 'شماره تماس'
                          },
                          {
                            id: 4,
                            name: 'natinal_id',
                            type: 'text',
                            placeholder: 'کد ملی'
                          },
                          {
                            id: 5,
                            name: 'father',
                            type: 'text',
                            placeholder: 'نام پدر'
                          },
                          {
                            id: 6,
                            name: 'type_work',
                            type: 'text',
                            placeholder: 'نوع فعالیت دام'
                          },
                          {
                            id: 7,
                            name: 'veterinary_address',
                            type: 'text',
                            placeholder: 'آدرس محل تحت پوشش'
                          },
                          {
                            id: 8,
                            name: 'booklet_number',
                            type: 'text',
                            placeholder: 'شماره شناسنامه'
                          },
                        ]}
                        {...props}
                    />
                )}
            />
            <Route
                path="/"
                render={(props) => (
                    <Home {...props} />
                )}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    )
  }

}
