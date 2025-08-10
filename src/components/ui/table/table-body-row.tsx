import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableBody from '@mui/material/TableBody';
import type { HeadCell } from './table-header';

interface TableBodyProps<T> {
  visibleRows: T[];
  headCells: HeadCell<T>[];
  selected?: readonly (string | number)[];
  isCheckBox?: boolean;
  handleClick?: (event: React.MouseEvent<unknown>, id: string | number) => void;
}

function TableBodyRow<T extends { [key: string]: unknown }>({
  visibleRows,
  headCells,
  selected = [],
  handleClick,
  isCheckBox = false,
}: TableBodyProps<T>) {
  const getRowId = (row: T): string => {
    return row._id ? String(row._id) : String(row.id) || '';
  };
  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const rowId = getRowId(row);
        const isItemSelected = selected.includes(rowId);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            hover
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={String(rowId)}
            selected={isItemSelected}
          >
            {isCheckBox && (
              <TableCell padding='checkbox'>
                <Checkbox
                  onClick={(event) => handleClick?.(event, rowId)}
                  color='primary'
                  checked={isItemSelected}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </TableCell>
            )}
            {headCells.map((cell, cellIndex) => (
              <TableCell
                key={String(cell.id)}
                component={cellIndex === 0 ? 'th' : 'td'}
                id={cellIndex === 0 ? labelId : undefined}
                scope={cellIndex === 0 ? 'row' : undefined}
                align={cell.align}
                sx={{ padding: 1 }}
              >
                {row[cell.id] as React.ReactNode}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TableBodyRow;
