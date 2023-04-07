export interface IDespesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export interface IUsuario {
  email: string;
  nome: string;
}

const BASE_URL = 'http://localhost:3001';

export function carregarDespesas(anoMes: string): Promise<IDespesa[]> {
  return fetch(`${BASE_URL}/despesas?mes=${anoMes}&_sort=dia`, {
    credentials: 'include',
  }).then(trataResposta);
}

export function criaSessao(email: string, senha: string): Promise<IUsuario> {
  return fetch(`${BASE_URL}/sessao/criar`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  }).then(trataResposta);
}

export function finalizaSessao(): Promise<void> {
  return fetch(`${BASE_URL}/sessao/finalizar`, {
    credentials: 'include',
    method: 'POST',
  }).then(trataResposta);
}

export function obtemUsuario(): Promise<IUsuario> {
  return fetch(`${BASE_URL}/sessao/usuario`, {
    credentials: 'include',
  }).then(trataResposta);
}

function trataResposta(res: Response) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Erro ao carregar dados: ' + res.statusText);
  }
}
