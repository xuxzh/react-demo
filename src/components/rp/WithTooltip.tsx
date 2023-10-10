import React, { ReactNode } from 'react'
interface WithTooltipProps {
  render?: (...args: any[]) => ReactNode,
  children: () => ReactNode
}

interface WithTooltipState {
  showTooltip: boolean,
  content: string
}

class WithTooltip extends React.Component<WithTooltipProps, WithTooltipState> {
  constructor(props: WithTooltipProps) {
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
          {/* {this.props.render()} */}
          {this.props.children()}
        </span>
        {this.state.showTooltip && <span>{this.state.content}</span>}
      </>
    );
  }
}

export default WithTooltip;