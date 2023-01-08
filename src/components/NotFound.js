import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>404: Resource not found</h1>
            <h2>Perhaps you got lost?</h2>
            <Link to={'/'}>Go Home</Link>
        </div>
    );
}