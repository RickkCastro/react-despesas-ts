export interface IDespesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

const BASE_URL = 'http://localhost:3001';

export function carregarDespesas(anoMes: string): Promise<IDespesa[]> {
  return fetch(`${BASE_URL}/despesas?mes=${anoMes}&_sort=dia`).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Erro ao carregar dados: ' + res.statusText);
    }
  });
}
