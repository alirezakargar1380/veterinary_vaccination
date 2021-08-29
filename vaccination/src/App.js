import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import AddForm from "./components/forms/addForm";

export default class App extends React.Component {

  employee_op() {
    return [
      {
        id: 1,
        value: 'کارمند'
      },
      {
        id: 2,
        value: 'مدیر'
      }
    ]
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route
                path="/add_employee"
                render={(props) => (
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
                            placeholder: 'نام کارمند'
                          },
                          {
                            id: 4,
                            name: 'personnel_code',
                            type: 'text',
                            placeholder: 'کد پرسنلی'
                          }
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
