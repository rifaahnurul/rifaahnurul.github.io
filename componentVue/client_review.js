Vue.component('componentclientreview', {
    props: ['color'],
    template: `
    <section class="client_review">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="client_review_slider owl-carousel">
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src="img/client_5.jpeg" alt="#">
                                    </div>
                                    <p>"Ini Sungguh Luar biasa jika setiap anak atau siswa di negri ini menulis setiap
                                        hari satu halaman sebelum mata pelajaran di mulai. . maka Al qur'an benar benar
                                        akan mendarah daging di kemudian hari... "</p>
                                    <h5>- Dr. Ir. Sri Puryono KS,M.P. Sekda Jateng</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src="img/client_4.jpg" alt="#">
                                    </div>
                                    <p>" Memulai di pagi hari dengan hal yang baik maka selanjutnya akan kita tuai
                                        kebaikan hingga malam hari Mari kita biasakan menulis Al qur'an 15 menit
                                        sebelum'kerja, untuk mendapatkan kualitas hidup yang lebih baik. "</p>
                                    <h5>- Dr. Halim Alamsyah, SE., SH., MA</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src="img/client_3.jpg" alt="#">
                                    </div>
                                    <p>"Al Quran Dengan Metode Follow The Line, kita tidak pertu takut salah jika ingin
                                        menulis Al Qur'an dan insya Allah Luar Biasa sekali manfaatnya jika bisa sampai
                                        khatam 30 Juz. "</p>
                                    <h5>- Prof. Dr. Muhammad Sirajuddin Syamsuddin, MA</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `
})


new Vue({
    el: "#component_clientreview"
})