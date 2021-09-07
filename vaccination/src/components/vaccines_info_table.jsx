import React from "react";

export default class Vaccines_info_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livestock_columns: [
        "نام",
        "نام خانوادگی",
        "کد پرسنلی",
        "نوع عملیات",
        "نام واکسن",
        "نوع دام",
        "تعداد دام",
        "واجد شرایط",
        "واکسن زده شده",
        "باقی مانده",
        "تاریخ",
      ]
    }
  }

  render() {
    const {info} = this.props
    console.log(info)
    return (
        <div className="w-fit overflow-x-hidden">
          <table border="1" className="font-Thin text-center w-100 m-1 bg-w f-16" dir='rtl'>
            <thead>
            <tr>
              {this.state.livestock_columns.map((item, index) => (

                  <th className="px-3" key={index}>
                    {item}
                  </th>

              ))}
            </tr>
            </thead>
            <tbody>

            {info.map((item) => (
                <tr key={item.id}>
                  <th>{item.user.name}</th>
                  <th>{item.user.lastname}</th>
                  <th>{item.user.personnel_code}</th>
                  <th>{item.type}</th>
                  <th>{item.vaccine.name}</th>
                  <th>{item.type_livestock}</th>
                  <th>{item.number_livestock}</th>
                  <th>{item.number_eligible_livestock}</th>
                  <th>{item.vaccinated_number}</th>
                  <th>{item.number_eligible_livestock - item.vaccinated_number}</th>
                  <th>{item.date}</th>
                </tr>
            ))}

            </tbody>
          </table>
        </div>
    )
  }
}