import type { Dayjs } from 'dayjs';

export interface MilkReceiptRow {
  _id: string;
  fat: number;
  snf: number;
  qty: number;
  rate: number;
  dateTime: Dayjs;
  amount: number;
  createdId: {
    id: string;
    name: string;
  };
  createdAt: Dayjs;
  actions?: React.ReactNode;
}

export interface MilkReceiptResponse {
  data: MilkReceiptRow[];
}

export interface MilkReceiptCreateResponse {
  data: MilkReceiptRow;
}
