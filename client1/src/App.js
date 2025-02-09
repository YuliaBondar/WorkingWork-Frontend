import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import QuestionComponent from './pages/QuestionComponent/QuestionComponent';
import SignIn from './pages/SignIn/SignIn';
import FindTask from './pages/FindTask/FindTask';
import CreatingTask from './pages/CreatingTask/CreatingTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* окна оповещения */}
      <ToastContainer />

       <Header/>
       <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuestionComponent" element={<QuestionComponent />} />
          <Route path="/FindTask" element={<FindTask />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CreatingTask" element={<CreatingTask />}/>
          
          
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
