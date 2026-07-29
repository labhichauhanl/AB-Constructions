const billDetailsData = [
    {
        id: "BILL-001",
        vendor: "Caterpillar India",
        project: "Metro Tower",
        amount: "₹18,50,000",
        status: "Pending",
        billDate: "12 Jul 2026",
        dueDate: "27 Jul 2026",
        paymentTerms: "30 Days",
        createdBy: "Procurement Manager",

        vendorDetails: {
            contactPerson: "Rahul Sharma",
            email: "rahul@caterpillar.in",
            phone: "+91 9876543210",
            gst: "29ABCDE1234F1Z5",
        },

        billingAddress: {
            company: "Caterpillar India Pvt. Ltd.",
            gst: "29ABCDE1234F1Z5",
            address: "Whitefield Industrial Area",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560066",
        },

        shippingAddress: {
            company: "ABC Builders",
            address: "Metro Tower Construction Site",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560048",
        },

        lineItems: [
            {
                description: "Excavator Rental",
                quantity: 2,
                rate: "₹8,00,000",
                gst: "18%",
                amount: "₹16,00,000",
            },
            {
                description: "Transportation Charges",
                quantity: 1,
                rate: "₹2,50,000",
                gst: "18%",
                amount: "₹2,50,000",
            },
        ],

        amountBreakdown: {
            subtotal: "₹18,50,000",
            gst: "₹3,33,000",
            discount: "₹0",
            total: "₹21,83,000",
        },

        payments: [
            {
                id: "PAY-001",
                date: "18 Jul 2026",
                mode: "Bank Transfer",
                reference: "UTR9827318",
                amount: "₹10,00,000",
                status: "Partial",
            },
        ],

        documents: [
            {
                id: 1,
                name: "Supplier Bill.pdf",
                uploadedBy: "Procurement Team",
                date: "12 Jul 2026",
            },
            {
                id: 2,
                name: "Purchase Order.pdf",
                uploadedBy: "Procurement Team",
                date: "10 Jul 2026",
            },
        ],

        timeline: [
            {
                title: "Bill Received",
                description: "Supplier submitted the bill.",
                date: "12 Jul 2026",
            },
            {
                title: "Verified",
                description: "Finance verified bill details.",
                date: "13 Jul 2026",
            },
            {
                title: "Payment Initiated",
                description: "Partial payment processed.",
                date: "18 Jul 2026",
            },
        ],
    },

    {
        id: "BILL-002",

        vendor: "L&T Equipment",

        project: "Airport Expansion",

        amount: "₹11,20,000",

        status: "Paid",

        billDate: "15 Jul 2026",

        dueDate: "30 Jul 2026",

        paymentTerms: "15 Days",

        createdBy: "Finance Executive",

        vendorDetails: {
            contactPerson: "Amit Verma",
            email: "amit@lntequipment.com",
            phone: "+91 9988776655",
            gst: "27PQRSX5678L1Z2",
        },

        billingAddress: {
            company: "L&T Equipment",
            gst: "27PQRSX5678L1Z2",
            address: "MIDC Industrial Area",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400093",
        },

        shippingAddress: {
            company: "ABC Builders",
            address: "Airport Expansion Site",
            city: "Hyderabad",
            state: "Telangana",
            pincode: "500081",
        },

        lineItems: [
            {
                description: "Concrete Mixer",
                quantity: 1,
                rate: "₹10,00,000",
                gst: "12%",
                amount: "₹10,00,000",
            },
            {
                description: "Freight Charges",
                quantity: 1,
                rate: "₹1,20,000",
                gst: "12%",
                amount: "₹1,20,000",
            },
        ],

        amountBreakdown: {
            subtotal: "₹11,20,000",
            gst: "₹1,34,400",
            discount: "₹20,000",
            total: "₹12,34,400",
        },

        payments: [
            {
                id: "PAY-002",
                date: "28 Jul 2026",
                mode: "NEFT",
                reference: "UTR998877",
                amount: "₹12,34,400",
                status: "Completed",
            },
        ],

        documents: [
            {
                id: 1,
                name: "Supplier Bill.pdf",
                uploadedBy: "Finance Team",
                date: "15 Jul 2026",
            },
        ],

        timeline: [
            {
                title: "Bill Received",
                description: "Vendor uploaded the bill.",
                date: "15 Jul 2026",
            },
            {
                title: "Approved",
                description: "Finance approved the bill.",
                date: "17 Jul 2026",
            },
            {
                title: "Paid",
                description: "Full payment completed.",
                date: "28 Jul 2026",
            },
        ],
    },
];

export default billDetailsData;