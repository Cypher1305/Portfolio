<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div v-if="isLoading" class="h-screen bg-custom-black flex items-center justify-center">
        <div class="loader">
            <span></span>
            <div id="dot-1" class="dot"></div>
            <div id="dot-2" class="dot"></div>
            <div id="dot-3" class="dot"></div>
            <div id="dot-4" class="dot"></div>
            <div id="dot-5" class="dot"></div>
        </div>
    </div>
</template>

<style scoped>
.loader {
    position: relative;
    /* Changer pour fixed */
    background: rgba(1, 0, 27, 0.5);
    /* Fond semi-transparent */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    /* Assurez-vous qu'il est au-dessus des autres éléments */
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 25px 25px 75px rgba(0, 12, 51, 0.55);
    border: 1px solid #013d47;
    overflow: hidden;
}

.loader::before {
    content: '';
    position: absolute;
    inset: 20px;
    background: transparent;
    border: 1px dashed #013d47;
    border-radius: 50%;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
        inset 5px 5px 35px rgba(0, 0, 0, 0.25);
}

.loader::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dashed #013d47;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
        inset 5px 5px 35px rgba(0, 0, 0, 0.25);
}

.loader span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: radar81 2s linear infinite;
    border-top: 1px dashed #fff;
}

.loader span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: seagreen;
    transform-origin: top left;
    transform: rotate(-55deg);
    filter: blur(95px) drop-shadow(20px 20px 20px seagreen);
}

#dot-1 {
    --dot-start-top: 100px;
    --dot-start-left: 140px;
    --dot-end-top: 130px;
    --dot-end-left: 20px;
    --delay: 0s;
}

#dot-2 {
    --dot-start-top: 100px;
    --dot-start-left: 0px;
    --dot-end-top: -3px;
    --dot-end-left: 90px;
    --delay: 0s;
}

#dot-3 {
    --dot-start-top: 100px;
    --dot-start-left: 105px;
    --dot-end-top: 18px;
    --dot-end-left: 18px;
    --delay: 0s;
}

#dot-4 {
    --dot-start-top: 110px;
    --dot-start-left: 150px;
    --dot-end-top: 140px;
    --dot-end-left: 30px;
    --delay: 0s;
}

#dot-5 {
    --dot-start-top: -5px;
    --dot-start-left: 85px;
    --dot-end-top: 125px;
    --dot-end-left: 120px;
    --delay: 2s;
}

.dot {
    width: 5px;
    height: 5px;
    position: absolute;
    top: var(--dot-start-top);
    left: var(--dot-start-left);
    border-radius: 9999px;
    background: rgba(255, 255, 255);
    box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
        0px 0px 10px 2px rgba(0, 255, 135, 0.3);
    -webkit-animation: fly 2s linear infinite;
    animation-delay: var(--delay);
    -moz-animation: fly 3s linear infinite;
}

@keyframes fly {
    0% {
        top: var(--dot-start-top);
        left: var(--dot-start-left);
    }

    100% {
        top: var(--dot-end-top);
        left: var(--dot-end-left);
    }

    5%,
    15%,
    25%,
    35%,
    45%,
    55%,
    65%,
    75%,
    85%,
    95% {
        background: rgba(255, 255, 255, 1);
        box-shadow: inset 0 0 10px 2px rgba(0, 255, 182, 0.5),
            0 0 15px 2px rgba(0, 255, 135, 1);
    }

    0%,
    10%,
    20%,
    30%,
    40%,
    50%,
    60%,
    70%,
    80%,
    90% {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: inset 0 0 10px 2px rgba(0, 255, 182, 0.5),
            0 0 5px 2px rgba(0, 255, 135, 0.3);
    }
}


@keyframes radar81 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
