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
        'روستا',
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
                <label className="w-100 text-right">نام دامدار</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.name = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام خانوادگی دامدار</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.lastname = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام استان</label>
                <input className="w-100"
                       onChange={(e) => {
                         this.setState((prevState) => {
                           prevState.searchValues.state = e.target.value
                         })
                       }}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام شهر</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.city = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام پدر</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.father = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نوع فعالیت دام دار</label>
                <select className="w-100"
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type_work = e.target.value
                      })
                    }}>
                  <option>انتخاب کنید...</option>
                  <option value="عشایری">عشایری</option>
                  <option value="ثابت">ثابت</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">شماره دفترچه</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.booklet_number = e.target.value
                      })
                    }}
                    className="w-100 pr-1 py-1"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نوع عملیات</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type = e.target.value
                      })
                    }}
                    className="w-100 pr-1 py-1"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نوع دام</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.type_livestock = e.target.value
                      })
                    }}
                    className="w-100 pr-1 py-1"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">کد پرسنلی</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.personnel_code = e.target.value
                      })
                    }}
                    className="w-100 pr-1 py-1"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام کارمند</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.emp_name = e.target.value
                      })
                    }}
                    className="w-100 pr-1 py-1"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نام خانوادگی کارمند</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.emp_lastname = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">نوع واکسن</label>
                <input
                    onChange={(e) => {
                      this.setState((prevState) => {
                        prevState.searchValues.vac_name = e.target.value
                      })
                    }}
                    className="w-100"/>
              </div>
              <div className="col-md-3 mb-3">
                <label className="w-100 text-right">تاریخ عملیات</label>
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

            {data.map((dataItem, dataIndex) => (
                <article key={dataIndex} className="radius-10 article-box-bg f-20 p-2 row my-5">{
                  (
                      <section className="w-100 font-Thin">

                        <div className="row mb-4 w-100">
                          <div className="col-sm-4">
                            <label className="text-right w-100 mb-0 font-blod">شماره دفترچه</label>
                            <div className="text-right w-100">{dataItem.booklet_number}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 font-blod">نام</label>
                            <div className="text-right w-100">{dataItem.name}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 font-blod">نام خانوادگی</label>
                            <div className="text-right w-100">{dataItem.lastname}</div>
                          </div>
                        </div>

                        <div className="row mb-4 w-100">
                          <div className="col-sm-4">
                            <label className="text-right w-100 font-blod">کد ملی</label>
                            <div className="text-right w-100">{dataItem.natinal_id}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 font-blod">نام پدر</label>
                            <div className="text-right w-100">{dataItem.father}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 font-blod">نوع فعالیت دام دار</label>
                            <div className="text-right w-100">{dataItem.type_work}</div>
                          </div>
                        </div>

                        <div className="row mb-4 w-100">
                          <div className="col-sm-4">
                            <label className="text-right w-100 mb-0 font-blod">استان</label>
                            <div className="text-right w-100">{dataItem.state}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 mb-0 font-blod">شهر</label>
                            <div className="text-right w-100">{dataItem.city}</div>
                          </div>
                          <div className="col-sm-4">
                            <label className="text-right w-100 mb-0 font-blod">روستا</label>
                            <div className="text-right w-100">{dataItem.village}</div>
                          </div>
                        </div>

                        <div className="d-flex mb-4 w-100">
                        </div>

                        <div className="w-100 over mb-3 overflow-auto">
                          <VaccinesInfoTable info={dataItem.livestock_informations}/>
                        </div>
                      </section>
                  )
                  // keys.map((keysItem, index) => {
                  //   if (keys[index] === "info") {
                  //     return (
                  //
                  //         h1
                  //
                  //     )
                  //   }
                  //   else {
                  //     console.log(dateItem)
                  //     return (
                  //         <div className="col-md-6 mb-2" key={index + 2000}>
                  //           <section className="d-flex">
                  //             <div className="col-md-6 text-left font-blod px-0"></div>
                  //             <div className="col-md-6 text-right font-medium">{dateItem.id}</div>
                  //           </section>
                  //         </div>
                  //     )
                  //   }
                  // })

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