import React from "react";

export default class Vaccines_info_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livestock_columns: [
        "نوع عملیات",
        "نام واکسن",
        "نوع دام",
        "تعداد دام",
        "تعداد دام واجد شرایط",
        "واکسن زده",
        "باقی مانده",
        "تاریخ",
      ]
    }
  }

  render() {
    const {info} = this.props
    console.log(info)
    return (
        <div className="w-100">
          <table className="font-Thin text-center w-100 m-1 f-16 border-0" dir='rtl'>
            <thead className="border-bottom">
            <tr>
              {this.state.livestock_columns.map((item, index) => (

                  <th className="pb-2 w-fit px-2" key={index}>
                    {item}
                  </th>

              ))}
            </tr>
            </thead>


            {info.map((item) => {

              if(item.type === "فردی") {
                return (
                    <tbody>
                    <tr key={item.id} data-bs-toggle="collapse"
                        data-bs-target={"#collapseExample" + item.id}
                        aria-expanded="false"
                        className="mission-item"
                        // aria-controls="collapseExample"
                    >
                      <th>{item.type}</th>
                      <th>{item.vaccine.name}</th>
                      <th>{item.type_livestock}</th>
                      <th>{item.number_livestock}</th>
                      <th>{item.number_eligible_livestock}</th>
                      <th>{item.vaccinated_number}</th>
                      <th>{item.number_eligible_livestock - item.vaccinated_number}</th>
                      <th>{item.date}</th>
                    </tr>
                    <tr className="collapse cw w-100" id={"collapseExample" + item.id}>
                      <td colSpan="10" className="w-100 py-3">
                        <table className="w-100">
                          <tr className="mission-more-detail-table">
                            <th>کد پرسنلی</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                          </tr>
                          <tr>
                            <td className="cb">{item.user.personnel_code}</td>
                            <td className="cb">{item.user.name}</td>
                            <td className="cb">{item.user.lastname}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    </tbody>
                )
              }

              if(item.type === "اکیپی") {
                return (
                    <tbody>
                    <tr key={item.id} data-bs-toggle="collapse"
                        data-bs-target={"#collapseExample" + item.id}
                        aria-expanded="false"
                        className="mission-item"
                        // aria-controls="collapseExample"
                    >
                      <th>{item.type}</th>
                      <th>{item.vaccine.name}</th>
                      <th>{item.type_livestock}</th>
                      <th>{item.number_livestock}</th>
                      <th>{item.number_eligible_livestock}</th>
                      <th>{item.vaccinated_number}</th>
                      <th>{item.number_eligible_livestock - item.vaccinated_number}</th>
                      <th>{item.date}</th>
                    </tr>
                    <tr className="collapse cw w-100" id={"collapseExample" + item.id}>
                      <td colSpan="10" className="w-100 py-3">
                        <table className="w-100">
                          <tr className="mission-more-detail-table">
                            <th>#</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>تعداد دامی که هر کارمند واکسن زده است</th>
                          </tr>
                          {item.ecips.map((data) => (
                              <tr>
                                <td className="cb">{data.id}</td>
                                <td className="cb">{data.user.name}</td>
                                <td className="cb">{data.user.lastname}</td>
                                <td className="cb">{item.vaccinated_number / 2}</td>
                              </tr>
                          ))}

                        </table>
                      </td>
                    </tr>
                    </tbody>
                )
              }

            })}
          </table>

        </div>
    )
  }
}