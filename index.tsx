import { createSignal } from 'solid-js';
import { render } from "solid-js/web";
import Home from './src/pages/home';

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Home />
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </>
  );
};

render(() => <App />, document.getElementById('app'));