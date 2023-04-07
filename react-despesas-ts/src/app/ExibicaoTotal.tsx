import { FormatBRValue } from './helpers';

export default function ExibicaoTotal(props: { total: number }) {
  return (
    <div>
      Despesa Total: <strong>{FormatBRValue(props.total)}</strong>
    </div>
  );
}
