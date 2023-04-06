import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface ISelecaoAnoMesProps {
  anoMes: string;
  onChangeAnoMes: (anoMes: string) => void;
}

export default function SelecaoAnoMes(props: ISelecaoAnoMesProps) {
  const [ano, mes] = props.anoMes.split('-');

  return (
    <div className="flex space-x-5">
      <FormControl>
        <InputLabel id="label-ano">Ano</InputLabel>
        <Select
          labelId="label-ano"
          value={ano}
          onChange={evt => {
            props.onChangeAnoMes(evt.target.value + '-' + mes);
          }}
          variant="standard"
        >
          <MenuItem value={'2022'}>2022</MenuItem>
          <MenuItem value={'2023'}>2023</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="label-mes">Mês</InputLabel>
        <Select
          labelId="label-mes"
          value={mes}
          onChange={evt => {
            props.onChangeAnoMes(ano + '-' + evt.target.value);
          }}
          variant="standard"
        >
          <MenuItem value={'01'}>Janeiro</MenuItem>
          <MenuItem value={'02'}>Fevereiro</MenuItem>
          <MenuItem value={'03'}>Março</MenuItem>
          <MenuItem value={'04'}>Abril</MenuItem>
          <MenuItem value={'05'}>Maio</MenuItem>
          <MenuItem value={'06'}>Junho</MenuItem>
          <MenuItem value={'07'}>Julho</MenuItem>
          <MenuItem value={'08'}>Agosto</MenuItem>
          <MenuItem value={'09'}>Setembro</MenuItem>
          <MenuItem value={'10'}>Outubro</MenuItem>
          <MenuItem value={'11'}>Novembro</MenuItem>
          <MenuItem value={'12'}>Dezembro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
