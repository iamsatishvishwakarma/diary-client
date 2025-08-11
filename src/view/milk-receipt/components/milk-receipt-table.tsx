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
import { useMemo } from 'react';

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
  createdAt: React.ReactNode;
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
  createdAt,
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
    createdAt: (
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary' }}
      >
        {dayjs(createdAt).format('DD-MM-YYYY') || '-'}
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
  { id: 'dateTime', label: 'Receipt Date', align: 'center' },
  { id: 'createdAt', label: 'Reg. date', align: 'left' },
  { id: 'createdBy', label: 'Added By', align: 'left' },
  { id: 'actions', label: 'Actions', align: 'center' },
];

interface IProps {
  isLoading: boolean;
  isFetching: boolean;
  data: {
    data: MilkReceiptRow[];
  };
}

const MilkReceiptTable = (props: IProps) => {
  const { isFetching, isLoading, data = { data: [] } } = props;

  const rows: TMilkReceiptRow[] = useMemo(() => {
    return data?.data.map((user) => createData(user)) || [];
  }, [data.data]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, padding: '0px', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader={true}
            aria-label='sticky table'
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
          >
            <TableHeader headCells={headCells} />
            <TableBodyRow
              loading={isLoading || isFetching}
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
