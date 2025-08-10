import { useState } from 'react';
import Button from '@mui/material/Button';
import CustomDialog from '../../components/ui/shared/dialog';
import MilkReceiptForm, { type MilkReceiptFormData } from './components/milk-receipt-form';
import { useCreateMilkReceiptMutation } from '../../features/milk-receipt/milk-receipt-api';
import dayjs from 'dayjs';

const defaultValues: MilkReceiptFormData = {
  fat: 0,
  snf: 0,
  qty: 0,
  rate: 0,
  dateTime: '',
};

const MilkReceiptCreate = () => {
  const [createMilkReceipt, { isLoading }] = useCreateMilkReceiptMutation();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    if (!isLoading) {
      setOpen(false);
    }
  };

  const onSumbit = (data: MilkReceiptFormData) => {
    console.log(data);
    createMilkReceipt({
      ...data,
      dateTime: dayjs(data.dateTime),
      amount: 0,
    });
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      title='New Receipt'
      actions={
        <Button
          form='milk-receipt-create-form'
          type='submit'
          variant='contained'
          loading={isLoading}
        >
          SUMBIT
        </Button>
      }
    >
      <MilkReceiptForm
        formId='milk-receipt-create-form'
        defaultValues={defaultValues}
        onSubmit={onSumbit}
      />
    </CustomDialog>
  );
};

export default MilkReceiptCreate;
