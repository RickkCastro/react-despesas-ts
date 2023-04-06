import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { IDespesa } from './backend';
import { FormatBRValue } from './helpers';

interface ITabelaDespesasProps {
  despesas: IDespesa[];
}

export default function TabelaDespesas(props: ITabelaDespesasProps) {
  return (
    <div>
      <TableContainer>
        <Table aria-label="Tabela de despesas">
          <TableHead>
            <TableRow>
              <TableCell align="left">Despesa</TableCell>
              <TableCell align="left">Categoria</TableCell>
              <TableCell align="right">Dia</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.despesas.map(despesa => {
              return (
                <TableRow key={despesa.id}>
                  <TableCell align="left">{despesa.descricao}</TableCell>
                  <TableCell align="left">{despesa.categoria}</TableCell>
                  <TableCell align="right">{despesa.dia}</TableCell>
                  <TableCell align="right">{FormatBRValue(despesa.valor)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
