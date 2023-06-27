<template>
    <main id="slider" @mouseenter="stopSlider" @mouseleave="startSlider">

        <div class="next" @click="next">
            <span></span>
            <span></span>
        </div>
        <div class="prev" @click="prev">
            <span></span>
            <span></span>
        </div>

        <div class="slider-shape">
            <transition-group :name="direction ? 'slide-leave' : 'slide-enter'">
                <img class="image" v-for="number in [sliderIndex]" v-bind:key="number"
                    :src="sliderImages[Math.abs(sliderIndex) % sliderImages.length]" />
            </transition-group>
        </div>

        <div class="slider-nav">
            <span class="circle" v-for="(img, index) in sliderImages" :key="index"
                :class="[sliderIndex === index ? 'active' : '']" @click="sliderMap(index)"><span></span></span>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            sliderImages: [],
            sliderIndex: 0,
            direction: true
        }

    },
    created() {
        this.startSlider();
        fetch(this.baseUrl + "api/ContentSeries", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            const images = [];
            for (const i in data) {
                images.push(data[i].image)
            }
            this.sliderImages = images;
            console.log(this.sliderImages);
        });
        fetch(this.baseUrl + "api/ContentMovies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            const images = [];
            for (const i in data) {
                images.push(data[i].image)
            }
            this.sliderImages = images;
            console.log(this.sliderImages);
        });
    },
    methods: {
        startSlider() {
            this.intervalId = setInterval(() => {
                this.next();
            }, 5000);
        },
        stopSlider() {
            clearInterval(this.intervalId);
        },
        next() {
            this.sliderIndex++;

            this.sliderIndex > this.sliderImages.length - 1
                ? (this.sliderIndex = 0)
                : "";

            this.direction = false;
        },
        prev() {
            this.sliderIndex--;

            this.sliderIndex < 0
                ? (this.sliderIndex = this.sliderImages.length - 1)
                : "";
            this.direction = true;
        },
        sliderMap(index) {
            if (this.sliderIndex <= index) {
                this.direction = false;
            } else {
                this.direction = true;
            }
            this.sliderIndex = index;
        }
    }
}
</script>

<style scoped>
*::before,
*,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #555b6e, #89b0ae);
    overflow: hidden;
}

#slider {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-width: 100%;
    max-height: 90%;
}

#slider:hover .next,
#slider:hover .prev {
    opacity: 1;
    z-index: 5;
    transition: opacity 350ms ease, left 300ms cubic-bezier(0.39, 0.21, 0.64, 1.58), right 300ms cubic-bezier(0.39, 0.21, 0.64, 1.58), z-index 200ms 200ms ease;
}

#slider:hover .next span,
#slider:hover .prev span {
    transition: transform 300ms 300ms ease;
}

#slider:hover .next {
    right: 30px;
}

#slider:hover .next span:first-child {
    transform: rotate(45deg) translateY(-11px);
}

#slider:hover .next span:last-child {
    transform: rotate(-45deg) translateY(11px);
}

#slider:hover .prev {
    left: 30px;
}

#slider:hover .prev span:first-child {
    transform: rotate(-45deg) translateY(-11px);
}

#slider:hover .prev span:last-child {
    transform: rotate(45deg) translateY(11px);
}

#slider:hover .slider-nav {
    top: 6px;
    opacity: 1;
    transition: opacity 400ms 100ms ease, top 350ms ease;
}

.next,
.prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    cursor: pointer;
    z-index: 1;
    transition: opacity 350ms 400ms ease, left 500ms 400ms cubic-bezier(0.39, 0.21, 0.64, 1.58), right 300ms 400ms cubic-bezier(0.39, 0.21, 0.64, 1.58), z-index 200ms ease;
}

.next span,
.prev span {
    display: block;
    width: 35px;
    height: 6px;
    background: #89b0ae;
    border-radius: 10px;
    transition: transform 300ms ease;
    cursor: pointer;
}

.next {
    right: 10%;
}

.next span {
    transition: transform 300ms ease;
}

.next span:first-child {
    transform: rotate(0deg) translateY(10px);
}

.next span:last-child {
    transform: rotate(0deg) translateY(5px);
}

.prev {
    left: 10%;
}

.prev span {
    transition: transform 300ms ease;
}

.prev span:first-child {
    transform: rotate(0deg) translateY(10px);
}

.prev span:last-child {
    transform: rotate(0deg) translateY(5px);
}

.slider-shape {
    z-index: 1;
    position: relative;
    width: 1250px;
    height: 450px;
    max-width: 85%;
    max-height: 90%;
    margin: 0 auto;
}

.slider-shape .image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    -webkit-clip-path: polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% calc(100% - 50px), calc(100% - 50px) 100%, 50px 100%, 0% calc(100% - 50px), 0% 50px);
    clip-path: polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% calc(100% - 50px), calc(100% - 50px) 100%, 50px 100%, 0% calc(100% - 50px), 0% 50px);
}

.slider-nav {
    position: absolute;
    display: flex;
    padding: 5px;
    margin-top: 385px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    z-index: 2;
    transition: opacity 200ms 20ms ease, top 250ms 80ms ease;
}

.slider-nav .circle {
    display: flex;
    width: 15px;
    height: 15px;
    align-items: center;
    justify-content: center;
    border: solid #bee3db 2px;
    border-radius: 50%;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 200ms ease;
}

.slider-nav .circle:not(:last-child) {
    margin-right: 5px;
}

.slider-nav .circle:hover,
.slider-nav .circle.active {
    opacity: 1;
}

.slider-nav .circle:hover>span,
.slider-nav .circle.active>span {
    width: 7px;
    height: 7px;
}

.slider-nav .circle span {
    display: block;
    width: 5px;
    height: 5px;
    background: #ffd6ba;
    border: none;
    border-radius: 50%;
    transition: all 200ms ease;
}

.slide-enter-leave-active,
.slide-enter-enter-active,
.slide-leave-leave-active,
.slide-leave-enter-active {
    transition: transform 850ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.slide-enter-enter {
    opacity: 0;
    transform: translate(150%, 0) scale(1.3) skew(-10deg);
}

.slide-enter-leave-to {
    opacity: 1;
    transform: translate(-150%, 0) scale(0.6) skew(-10deg);
}

.slide-leave-enter {
    transform: translate(-150%, 0) scale(1.3) skew(10deg);
}

.slide-leave-leave-to {
    transform: translate(150%, 0) scale(0.6) skew(10deg);
}

@media (max-width: 768px) {

    #slider .next,
    #slider .prev {
        opacity: 1;
        z-index: 5;
    }

    #slider .next {
        right: 15px;
    }

    #slider .next span:first-child {
        transform: rotate(45deg) translateY(-11px);
    }

    #slider .next span:last-child {
        transform: rotate(-45deg) translateY(11px);
    }

    #slider .prev {
        left: 15px;
    }

    #slider .prev span:first-child {
        transform: rotate(-45deg) translateY(-11px);
    }

    #slider .prev span:last-child {
        transform: rotate(45deg) translateY(11px);
    }

    #slider:hover .next {
        right: 10px;
    }

    #slider:hover .prev {
        left: 10px;
    }
}
</style>

