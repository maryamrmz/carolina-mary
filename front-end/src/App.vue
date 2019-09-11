<template>
    <div>
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "App"
};
</script>

<style>
.slide-leave-active {
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.75s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateX(0);
}

.slide-enter-active {
    animation: slide-in 0.6s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
