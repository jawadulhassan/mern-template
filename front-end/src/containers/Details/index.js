import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Loader from '../../components/widgets/Loader';
import ErrorToast from '../../components/widgets/ErrorToast';

import DetailsView from '../../components/views/Details';

function Details(props) {
	const {
		match: {params: name},
	} = props;

	const {name: itemName} = name;

	const [data, setData] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getData(itemName);
	}, [itemName]);

	async function getData(item) {
		const response = await axios.get(`http://www.omdbapi.com/?t=${item}&apikey=bb0aec8b`);
		if (response.data.Response === 'False') {
			setIsError(true);
		}
		setData(response.data);
		setIsLoading(false);
	}
	if (isError) return <ErrorToast />;
	if (isLoading) return <Loader />;
	if (!data) return null;
	return <DetailsView {...{data}} />;
}

export default Details;
