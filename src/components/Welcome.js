import { Link, useParams } from "react-router-dom";

export const Welcome = () => {
    const { name = 'User' } = useParams();
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <h3>Explore</h3>
            <ul>
                <li>
                    <Link to='/counter'>Counter</Link>
                </li>
                <li>
                    <Link to='/users'>Github User Searcher</Link>
                </li>
            </ul>
        </div>
    );
}