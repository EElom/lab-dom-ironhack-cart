// ITERATION 1

function updateSubtotal(product) {
  const price = Numnber(product.querySelector ('.price > span').textContent);
  const quantity = +product.querySelector('.quantity > input'). value;
  const subtotal = price * quantity
  const subtotalElement = product.querySelector ('.subtotal span');
  subTotalElement.textContent = subtotal.toFixed(2);
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //let allTheProducts = document.querySelectorAll('.product');
  //console.log ('allTheProducs', allTheProducts);
  let total = 0;
  for (let i =0; i < allTheProducts.length; i++){
    toal += updateSubtotal(allTheProducts [i]);
  };
  //allTheProducts = forEach(oneProduct) => {
  //total +=updateSubtotal (oneProduct);
  //updateSubtotal(singleProduct);
};
const totalElement = document.querySelector ('#total - value span');
totalElement.textContent = total.toFixed(2);

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  //console.log('The target in remove is:', target);
  target.parentMode.parentMode.remove();
  target.closest('tr').remove();
}

// ITERATION 5

function createProduct() {
  const tbody = document. querySelector('tbody');
  const template = document.getElementId ('template')
  const clone = document.importNode(template.content,true);
  const name = document .querySelector ('.create-product > td input');
  const price = document .querySelector ('.create-product > td: nth-of-type(2) input');
  clone.querySelector('.name span').textContent = name.value;
  clone.querySelector('.price span').textContent = price.value;
  clone.querySelector ('.btn-remove').addEventListener ('click, removeProduct');
  name.value = '';
  price.vaie = '';
  tbody.append(clone);
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelector (''.btn-remove);

  document.getElementById ('create').addEventListener ('click,createProduct');
  removeButtons.forEach(button) => {
    button.addEventListener ('Click',removeProduct);
  };
  //... your code goes here
});
