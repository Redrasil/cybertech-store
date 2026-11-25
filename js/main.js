/* ==========================================================================
   CYBERTECH STORE - MAIN JAVASCRIPT
   Xử lý toàn bộ logic: Giỏ hàng, Auth, Upload SP, Filter, Search, Toast
   ========================================================================== */

// 1. FORMAT TIỀN TỆ VNĐ
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 2. TOAST NOTIFICATION
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-check-circle';
  if (type === 'error') icon = 'fa-exclamation-circle';
  if (type === 'info') icon = 'fa-info-circle';

  toast.innerHTML = `
    <i class="fas ${icon}" style="font-size: 1.2rem; color: ${type === 'error' ? 'var(--danger)' : type === 'info' ? 'var(--accent)' : 'var(--success)'};"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3200);
}

// 3. CART SYSTEM (LOCALSTORAGE)
function getCart() {
  const cart = localStorage.getItem(STORAGE_KEYS.CART);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartCounter();
}

function addToCart(productId, qty = 1) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    showToast('Không tìm thấy sản phẩm!', 'error');
    return;
  }

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === Number(productId));

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: product.categoryName,
      qty: qty
    });
  }

  saveCart(cart);
  showToast(`Đã thêm "${product.name.substring(0, 30)}..." vào giỏ hàng!`);
}

function updateCartQty(productId, newQty) {
  let cart = getCart();
  const item = cart.find(i => i.id === Number(productId));
  if (item) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    item.qty = Number(newQty);
    saveCart(cart);
    renderCartPage();
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== Number(productId));
  saveCart(cart);
  showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
  renderCartPage();
}

function updateCartCounter() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(b => {
    b.textContent = totalItems;
  });
}

// 4. AUTH SYSTEM (ĐĂNG KÝ, ĐĂNG NHẬP, ĐỔI MK - LOCALSTORAGE)
function getUsers() {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [
    { name: "Sinh Viên Demo", email: "student@cybertech.vn", password: "123" }
  ];
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
  updateAuthUI();
}

function registerUser(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    showToast('Email này đã được đăng ký tài khoản!', 'error');
    return false;
  }
  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  showToast('Đăng ký tài khoản thành công!');
  return true;
}

function loginUser(email, password) {
  const users = getUsers();
  const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (found) {
    setCurrentUser(found);
    showToast(`Chào mừng ${found.name} đã đăng nhập!`);
    return true;
  }
  showToast('Email hoặc mật khẩu không chính xác!', 'error');
  return false;
}

function changePassword(oldPass, newPass) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Vui lòng đăng nhập trước!', 'error');
    return false;
  }
  if (currentUser.password !== oldPass) {
    showToast('Mật khẩu hiện tại không đúng!', 'error');
    return false;
  }
  let users = getUsers();
  const userIndex = users.findIndex(u => u.email === currentUser.email);
  if (userIndex > -1) {
    users[userIndex].password = newPass;
    currentUser.password = newPass;
    saveUsers(users);
    setCurrentUser(currentUser);
    showToast('Đổi mật khẩu thành công!');
    return true;
  }
  return false;
}

function logoutUser() {
  setCurrentUser(null);
  showToast('Đã đăng xuất tài khoản!', 'info');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 800);
}

function updateAuthUI() {
  const user = getCurrentUser();
  const authContainer = document.getElementById('user-auth-slot');
  if (!authContainer) return;

  if (user) {
    authContainer.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 0.88rem; font-weight: 600; color: var(--gray-800);">
          <i class="fas fa-user-circle" style="color: var(--primary); font-size: 1.1rem;"></i> ${user.name}
        </span>
        <a href="change-password.html" class="btn btn-sm btn-outline" title="Đổi mật khẩu">
          <i class="fas fa-key"></i> Đổi MK
        </a>
        <button onclick="logoutUser()" class="btn btn-sm btn-danger" title="Đăng xuất">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <a href="login.html" class="action-btn">
        <i class="far fa-user"></i>
        <span>Đăng nhập</span>
      </a>
    `;
  }
}

