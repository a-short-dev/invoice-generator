import { generatePDF } from '../../../lib/pdf-generator';



export async function GET(req: Request) {
  const { invoiceItems, companyName, customerName } = await req.json();
  const pdfBuffer = await generatePDF(invoiceItems, companyName, customerName);
  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}