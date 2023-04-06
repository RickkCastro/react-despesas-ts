import ExibicaoTotal from './ExibicaoTotal';
import SelecaoAnoMes from './SelecaoAnoMes';
import TabelaDespesas from './TabelaDespesas';
import { useEffect, useState } from 'react';
import { carregarDespesas, IDespesa } from './backend';
import { Box } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

export default function TelaDespesas() {
  const { anoMes } = useParams<{ anoMes: string }>();

  const [despesas, setDespesas] = useState<IDespesa[]>([]);
  const history = useHistory();

  useEffect(() => {
    carregarDespesas(anoMes).then(setDespesas);
  }, [anoMes]);

  return (
    <div>
      <Box display={'flex'} padding={'16px'}>
        <Box flex={'1'}>
          <SelecaoAnoMes anoMes={anoMes} onChangeAnoMes={onChangeAnoMes} />
        </Box>
        <ExibicaoTotal despesas={despesas} />
      </Box>
      <TabelaDespesas despesas={despesas} />
    </div>
  );

  function onChangeAnoMes(anoMes: string) {
    history.push('/despesas/' + anoMes);
  }
}
