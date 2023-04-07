import { Container, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { criaSessao, IUsuario } from './backend';

export default function TelaLogin(props: { onLogin: (usuario: IUsuario) => void }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [error, setError] = useState('');

  function login(evt: React.FormEvent) {
    evt.preventDefault();
    setError('');
    criaSessao(email, senha).then(props.onLogin, () => {
      setError('Credenciais inválidas');
    });
  }

  return (
    <Container>
      <h1 className="font-semibold text-4xl my-4">Despesas</h1>
      <p>Digite e-mail e senha para entrar.</p>
      <p>Utilize "usuario@email.com" e senha "1234" para testar.</p>
      <form onSubmit={evt => login(evt)}>
        <TextField
          label="E-mail"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          error={!!error}
          helperText={error}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={senha}
          onChange={evt => setSenha(evt.target.value)}
          error={!!error}
          helperText={error}
        />
        <Box textAlign={'right'} marginTop="16px">
          <Button variant="contained" color="primary" type="submit">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
}
