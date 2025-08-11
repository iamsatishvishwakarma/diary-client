import Button from '@mui/material/Button';
import CustomDialog from '../../components/ui/shared/dialog';
import MilkReceiptForm, { type MilkReceiptFormData } from './components/milk-receipt-form';
import { useCreateMilkReceiptMutation } from '../../features/milk-receipt/milk-receipt-api';
import dayjs from 'dayjs';

const _FORM_ID = 'milk-receipt-create-form';

interface IProps {
  onClose: (boolean: boolean) => void;
  open: boolean;
}

const defaultValues: MilkReceiptFormData = {
  fat: 0,
  snf: 0,
  qty: 0,
  rate: 0,
  dateTime: '',
};

const MilkReceiptCreate = (props: IProps) => {
  const { open, onClose } = props;
  const [createMilkReceipt, { isLoading }] = useCreateMilkReceiptMutation();

  const handleClose = () => {
    if (!isLoading) {
      onClose(false);
    }
  };

  const onSumbit = async (data: MilkReceiptFormData) => {
    console.log(data);
    const response = await createMilkReceipt({
      ...data,
      dateTime: dayjs(data.dateTime),
      amount: 0,
    });
    console.log(response);
    if (response.data) {
      handleClose();
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      title='New Receipt'
      actions={
        <Button
          form={_FORM_ID}
          type='submit'
          variant='contained'
          loading={isLoading}
        >
          SUMBIT
        </Button>
      }
    >
      <MilkReceiptForm
        formId={_FORM_ID}
        defaultValues={defaultValues}
        onSubmit={onSumbit}
      />
    </CustomDialog>
  );
};

export default MilkReceiptCreate;