// 5. RENDER PRODUCT CARD HELPER
function createProductCardHTML(product) {
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-badge-wrap">
        ${product.isHot ? '<span class="badge badge-hot"><i class="fas fa-fire"></i> HOT</span>' : ''}
        ${product.isNew ? '<span class="badge badge-new">MỚI</span>' : ''}
      </div>
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'">
        <div class="product-quick-actions">
          <button class="quick-action-btn" title="Xem nhanh" onclick="openQuickView(${product.id})">
            <i class="far fa-eye"></i>
          </button>
          <button class="quick-action-btn" title="Thêm vào giỏ" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-cat">${product.categoryName || 'Linh kiện'}</span>
        <h3 class="product-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating || 5))}
          <span>(${product.reviewsCount || 10})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatCurrency(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
        </div>
        <button class="product-btn-add" onclick="addToCart(${product.id})">
          <i class="fas fa-cart-plus"></i> Thêm vào giỏ
        </button>
      </div>
    </div>
  `;
}

// 6. QUICK VIEW MODAL
function openQuickView(id) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === Number(id));
  if (!product) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  let specsHtml = '';
  if (product.specs) {
    specsHtml = '<div style="margin: 1rem 0; font-size: 0.88rem; background: var(--gray-50); padding: 0.75rem; border-radius: 6px;"><strong>Thông số nổi bật:</strong><ul style="margin-top: 5px; list-style: disc; padding-left: 20px;">';
    for (const [key, val] of Object.entries(product.specs)) {
      specsHtml += `<li><b>${key}:</b> ${val}</li>`;
    }
    specsHtml += '</ul></div>';
  }

  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" onclick="closeQuickView()">&times;</button>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start;">
        <div>
          <img src="${product.image}" alt="${product.name}" style="border-radius: 8px; width: 100%; object-fit: contain; max-height: 280px;">
        </div>
        <div>
          <span class="badge badge-sale" style="margin-bottom: 0.5rem;">${product.categoryName}</span>
          <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.4;">${product.name}</h2>
          <div class="product-price-row">
            <span class="product-price" style="font-size: 1.35rem;">${formatCurrency(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
          </div>
          <p style="font-size: 0.9rem; color: var(--gray-600); margin: 0.75rem 0;">${product.description || ''}</p>
          ${specsHtml}
          <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();">
              <i class="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
            <a href="product-detail.html?id=${product.id}" class="btn btn-outline">Chi tiết sản phẩm</a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.onclick = (e) => {
    if (e.target === modal) closeQuickView();
  };
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('active');
}

// 7. RENDER CART PAGE
function renderCartPage() {
  const tableBody = document.getElementById('cart-items-tbody');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  if (!tableBody) return;

  const cart = getCart();

  if (cart.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 3rem 1rem;">
          <i class="fas fa-shopping-bag" style="font-size: 3rem; color: var(--gray-300); margin-bottom: 1rem;"></i>
          <p style="color: var(--gray-500); font-size: 1.1rem; margin-bottom: 1rem;">Giỏ hàng của bạn đang trống!</p>
          <a href="products.html" class="btn btn-primary">Mua sắm ngay</a>
        </td>
      </tr>
    `;
    if (subtotalEl) subtotalEl.textContent = '0 ₫';
    if (totalEl) totalEl.textContent = '0 ₫';
    return;
  }

  let html = '';
  let grandTotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;

    html += `
      <tr>
        <td>
          <div class="cart-item-info">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div>
              <a href="product-detail.html?id=${item.id}" style="font-weight: 600; color: var(--gray-900); font-size: 0.95rem;">${item.name}</a>
              <div style="font-size: 0.8rem; color: var(--gray-400);">${item.categoryName || ''}</div>
            </div>
          </div>
        </td>
        <td style="font-weight: 600;">${formatCurrency(item.price)}</td>
        <td>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty - 1})">-</button>
            <input type="text" class="qty-input" value="${item.qty}" readonly>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty + 1})">+</button>
          </div>
        </td>
        <td style="font-weight: 700; color: var(--danger);">${formatCurrency(itemTotal)}</td>
        <td style="text-align: center;">
          <button onclick="removeFromCart(${item.id})" class="btn btn-sm btn-outline" style="border: none; color: var(--danger);" title="Xóa">
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
  if (subtotalEl) subtotalEl.textContent = formatCurrency(grandTotal);
  if (totalEl) totalEl.textContent = formatCurrency(grandTotal);
}

// 8. CHECKOUT SIMULATION
function processCheckout(event) {
  if (event) event.preventDefault();
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Giỏ hàng trống! Vui lòng chọn sản phẩm.', 'error');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');

  if (!nameInput.value || !phoneInput.value || !addressInput.value) {
    showToast('Vui lòng điền đầy đủ họ tên, SĐT và địa chỉ nhận hàng!', 'error');
    return;
  }

  showToast('Đang xử lý đơn hàng...', 'info');

  setTimeout(() => {
    localStorage.removeItem(STORAGE_KEYS.CART);
    updateCartCounter();
    renderCartPage();
    showToast('Đặt hàng thành công! Đội ngũ CyberTech sẽ liên hệ xác nhận sớm nhất.', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  }, 1000);
}

// 9. EVENT LISTENERS ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
  initProducts();
  updateCartCounter();
  updateAuthUI();

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('show');
    });
  }

  // Header Search Form
  const searchForm = document.getElementById('header-search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = document.getElementById('header-search-input').value.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
});
