import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TableHeader, { type HeadCell } from '../../../components/ui/table/table-header';
import TableBodyRow from '../../../components/ui/table/table-body-row';
import CustomMenu from '../../../components/ui/menu';
import { getMuiIcon } from '../../../utils/functions/mui-icon';
import type { MilkReceiptRow } from '../../../types/response/milk-receipt';
import { useMilkReceiptListMutation } from '../../../features/milk-receipt/milk-receipt-api';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import dayjs from 'dayjs';

type TMilkReceiptRow = {
  _id: string;
  fat: React.ReactNode;
  snf: React.ReactNode;
  qty: React.ReactNode;
  rate: React.ReactNode;
  amount: React.ReactNode;
  dateTime: React.ReactNode;
  createdBy: React.ReactNode;
  actions: React.ReactNode;
};

function createData({
  _id,
  fat,
  snf,
  qty,
  rate,
  amount,
  dateTime,
  createdId,
}: MilkReceiptRow): TMilkReceiptRow {
  return {
    _id,
    fat: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
      >
        {fat || '-'}
      </Typography>
    ),
    snf: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
      >
        {snf || '-'}
      </Typography>
    ),
    qty: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
      >
        {qty || '-'}
      </Typography>
    ),
    rate: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
      >
        {rate || '-'}
      </Typography>
    ),
    amount: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary' }}
      >
        {amount || '-'}
      </Typography>
    ),
    dateTime: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary' }}
      >
        {dayjs(dateTime).format('DD-MM-YYYY') || '-'}
      </Typography>
    ),
    createdBy: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary' }}
      >
        {createdId?.name || '-'}
      </Typography>
    ),
    actions: (
      <CustomMenu
        options={[
          { icon: getMuiIcon('edit'), label: 'Edit' },
          { icon: getMuiIcon('delete'), label: 'Delete' },
        ]}
        onSelect={(option) => console.log(`Selected action: ${option} ${_id}`)}
      />
    ),
  };
}

const headCells: HeadCell<TMilkReceiptRow>[] = [
  { id: 'fat', label: 'Fat', align: 'center' },
  { id: 'snf', label: 'SNF', align: 'center' },
  { id: 'qty', label: 'Qty', align: 'center' },
  { id: 'rate', label: 'Rate', align: 'center' },
  { id: 'amount', label: 'Amount', align: 'center' },
  { id: 'dateTime', label: 'Date', align: 'center' },
  { id: 'createdBy', label: 'Added By', align: 'left' },
  { id: 'actions', label: 'Actions', align: 'center' },
];

const MilkReceiptTable = () => {
  const [milkReceiptList] = useMilkReceiptListMutation();
  const data = useSelector((state: RootState) => state.milkReceipt.milkReceiptList);

  const rows: TMilkReceiptRow[] = useMemo(() => {
    return data.map((user) => createData(user));
  }, [data]);

  useEffect(() => {
    milkReceiptList({});
  }, [milkReceiptList]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, padding: '0px' }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
          >
            <TableHeader headCells={headCells} />
            <TableBodyRow
              visibleRows={rows}
              headCells={headCells}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MilkReceiptTable;
