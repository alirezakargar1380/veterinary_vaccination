import React from "react";

export default class SectionButton extends React.Component {
  render() {
    return(
        <div className="my-4 w-fit">
          <a href={this.props.href}>
            <button
                className={"radius-10 section-btn-shodow w-fit bg-w cursor border-0 "+this.props.class}
            >
              <div className="px-3 font-Thin f-20">{this.props.value}</div>
            </button>
          </a>
        </div>
    )
  }
}