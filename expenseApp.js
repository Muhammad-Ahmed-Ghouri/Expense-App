const myForm = document.getElementById("expense-app-form");
let totalAmount = 0;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const categoryFieldValue = document.getElementById("category").value;
  const amountFieldValue = parseFloat(
    document.getElementById("category-amount").value
  );
  console.log(amountFieldValue, typeof amountFieldValue);
  const listContainer = document.getElementById("customer-bill-details-list");
  const amountBox = document.getElementById("customer-bill-balance");
  totalAmount += amountFieldValue;
  amountBox.innerHTML = totalAmount;

  const listCreated = document.createElement("li");
  listCreated.innerHTML = `${categoryFieldValue} : ${amountFieldValue} pkr`;
  listContainer.appendChild(listCreated);
  console.log(listCreated);

  if (categoryFieldValue !== "" && amountFieldValue !== "") {
    myForm.reset();
  }
});
