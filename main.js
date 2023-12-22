document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");
  const filterInput = document.getElementById("filterInput");

  const fetchAndPopulateTable = async () => {
      try {
          const response = await fetch("https://api.escuelajs.co/api/v1/products/");
          const data = await response.json();
          renderTable(data);
          console.log(data);
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

  const filterProducts = () => {
      const filterValue = filterInput.value.toUpperCase();
      const allRows = tableBody.getElementsByTagName("tr");

      for (let i = 0; i < allRows.length; i++) {
          const titleCell = allRows[i].getElementsByTagName("td")[1];

          if (titleCell) {
              const titleText = titleCell.textContent || titleCell.innerText;

              if (titleText.toUpperCase().includes(filterValue)) {
                  allRows[i].style.display = "";
              } else {
                  allRows[i].style.display = "none"; 
              }
          }
      }
  };

  filterInput.addEventListener("input", filterProducts);

  fetchAndPopulateTable();
});