function createBill() {
  return {
    id: "B1",
    billNumber: 1,
    opentime: "06 Nov 2020 14:19",
    customerName: "CodeQuotient",
    billItems: [
      {
        id: "item2",
        name: "Paneer Butter Masala",
        quantity: 3
      },
      {
        id: "item3",
        name: "Butter Naan",
        quantity: 5
      }
    ]
  };
}