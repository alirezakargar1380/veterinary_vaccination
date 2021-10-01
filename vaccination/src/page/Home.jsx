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
        <div className="col-md-6 mx-auto px-3">
          <div>
            <Header/>
          </div>
          <SearchList type={"vaccines_detail"} />
        </div>
    )
  }
}