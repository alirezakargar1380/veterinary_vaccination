import React from 'react';
import * as api from '../../API/public';

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: [],
      keys: []
    }
  }

  async componentDidMount() {
    switch (this.props.type) {
      case 'vaccines_detail':
        this.setState({
          title: [
            'شناسه',
            'واکسینه شده ها',
            'نوع دام',
            'تعداد دام',
            'تعداد دام واجد شرایط',
            'نام دامدار',
            'نام خانوادگی دامدار',
            'کد ملی دامدار',
            'نام پدر',
            'نام کارمند',
            'نام خانوادگی',
            'کد پرسنلی'
          ]
        })
        await api.get_vaccines_detail()
            .then((res) => {
              for (let i = 0; i < res.data.data.length; i++)
              {
                res.data.data[i].name = res.data.data[i].livestock.name
                res.data.data[i].lastname = res.data.data[i].livestock.lastname
                res.data.data[i].natinal_id = res.data.data[i].livestock.natinal_id
                res.data.data[i].father = res.data.data[i].livestock.father
                res.data.data[i].employee_name = res.data.data[i].user.name
                res.data.data[i].employee_lastname = res.data.data[i].user.lastname
                res.data.data[i].employee_personnel_code = res.data.data[i].user.personnel_code
                delete res.data.data[i].livestock
                delete res.data.data[i].livestock_id
                delete res.data.data[i].emplyee_id
                delete res.data.data[i].user.id
                delete res.data.data[i].user
              }
              this.setState({
                data: res.data.data
              })
            })
        break;
      default:
        console.log('def')
    }

    if (!this.state.data[0]) return
    var title = Object.keys(this.state.data[0])
    this.setState({
      keys: title
    })
  }

  render() {
    const {data, title, keys} = this.state
    // const {hello} = this.props
    console.log(data)
    if (data.length === 0) return <h1>loading | emty</h1>
    return(
        <div className="w-fit mx-auto">
          <table border="1" className="font-Thin" dir='rtl'>
            <thead>
            <tr>
              {title.map((item, index) => (
                  <th className="px-3" key={index}>{item}</th>
              ))}
            </tr>
            </thead>
            {data.map((item, index) => {
              return (
                  <tbody key={index} >
                  <tr key={index} >
                    {keys.map((key, index) => (
                        <th className="px-3" key={index} >{item[key]}</th>
                    ))}
                  </tr>
                  {/*<th>{item.id}</th>*/}
                  {/*<th>{item.role}</th>*/}
                  {/*<th>{item.personnel_code}</th>*/}
                  </tbody>
              )
            })}

          </table>
        </div>
    )
  }
}