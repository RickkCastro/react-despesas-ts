import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import TelaDespesas from './TelaDespesas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/despesas/:anoMes'}>
          <TelaDespesas />
        </Route>
        <Redirect to={'/despesas/2023-01'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
