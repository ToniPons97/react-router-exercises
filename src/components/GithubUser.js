import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export const GithubUser = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const user = useOutletContext();

    const fetchGithubUser = async (user) => {
        if (!user) 
            return;

        try {
            const url = `https://api.github.com/users/${user}`;
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch(e) {
            setError(e);
        }
        
    }

    useEffect(() =>{
        fetchGithubUser(user);
    }, [user]);

    return (
        <div>
            {
                !!data?.login ? 
                <div>
                    <h1>Hello, {data.login}!</h1>
                    <h2>Here is your information</h2>
                </div> 
                : <h1>User not found</h1>
            }

            <ul>
                {data?.name && <li><b>Name:</b> {data?.name}</li>}
                {data?.login && <li><b>Username:</b> {data?.login}</li>}
                {data?.id && <li><b>User id</b>: {data?.id}</li>}
                {data?.html_url && <li><a href={data?.html_url}>Github Profile</a></li>}
                {data?.type && <li><b>Type:</b> {data?.type}</li>}
                {data?.twitter_username && <li><b>Twitter:</b> {data?.twitter_username}</li>}
                {data?.company && <li><b>Company:</b> {data?.company}</li>}
                {data?.location && <li><b>Location:</b> {data?.location}</li>}
                {data?.public_repos && <li><b>Public Repositories:</b> {data?.public_repos}</li>}
                {data?.email && <li><b>Email:</b> {data?.email}</li>}
                {data?.hireable && <li><b>Hireable:</b> {data?.hireable}</li>}
                {data?.followers && <li><b>Followers:</b> {data?.followers}</li>}
                {data?.following && <li><b>Following:</b> {data?.following}</li>}
                {data?.created_at && <li><b>Account Created at:</b> {data?.created_at}</li>}
                {data?.updated_at && <li><b>Last Acccount Update at:</b> {data?.updated_at}</li>}

            </ul>
        </div>
    );
}