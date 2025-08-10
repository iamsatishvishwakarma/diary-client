export interface MilkReceiptRow {
  _id: string;
  fat: number;
  snf: number;
  qty: number;
  rate: number;
  dateTime: Date;
  amount: number;
  createdId: {
    id: string;
    name: string;
  };
  actions?: React.ReactNode;
}

export interface MilkReceiptResponse {
  data: MilkReceiptRow[];
}
