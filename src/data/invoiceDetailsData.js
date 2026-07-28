const invoiceDetailsData = [
  {
    id: "INV-001",
    customer: "ABC Developers",
    project: "Metro Tower",
    amount: "₹12,50,000",
    status: "Paid",
    issueDate: "12 Jul 2026",
    dueDate: "27 Jul 2026",
    paymentTerms: "30 Days",
    createdBy: "Finance Admin",
    billingAddress: {
      company: "ABC Developers",
      gst: "29ABCDE1234F1Z5",
      address: "12 MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560001"
    },

    shippingAddress: {
      company: "Metro Tower Site",
      address: "Sector 48",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122018"
    },

    lineItems: [
      {
        description: "Excavator Rental",
        quantity: 2,
        rate: 250000,
        gst: "18%",
        amount: 500000
      },
      {
        description: "Tower Crane",
        quantity: 1,
        rate: 750000,
        gst: "18%",
        amount: 750000
      }
    ],

    amountBreakdown: {
      subtotal: 1250000,
      gst: 225000,
      discount: 0,
      total: 1475000
    },

    payments: [
      {
        receiptNo: "REC-001",
        date: "18 Jul 2026",
        mode: "Bank Transfer",
        amount: "₹12,50,000",
        status: "Received"
      }
    ],

    documents: [
      {
        name: "Invoice.pdf",
        type: "Invoice"
      },
      {
        name: "PurchaseOrder.pdf",
        type: "Purchase Order"
      }
    ],

    timeline: [
      {
        title: "Invoice Created",
        date: "12 Jul 2026"
      },
      {
        title: "Invoice Sent",
        date: "13 Jul 2026"
      },
      {
        title: "Payment Received",
        date: "18 Jul 2026"
      }
    ]
  },

  {
    id: "INV-002",

    customer: "XYZ Builders",
    project: "Airport Expansion",

    amount: "₹8,20,000",

    status: "Pending",

    issueDate: "15 Jul 2026",

    dueDate: "30 Jul 2026",

    paymentTerms: "15 Days",

    createdBy: "Finance Admin",

    billingAddress: {},

    shippingAddress: {},

    lineItems: [],

    amountBreakdown: {},

    payments: [],

    documents: [],

    timeline: []
  },

  {
    id: "INV-003",

    customer: "Prestige Infra",
    project: "City Mall",

    amount: "₹18,75,000",

    status: "Overdue",

    issueDate: "05 Jul 2026",

    dueDate: "20 Jul 2026",

    paymentTerms: "30 Days",

    createdBy: "Finance Admin",

    billingAddress: {},

    shippingAddress: {},

    lineItems: [],

    amountBreakdown: {},

    payments: [],

    documents: [],

    timeline: []
  }
];

export default invoiceDetailsData;