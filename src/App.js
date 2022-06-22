import './App.css';
import {Routes, Route, Router} from 'react-router-dom';
import Students from './Students';
import AddStudent from './AddStudent';
import EditStudent from './Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="addstudent" element={<AddStudent />} />
        <Route path="editstudent/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
