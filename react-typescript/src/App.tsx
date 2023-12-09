import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodosPage from './component/TodosPage';
import UserPage from './component/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserPage/>} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
