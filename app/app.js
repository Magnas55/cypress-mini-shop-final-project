const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Starter Backpack', price: 29.99 },
  { id: 2, name: 'Everyday Sneakers', price: 54.5 },
  { id: 3, name: 'Travel Bottle', price: 15.0 }
]

const VALID_EMAIL = 'test@example.com'
const VALID_PASSWORD = 'Password123!'

const loginView = document.getElementById('login-view')
const dashboardView = document.getElementById('dashboard-view')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const loginButton = document.getElementById('login-button')
const loginError = document.getElementById('login-error')
const logoutButton = document.getElementById('logout-button')
const welcomeMessage = document.getElementById('welcome-message')
const productList = document.getElementById('product-list')
const cartCount = document.getElementById('cart-count')
const cartItems = document.getElementById('cart-items')
const loadStatusButton = document.getElementById('load-status')
const asyncStatus = document.getElementById('async-status')

let cart = []

function showLogin() {
  loginView.classList.remove('hidden')
  dashboardView.classList.add('hidden')
}

function showDashboard() {
  const email = localStorage.getItem('userEmail') || VALID_EMAIL
  loginView.classList.add('hidden')
  dashboardView.classList.remove('hidden')
  welcomeMessage.textContent = `Welcome, ${email}`
  loadProducts()
}

function renderProducts(products) {
  productList.innerHTML = ''

  products.forEach((product) => {
    const card = document.createElement('article')
    card.className = 'product-card'
    card.setAttribute('data-cy', 'product-card')
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>$${Number(product.price).toFixed(2)}</p>
      <button data-cy="add-product" data-product-id="${product.id}">Add product</button>
    `

    card.querySelector('[data-cy="add-product"]').addEventListener('click', () => {
      cart.push(product)
      cartCount.textContent = String(cart.length)
      cartItems.textContent = cart.map((item) => item.name).join(', ')
    })

    productList.appendChild(card)
  })
}

async function loadProducts() {
  try {
    const response = await fetch('/api/products')
    if (!response.ok) throw new Error('No backend configured')
    const products = await response.json()
    renderProducts(products)
  } catch (error) {
    renderProducts(DEFAULT_PRODUCTS)
  }
}

loginButton.addEventListener('click', () => {
  loginError.textContent = ''

  if (emailInput.value === VALID_EMAIL && passwordInput.value === VALID_PASSWORD) {
    localStorage.setItem('authenticated', 'true')
    localStorage.setItem('userEmail', emailInput.value)
    showDashboard()
  } else {
    loginError.textContent = 'Invalid email or password'
  }
})

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('authenticated')
  localStorage.removeItem('userEmail')
  cart = []
  cartCount.textContent = '0'
  cartItems.textContent = ''
  showLogin()
})

loadStatusButton.addEventListener('click', () => {
  asyncStatus.textContent = 'Loading inventory...'
  const delay = 700 + Math.floor(Math.random() * 700)
  setTimeout(() => {
    asyncStatus.textContent = 'Inventory ready'
  }, delay)
})

if (localStorage.getItem('authenticated') === 'true') {
  showDashboard()
} else {
  showLogin()
}
