import type { Dayjs } from 'dayjs';

export interface MilkReceiptRequest {
  fat: number;
  snf: number;
  qty: number;
  rate: number;
  dateTime: Dayjs | null;
  amount: number;
}
