import { useState } from 'react';
import './general.css';
export default function App() {
	const [count, setCount] = useState<number>(0);
	const [sequence, setSequence] = useState<number[]>([]);

	const generateSequence = (n: number): number[] => {
		const result: number[] = [];

		for (let i = 0; i < n; i++) {
			if (i <= 1) {
				result.push(i);
			} else {
				const fib = result[i - 1] + result[i - 2];
				result.push(fib);
			}
		}

		return result;
	};

	const handleGenerate = () => {
		const sequence = generateSequence(count);
		setSequence(sequence);
	};
	return (
		<main>
			<div className="box">
				<section>
					<h1>
						Sequência de <a href="https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci" target="_blank">Fibonnaci</a>
					</h1>
					<div>
						<div className="group">
							<input
								type="number"
								min="0"
								value={count}
								onChange={ev => setCount(Number(ev.target.value))}
							/>
							<label>Número de elementos</label>
						</div>

						<button onClick={handleGenerate}>Gerar Sequência</button>
					</div>
				</section>

				<section>
					{sequence && sequence.join(", ")}
				</section>
			</div>
		</main>
	);
}