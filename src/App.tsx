import { useState } from 'react';
import './general.css';
export default function App() {
	const [fibonacci, setFibonacci] = useState<number>(0);

	function generateSequenceFibonacci(limit: number): number[]{
		let arr  = [0, 1];
		for(let i = 1; i < limit; i++){ arr.push(arr[i - 1] + arr[i]); }
		return arr;
	}
	return (
		<main>
			<h1>
				Sequência de <a href="https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci" target="_blank">Fibonnaci</a>
			</h1>
			<div className="form-control">
				<label htmlFor="fibonacci_limit">Limite da sequência:</label>
				<input
					type="number"
					id="fibonacci_limit"
					min="0"
					value={fibonacci}
					onChange={ev => setFibonacci(parseInt(ev.target.value))}
				/>
			</div>

			{fibonacci > 2 ? generateSequenceFibonacci(fibonacci).join(", ") : ""}
		</main>
	);
}