import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Toni Pons'/>} />
    </Routes>
  );
}

export default App;
