import {useState, useContext} from "react";
import { ThemeContext } from "./App"

export default function CounterHooks({initialValue}) {
    const [count, setCount] = useState(initialValue)
    const style = useContext(ThemeContext)
    return (
        <>
            <button style={style} onClick={() => setCount(prevState => --prevState)}>-</button>
            <span> {count} </span>
            <button style={style} onClick={()=>{setCount(prevState=> ++prevState)}}>+</button>
        </>
    )
}
