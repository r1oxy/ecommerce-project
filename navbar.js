export function Navbar() {
  return `
        <header class="text-center d-flex align-items-center justify-content-center">
            Free standard shipping
        </header>
        <nav class="navbar navbar-expand-lg container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">IMPACT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav mx-auto">
                        <!-- Use mx-auto class to center align the elements -->
                        <span class="nav-item">
                            <a class="nav-link" href="products.html">Shop</a>
                        </span>
                        <span class="nav-item">
                            <a class="nav-link" href="electronics.html">Electronics</a>
                        </span>
                        <span class="nav-item">
                            <a class="nav-link" href="jewelery.html">Jewelery</a>
                        </span>
                        <span class="nav-item">
                            <a class="nav-link" href="mens_clothing.html">Men's clothing</a>
                        </span>
                        <span class="nav-item">
                            <a class="nav-link" href="womens_clothing.html">Women's clothing</a>
                        </span>
                    </div>
                    <span class="navbar-text">
                        <div class="dropdown">
                            <button class="dropdown-button">Select Currency</button>
                            <div class="dropdown-content">
                                <button id="convert$" class="dropdown-item">Convert to $</button>
                                <button id="convertEUR" class="dropdown-item">Convert to €</button>
                                <button id="convertGBP" class="dropdown-item">Convert to £</button>
                                <button id="convertCHF" class="dropdown-item">Convert to CHF</button>
                            </div>
                        </div>
                        <i class="'bi bi-credit-card"></i>
                    </span>

                </div>
            </div>
        </nav>
    `;
}
