import React from 'react';
import * as api from '../../API/public';
import VaccinesInfoTable from "../vaccines_info_table";


// just render live stock and when user click on them show vaccination detail

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: [],
      keys: [],
      searchValues: {
        name: "",
        lastname: "",
        state: "",
        city: "",
        father: "",
        type_work: "",
        booklet_number: "",
        type: "",
        type_livestock: "",
        personnel_code: "",
        emp_name: "",
        emp_lastname: "",
        vac_name: "",
        date: ""
      }
    }
  }

  async componentDidMount() {
    switch (this.props.type) {
      case 'vaccines_detail':
        await this.get_vaccines_detail()
        break;
      default:
        console.log('def')
    }

    if (!this.state.data[0]) return
    var title = [
      // "del",
      "id",
      "name",
      "lastname",
      "natinal_id",
      "father",
      "type_work", "state", "city", "booklet_number", "info"
    ]
    // var dateTitle = Object.keys(this.state.data[0])
    // for (let i = 0; i < dateTitle.length; i++) {
    //   title.push(dateTitle[i])
    // }
    // console.log(title)
    this.setState({
      keys: title
    })
  }

  async get_vaccines_detail() {
    this.setState({
      title: [
        // 'حذف',
        'شناسه',
        'نام دامدار',
        'نام خانوادگی دامدار',
        'شماره ملی',
        'نام پدر',
        'نوع دامداری',
        'استان',
        'شهرستان',
        'شماره شناسنامه',
      ]
    })
    await api.get_vaccines_detail(this.state.searchValues)
        .then((res) => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].name = res.data.data[i].livestock.name
            // res.data.data[i].lastname = res.data.data[i].livestock.lastname
            // res.data.data[i].natinal_id = res.data.data[i].livestock.natinal_id
            // res.data.data[i].father = res.data.data[i].livestock.father
            // res.data.data[i].state = res.data.data[i].livestock.state
            // res.data.data[i].city = res.data.data[i].livestock.city
            // res.data.data[i].employee_name = res.data.data[i].user.name
            // res.data.data[i].employee_lastname = res.data.data[i].user.lastname
            // res.data.data[i].employee_personnel_code = res.data.data[i].user.personnel_code
            // delete res.data.data[i].livestock_informations
            delete res.data.data[i].veterinary_address
            // delete res.data.data[i].emplyee_id
            // delete res.data.data[i].user.id
            // delete res.data.data[i].user
          }
          this.setState({
            data: res.data.data
          })
        })
  }

  render() {
    const {data, title, keys} = this.state
    // if (data.length === 0) return <h1>loading | emty</h1>
    return (
        <div>
          <div className="mb-5">

            <section className="row my-4 font-medium">
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام دامدار</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.name = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام خانوادگی دامدار</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.lastname = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام استان</label>
                <input className="w-100"
                       onChange={(e) => {
                         this.setState((prevState) => {
                           prevState.searchValues.state = e.target.value
                         })
                       }}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام شهر</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.city = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام پدر</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.father = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نوع کار</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type_work = e.target.value
                      })
                    }}
                    placeholder="عشایری / آزاد"
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">شماره دفترچه</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.booklet_number = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نوع عملیات</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نوع دام</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type_livestock = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">کد پرسنلی</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.personnel_code = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام کارمند</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.emp_name = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نام خانوادگی کارمند</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.emp_lastname = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">نوع واکسن</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.vac_name = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right cw">تاریخ عملیات</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.date = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
            </section>
            <div className="row">
              <div className="col-md-3">
                <button
                    onClick={ async () => {
                      await this.get_vaccines_detail()
                    }}
                    className="w-100 border-0 py-2 font-medium">فیلتر</button>
              </div>
            </div>

            {data.map((dateItem, dataIndex) => (
                <article key={dataIndex + 9000} className="radius-10 article-box-bg f-20 p-2 row my-5">{

                  keys.map((keysItem, index) => {
                    if (keys[index] === "info") {
                      return (

                          <VaccinesInfoTable key={index} info={dateItem.livestock_informations}/>

                      )
                    }
                    // if (title[index] === "حذف") {
                    //   return (
                    //       <div className="col-md-6" key={index}>
                    //         <section className="row mx-auto form-group">
                    //           <div className="col-md-6 text-left font-blod px-0">{title[index]}:</div>
                    //           <div className="col-md-6 text-right font-medium" onClick={() => {
                    //             alert(dateItem.id)
                    //           }}>کلیک
                    //           </div>
                    //         </section>
                    //       </div>
                    //   )
                    // }
                    else {
                      return (
                          <div className="col-md-6" key={index + 2000}>
                            <section className="row mx-auto form-group">
                              <div className="col-md-6 text-left font-blod px-0">{title[index]}:</div>
                              <div className="col-md-6 text-right font-medium">{dateItem[keysItem]}</div>
                            </section>
                          </div>
                      )
                    }
                  })

                }</article>
            ))}

          </div>
        </div>
    )
  }
}

// else {
//   {keys.map((key, kayIndex) => (
//       <div className="col-md-6" key={kayIndex}>
//         <section className="row mx-auto form-group">
//           <div className="col-md-6 text-left font-blod px-0">{item}:</div>
//           <div className="col-md-6 text-right">{data[key]}</div>
//         </section>
//       </div>
//   ))}
//   return (
//       <div className="col-md-6">
//         <section className="row mx-auto form-group">
//           <div className="col-md-6 text-left font-blod px-0">{item}:</div>
//           <div className="col-md-6 text-right">d</div>
//         </section>
//       </div>
//   )
// }