<template>
    <div class="container">
        <div class="item item-1" v-for="index in contents" :key="index.id" :name="index.title" 
        :style="{ 'background-image': 'url(' + index.image + ')' }" @click="this.ShowMoreInfo(index.name,index.summary,index.fragmanUrl,index.link)">
            <div class="body-item">
                <div class="body-item-1">
                    <div class="play">
                        <i></i>
                    </div>
                </div>
                <div class="title body-item-2">{{ index.name }}</div>
                <div class="properties body-item-3">
                    <span class="year"></span>
                    <span class="age-limit"></span>
                    <span class="time"></span>
                </div>
                <p class="description body-item-4">{{ index.summary }}</p>
                <div class="body-item-5">
                    <i class="details-icon icon-chevron-down"></i>
                </div>
                <div class="icon-set body-item-6">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            contents: [],
        }
    },
    created() {
        fetch(this.baseUrl + "api/ContentSeries", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            this.contents = data;
            console.log(data);
        });
       
    }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    height: 25vh;
}

.container:hover .arrow-right,
.container:hover .arrow-left {
    opacity: 1;
    transition: 0.2s;
}

.container .body-item-1:hover {
    color: red;
    opacity: 1;
}

.container .body-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
}

.container .body-item:hover {
    width: 21.3vw;
    height: 9.3vw;
    opacity: 1;
    transition: 0.4s;
    transition-delay: 0.4s;
}

.container .body-item-1 {
    flex-grow: 1;
    text-align: center;
    opacity: 0.4;
}

.container .body-item-1:hover {
    color: red;
    opacity: 1;
    transition: 0.2s;
}

.container .body-item-2 {
    align-self: flex-start;
    font-size: 1.6vw;
    margin-bottom: 0.5vw;
}

.container .body-item-3 {
    align-self: flex-start;
}

.container .body-item-4 {
    padding-right: 3vw;
}

.container .body-item-5 {
    width: 40vw;
    text-align: center;
}

.container .body-item-6 {
    align-self: flex-end;
    position: absolute;
}

.container .play {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .play i {
    margin-top: 6vw;
}

.container * {
    background-color: transparent;
}

.details-icon {
    font-size: 2.5vw;
}

.item {
    width: 19vw;
    height: 10vw;
    background-size: 100% 100%;
    margin: 0 2px 0 2px;
    border-radius: 1px;
    cursor: pointer;
    transition: 0.5s;
    color: white;
}

.item:hover {
    width: 21.3vw;
    height: 12.3vw;
    transition: 0.5s;
    opacity: 1;
    transition-delay: 0.3s;
}

.item:hover .body-item {
    visibility: visible;
}

.item:hover .body-item-1 {
    width: 40vw;
}

.icon-set {
    display: flex;
    flex-direction: column;
    margin: 5vw 0 0 0;
}

.icon-set i {
    margin: 0 1vw 0.5vw 1vw;
    font-size: 0.9vw;
    border-radius: 50%;
    padding: 0.7vw;
    background: rgba(0, 0, 0, 0.5);
    border: 0.1em solid rgba(255, 255, 255, 0.5);
}

.icon-set i:hover {
    font-size: 1.1vw;
    border-color: #fff;
    background: rgba(0, 0, 0, 0.7);
    transition: 0.4s;
}

.arrow-right,
.arrow-left {
    color: white;
    background-color: rgba(20, 20, 20, 0.5);
    width: 4%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    font-size: 7vw;
    opacity: 0.2;
}

.arrow-right:hover,
.arrow-left:hover {
    font-size: 8vw;
    transition: 0.1s;
}

.arrow-right {
    right: 0;
}

.arrow-left {
    left: 0;
}

.match {
    color: #45af5e;
    font-size: bold;
}

.description {
    font-weight: 300;
    font-size: 0.9vw;
}

.properties {
    font-size: 1.35vw;
}

.properties * {
    margin: 1px;
    font-size: 15px;
}

.properties .age-limit {
    border: 0.1em solid rgba(255, 255, 255, 0.4);
    font-weight: 200;
    font-size: 1.2vw;
    padding: 0 3px 0 3px;
}

.item-1 {
    background-image: url(http://www.sickchirpse.com/wp-content/uploads/2017/03/Breaking-Bad.jpg);
}

.item-1:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(data:image/jpeg;base64,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);
    background-size: 100% 100%;
}

.item-2 {
    background-image: url(https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-flash-et00047401-1682497281.jpg);
}

.item-2:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://www.turkmmo.com/wp-content/uploads/elementor/thumbs/the-flash-season-8-cast-return-date-netflix-1614706074-q0ph48x6ryv37pgz4n6bcgu257esyokjoeia9l3ufo.jpg);
    background-size: 100% 100%;
}

.item-3 {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRpRvDV9SIgenubnYpDWxNV2q_Gylf5bjhA&usqp=CAU;)
}

.item-3:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/6/2023/04/05/The-Mandalorian-040523_4.jpg&w=640&h=360&q=90&c=cc);
    background-size: 100% 100%;
}

.item-4 {
    background-image: url(https://pic-bstarstatic.akamaized.net/ugc/0782c2ea32bf6e6628856c6ac5c116ea.jpg@1200w_630h_1e_1c_1f.webp);
}

.item-4:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://occ-0-2433-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIWFuk4TSIQMtCF8e9ZWAkBHsDvYCUIBn0dlsWRkdoKGS2PfaLtU4_zcKcGYzkDI7S_LLXfaOJ1cuPPjEbkc7HLkTLnIvfQFXm4.jpg?r=204);
    background-size: 100% 100%;
}

.item-5 {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKKKrZcMu6O2kpHEPD0EOhK5lfNyhV8Hq9Q&usqp=CAU);
}

.item-5:hover {
    background-image: url(https://www.denverpost.com/wp-content/uploads/2021/12/TDP-Z-ZENDAYA-01.jpg?w=1024);
    background-size: 100% 100%;
}
</style>