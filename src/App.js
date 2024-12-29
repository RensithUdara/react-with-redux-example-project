import './App.css';
import { Provider, provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Redux Project</h1>
      </div>
      </Provider>
  );
}

export default App;
