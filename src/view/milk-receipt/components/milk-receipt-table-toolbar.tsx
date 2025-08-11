import { Button, Stack, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
interface IProps {
  open: boolean;
  onClose: () => void;
  trigger: ({ month, day }: { month: string; day: string }) => void;
}
const MilkReceiptTableToolbar = (props: IProps) => {
  const { open = true, onClose, trigger } = props;
  const [filterValue, setFilterValue] = useState({
    month: '',
    day: '',
  });
  const handleOnApply = () => {
    if (!filterValue.month) return;
    trigger(filterValue);
    onClose();
  };

  const handleOnClear = () => {
    if (filterValue.month) {
      const value = {
        month: '',
        day: '',
      };
      setFilterValue(value);
      trigger(value);
    }
    onClose();
  };

  const monthValue = filterValue.month ? dayjs(filterValue.month) : null;

  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        mb={2}
      >
        <Typography variant='h5'>Filter</Typography>
        <Button onClick={handleOnClear}>{filterValue.month ? 'Clear' : 'Close'}</Button>
      </Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack
          direction='column'
          spacing={2}
        >
          <DatePicker
            views={['month']}
            label='Month'
            format='MMM'
            value={monthValue}
            disableFuture
            onChange={(value: Dayjs | null) => {
              setFilterValue((prev) => ({
                ...prev,
                month: value ? value.format('YYYY-MM') : '',
                day: '',
              }));
            }}
          />
          <DatePicker
            views={['day']}
            label='Day'
            value={filterValue.day ? dayjs(filterValue.day, 'DD-MM-YYYY') : null}
            onChange={(value: Dayjs | null) => {
              setFilterValue((prev) => ({
                ...prev,
                day: value ? value.format('DD-MM-YYYY') : '',
              }));
            }}
            disabled={!monthValue}
            minDate={monthValue ? monthValue.startOf('month') : undefined}
            maxDate={monthValue ? monthValue.endOf('month') : undefined}
          />
        </Stack>
      </LocalizationProvider>
      <Stack alignItems={'center'}>
        <Button
          disabled={!filterValue.month}
          sx={{ mt: 2, width: '70%' }}
          onClick={handleOnApply}
        >
          Apply
        </Button>
      </Stack>
    </Drawer>
  );
};

export default MilkReceiptTableToolbar;
