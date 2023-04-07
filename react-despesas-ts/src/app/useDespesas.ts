import { useEffect, useState } from 'react';
import { carregarDespesas, IDespesa } from './backend';

export interface ICategoriaDespesa {
  categoria: string;
  valor: number;
}

export function useDespesas(anoMes: string) {
  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  useEffect(() => {
    carregarDespesas(anoMes).then(setDespesas);
  }, [anoMes]);

  const totalDespesas = somaDespesas(despesas);
  const categorias = somaDespesasPorCategoria(despesas);

  return { despesas, totalDespesas, categorias };
}

function somaDespesas(despesas: IDespesa[]): number {
  let soma = 0;
  console.log('Soma despesas');

  for (const despesa of despesas) {
    soma += despesa.valor;
  }

  return soma;
}

function somaDespesasPorCategoria(despesas: IDespesa[]): ICategoriaDespesa[] {
  let categoriasDespesas: ICategoriaDespesa[] = [];
  console.log('Soma despesas por categorias');

  for (const despesa of despesas) {
    const item = categoriasDespesas.find(item => item.categoria === despesa.categoria);

    if (item) {
      item.valor += despesa.valor;
    } else {
      categoriasDespesas.push({ categoria: despesa.categoria, valor: despesa.valor });
    }
  }

  categoriasDespesas.sort((a, b) => b.valor - a.valor);
  return categoriasDespesas;
}
