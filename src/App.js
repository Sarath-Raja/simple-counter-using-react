import React, { useState } from "react";
import Counter from "./Counter"
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
	const [theme, setTheme] = useState('red')
	return (
		<ThemeContext.Provider value={{backgroundColor: theme}}>
			<h3>Counter</h3>
			<Counter initialValue={1}/>
			<h3>CounterHooks</h3>
			<CounterHooks initialValue={2}/><br/><br/>
			<button onClick={() => setTheme(prevTheme => {
				return prevTheme === 'red' ? 'blue' : 'red'
			}) }>Change Color</button>
		</ ThemeContext.Provider>
	)
}

export default App;
