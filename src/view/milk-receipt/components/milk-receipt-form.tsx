import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import { FormProvider, useForm } from 'react-hook-form';
import FormTextField from '../../../components/ui/form/form-text-field';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormDateField from '../../../components/ui/form/form-date-field';
import dayjs from 'dayjs';

interface IProps {
  formId: string;
  defaultValues?: MilkReceiptFormData;
  onSubmit: (data: MilkReceiptFormData) => void;
}

const schema = yup.object({
  fat: yup
    .number()
    .min(0.01, 'Fat must be greater than 0')
    .typeError('Fat must be a number')
    .required('Fat is required'),
  snf: yup
    .number()
    .min(0.01, 'SNF must be greater than 0')
    .typeError('SNF must be a number')
    .required('SNF is required'),
  qty: yup
    .number()
    .min(0.01, 'Qty must be greater than 0')
    .typeError('Qty must be a number')
    .required('Qty is required'),
  rate: yup
    .number()
    .min(0.01, 'Rate must be greater than 0')
    .typeError('Rate must be a number')
    .required('Rate is required'),
  dateTime: yup.string().required('Date is required'),
});

export type MilkReceiptFormData = yup.InferType<typeof schema>;

const MilkReceiptForm = (props: IProps) => {
  const { defaultValues, onSubmit, formId } = props;

  const methods = useForm<MilkReceiptFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { watch } = methods;

  const qty = Number(watch('qty')) || 0;
  const rate = Number(watch('rate')) || 0;

  return (
    <FormProvider {...methods}>
      <Box
        id={formId}
        component='form'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid size={6}>
            <FormTextField
              name='fat'
              label='Fat'
              type='number'
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='snf'
              label='SNF'
              type='number'
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='qty'
              label='Qty'
              type='number'
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='rate'
              label='Rate'
              type='number'
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position='start'>Rs.</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='amount'
              label='Amount'
              value={Number(qty * rate).toFixed(2)}
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position='start'>Rs.</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <FormDateField
              name='dateTime'
              label='Date'
              defaultValue={dayjs().format('DD-MM-YYYY')}
            />
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default MilkReceiptForm;
