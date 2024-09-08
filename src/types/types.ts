export type InvoiceDetails = {
  taxRate: number;
  taxAmount: number;
  discountRate: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
};

export type PaymentDetails = {
  accountName: string;
  accountNumber: string;
  bankName: string;
  currency: string;
  bankAddress?: string;
  swiftCode?: string;
  routingNumber?: string;
};
