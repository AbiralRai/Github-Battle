import React from 'react'

//Render props
export default class Hover extends React.Component {
    state = { hovering : false }

    mouseOut = () => this.setState({hovering: false})
    mouseOver = () => this.setState({ hovering: true }) 

    render() {
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}