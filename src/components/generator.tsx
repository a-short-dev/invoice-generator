"use client";
import { generatePDF } from "@/app/lib/pdf-generator";
import { useState, useRef } from "react";

export default function Generator() {
  const [invoiceItems, setInvoiceItems] = useState([
    { description: "", quantity: 0, price: 0 },
  ]);
  const [companyName, setCompanyName] = useState("");
  const [customerName, setCustomerName] = useState("");

  const addItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", quantity: 0, price: 0 },
    ]);
  };

  const updateItem = (index: number, field: string, value: any) => {
    const newItems: any = [...invoiceItems];
    newItems[index][field] = value;
    setInvoiceItems(newItems);
  };

  const calculateTotal = () => {
    return invoiceItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const generate = async () => {
    generatePDF(invoiceItems, companyName, customerName);
  };
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Invoice Generator</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border rounded text-zinc-600"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border rounded text-zinc-600"
          />
        </div>

        <table className="w-full mb-6">
          <thead>
            <tr>
              <th className="text-left">Description</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Price</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      updateItem(index, "description", e.target.value)
                    }
                    className="w-full p-2 border rounded text-zinc-600"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(index, "quantity", parseInt(e.target.value))
                    }
                    className="w-full p-2 border rounded text-zinc-600"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateItem(index, "price", parseFloat(e.target.value))
                    }
                    className="w-full p-2 border rounded text-zinc-600"
                  />
                </td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
        >
          Add Item
        </button>

        <div className="text-right text-xl font-bold">
          Total: ${calculateTotal().toFixed(2)}
        </div>
      </main>
      <button
        onClick={generate}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Generate PDF
      </button>
    </div>
  );
}
