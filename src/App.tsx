import './App.css';
import Chat from './components/Chat';
import Location from './components/Location';
import Learn from './components/Learn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/location" element={<Location />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
