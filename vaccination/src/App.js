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
    address: [],
    life_stock_types: [],
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

  async lifestock_types() {
    const types = await api.get_life_stock_types().then((res) => {
      return res.data.data
    })
    var options = []
    for (let i = 0; i < types.length; i++) {
      options.push({
        id: types[i].id,
        eValue: types[i].type,
        value: types[i].type,
      })
    }

    this.setState({
      life_stock_types: options
    })
  }

  async componentDidMount() {
    // console.log(window.location.href)
    await this.address_op();
    await this.lifestock_types();
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
                            id: 7,
                            name: 'lastname',
                            type: 'text',
                            placeholder: 'نام خانوادگی'
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
                            name: 'type_work',
                            type: 'select',
                            options: [{
                              eValue: 'عشایر',
                              value: 'عشایر',
                            }, {
                              eValue: 'شهری',
                              value: 'شهری',
                            }],
                            placeholder: 'نوع فعالیت دام'
                          },
                          {
                            name: 'veterinary_address',
                            type: 'select',
                            options: this.state.address,
                            placeholder: 'آدرس محل تحت پوشش'
                          },
                          {
                            name: 'booklet_number',
                            type: 'text',
                            placeholder: 'شماره شناسنامه'
                          },
                          {
                            name: 'state',
                            type: 'text',
                            placeholder: 'استان'
                          },
                          {
                            name: 'city',
                            type: 'text',
                            placeholder: 'شهر'
                          },
                        ]}
                        {...props}
                    />
                )}
            />
            <Route
                path="/information_livestock"
                render={(props) => (
                    <AddForm
                        title={"اطلاعات دامداران"}
                        type={"information_livestock"}
                        inputs={[
                          {
                            id: 1,
                            name: 'livestock_id',
                            type: 'text',
                            placeholder: 'نام دامدار'
                          },
                          {
                            id: 2,
                            type: 'select',
                            options: this.state.life_stock_types,
                            placeholder: 'نوع دام'
                          }
                        ]}
                        {...props}
                    />
                )}
            />
            <Route
                path="/vaccines"
                render={(props) => (
                    <AddForm
                        title={"واکسن ها"}
                        type={"vaccines"}
                        inputs={[
                          {
                            id: 1,
                            name: 'name',
                            type: 'text',
                            placeholder: 'نام واکسن'
                          },
                          {
                            id: 2,
                            name: 'serial',
                            type: 'text',
                            placeholder: 'سریال'
                          }
                        ]}
                        {...props}
                    />
                )}
            />
            <Route
                path="/lifestock_address"
                render={(props) => (
                    <AddForm
                        title={"آدرس مراکز"}
                        type={"lifestock_address"}
                        inputs={[
                          {
                            id: 1,
                            name: 'address',
                            type: 'text',
                            placeholder: 'آدرس'
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
