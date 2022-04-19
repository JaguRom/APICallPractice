import axios from 'axios';
import './Facts.css';
import {useState, useEffect} from 'react';

function Home() {
    const [fact, setFact] = useState(null);
	// Function which requests the API.
	const getRandomFact = async () => {
		try {
			const options = {
				method: 'GET',
				url: 'https://random-facts2.p.rapidapi.com/getfact',
				headers: {
					'X-RapidAPI-Key': 'b301fceb6emsh8501c16c8768c1ep1e0c16jsn01e61d9c6be5',
				}
			};
			// Make API Call
			const res = await axios.request(options);
			const stringifiedRes= JSON.stringify(res.data.Fact);
			setFact(stringifiedRes); // Save response in the state.
		} catch (error) {
			console.log(error);
		}
	};
	//Mounted component API call
	useEffect(() => {
		getRandomFact();
	}, []);


	return (
		<div className='DivFact__background'>
			<button onClick={() => getRandomFact()} className="btn-success btn-lg">Get a Random Fact</button>
			<h1>{fact}</h1>
		</div>
	);
}

export default Home
