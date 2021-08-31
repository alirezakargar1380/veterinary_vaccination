import React from "react";
// import * as api from '../API/public';
import Header from "../components/Header";
import SearchList from "../components/List/SearchList";
// import AddForm from "../components/forms/addForm";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'ok'
    }
  }

  componentDidMount() {
    // api.hello()
  }

  sendR() {
    alert(this.state.url)
  }

  render() {
    return(
        <div className="mx-auto w-75 mt-5">
          <div className="mb-5">
            <Header/>
          </div>
          <SearchList type={"vaccines_detail"} />
        </div>
    )
  }
}