/* ==========================================================================
   CYBERTECH STORE - PRODUCTS DATA & LOCALSTORAGE HANDLER
   Quản lý danh sách sản phẩm mẫu và đồng bộ với LocalStorage
   ========================================================================== */

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Card màn hình ASUS ROG Strix GeForce RTX 4080 16GB GDDR6X",
    category: "vga",
    categoryName: "VGA - Card màn hình",
    price: 32990000,
    oldPrice: 35500000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80",
    rating: 5,
    reviewsCount: 38,
    isHot: true,
    isNew: false,
    description: "Card màn hình cao cấp thế hệ RTX 40 Series, tản nhiệt buồng hơi MaxContact và 3 quạt Axial-tech làm mát tối ưu, hỗ trợ Ray Tracing & DLSS 3 cực đỉnh.",
    specs: {
      "Nhân đồ họa": "NVIDIA GeForce RTX 4080",
      "Bộ nhớ": "16GB GDDR6X - 256-bit",
      "Cổng xuất hình": "2x HDMI 2.1a, 3x DisplayPort 1.4a",
      "Nguồn khuyến nghị": "750W trở lên"
    }
  },
  {
    id: 2,
    name: "Bộ vi xử lý Intel Core i7-14700K (20 nhân, 28 luồng, Up to 5.60GHz)",
    category: "cpu",
    categoryName: "CPU - Bộ vi xử lý",
    price: 10490000,
    oldPrice: 11200000,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80",
    rating: 5,
    reviewsCount: 52,
    isHot: true,
    isNew: true,
    description: "CPU Intel Core thế hệ 14 Raptor Lake Refresh mang lại hiệu năng đa nhân vượt trội cho cả đồ họa render và gaming đỉnh cao.",
    specs: {
      "Số nhân / luồng": "20 nhân (8 P-core + 12 E-core) / 28 luồng",
      "Xung nhịp tối đa": "Up to 5.60 GHz Turbo Boost",
      "Socket": "LGA 1700",
      "Bộ nhớ đệm": "33MB Intel Smart Cache"
    }
  },
  {
    id: 3,
    name: "Laptop Gaming ASUS ROG Zephyrus G16 (Core i9, RTX 4070, OLED 240Hz)",
    category: "laptop",
    categoryName: "Laptop Gaming",
    price: 52990000,
    oldPrice: 56990000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
    rating: 5,
    reviewsCount: 24,
    isHot: true,
    isNew: true,
    description: "Laptop gaming siêu mỏng nhẹ với khung nhôm CNC, màn hình OLED ROG Nebula 2.5K 240Hz siêu nét và sức mạnh phần cứng vô song.",
    specs: {
      "Màn hình": "16 inch 2.5K OLED 240Hz 0.2ms",
      "CPU": "Intel Core Ultra 9 185H",
      "RAM": "32GB LPDDR5X 7467MHz",
      "VGA": "NVIDIA GeForce RTX 4070 8GB"
    }
  },
  {
    id: 4,
    name: "RAM Corsair Dominator Titanium RGB 32GB (2x16GB) DDR5 6000MHz",
    category: "ram",
    categoryName: "RAM - Bộ nhớ trong",
    price: 4390000,
    oldPrice: 4790000,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 19,
    isHot: false,
    isNew: true,
    description: "Thanh RAM phong cách thiết kế nhôm rèn tinh xảo, dải LED RGB Capellix rực rỡ tùy biến trên phần mềm iCUE và độ ổn định ép xung cao.",
    specs: {
      "Dung lượng": "32GB (2x 16GB)",
      "Chuẩn RAM": "DDR5 Bus 6000MHz",
      "Timing": "CL30-36-36-76",
      "Tản nhiệt": "Nhôm nguyên khối có LED RGB"
    }
  },
  {
    id: 5,
    name: "Màn hình Gaming LG UltraGear 27GR95QE-B 27 inch OLED 240Hz 0.03ms",
    category: "monitor",
    categoryName: "Màn hình máy tính",
    price: 18990000,
    oldPrice: 21500000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    rating: 5,
    reviewsCount: 41,
    isHot: true,
    isNew: false,
    description: "Trải nghiệm gaming chân thực với tấm nền OLED độ tương phản vô cực, thời gian phản hồi siêu tốc 0.03ms và tần số quét 240Hz.",
    specs: {
      "Kích thước": "27 inch QHD (2560 x 1440)",
      "Tấm nền": "OLED chống chói",
      "Tần số quét": "240Hz, 0.03ms (GtG)",
      "Đồng bộ": "NVIDIA G-Sync Compatible & AMD FreeSync"
    }
  },
  {
    id: 6,
    name: "Bàn phím cơ không dây Custom FL-Esports OG98 Retro Dual-Mode",
    category: "gear",
    categoryName: "Gaming Gear",
    price: 2450000,
    oldPrice: 2790000,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 65,
    isHot: false,
    isNew: true,
    description: "Bàn phím cơ layout 98 phím phong cách cổ điển Retro, kết nối 3 chế độ (Type-C, 2.4Ghz, Bluetooth), switch TTC mượt mà âm thanh êm ái.",
    specs: {
      "Layout": "98 phím gọn gàng",
      "Kết nối": "USB Type-C, Wireless 2.4Ghz, Bluetooth 5.0",
      "Switch": "TTC Flame Red Hotswap 5-pin",
      "Keycap": "PBT Double-Shot OEM profile"
    }
  },
  {
    id: 7,
    name: "Chuột Gaming Không Dây Logitech G Pro X Superlight 2",
    category: "gear",
    categoryName: "Gaming Gear",
    price: 3390000,
    oldPrice: 3890000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    rating: 5,
    reviewsCount: 88,
    isHot: true,
    isNew: false,
    description: "Chuột gaming esports chuẩn thi đấu số 1 thế giới với trọng lượng siêu nhẹ 60g, cảm biến HERO 2 độ phân giải 32.000 DPI và switch quang học lai LIGHTFORCE.",
    specs: {
      "Cảm biến": "HERO 2 32.000 DPI",
      "Trọng lượng": "Chỉ 60 gram",
      "Tần số phản hồi": "4000Hz Polling Rate",
      "Thời lượng pin": "Lên đến 95 giờ"
    }
  },
  {
    id: 8,
    name: "Mainboard ASUS ROG MAXIMUS Z790 DARK HERO",
    category: "mainboard",
    categoryName: "Bo mạch chủ",
    price: 16990000,
    oldPrice: 18500000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 15,
    isHot: false,
    isNew: true,
    description: "Bo mạch chủ đỉnh cao dòng ROG với 20+1 pha nguồn, hỗ trợ PCIe 5.0, WiFi 7 thế hệ mới và thiết kế đèn LED I/O Polymo Lighting cực ngầu.",
    specs: {
      "Chipset": "Intel Z790 (Socket LGA1700)",
      "Chuẩn kích thước": "ATX",
      "Khe cắm M.2": "5 khe M.2 (1 khe PCIe 5.0)",
      "Kết nối": "WiFi 7, Dual Thunderbolt 4"
    }
  }
];

// Helper functions for LocalStorage
const STORAGE_KEYS = {
  PRODUCTS: 'cybertech_products',
  CART: 'cybertech_cart',
  USERS: 'cybertech_users',
  CURRENT_USER: 'cybertech_current_user',
  FEEDBACK: 'cybertech_feedbacks'
};

function initProducts() {
  const existing = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!existing || JSON.parse(existing).length === 0) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(existing);
}

function getStoredProducts() {
  return initProducts();
}

function saveProduct(product) {
  const products = getStoredProducts();
  product.id = Date.now();
  products.unshift(product);
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  return product;
}

function deleteProduct(id) {
  let products = getStoredProducts();
  products = products.filter(p => p.id !== Number(id));
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

function resetProductsToDefault() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
}
