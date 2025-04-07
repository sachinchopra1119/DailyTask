const ulElement = document.getElementById("data-list");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      const liElement = document.createElement("li");
      liElement.textContent = `${product.name} - $${product.price}`;
      ulElement.appendChild(liElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
