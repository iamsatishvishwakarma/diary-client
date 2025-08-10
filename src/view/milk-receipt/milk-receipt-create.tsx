import { useState } from 'react';
import CustomDialog from '../../components/ui/shared/dialog';
import MilkReceiptForm from './components/milk-receipt-form';
import { Button, Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const defaultValues: MilkReceiptFormData = {
  fat: undefined,
  snf: undefined,
  qty: undefined,
  rate: undefined,
  dateTime: new Date(),
};

const schema = yup.object({
  fat: yup.number().typeError('Fat must be a number').required('Fat is required'),
  snf: yup.number().typeError('SNF must be a number').required('SNF is required'),
  qty: yup.number().typeError('Qty must be a number').required('Qty is required'),
  rate: yup.number().typeError('Rate must be a number').required('Rate is required'),
  dateTime: yup.date().required('Date is required'),
});

export type MilkReceiptFormData = yup.InferType<typeof schema>;

const MilkReceiptCreate = () => {
  const [open, setOpen] = useState(true);

  const [isLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const methods = useForm<MilkReceiptFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: MilkReceiptFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box
        id='subscription-form'
        component='form'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <CustomDialog
          open={open}
          onClose={handleClose}
          title='New Receipt'
          actions={
            <Button
              type='submit'
              variant='contained'
              loading={isLoading}
              role='submit'
              form='subscription-form'
            >
              SUMBIT
            </Button>
          }
        >
          <MilkReceiptForm methods={methods} />
        </CustomDialog>
      </Box>
    </FormProvider>
  );
};

export default MilkReceiptCreate;
