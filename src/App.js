import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import Counter from './components/Counter';
import { ShowGithubUser } from './components/ShowGithubUser';
import { NotFound } from './components/NotFound';
import { GithubUserList } from './components/GithubUserList';
import {GithubUser} from './components/GithubUser'

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Welcome name='Toni Pons'/>} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/users' element={<GithubUserList />}>
        <Route path='user' element={<ShowGithubUser />}>
          <Route path=':user' element={<GithubUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
