import { Outlet, useParams } from "react-router-dom";

export const ShowGithubUser = () => {
    const { user } = useParams();
    return (
        <div>
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