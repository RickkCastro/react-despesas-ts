import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import TelaDespesas from './TelaDespesas';
import { useEffect, useState } from 'react';
import { finalizaSessao, IUsuario, obtemUsuario } from './backend';
import TelaLogin from './TelaLogin';
import { Button, Box } from '@mui/material';

function App() {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  useEffect(() => {
    obtemUsuario().then(setUsuario, () => setUsuario(null));
  }, []);

  function sair() {
    finalizaSessao().then(() => setUsuario(null));
  }

  if (usuario) {
    return (
      <BrowserRouter>
        <Box display={'flex'} padding="0 16px" alignItems={'center'}>
          <Box flex={'1'}>
            <h1 className="font-semibold text-4xl my-4">Despesas</h1>
          </Box>
          <span className="mx-2">Olá {usuario.nome}</span>
          <Button variant="outlined" onClick={sair}>
            Sair
          </Button>
        </Box>
        <Switch>
          <Route path={'/despesas/:anoMes'}>
            <TelaDespesas />
          </Route>
          <Redirect to={'/despesas/2023-01'} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <TelaLogin onLogin={setUsuario} />;
  }
}

export default App;
