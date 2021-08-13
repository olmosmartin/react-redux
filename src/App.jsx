import './App.css';
import { Pokemones } from './components/Pokemones';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

function App() {

  const store = generateStore();

  return (
    <div className="App">
      hola mundo app
      <Provider store={store}>
        <Pokemones/>
      </Provider>
    </div>
  );
}

export default App;
