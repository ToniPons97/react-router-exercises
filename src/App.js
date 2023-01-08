import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import Counter from './components/Counter';
import { ShowGithubUser } from './components/ShowGithubUser';
import { GithubUser } from './components/GithubUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Toni Pons'/>} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/users' element={<ShowGithubUser />}>
        <Route path=':user' element={<GithubUser />} />
      </Route>

    </Routes>
  );
}

export default App;
