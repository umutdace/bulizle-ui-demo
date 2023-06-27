<template>
    <section class="page_404">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">
                                SAYFA BULUNAMADI !
                            </h3>
                            <p>Eğer kaybolduysan aşağıdaki butona tıklayarak ana sayfaya gidebilirsin.</p>
                            <a href="/" class="link_404">ANA SAYFA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<style scoped>
p {
    text-align: center;
    font-size: 29px;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 500;
}

a{
    font-weight: bold;
    text-decoration: none;
}

.col-sm-offset-1{
    margin-top: -10px
}

.col-sm-10{
    width: 100%;
}
.page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: Roboto, sans-serif;
}

.page_404 img {
    width: 100%;
}

.four_zero_four_bg {

    background-image: url("../assets/Cat-astronaut-amico.svg");
    height: 430px;
    background-position: center;
    background-repeat: no-repeat;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
}

.link_404 {
    color: #fff !important;
    padding: 10px 40px;
    background: #d72929;
    margin: 20px 0;
    display: inline-block;
    top: -15px;
    font-weight: bold;
}

.contant_box_404 {
    margin-top: 5px;
}
</style>

