ocument.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");


  const fetchAndPopulateTable = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products/");
      const data = await response.json();
      renderTable(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

 
  const renderTable = (products) => {
    tableBody.innerHTML = "";
    products.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.category.name}</td>
        <td>${product.creationAt}</td>
      `;
      tableBody.appendChild(row);
    });
  };

  fetchAndPopulateTable();
});