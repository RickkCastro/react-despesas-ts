import ExibicaoTotal from './ExibicaoTotal';
import SelecaoAnoMes from './SelecaoAnoMes';
import TabelaDespesas from './TabelaDespesas';
import { Box, Tabs, Tab } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { useDespesas } from './useDespesas';
import TabelaCategorias from './TabelaCategorias copy';
import { useState } from 'react';

export default function TelaDespesas() {
  const { anoMes } = useParams<{ anoMes: string }>();
  const history = useHistory();

  const { despesas, totalDespesas, categorias } = useDespesas(anoMes);

  const [aba, setAba] = useState(0);

  return (
    <div>
      <Box display={'flex'} padding={'16px'}>
        <Box flex={'1'}>
          <SelecaoAnoMes anoMes={anoMes} onChangeAnoMes={onChangeAnoMes} />
        </Box>
        <ExibicaoTotal total={totalDespesas} />
      </Box>
      <Tabs centered value={aba} onChange={(evt, novaAba) => setAba(novaAba)}>
        <Tab label="Resumo" />
        <Tab label="Detalhes" />
      </Tabs>
      {aba === 0 ? (
        <TabelaCategorias categorias={categorias} />
      ) : (
        <TabelaDespesas despesas={despesas} />
      )}
    </div>
  );

  function onChangeAnoMes(anoMes: string) {
    history.push('/despesas/' + anoMes);
  }
}
