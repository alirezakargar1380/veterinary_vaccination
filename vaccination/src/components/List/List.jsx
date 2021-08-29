import React from "react";
import * as api from '../../API/public';

export default class List extends React.Component {
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
      case 'employee':
        this.setState({
          title: [
            'شناسه',
            'نقش',
            'کد پرسنلی',
            'شناسه محل کار',
            'شماره تماس',
            'نام',
            'نام خانوادگی',
            'رمز عبور'
          ]
        })
        await api.get_user().then((res) => {
          this.setState({
            data: res.data.data
          })
        })
        break;
      case 'livestock':
        this.setState({
          title: [
            'شناسه',
            'نام',
            'نام خانوادگی',
            'کد ملی',
            'نام پدر',
            'نوع دام',
            'آدرس محل تحت پوشش',
            'استان',
            'شهر',
            'شماره شناسنامه'
          ]
        })
        await api.get_livestock().then((res) => {
          this.setState({
            data: res.data.data
          })
        })
        break;
      default:
        console.log('def')
    }

    var title = Object.keys(this.state.data[0])
    title.splice(title.length-3,3)
    console.log(title)
    this.setState({
      keys: title
    })
  }

  render() {
    const {data, title, keys} = this.state
    // const {hello} = this.props
    // console.log(title)
    if (data.length === 0) return <h1>loading</h1>
    return(
        <div>
          <table border="1" className="font-Thin f-20" dir='rtl'>
            <thead>
            <tr>
              {title.map((item, index) => (
                  <th key={index}>{item}</th>
              ))}
            </tr>
            </thead>
            {data.map((item, index) => {
              return (
                  <tbody key={index} >
                  <tr key={index} >
                    {keys.map((key, index) => (
                        <th key={index} >{item[key]}</th>
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