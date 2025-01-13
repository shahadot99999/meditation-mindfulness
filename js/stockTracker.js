 // Get references to DOM elements
 const addItemForm = document.getElementById('addItemForm');
 const stockTable = document.getElementById('stockTable');

 // Load stock items from localStorage
 const loadStocks = () => {
   const stocks = JSON.parse(localStorage.getItem('stocks')) || [];
   stockTable.innerHTML = ''; // Clear table
   stocks.forEach((stock, index) => {
     const row = document.createElement('tr');
     row.innerHTML = `
       <td>${stock.name}</td>
       <td>${stock.quantity}</td>
       <td>
         <button class="btn btn-sm btn-error" onclick="removeStock(${index})">Remove</button>
       </td>
     `;
     stockTable.appendChild(row);
   });
 };

 // Add stock item
 addItemForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const name = document.getElementById('itemName').value;
   const quantity = document.getElementById('itemQuantity').value;

   const stocks = JSON.parse(localStorage.getItem('stocks')) || [];
   stocks.push({ name, quantity: parseInt(quantity, 10) });
   localStorage.setItem('stocks', JSON.stringify(stocks));

   addItemForm.reset();
   loadStocks();
 });

 // Remove stock item
 window.removeStock = (index) => {
   const stocks = JSON.parse(localStorage.getItem('stocks')) || [];
   stocks.splice(index, 1);
   localStorage.setItem('stocks', JSON.stringify(stocks));
   loadStocks();
 };

 // Initial load
 loadStocks();