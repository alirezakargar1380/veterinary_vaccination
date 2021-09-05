import React from "react";
import * as api from '../../API/public';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: [],
      keys: []
    }
  }

  async renderDate() {
    switch (this.props.type) {
      case 'employee':
        this.setState({
          title: [
            'حذف',
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
      case 'information_livestock':
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
        await api.get_life_stock_information().then((res) => {
          for (let i = 0; i < res.data.data.length; i++)
          {
            res.data.data[i].name = res.data.data[i].livestock.name
            res.data.data[i].lastname = res.data.data[i].livestock.lastname
            res.data.data[i].natinal_id = res.data.data[i].livestock.natinal_id
            res.data.data[i].father = res.data.data[i].livestock.father
            delete res.data.data[i].livestock
            delete res.data.data[i].livestock_id
            // console.log(res.data.data[i])
          }

          this.setState({
            data: res.data.data
          })
        })
        break;
      case 'vaccines':
        this.setState({
          title: [
            'شناسه',
            'نام واکسن',
            'سریال'
          ]
        })
        await api.get_vaccines().then((res) => {
          this.setState({
            data: res.data.data
          })
        })
        break;
      case 'lifestock_address':
        this.setState({
          title: [
            'شناسه',
            'آدرس'
          ]
        })
        await api.get_address().then((res) => {
          this.setState({
            data: res.data.data
          })
        })
        break;
      default:
        console.log('def')
    }
  }

  async destroyItem(id) {
    switch (this.props.type) {
      case 'employee':
        await api.delete_user(id)
            .then(() => {
              toast("کاربر با حذف شد",{
                type: "info",
                theme: "dark"
              })
            })
        break;
      default:
        console.log('def')
    }

    await this.renderDate()
  }

  async componentDidMount() {
    await this.renderDate()
    if (!this.state.data[0]) return
    var title = Object.keys(this.state.data[0])
    this.setState({
      keys: title
    })

  }


  render() {
    const {data, title, keys} = this.state
    // const {hello} = this.props
    // console.log(title)
    if (data.length === 0) return <h1>loading | emty</h1>
    return(
        <div className="w-fit mx-auto">
          <table border="1" className="font-Thin f-20" dir='rtl'>
            <thead>
            <tr>
              {title.map((item, index) => (
                  <th className="px-2" key={index}>{item}</th>
              ))}
            </tr>
            </thead>
            {data.map((item, index) => {
              return (
                  <tbody key={index} >
                  <tr key={index}>
                    <th className="cursor" onClick={() => this.destroyItem(item.id)}>کلیک</th>
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