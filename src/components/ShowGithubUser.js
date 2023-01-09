import { Outlet, useParams, Link } from "react-router-dom";

export const ShowGithubUser = () => {
    const { user } = useParams();

    return (
        <div>
            {
                user === undefined ? 
                <div>
                    <Link to='/user'>Go Home</Link>
                    <h2>User not specified.</h2>
                </div> : 
                    <div>
                        <h1>Github  information for {user}</h1>
                        <Outlet context={[user]}/>
                    </div>
            }
        </div>
    );
}