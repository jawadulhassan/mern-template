import React, {Fragment} from 'react';

function Details({data}) {
	console.log(data);
	const {
		Year,
		Type,
		Plot,
		Title,
		Genre,
		Writer,
		Actors,
		Poster,
		Country,
		Language,
		imdbVotes,
		imdbRating,
		totalSeasons,
		// imdbID,
		// Awards,
		// Rated,
		// Director,
		// Metascore,
		// Ratings,
		// Released,
		// Response,
		// Runtime,
	} = data;

	return (
		<div style={{padding: '3% 5%'}}>
			<div
				style={{
					flex: 1,
					display: 'flex',
					padding: '1% 5%',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<div className="d-flex flex-row" style={{width: '95%'}}>
					<img src={Poster} className="details-icon" alt="icon" />
					<div className="ml-4">
						<div className="details-name">{Title}</div>
						<div className="d-flex flex-row">
							{!!Year && (
								<Fragment>
									<span className="details-subtext">{Year}</span>
									<span className="ghost">|</span>
								</Fragment>
							)}
							{!!Type && (
								<Fragment>
									<span className="details-subtext">{Type}</span>
									<span className="ghost">|</span>
								</Fragment>
							)}
							{!!Country && (
								<Fragment>
									<span className="details-subtext">{Country}</span>
									<span className="ghost">|</span>
								</Fragment>
							)}
							{!!Language && <span className="details-subtext">{Language}</span>}
						</div>
						<div className="description">{Plot}</div>
						{!!totalSeasons && (
							<div className="row">
								<div className="category">Seasons:</div>
								<div className="blue-font">{totalSeasons}</div>
							</div>
						)}
						<div className="row">
							<div className="category"> Creator:</div>
							<div className="blue-font"> {Writer}</div>
						</div>
						<div className="row">
							<div className="category"> Stars:</div>
							<div className="blue-font">{Actors}</div>
						</div>
						<div className="row">
							<div className="category"> Genre:</div>
							<div className="blue-font">{Genre}</div>
						</div>

						{/* <div className="row blue-font">
							<div className="category"> Progress Guide:</div>4
						</div> */}
					</div>
				</div>
				<div style={{marginRight: '1%'}}>
					<img src="/static/images/star.png" alt="star-icon" className="star-icon" />
					<span className="ratings">
						{imdbRating}
						<span className="details-subtext"> {imdbVotes}</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Details;
