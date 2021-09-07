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
      keys: []
    }
  }

  async componentDidMount() {
    switch (this.props.type) {
      case 'vaccines_detail':
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
        await api.get_vaccines_detail()
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

  render() {
    const {data, title, keys} = this.state
    if (data.length === 0) return <h1>loading | emty</h1>
    return (
        <div>
          <div className="mb-5">

            {/*<div className="mb-5 article-box mx-auto row p-2">*/}
            {/*  <div className="col-md-6">*/}
            {/*    <section className="row mx-auto">*/}
            {/*      <div className="col-md-6 text-left font-blod px-0">تعداد کل واکسن شده:</div>*/}
            {/*      <div className="col-md-6 text-right font-medium">کلیک کنید</div>*/}
            {/*    </section>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {data.map((dateItem, dataIndex) => (
                <article key={dataIndex + 9000} className="radius-10 article-box-bg f-20 p-2 row mb-5">{

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