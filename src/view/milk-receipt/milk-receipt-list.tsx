import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MilkReceiptTable from './components/milk-receipt-table';

const MilkReceiptList = () => {
  return (
    <Paper>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mb={3}
      >
        <Typography variant='h4'>Milk Receipt</Typography>
        <Button size='small'>New Receipt</Button>
      </Stack>
      <MilkReceiptTable />
    </Paper>
  );
};

export default MilkReceiptList;
