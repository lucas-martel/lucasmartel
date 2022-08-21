import './App.css';
import { BrowserRouter} from 'react-router-dom';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
