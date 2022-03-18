import './App.css';
import Feature1 from './features/feature1';
import Feature2 from './features/feature2';
import Loader from './common/loader';

function App() {
  return (
    <div className="App">
      <Loader />
      <Feature1 />
      <Feature2 />
    </div>
  );
}

export default App;
