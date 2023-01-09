import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export const GithubUserList = () => {
    const [userList, setUserList] = useState([]);
    const [beginSearch, setBeginSearch] = useState(false);
    const [searchUser, setSearchUser] = useState('');

    const searchInputRef = useRef(null);
    
    const handleInput = (event) => {
        if (beginSearch)
            setBeginSearch(false);
        setSearchUser(event.target.value)
        
    };
    
    const handleSearch = () => {
        addUser(searchUser);

        searchInputRef.value = '';
    };
    

    const addUser = (user) => {
        setBeginSearch(true);
        if (user && !userList.includes(user)) 
            setUserList(prev => [...prev,  user]);
    
        setSearchUser('');
    };

    const deleteUser = (username) => setUserList(prev => prev.filter(user => user !== username));
    const deleteAllUsers = () => setUserList([]);
    
    return (
        <div>
            <h1>Github User Searcher</h1>
            <input ref={searchInputRef} name='username' id='username' value={searchUser} onChange={handleInput} autoComplete='off'/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={deleteAllUsers}>Clear Users</button>
            <div>   
            {/*
                beginSearch ?
                    userList.map(user => 
                        <GithubUser 
                            key={crypto.randomUUID()} 
                            beginSearch={beginSearch} 
                            username={user} 
                            deleteUser={deleteUser}
                        />)
                    : <h1>Writing...</h1>
            */}
            <ul>
                {
                    beginSearch ? 
                        userList.map(user => {
                            return (
                                <li key={crypto.randomUUID()}>
                                    <Link to={'/users/user/' + user}>{user}</Link>
                                    <button onClick={() => deleteUser(user)}>Delete User</button>
                                </li>
                            );
                        })
                    : <h2>Writing...</h2>
                }
            </ul>

            <Outlet />
          </div>
        </div>
    );
}