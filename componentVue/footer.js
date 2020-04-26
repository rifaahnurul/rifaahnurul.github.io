Vue.component('componentfooter', {
    props: ['color'],
    template: `
     <footer class="footer_part" v-bind:style="{ backgroundColor: color}">
        <div class="footer_iner">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-8">
                        <div class="footer_menu">
                            <div class="footer_logo">
                                <a href="index.html"><img src="img/logo.png" alt="#"></a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="index.html">Home</a>
                                <a href="about.html">About</a>
                                <a href="product_list.html">Products</a>
                                <a href="#">Pages</a>
                                <a href="blog.html">Blog</a>
                                <a href="contact.html">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="social_icon">
                            <a href="https://www.facebook.com/Al-Quran-Tulis-110978016940399/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/alquranfollowtheline/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=6289695103118" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright_part">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        <div class="copyright_text">
                            <P>
                                Copyright &copy;
                                All rights reserved | This
                                template is made with <i class="ti-heart" aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                            </P>
                            <div class="copyright_link">
                                <a href="#">Turms & Conditions</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
})

new Vue({
    el: "#component_footer"
})

// <a href="#"><i class="fab fa-google-plus-g" target="_blank"></i></a>
// <a href="#"><i class="fab fa-linkedin-in" target="_blank"></i></a>