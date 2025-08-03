function createBillWithAmount() {
  const bill = {
    id: "B1",
    billNumber: 1,
    opentime: "06 Nov 2020 14:19",
    customerName: "CodeQuotient",
    billItems: [
      {
        id: "item2",
        name: "Paneer Butter Masala",
        quantity: 3,
        unitPrice: 200, // assumed unit price
        discount: {
          rate: 10,
          isInPercent: "Y"
        },
        taxes: [
          {
            name: "Service Charge",
            rate: 10,
            isInPercent: "Y"
          },
          {
            name: "GST",
            rate: 5,
            isInPercent: "Y"
          }
        ],
        superCategoryName: "Main Course",
        categoryName: "Vegetarian"
      },
      {
        id: "item3",
        name: "Butter Naan",
        quantity: 5,
        unitPrice: 40,
        discount: {
          rate: 5,
          isInPercent: "Y"
        },
        taxes: [
          {
            name: "GST",
            rate: 5,
            isInPercent: "Y"
          }
        ],
        superCategoryName: "Breads",
        categoryName: "Indian"
      }
    ]
  };

  // Calculate amount for each item and the total
  let totalAmount = 0;

  bill.billItems.forEach(item => {
    const baseAmount = item.unitPrice * item.quantity;

    // Apply discount
    let discountedAmount = baseAmount;
    if (item.discount && item.discount.isInPercent === "Y") {
      discountedAmount = baseAmount * (1 - item.discount.rate / 100);
    } else if (item.discount && item.discount.isInPercent === "N") {
      discountedAmount = baseAmount - item.discount.rate;
    }

    // Apply taxes
    let taxAmount = 0;
    item.taxes.forEach(tax => {
      if (tax.isInPercent === "Y") {
        taxAmount += discountedAmount * (tax.rate / 100);
      } else {
        taxAmount += tax.rate;
      }
    });

    const totalItemAmount = discountedAmount + taxAmount;
    item.amount = parseFloat(totalItemAmount.toFixed(2));

    totalAmount += totalItemAmount;
  });

  bill["Total Amount"] = parseFloat(totalAmount.toFixed(2));

  return bill;
}