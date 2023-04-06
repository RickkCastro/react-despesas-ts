import { IDespesa } from './backend';
import { FormatBRValue } from './helpers';

function somaDespesas(despesas: IDespesa[]): number {
  let soma = 0;

  for (const despesa of despesas) {
    soma += despesa.valor;
  }

  return soma;
}

export default function ExibicaoTotal(props: { despesas: IDespesa[] }) {
  const totalDespesas = somaDespesas(props.despesas);

  return (
    <div>
      Despesa Total: <strong>{FormatBRValue(totalDespesas)}</strong>
    </div>
  );
}
