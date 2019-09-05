import React from "react";

const Discover = (props) => {
		return (
			<div>
				{console.log(props)}
				<h1>Befriend New Dogs</h1>
				<p>
					Thumbs up on any pups you'd like to meet!
				</p>
				{/* <div className="img-container">
					<img src={props.image} 
						alt="404 Pupper Not Found"
						id={props.id}
						onClick={() => props.cardClick(props.id)}
					/>
				</div> */}

			</div>
		)
	}


export default Discover;


//https://dog.ceo/api/breeds/image/random