// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  function updateSubtotal(product) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector ('.quantity span');

  /*const list = document.querySelector('#quantity-list');
    const printQuantities = () => {
      list.innerHTML = ""; // Clean the list
      quantities.forEach(quantity => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `Name: ${student.name} - Age: ${student.age} <button class="delete-button">Delete</button>`;
        list.appendChild(newLi); // .preppend()
        */


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
