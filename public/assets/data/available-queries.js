
export const queryList=[
      {
        id: 'Query 1',
        code: 'SELECT * FROM order_details;',
        tableName: 'order_details',
        resultFilePath: '/assets/data/json/order_details.json',
        status: 'Not Executed',
        timeToLoad: 'N/A',
        rowsReturned: 'N/A',
        rowsAffected: 'N/A',
        resultColumns:  [
          { id: 'orderID', label: 'Order ID', minWidth: 100 },
          { id: 'productID', label: 'Product ID', minWidth: 100 },
          { id: 'unitPrice', label: 'Unit Price', minWidth: 100 },
          { id: 'quantity', label: 'Quantity', minWidth: 100 },
          { id: 'discount', label: 'discount', minWidth: 100 },
          
        ]
    },
    {
      id: 'Query 2',
      code: 'SELECT * FROM orders;',
      tableName: 'orders',
      resultFilePath: '/assets/data/json/orders.json',
      status: 'Not Executed',
      timeToLoad: 'N/A',
      rowsReturned: 'N/A',
      rowsAffected: 'N/A',
      resultColumns:  [
        { id: 'orderID', label: 'Order ID', minWidth: 100 },
        { id: 'customerID', label: 'Customer ID', minWidth: 100 },
        { id: 'employeeID', label: 'Employee ID', minWidth: 100 },
        { id: 'requiredDate', label: 'Required Date', minWidth: 100 },
        { id: 'shippedDate', label: 'Shipped Date', minWidth: 100 },
        { id: 'shipVia', label: 'Ship Via', minWidth: 80 },
        { id: 'freight', label: 'Freight', minWidth: 80 },
        { id: 'shipName', label: 'Ship Name', minWidth: 80 },
        { id: 'shipAddress', label: 'Ship Address', minWidth: 180 },
      ]
  },
    {
        id: 'Query 3',
        code: 'SELECT * FROM employee_territories;',
        tableName: 'employee_territories',
        status: 'Not Executed',
        timeToLoad: 'N/A',
        rowsReturned: 'N/A',
        rowsAffected: 'N/A',
        resultColumns:  [
            { id: 'employeeID', label: 'Employee ID', minWidth: 100 },
            { id: 'territoryID', label: 'Territory ID', minWidth: 100 },
          ]
    },
    {
        id: 'Query 4',
        code: 'SELECT * FROM employees;',
        tableName: 'employees',
        status: 'Not Executed',
        timeToLoad: 'N/A',
        rowsReturned: 'N/A',
        rowsAffected: 'N/A',
        resultColumns:  [
            { id: 'employeeID', label: 'Employee ID', minWidth: 100 },
            { id: 'lastName', label: 'Last Name', minWidth: 100 },
            { id: 'firstName', label: 'First Name', minWidth: 100 },
            { id: 'title', label: 'Title Name', minWidth: 100 },
            { id: 'birthDate', label: 'Birth Date', minWidth: 100 },
            { id: 'hireDate', label: 'Hire Date', minWidth: 100 },
            { id: 'address', label: 'Address', minWidth: 170 },
            { id: 'notes', label: 'Notes', minWidth: 180 },
          ]
    },
    {
      id: 'Query 5',
      code: 'SELECT * FROM categories;',
      tableName: 'categories',
      status: 'Not Executed',
      timeToLoad: 'N/A',
      rowsReturned: 'N/A',
      rowsAffected: 'N/A',
      resultColumns:  [
          { id: 'categoryID', label: 'Category ID', minWidth: 100 },
          { id: 'description', label: 'Description', minWidth: 250 },
          {
            id: 'name',
            label: 'Name',
            minWidth: 100,
            align: 'right',
          }
        ]    
  },
  {
    id: 'Query 6',
    code: 'SELECT * FROM customers;',
    tableName: 'customers',
    status: 'Not Executed',
    timeToLoad: 'N/A',
    rowsReturned: 'N/A',
    rowsAffected: 'N/A',
    resultColumns:  [
        { id: 'customerID', label: 'Customer ID', minWidth: 100 },
        { id: 'companyName', label: 'Company Name', minWidth: 100 },
        {
          id: 'contactName',
          label: 'Contact Name',
          minWidth: 100,
          align: 'right',
        },
        {
            id: 'contactTitle',
            label: 'Contact Title',
            minWidth: 100,
            align: 'right',
        },
        {
            id: 'address',
            label: 'Address',
            minWidth: 170,
            align: 'right',
        }
      ]
},
    // {
    //     id: 'Query 7',
    //     code: 'SELECT * FROM products;',
    //     resultFilePath: '/assets/data/json/products.json',
    //     status: 'Not Executed',
    //     timeToLoad: 'N/A',
    //     rowsReturned: 'N/A',
    //     rowsAffected: 'N/A'
    // },
    // {
    //     id: 'Query 8',
    //     code: 'SELECT * FROM regions;',
    //     resultFilePath: '/assets/data/json/regions.json',
    //     status: 'Not Executed',
    //     timeToLoad: 'N/A',
    //     rowsReturned: 'N/A',
    //     rowsAffected: 'N/A'
    // },
    // {
    //     id: 'Query 9',
    //     code: 'SELECT * FROM shippers;',
    //     resultFilePath: '/assets/data/json/shippers.json',
    //     status: 'Not Executed',
    //     timeToLoad: 'N/A',
    //     rowsReturned: 'N/A',
    //     rowsAffected: 'N/A'
    // },
    // {
    //     id: 'Query 10',
    //     code: 'SELECT * FROM suppliers;',
    //     resultFilePath: '/assets/data/json/suppliers.json',
    //     status: 'Not Executed',
    //     timeToLoad: 'N/A',
    //     rowsReturned: 'N/A',
    //     rowsAffected: 'N/A'
    // },
    // {
    //     id: 'Query 11',
    //     code: 'SELECT * FROM territories;',
    //     resultFilePath: '/assets/data/json/territories.json',
    //     status: 'Not Executed',
    //     timeToLoad: 'N/A',
    //     rowsReturned: 'N/A',
    //     rowsAffected: 'N/A'
    // },
]