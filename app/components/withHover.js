import React from 'react'

//HOC Method
export default function withHover(Component, propName='hovering') {
    return class WithHover extends React.Component {
        state = { hovering : false }

        mouseOut = () =>  this.setState({ hovering: false})
        
        mouseOver = () => 
            this.setState({ hovering: true })
            
        render() {
            const props = {
                [propName]: this.state.hovering,
                ...this.props
            }
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component {...props}/>
                </div>
            )
        }
    }
}
