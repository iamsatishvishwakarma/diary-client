import Grid from '@mui/material/Grid';
import FormTextField from '../../../components/ui/form/form-text-field';
interface IProps {
  methods: unknown;
}

const MilkReceiptForm = (props: IProps) => {
  const { methods } = props;

  const { watch } = methods;

  const qty = Number(watch('qty')) || 0;
  const rate = Number(watch('rate')) || 0;

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid size={6}>
        <FormTextField
          name='fat'
          label='Fat'
          type='number'
        />
      </Grid>
      <Grid size={6}>
        <FormTextField
          name='snf'
          label='SNF'
          type='number'
        />
      </Grid>
      <Grid size={3.5}>
        <FormTextField
          name='qty'
          label='Qty'
          type='number'
        />
      </Grid>
      <Grid size={3.5}>
        <FormTextField
          name='rate'
          label='Rate'
          type='number'
        />
      </Grid>
      <Grid size={5}>
        <FormTextField
          name='amount'
          label='Amount'
          value={Number(qty * rate).toFixed(2)}
          disabled
        />
      </Grid>
    </Grid>
  );
};

export default MilkReceiptForm;
