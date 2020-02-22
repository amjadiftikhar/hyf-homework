import React, { useState, useEffect } from "react";

function UserDetails({ user }) {
	const [details, setDetails] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchDetails = async login => {
		const url = `https://api.github.com/users/${login}`;
		const details = await fetch(url)
			.then(data => data.json())
			.catch(error => console.log(error));
		setDetails(details);
		setLoading(false);
	};

	useEffect(() => {
		fetchDetails(user.login);
	}, [user.login]);

	if (loading) return <></>;
	return (
		<div className="userDetails">
			<div>{details.name}</div>
			<div>{details.blog}</div>
			<div>{details.bio}</div>
			<div>Location: {details.location}</div>
			<div>Public repos: {details.public_repos}</div>
			<div>Followers: {details.followers}</div>
		</div>
	);
}

export default UserDetails;