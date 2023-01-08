import { useState } from "react";
import { Outlet, useNavigate, useParams, Link } from "react-router-dom";

export const ShowGithubUser = () => {
    const { user } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleGithubUserSearch = () => navigate(`/users/${name}`);
    const onInputChange = (event) => setName(event.target.value);

    return (
        <div>
            
            <br />
            <input  onChange={onInputChange}/>
            <button onClick={handleGithubUserSearch}>Search</button>
            {
                user === undefined ? 
                <div>
                    <Link to='/'>Go Home</Link>
                    <h1>User not specified.</h1>
                </div> : 
                    <div>
                        <h1>Github  information for {user}</h1>
                        <Outlet context={[user]}/>
                    </div>
            }
        </div>
    );
}