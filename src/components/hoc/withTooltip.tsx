import React from "react";

interface HocProps {
  [prop: string]: any
}

interface HocState {
  showTooltip: boolean,
  content: string
}
export default function withTooltip(Component: any) {
  class HOC extends React.Component<HocProps, HocState>{
    constructor(props: any) {
      super(props);
      this.state = {
        showTooltip: false,
        content: ''
      }
    }
    handleOver(ev: any) {
      this.setState({
        showTooltip: true,
        content: ev.target.innerText
      })
    }

    handleOut() {
      this.setState({
        showTooltip: false,
        content: ''
      })
    }

    render() {
      return (
        <>
          <span onMouseOver={(ev) => this.handleOver(ev)} onMouseOut={() => this.handleOut()}>
            <Component {...this.props} />
          </span>
          {this.state.showTooltip && (<span>{this.state.content}</span>)}
        </>

      )
    }
  }
  return HOC;
}