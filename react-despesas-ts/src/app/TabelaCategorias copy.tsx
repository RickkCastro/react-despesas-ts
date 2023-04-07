import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { FormatBRValue } from './helpers';
import { ICategoriaDespesa } from './useDespesas';

interface ITabelaCategoriasProps {
  categorias: ICategoriaDespesa[];
}

export default function TabelaCategorias(props: ITabelaCategoriasProps) {
  return (
    <div>
      <TableContainer>
        <Table aria-label="Tabela de despesas">
          <TableHead>
            <TableRow>
              <TableCell align="left">Categoria</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.categorias.map(item => {
              return (
                <TableRow key={item.categoria}>
                  <TableCell align="left">{item.categoria}</TableCell>
                  <TableCell align="right">{FormatBRValue(item.valor)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
