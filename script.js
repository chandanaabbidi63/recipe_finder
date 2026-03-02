const page = document.body.dataset.page;

// ---------- Shared: Dark mode ----------
const darkToggle = document.getElementById("darkToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
}

// ---------- Home page ----------
if (page === "home") {
    const recipes = [
        { id: 1, name: "Masala Dosa", category: "Breakfast", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiAyR1OwfYttZy8OausIcZWzWPgqQWq8vmw&s", desc: "Crispy dosa with potato masala.", ingredients: ["Dosa batter", "Boiled potato", "Onion", "Mustard seeds"], steps: ["Prepare potato masala with onion and spices.", "Pour batter on hot tawa and spread thin.", "Add masala in center and fold.", "Serve hot with chutney and sambar."] },
        { id: 2, name: "Idli Sambar", category: "Breakfast", image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg", desc: "Soft idlis served with hot sambar.", ingredients: ["Idli batter", "Toor dal", "Mixed vegetables", "Sambar powder"], steps: ["Steam idlis in idli stand.", "Cook dal and vegetables until soft.", "Add sambar powder and tempering.", "Serve idli with hot sambar."] },
        { id: 3, name: "Vegetable Pulao", category: "Lunch", image: "https://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg", desc: "Rice, vegetables, and aromatic spices.", ingredients: ["Basmati rice", "Carrot", "Beans", "Whole spices"], steps: ["Soak and wash rice.", "Saute spices and vegetables.", "Add rice and water.", "Cook till fluffy and serve."] },
        { id: 4, name: "Rajma Chawal", category: "Lunch", image: "https://thumbs.dreamstime.com/b/punjabi-cuisine-rajma-chawal-indian-vegetarian-meal-rajma-chawal-salad-top-view-114181130.jpg", desc: "Kidney bean curry with steamed rice.", ingredients: ["Rajma", "Onion", "Tomato", "Basmati rice"], steps: ["Soak and pressure cook rajma.", "Prepare onion-tomato masala.", "Simmer rajma in gravy.", "Serve with steamed rice."] },
        { id: 5, name: "Paneer Butter Masala", category: "Dinner", image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-restaurant-style-paneer-butter-masala-paneer-makhani-video-recipe.jpg", desc: "Rich creamy curry with soft paneer cubes.", ingredients: ["Paneer", "Butter", "Tomato puree", "Cream"], steps: ["Cook tomato base with spices.", "Blend for smooth gravy.", "Add paneer cubes and simmer.", "Finish with cream and serve."] },
        { id: 6, name: "Veg Biryani", category: "Dinner", image: "https://t4.ftcdn.net/jpg/05/70/58/65/360_F_570586537_TnIgWdCnaTYpgg9gsTyloz5bnvfCtdLl.jpg", desc: "Fragrant layered rice with vegetables.", ingredients: ["Basmati rice", "Mixed vegetables", "Mint", "Biryani masala"], steps: ["Parboil basmati rice.", "Cook spiced vegetable masala.", "Layer rice and masala.", "Dum cook and serve hot."] },
        { id: 7, name: "Samosa", category: "Snacks", image: "https://c.ndtvimg.com/2022-09/lpcnb0g8_samosa_625x300_29_September_22.jpg", desc: "Crispy fried snack with spicy filling.", ingredients: ["Maida", "Potato", "Green peas", "Spices"], steps: ["Prepare dough and potato filling.", "Roll dough and shape cones.", "Fill and seal samosas.", "Deep fry till golden."] },
        { id: 8, name: "Bhel Puri", category: "Snacks", image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-bhel-puri.jpg", desc: "Tangy and crunchy Mumbai street snack.", ingredients: ["Puffed rice", "Sev", "Onion", "Chutneys"], steps: ["Mix puffed rice and vegetables.", "Add green and tamarind chutney.", "Toss quickly with spices.", "Top with sev and serve immediately."] },
        { id: 9, name: "Gulab Jamun", category: "Desserts", image: "https://www.cadburydessertscorner.com/hs-fs/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp?width=1920&height=464&name=soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp", desc: "Milk dumplings in sugar syrup.", ingredients: ["Milk powder", "Flour", "Sugar", "Cardamom"], steps: ["Prepare smooth jamun dough.", "Make sugar syrup separately.", "Fry balls on low flame.", "Soak in warm syrup."] },
        { id: 10, name: "Kheer", category: "Desserts", image: "https://www.sharmispassions.com/wp-content/uploads/2015/06/seviyan-kheer5.jpg", desc: "Traditional creamy rice pudding.", ingredients: ["Rice", "Milk", "Sugar", "Dry fruits"], steps: ["Boil milk and add rice.", "Cook till rice becomes soft.", "Add sugar and cardamom.", "Garnish with dry fruits."] },
        { id: 11, name: "Mango Lassi", category: "Beverages", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSlQ45vH_JReiUTNXyYvVMwW6Lb5G05fLRA&s", desc: "Refreshing mango yogurt drink.", ingredients: ["Mango pulp", "Curd", "Sugar", "Ice cubes"], steps: ["Add mango pulp and curd to blender.", "Add sugar as needed.", "Blend until smooth.", "Serve chilled."] },
        { id: 12, name: "Masala Chai", category: "Beverages", image: "https://goqii.com/blog/wp-content/uploads/shutterstock_1024718095-1024x682.jpg", desc: "Indian spiced milk tea.", ingredients: ["Tea leaves", "Milk", "Ginger", "Cardamom"], steps: ["Boil water with ginger and spices.", "Add tea leaves and simmer.", "Pour milk and boil.", "Strain and serve hot."] },
        { id: 13, name: "Chicken Curry", category: "Dinner", image: "https://www.teaforturmeric.com/wp-content/uploads/2021/06/Authentic-Chicken-Curry-6-500x500.jpg", desc: "Spicy home-style chicken curry.", ingredients: ["Chicken", "Onion", "Tomato", "Garam masala"], steps: ["Saute onion and tomato masala.", "Add chicken and spices.", "Cook till tender.", "Serve with rice or roti."] },
        { id: 14, name: "Grilled Chicken", category: "Dinner", image: "https://assets.epicurious.com/photos/5b843bce1abfc56568396369/1:1/w_2560%2Cc_limit/Grilled-Chicken-with-Mustard-Sauce-and-Tomato-Salad-recipe-2-22082018.jpg", desc: "Juicy and smoky grilled chicken.", ingredients: ["Chicken", "Curd", "Chili powder", "Lemon juice"], steps: ["Marinate chicken with spices.", "Rest for 30 minutes.", "Grill until cooked.", "Serve hot with salad."] },
        { id: 15, name: "Chicken Biryani", category: "Lunch", image: "https://png.pngtree.com/thumb_back/fh260/background/20241007/pngtree-chicken-biryani-with-onions-herbs-image_16340511.jpg", desc: "Aromatic chicken biryani layered with rice.", ingredients: ["Chicken", "Basmati rice", "Mint", "Biryani masala"], steps: ["Cook chicken masala.", "Parboil rice.", "Layer and dum cook.", "Serve with raita."] }
    ];

    const searchInput = document.getElementById("searchInput");
    const recipeList = document.getElementById("recipeList");
    const categoryFilters = document.getElementById("categoryFilters");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const savedCount = document.getElementById("savedCount");
    const userGreeting = document.getElementById("userGreeting");
    const favoritesPanel = document.getElementById("favoritesPanel");
    const recentPanel = document.getElementById("recentPanel");
    const mealPlannerGrid = document.getElementById("mealPlannerGrid");
    const recommendedSection = document.getElementById("recommendedSection");
    const recommendedList = document.getElementById("recommendedList");
    const topRatedList = document.getElementById("topRatedList");
    const mostReviewedRecipe = document.getElementById("mostReviewedRecipe");
    const positiveKeywords = document.getElementById("positiveKeywords");
    const grocerySection = document.getElementById("grocerySection");
    const pantrySummary = document.getElementById("pantrySummary");
    const groceryCartList = document.getElementById("groceryCartList");
    const groceryTotal = document.getElementById("groceryTotal");
    const groceryMessage = document.getElementById("groceryMessage");
    const storeCategories = document.getElementById("storeCategories");
    const storeItems = document.getElementById("storeItems");
    const storeCartList = document.getElementById("storeCartList");
    const storeTotal = document.getElementById("storeTotal");
    const storeMessage = document.getElementById("storeMessage");
    const reviewCheckoutBtn = document.getElementById("reviewCheckoutBtn");
    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutTotal = document.getElementById("checkoutTotal");
    const paymentMethod = document.getElementById("paymentMethod");
    const placeOrderBtn = document.getElementById("placeOrderBtn");
    const orderStatus = document.getElementById("orderStatus");
    const orderConfirmation = document.getElementById("orderConfirmation");

    let selectedCategory = "All";
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let expandedRecipes = [];
    let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    let weeklyPlan = JSON.parse(localStorage.getItem("weeklyPlan") || "{}");
    let ratingsData = JSON.parse(localStorage.getItem("ratingsData") || "{}");
    const defaultPantry = ["onion", "tomato", "rice", "milk", "sugar", "ginger", "salt", "curd", "tea leaves"];
    let pantryItems = JSON.parse(localStorage.getItem("pantryItems") || JSON.stringify(defaultPantry));
    let groceryCart = JSON.parse(localStorage.getItem("groceryCart") || "[]");
    let storeCart = JSON.parse(localStorage.getItem("storeCart") || "[]");
    let selectedStoreCategory = "All";

    const ingredientPrices = {
        "dosa batter": 70, "boiled potato": 30, "onion": 20, "mustard seeds": 15,
        "idli batter": 60, "toor dal": 90, "mixed vegetables": 80, "sambar powder": 40,
        "basmati rice": 120, "carrot": 25, "beans": 30, "whole spices": 35,
        "rajma": 110, "tomato": 25, "paneer": 95, "butter": 55, "tomato puree": 45,
        "cream": 35, "mint": 20, "biryani masala": 40, "maida": 35, "potato": 28,
        "green peas": 30, "spices": 40, "puffed rice": 35, "sev": 30, "chutneys": 45,
        "milk powder": 120, "flour": 40, "sugar": 45, "cardamom": 25, "rice": 60,
        "dry fruits": 140, "mango pulp": 85, "curd": 35, "ice cubes": 10,
        "tea leaves": 65, "milk": 38, "ginger": 15, "chicken": 220, "garam masala": 35,
        "chili powder": 30, "lemon juice": 20
    };

    const storeProducts = [
        { id: "v1", name: "Fresh Tomato", category: "Vegetables", price: 30, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQk135BzhGh9qKGgPzbU3-dPCO7xn4l9paoAOB8e_DFnGxJIovLzuNgT4Fen08PJLZTgr5tmk8apAQtNsriyiaDk1TUovup6Q", link: "https://www.google.com/search?tbm=shop&q=fresh+tomato" },
        { id: "v2", name: "Potato", category: "Vegetables", price: 28, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSt3Nr6YB8x8Ly4_dUJnDR1nxtU4FLsZjGzk25CA_a9cNZCtovV4A76Mmc3ugOjSsNNT4TqNF4QuA-_tXWM_fuN_Buzl2LA_WQ5Jb104Ku8_Zn2cVIvC17" },
        { id: "s1", name: "Turmeric Powder", category: "Spices", price: 45, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWVSLVRxCUoTCgqsx_zh7kzwA6cmb_YTr2LWt319n_PPFTyuOVrRb2hN9zMKfu5owC1NiDYQp2O1ipwIO2nfpxCUuEBTnkcjbDyiBptH7Sx2ggHgqLMyGQdg", link: "https://www.google.com/search?tbm=shop&q=turmeric+powder" },
        { id: "s2", name: "Garam Masala", category: "Spices", price: 55, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRunl7ztJ7LzEfPXcCUKeh91Z39_ouOCbfcEEDmySgT4sygyDBKmceykl3Da5gbtYAA1Sd3JmidLpafZoLLdmWObPPr2twWKhjP3tpIDntdxMe6Sa_U4dxlAA", link: "https://www.google.com/search?tbm=shop&q=garam+masala" },
        { id: "d1", name: "Cow Milk", category: "Dairy", price: 38, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqgOpOANpRlSTsqAiYrh2rv02UrxWa2teZjXD7UTSmbKhjzPjM8fAeTSDATiu7PRKXwzDEDU0bqYYRkx0hSP9drsJ4A7Tz", link: "https://www.google.com/search?tbm=shop&q=cow+milk" },
        { id: "d2", name: "Paneer", category: "Dairy", price: 95, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ5humJ3R6wkE9Mwly7bZBEu3bs-lusxjac6sWPXx-_O48FBuNaJYHp47mB4jocBxljUy__ocBZQkS2FRBCfpfYXVKqm5J0ibAHLk4LWkrbYIGtsTlegzbPkos", link: "https://www.google.com/search?tbm=shop&q=paneer" },
        { id: "m1", name: "Chicken (500g)", category: "Meat", price: 220, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlE253XqQt965ooAlh1guxx7kjTgKwKSAUnkglngH3HGEJJ5-OM4wS3Ysbm7s-ryqqxwE_h7GABH9-BnlJyc7Na1rd9tuLyw", link: "https://www.google.com/search?tbm=shop&q=chicken+500g" },
        { id: "m2", name: "Mutton (500g)", category: "Meat", price: 390, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUz-wJVzHQCc-tyYRPPL_3y2WI2xU47vj7gyJR-Tm9sstjXEET2JI9Hbv4IMLDMQGI3dxZ_87tdPxRn_-Rs5K7YNDC_FqBNKL6RfnysC6CMdhZt5Jkp70P", link: "https://www.google.com/search?tbm=shop&q=mutton+500g" },
        { id: "g1", name: "Basmati Rice 1kg", category: "Grains", price: 120, image: "https://m.media-amazon.com/images/I/51R6OxZA-KL.jpg", link: "https://www.google.com/search?tbm=shop&q=basmati+rice+1kg" },
        { id: "g2", name: "Wheat Flour 1kg", category: "Grains", price: 50, image: "https://m.media-amazon.com/images/I/91REmKyE84L.jpg", link: "https://www.google.com/search?tbm=shop&q=wheat+flour+1kg" }
    ];

    const categories = ["All", ...new Set(recipes.map(r => r.category))];

    const recipeMeta = {
        1: { time: "30 mins", nutrition: { calories: 320, protein: "8g", fat: "10g", carbs: "48g" } },
        2: { time: "35 mins", nutrition: { calories: 280, protein: "9g", fat: "6g", carbs: "50g" } },
        3: { time: "40 mins", nutrition: { calories: 340, protein: "7g", fat: "9g", carbs: "56g" } },
        4: { time: "45 mins", nutrition: { calories: 390, protein: "13g", fat: "8g", carbs: "62g" } },
        5: { time: "35 mins", nutrition: { calories: 420, protein: "16g", fat: "28g", carbs: "18g" } },
        6: { time: "50 mins", nutrition: { calories: 410, protein: "10g", fat: "14g", carbs: "58g" } },
        7: { time: "40 mins", nutrition: { calories: 260, protein: "5g", fat: "12g", carbs: "31g" } },
        8: { time: "15 mins", nutrition: { calories: 190, protein: "4g", fat: "5g", carbs: "31g" } },
        9: { time: "45 mins", nutrition: { calories: 300, protein: "5g", fat: "11g", carbs: "45g" } },
        10: { time: "35 mins", nutrition: { calories: 240, protein: "7g", fat: "7g", carbs: "36g" } },
        11: { time: "10 mins", nutrition: { calories: 180, protein: "6g", fat: "4g", carbs: "28g" } },
        12: { time: "12 mins", nutrition: { calories: 90, protein: "3g", fat: "3g", carbs: "12g" } },
        13: { time: "40 mins", nutrition: { calories: 360, protein: "26g", fat: "20g", carbs: "10g" } },
        14: { time: "35 mins", nutrition: { calories: 290, protein: "31g", fat: "14g", carbs: "6g" } },
        15: { time: "55 mins", nutrition: { calories: 480, protein: "24g", fat: "17g", carbs: "55g" } }
    };

    const loggedInUser = localStorage.getItem("loggedInUser");
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (userGreeting) {
        userGreeting.textContent = loggedInUser
            ? `Hi ${loggedInUser} 👋 Ready to cook today?`
            : "Tip: Login to personalize your recipe experience.";
    }

    function renderCategories() {
        categoryFilters.innerHTML = categories.map(category => `
            <button class="chip ${category === selectedCategory ? "active" : ""}" data-category="${category}">${category}</button>
        `).join("");
    }

    function renderPersonalization() {
        const recipeById = Object.fromEntries(recipes.map(r => [r.id, r]));

        favoritesPanel.innerHTML = favorites.length
            ? favorites.map(id => `<li>${recipeById[id]?.name || "Recipe"}</li>`).join("")
            : "<li>No favorites yet. Click ❤️ Favorite on any recipe.</li>";

        recentPanel.innerHTML = recentlyViewed.length
            ? recentlyViewed.map(id => `<li>${recipeById[id]?.name || "Recipe"}</li>`).join("")
            : "<li>No recently viewed recipes yet.</li>";

        mealPlannerGrid.innerHTML = weekDays.map(day => `
            <div class="planner-item">
                <label>${day}</label>
                <select data-day="${day}">
                    <option value="">-- Select recipe --</option>
                    ${recipes.map(r => `<option value="${r.id}" ${String(weeklyPlan[day]) === String(r.id) ? "selected" : ""}>${r.name}</option>`).join("")}
                </select>
            </div>
        `).join("");
    }

    function normalizeIngredient(name) {
        return String(name || "").trim().toLowerCase();
    }

    function getIngredientStatus(recipe) {
        const pantrySet = new Set(pantryItems.map(normalizeIngredient));
        const available = [];
        const missing = [];

        recipe.ingredients.forEach(item => {
            const normalized = normalizeIngredient(item);
            if (pantrySet.has(normalized)) available.push(item);
            else missing.push(item);
        });

        return { available, missing };
    }

    function renderGroceryCart() {
        if (!groceryCartList || !groceryTotal || !pantrySummary) return;

        pantrySummary.textContent = pantryItems.join(", ");
        groceryCartList.innerHTML = groceryCart.length
            ? groceryCart.map(item => `<li>${item.name} - ₹${item.price}</li>`).join("")
            : "<li>No missing ingredients added yet.</li>";

        const total = groceryCart.reduce((sum, item) => sum + Number(item.price || 0), 0);
        groceryTotal.textContent = String(total);
    }

    function renderStore() {
        if (!storeCategories || !storeItems || !storeCartList || !storeTotal) return;

        const getProductLink = (item) => item.link || `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(item.name)}`;

        const categories = ["All", ...new Set(storeProducts.map(p => p.category))];
        storeCategories.innerHTML = categories.map(cat =>
            `<button class="chip ${cat === selectedStoreCategory ? "active" : ""}" data-store-cat="${cat}">${cat}</button>`
        ).join("");

        const visible = storeProducts.filter(p => selectedStoreCategory === "All" || p.category === selectedStoreCategory);
        storeItems.innerHTML = visible.map(item => `
            <article class="store-card">
                <a href="${getProductLink(item)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${item.name} product link">
                    <img src="${item.image}" alt="${item.name}">
                </a>
                <div class="meta">
                    <h4><a class="store-link" href="${getProductLink(item)}" target="_blank" rel="noopener noreferrer">${item.name}</a></h4>
                    <p>${item.category} • ₹${item.price}</p>
                    <a class="store-link small" href="${getProductLink(item)}" target="_blank" rel="noopener noreferrer">🔗 View Product</a>
                    <div class="store-actions">
                        <button class="addStoreBtn" data-store-id="${item.id}">Add to Cart</button>
                        <button class="buyNowBtn" data-buy-id="${item.id}">Buy Now</button>
                    </div>
                </div>
            </article>
        `).join("");

        storeCartList.innerHTML = storeCart.length
            ? storeCart.map(item => `<li><a class="store-link" href="${getProductLink(item)}" target="_blank" rel="noopener noreferrer">${item.name}</a> - ₹${item.price}</li>`).join("")
            : "<li>Store cart is empty.</li>";

        const total = storeCart.reduce((sum, item) => sum + Number(item.price || 0), 0);
        storeTotal.textContent = String(total);
    }

    function getCheckoutSnapshot() {
        const groceryItems = groceryCart.map(item => ({ ...item, source: "Recipe Grocery" }));
        const virtualStoreItems = storeCart.map(item => ({ ...item, source: "Virtual Store" }));
        const items = [...groceryItems, ...virtualStoreItems];
        const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
        return { items, total };
    }

    function renderCheckoutReview() {
        if (!checkoutItems || !checkoutTotal) return;
        const { items, total } = getCheckoutSnapshot();

        checkoutItems.innerHTML = items.length
            ? items.map(item => `<li>${item.name} (${item.source}) - ₹${item.price}</li>`).join("")
            : "<li>Your checkout cart is empty.</li>";

        checkoutTotal.textContent = String(total);
    }

    function placeSimulatedOrder() {
        if (!orderStatus || !orderConfirmation) return;
        const { items, total } = getCheckoutSnapshot();

        if (!items.length) {
            orderStatus.textContent = "Add items to cart before checkout.";
            orderConfirmation.innerHTML = "";
            return;
        }

        if (!paymentMethod?.value) {
            orderStatus.textContent = "Please select a payment method.";
            return;
        }

        const orderId = `AMMA-${Date.now().toString().slice(-6)}`;
        const placedAt = new Date().toLocaleString();

        orderStatus.textContent = "✅ Payment simulated successfully!";
        orderConfirmation.innerHTML = `
            <h4>🎉 Order Confirmed</h4>
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod.value}</p>
            <p><strong>Items:</strong> ${items.length}</p>
            <p><strong>Total Paid:</strong> ₹${total}</p>
            <p class="small">Placed at: ${placedAt}</p>
        `;

        groceryCart = [];
        storeCart = [];
        localStorage.setItem("groceryCart", JSON.stringify(groceryCart));
        localStorage.setItem("storeCart", JSON.stringify(storeCart));

        paymentMethod.value = "";
        renderGroceryCart();
        renderStore();
        renderCheckoutReview();
    }

    function addStoreItemToCart(productId, buyNow = false) {
        const item = storeProducts.find(p => p.id === productId);
        if (!item) return;
        const exists = storeCart.some(p => p.id === item.id);
        if (!exists) {
            storeCart.push(item);
            localStorage.setItem("storeCart", JSON.stringify(storeCart));
        }

        if (buyNow && storeMessage) {
            storeMessage.textContent = `✅ ${item.name} added. Proceeding to checkout with ₹${item.price}.`;
        }

        renderStore();
        renderCheckoutReview();
    }

    function addMissingToCart(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        const { missing } = getIngredientStatus(recipe);

        missing.forEach(name => {
            const key = normalizeIngredient(name);
            const price = ingredientPrices[key] || 40;
            const exists = groceryCart.some(item => normalizeIngredient(item.name) === key);
            if (!exists) groceryCart.push({ name, price });
        });

        localStorage.setItem("groceryCart", JSON.stringify(groceryCart));
        renderGroceryCart();
        renderCheckoutReview();
        grocerySection?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function getRecipeKitPricing(recipe) {
        const subtotal = recipe.ingredients.reduce((sum, name) => {
            const key = normalizeIngredient(name);
            return sum + Number(ingredientPrices[key] || 40);
        }, 0);

        const discountRate = 0.1;
        const discountAmount = Math.round(subtotal * discountRate);
        const finalPrice = Math.max(0, subtotal - discountAmount);

        return { subtotal, discountRate, discountAmount, finalPrice };
    }

    function addRecipeKitToCart(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        recipe.ingredients.forEach(name => {
            const key = normalizeIngredient(name);
            const price = ingredientPrices[key] || 40;
            const exists = groceryCart.some(item => normalizeIngredient(item.name) === key);
            if (!exists) groceryCart.push({ name, price });
        });

        localStorage.setItem("groceryCart", JSON.stringify(groceryCart));
        renderGroceryCart();
        renderCheckoutReview();

        const pricing = getRecipeKitPricing(recipe);
        if (groceryMessage) {
            groceryMessage.textContent = `✅ ${recipe.name} kit added. Subtotal ₹${pricing.subtotal}, discount ${Math.round(pricing.discountRate * 100)}%, final ₹${pricing.finalPrice}.`;
        }

        grocerySection?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function addRecentlyViewed(recipeId) {
        recentlyViewed = [recipeId, ...recentlyViewed.filter(id => id !== recipeId)].slice(0, 6);
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
        renderPersonalization();
    }

    function recommendationScore(recipe, term, baseRecipe) {
        const text = `${recipe.name} ${recipe.category} ${recipe.desc} ${recipe.ingredients.join(" ")}`.toLowerCase();
        let score = 0;
        if (term) {
            if (recipe.name.toLowerCase().includes(term)) score += 5;
            if (recipe.ingredients.join(" ").toLowerCase().includes(term)) score += 4;
            if (text.includes(term)) score += 2;
        }
        if (baseRecipe) {
            if (recipe.category === baseRecipe.category) score += 2;
            const currentTime = parseInt(recipeMeta[recipe.id]?.time || "0", 10);
            const baseTime = parseInt(recipeMeta[baseRecipe.id]?.time || "0", 10);
            if (Math.abs(currentTime - baseTime) <= 12) score += 1;
            const commonIngredient = recipe.ingredients.some(ing => baseRecipe.ingredients.includes(ing));
            if (commonIngredient) score += 2;
        }
        return score;
    }

    function renderRecommendations() {
        if (!recommendedSection || !recommendedList) return;

        const term = searchInput.value.trim().toLowerCase();
        const baseRecipe = term
            ? recipes.find(r => `${r.name} ${r.ingredients.join(" ")} ${r.desc}`.toLowerCase().includes(term))
            : recipes.find(r => r.id === recentlyViewed[0]);

        const ranked = recipes
            .map(recipe => ({ recipe, score: recommendationScore(recipe, term, baseRecipe) }))
            .filter(item => item.score > 0 && (!baseRecipe || item.recipe.id !== baseRecipe.id))
            .sort((a, b) => b.score - a.score)
            .slice(0, 4)
            .map(item => item.recipe);

        if (!ranked.length) {
            recommendedSection.style.display = "none";
            return;
        }

        recommendedSection.style.display = "block";
        recommendedList.innerHTML = ranked.map(recipe => `
            <div class="recommend-item">
                <h4>${recipe.name}</h4>
                <p>${recipe.category} • ⏱️ ${recipeMeta[recipe.id]?.time || "--"}</p>
                <p>${recipe.desc}</p>
                <button class="recoBtn" data-id="${recipe.id}">View Recipe</button>
            </div>
        `).join("");
    }

    function getRecipeReviews(recipeId) {
        return ratingsData[String(recipeId)] || [];
    }

    function getAverageRating(recipeId) {
        const reviews = getRecipeReviews(recipeId);
        if (!reviews.length) return 0;
        const total = reviews.reduce((sum, item) => sum + Number(item.rating || 0), 0);
        return total / reviews.length;
    }

    function renderRatingAnalytics() {
        if (!topRatedList || !mostReviewedRecipe || !positiveKeywords) return;

        const ratedRecipes = recipes
            .map(recipe => ({
                recipe,
                avg: getAverageRating(recipe.id),
                count: getRecipeReviews(recipe.id).length
            }))
            .filter(item => item.count > 0)
            .sort((a, b) => b.avg - a.avg || b.count - a.count);

        topRatedList.innerHTML = ratedRecipes.length
            ? ratedRecipes.slice(0, 5).map(item => `<li>${item.recipe.name} — ${item.avg.toFixed(1)}⭐ (${item.count})</li>`).join("")
            : "<li>No ratings yet.</li>";

        const mostReviewed = [...ratedRecipes].sort((a, b) => b.count - a.count)[0];
        mostReviewedRecipe.textContent = mostReviewed
            ? `${mostReviewed.recipe.name} (${mostReviewed.count} reviews)`
            : "--";

        const stopWords = new Set(["very", "really", "this", "that", "with", "from", "have", "nice", "good", "great", "recipe", "dish", "taste"]);
        const keywordCounts = {};

        Object.values(ratingsData).flat().forEach(item => {
            const isPositive = Number(item.rating) >= 4;
            if (!isPositive) return;
            (item.review || "")
                .toLowerCase()
                .replace(/[^a-z\s]/g, " ")
                .split(/\s+/)
                .filter(word => word.length > 3 && !stopWords.has(word))
                .forEach(word => {
                    keywordCounts[word] = (keywordCounts[word] || 0) + 1;
                });
        });

        const keywords = Object.entries(keywordCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([word]) => word);

        positiveKeywords.textContent = keywords.length ? keywords.join(", ") : "--";
    }

    function renderRecipes() {
        const term = searchInput.value.trim().toLowerCase();

        const filtered = recipes.filter(recipe => {
            const byCategory = selectedCategory === "All" || recipe.category === selectedCategory;
            const bySearch = `${recipe.name} ${recipe.category} ${recipe.desc}`.toLowerCase().includes(term);
            return byCategory && bySearch;
        });

        if (!filtered.length) {
            recipeList.innerHTML = `<div class="empty-state">No recipes found. Try another search or category.</div>`;
            return;
        }

        recipeList.innerHTML = filtered.map(recipe => {
            const isFav = favorites.includes(recipe.id);
            const isExpanded = expandedRecipes.includes(recipe.id);
            const meta = recipeMeta[recipe.id];
            const avgRating = getAverageRating(recipe.id);
            const reviewCount = getRecipeReviews(recipe.id).length;
            const latestReviews = getRecipeReviews(recipe.id).slice(-2).reverse();
            const ingredientStatus = getIngredientStatus(recipe);
            const kitPricing = getRecipeKitPricing(recipe);
            return `
                <article class="card">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="card-content">
                        <h3>${recipe.name}</h3>
                        <p class="small">${recipe.category}</p>
                        <p class="rating-row">⭐ ${reviewCount ? avgRating.toFixed(1) : "No rating"} ${reviewCount ? `(${reviewCount} reviews)` : ""}</p>
                        <p class="small">⏱️ Time required: <strong>${meta.time}</strong></p>
                        <p>${recipe.desc}</p>
                        <button class="favBtn ${isFav ? "active" : ""}" data-id="${recipe.id}">
                            ${isFav ? "✔ Saved" : "❤️ Favorite"}
                        </button>
                        <button class="detailsBtn" data-id="${recipe.id}">
                            ${isExpanded ? "Hide Ingredients & Steps" : "Show Ingredients & Steps"}
                        </button>
                        <div class="recipe-details ${isExpanded ? "show" : ""}">
                            <h4>Nutrition (approx per serving):</h4>
                            <div class="nutrition-grid">
                                <span>🔥 Calories: ${meta.nutrition.calories} kcal</span>
                                <span>💪 Protein: ${meta.nutrition.protein}</span>
                                <span>🥑 Fat: ${meta.nutrition.fat}</span>
                                <span>🍚 Carbs: ${meta.nutrition.carbs}</span>
                            </div>
                            <h4>Ingredients:</h4>
                            <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
                            <h4>How to prepare:</h4>
                            <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>

                            <div class="ingredient-check">
                                <h4>Ingredient availability</h4>
                                <p class="ok">✅ Available: ${ingredientStatus.available.length ? ingredientStatus.available.join(", ") : "None"}</p>
                                <p class="missing">❌ Missing: ${ingredientStatus.missing.length ? ingredientStatus.missing.join(", ") : "None"}</p>
                                <button class="buyMissingBtn" data-id="${recipe.id}" ${ingredientStatus.missing.length ? "" : "disabled"}>
                                    🛒 Buy Missing Ingredients
                                </button>
                            </div>

                            <div class="kit-box">
                                <h4>🧺 One-Click Recipe Kit</h4>
                                <p class="small">Get all ingredients in one tap.</p>
                                <p class="small">MRP: <span class="kit-old-price">₹${kitPricing.subtotal}</span> • Discount: ${Math.round(kitPricing.discountRate * 100)}%</p>
                                <p><strong>🛒 Buy Complete Recipe Kit – ₹${kitPricing.finalPrice}</strong></p>
                                <button class="buyKitBtn" data-id="${recipe.id}">Buy Complete Recipe Kit</button>
                            </div>

                            <div class="review-box">
                                <h4>Rate & review</h4>
                                <select id="ratingInput-${recipe.id}">
                                    <option value="5">5 ⭐ Excellent</option>
                                    <option value="4">4 ⭐ Very good</option>
                                    <option value="3">3 ⭐ Good</option>
                                    <option value="2">2 ⭐ Average</option>
                                    <option value="1">1 ⭐ Poor</option>
                                </select>
                                <textarea id="reviewInput-${recipe.id}" placeholder="Write your short review..."></textarea>
                                <button class="reviewSubmit" data-id="${recipe.id}">Submit Review</button>
                                ${latestReviews.length
                                    ? `<ul class="review-list">${latestReviews.map(item => `<li>${item.rating}⭐ - ${item.review || "No text"}</li>`).join("")}</ul>`
                                    : "<p class=\"small\">No reviews yet for this recipe.</p>"}
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        if (savedCount) {
            savedCount.textContent = favorites.length;
        }

        renderPersonalization();
        renderRecommendations();
        renderRatingAnalytics();
    }

    renderCategories();
    renderRecipes();
    renderGroceryCart();
    renderStore();
    renderCheckoutReview();

    searchInput.addEventListener("input", () => {
        renderRecipes();
    });

    categoryFilters.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        selectedCategory = btn.dataset.category;
        renderCategories();
        renderRecipes();
    });

    storeCategories?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-store-cat]");
        if (!btn) return;
        selectedStoreCategory = btn.dataset.storeCat;
        renderStore();
    });

    storeItems?.addEventListener("click", (e) => {
        const addBtn = e.target.closest(".addStoreBtn");
        const buyBtn = e.target.closest(".buyNowBtn");
        if (addBtn) addStoreItemToCart(addBtn.dataset.storeId, false);
        if (buyBtn) addStoreItemToCart(buyBtn.dataset.buyId, true);
    });

    reviewCheckoutBtn?.addEventListener("click", () => {
        renderCheckoutReview();
        orderStatus.textContent = "Checkout review updated.";
    });

    placeOrderBtn?.addEventListener("click", () => {
        placeSimulatedOrder();
    });

    recipeList.addEventListener("click", (e) => {
        const favBtn = e.target.closest(".favBtn");
        const detailsBtn = e.target.closest(".detailsBtn");

        if (favBtn) {
            const id = Number(favBtn.dataset.id);
            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
            } else {
                favorites.push(id);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderRecipes();
            return;
        }

        if (detailsBtn) {
            const id = Number(detailsBtn.dataset.id);
            if (expandedRecipes.includes(id)) {
                expandedRecipes = expandedRecipes.filter(rid => rid !== id);
            } else {
                expandedRecipes.push(id);
                addRecentlyViewed(id);
            }
            renderRecipes();
        }

        const reviewBtn = e.target.closest(".reviewSubmit");
        const buyBtn = e.target.closest(".buyMissingBtn");
        const kitBtn = e.target.closest(".buyKitBtn");
        if (reviewBtn) {
            const id = Number(reviewBtn.dataset.id);
            const ratingEl = document.getElementById(`ratingInput-${id}`);
            const reviewEl = document.getElementById(`reviewInput-${id}`);
            const rating = Number(ratingEl?.value || 5);
            const review = (reviewEl?.value || "").trim();

            ratingsData[String(id)] = ratingsData[String(id)] || [];
            ratingsData[String(id)].push({ rating, review, at: new Date().toISOString() });
            localStorage.setItem("ratingsData", JSON.stringify(ratingsData));
            renderRecipes();
        }

        if (buyBtn) {
            const id = Number(buyBtn.dataset.id);
            addMissingToCart(id);
        }

        if (kitBtn) {
            const id = Number(kitBtn.dataset.id);
            addRecipeKitToCart(id);
        }
    });

    mealPlannerGrid?.addEventListener("change", (e) => {
        const target = e.target;
        if (!target.matches("select[data-day]")) return;
        const day = target.dataset.day;
        weeklyPlan[day] = target.value ? Number(target.value) : "";
        localStorage.setItem("weeklyPlan", JSON.stringify(weeklyPlan));
    });

    recommendedList?.addEventListener("click", (e) => {
        const btn = e.target.closest(".recoBtn");
        if (!btn) return;
        const id = Number(btn.dataset.id);
        const selected = recipes.find(r => r.id === id);
        if (!selected) return;

        searchInput.value = selected.name;
        selectedCategory = "All";
        expandedRecipes = [id];
        addRecentlyViewed(id);
        renderCategories();
        renderRecipes();
    });

    surpriseBtn?.addEventListener("click", () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        selectedCategory = "All";
        expandedRecipes = [randomRecipe.id];
        searchInput.value = randomRecipe.name;
        addRecentlyViewed(randomRecipe.id);
        renderCategories();
        renderRecipes();

        const card = recipeList.querySelector(`[data-id="${randomRecipe.id}"]`)?.closest(".card");
        if (card) {
            card.classList.add("highlight-card");
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => card.classList.remove("highlight-card"), 1400);
        }
    });
}

// ---------- Login page ----------
if (page === "login") {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || password.length < 6) {
            loginMessage.textContent = "Please enter valid email and password (min 6 chars).";
            return;
        }

        localStorage.setItem("loggedInUser", email);
        loginMessage.textContent = "✅ Login successful! Redirecting to Home...";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 900);
    });
}
