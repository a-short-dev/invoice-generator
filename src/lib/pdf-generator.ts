export async function generatePDF(
  invoiceItems: any,
  companyName: string,
  customerName: string
) {
  return {
    invoiceItems,
    companyName,
    customerName,
  };
}
