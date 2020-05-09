Vue.component('componentheader', {
    props: ['color'],
    template: `<header class="main_menu home_menu">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">Alquran Tulis</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="menu_icon"><i class="fas fa-bars"></i></span>
                    </button>

                    <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">Tentang</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="product_list.html">Produk</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link" href="blog.html">blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Kontak</a>
                            </li>
                        </ul>
                    </div>
                    <div class="hearer_icon d-flex align-items-center">
                        <a id="search_1" href="javascript:void(0)"><i class="ti-search"></i></a>
                        <a href="cart.html">
                            <i class="flaticon-shopping-cart-black-shape"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>`
})

new Vue({
    el: '#component_header'
});



// <li class="nav-item dropdown">
                            
// <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
//     role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     product
// </a>
// <div class="dropdown-menu" aria-labelledby="navbarDropdown_1">
//     <a class="dropdown-item" href="product_list.html"> product list</a>
//     <a class="dropdown-item" href="single-product.html">product details</a>
// </div>
// </li>

{/* <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3"
    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    pages
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown_2">
    <a class="dropdown-item" href="login.html">
        login

    </a>
    <a class="dropdown-item" href="checkout.html">product checkout</a>
    <a class="dropdown-item" href="cart.html">shopping cart</a>
    <a class="dropdown-item" href="confirmation.html">confirmation</a>
    <a class="dropdown-item" href="elements.html">elements</a>
</div>
</li> */}


{/* <img src="img/logo.png" alt="logo">  */}