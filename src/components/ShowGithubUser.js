import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const ShowGithubUser = () => {
    const { user } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleGithubUserSearch = () => navigate(`/users/${name}`);
    const onInputChange = (event) => setName(event.target.value);

    return (
        <div>
            <input  onChange={onInputChange}/>
            <button onClick={handleGithubUserSearch}>Search</button>
            {
                user === undefined ? <h1>User not specified.</h1> : 
                    <div>
                        <h1>Github  information for {user}</h1>
                        <Outlet context={[user]}/>
                    </div>
            }
        </div>
    );
}