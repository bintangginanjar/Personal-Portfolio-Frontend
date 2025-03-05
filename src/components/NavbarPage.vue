<script setup>
import { ref } from 'vue';

const isActive = ref(false);

function toggleHamburger() {
    console.log(isActive.value)
    isActive.value = !isActive.value;
}
</script>

<template>
    <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="" class="font-bold text-lg text-primary block py-6">bintangginanjar</a>
                </div>
                <div class="flex items-center px-4">
                    <button type="button" class="block absolute right-4" :class="{'hamburger-active': isActive}" @click="toggleHamburger">
                        <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

.hamburger-line {
    @apply w-[30px] h-[2px] my-2 block bg-dark
}

.hamburger-active > span:nth-child(1) {
    @apply rotate-45;
}

.hamburger-active > span:nth-child(3) {
    @apply -rotate-45;
}

.hamburger-active > span:nth-child(2) {
    @apply scale-0;
}
</style>