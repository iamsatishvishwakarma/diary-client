import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MilkReceiptTable from './components/milk-receipt-table';
import MilkReceiptCreate from './milk-receipt-create';
import { useBoolean } from '../../utils/hooks/use-boolean';
import MilkReceiptTableToolbar from './components/milk-receipt-table-toolbar';
import { IconButton } from '@mui/material';
import { getMuiIcon } from '../../utils/functions/mui-icon';
import { useLazyMilkReceiptListQuery } from '../../features/milk-receipt/milk-receipt-api';
import { useEffect } from 'react';

const MilkReceiptList = () => {
  const { value: createFromOpen, setValue: setCreateFromOpen } = useBoolean();
  const { value: filterDrawerOpen, setValue: setFilterDrawerOpen } = useBoolean();
  const [trigger, { data, isLoading, isFetching }] = useLazyMilkReceiptListQuery({});

  useEffect(() => {
    trigger({});
  }, [trigger]);

  return (
    <>
      <Paper>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          mb={3}
        >
          <Typography variant='h4'>Milk Receipt</Typography>
          <Stack
            direction='row'
            spacing={3}
          >
            <IconButton onClick={() => setFilterDrawerOpen(true)}>
              {getMuiIcon('filter')}
            </IconButton>
            <Button onClick={() => setCreateFromOpen(true)}>New Receipt</Button>
          </Stack>
        </Stack>
        <MilkReceiptTable
          isFetching={isFetching}
          isLoading={isLoading}
          data={data ?? { data: [] }}
        />
      </Paper>
      <MilkReceiptCreate
        open={createFromOpen}
        onClose={setCreateFromOpen}
      />
      <MilkReceiptTableToolbar
        trigger={trigger}
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      />
    </>
  );
};

export default MilkReceiptList;
