import { Component } from "react";
import { ThemeContext } from "./App"

export default class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count : this.props.initialValue
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {(style) => {
                    return (
                        <div>
                            <button style={style} onClick={() => { this.changeCounter(-1) }}>-</button>
                            <span> {this.state.count} </span>
                            <button style={style} onClick={() => { this.changeCounter(1) }}>+</button>
                        </div>
                    )

                }}
            </ThemeContext.Consumer>
        )
    }

    changeCounter(amount) {
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
    }
}
    
    
    
    
    