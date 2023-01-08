import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import Counter from './components/Counter';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Toni Pons'/>} />
      <Route path='/counter' element={<Counter />} />
    </Routes>
  );
}

export default App;
