import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableToolbar from './table-toolbar';

type Order = 'asc' | 'desc';

interface EnhancedTableProps<T> {
  numSelected?: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order?: Order;
  orderBy?: string;
  rowCount?: number;
  headCells: readonly HeadCell<T>[];
  isCheckBox?: boolean;
}

export interface HeadCell<T> {
  id: keyof T;
  label: string;
  align?: 'center' | 'right' | 'left';
}

export default function TableHeader<T>(props: EnhancedTableProps<T>) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected = 0,
    rowCount = 0,
    headCells,
    isCheckBox = false,
  } = props;

  return (
    <TableHead>
      <TableRow>
        {numSelected > 0 ? (
          <TableCell
            sx={{ paddingX: 0.5 }}
            padding={'none'}
            colSpan={headCells.length + 1}
          >
            <TableToolbar numSelected={numSelected} />
          </TableCell>
        ) : (
          <>
            {isCheckBox && (
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
            )}
            {headCells.map((headCell) => (
              <TableCell
                key={String(headCell.id)}
                align={headCell.align || 'center'}
                sortDirection={orderBy === headCell.id ? order : false}
                sx={{ paddingX: 1 }}
              >
                {headCell.label}
              </TableCell>
            ))}
          </>
        )}
      </TableRow>
    </TableHead>
  );
}
