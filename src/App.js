import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AlbumsList from './components/albumList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Redux Project</h1>

        <fruitSection />
        <AlbumsList />
      </div>
    </Provider>
  );
}

export default App;
