<script setup>
import ProjectListPage from './ProjectListPage.vue';
</script>

<template>
    <section id="porfolio" class="pt-36 pb-16 bg-slate-100">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                    <h2 class="font-bold text-dark text-4xl mb-4">Latest Project</h2>
                    <p class="font-medium text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium odio vero impedit ratione sed ad asperiores. Sint tempore, qui reiciendis nobis repellat illum, quos a, eius fugit totam perspiciatis ea assumenda?</p>
                </div>
            </div>
            <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                <ProjectListPage/>        
            </div>
        </div>
    </section>
</template>

<style>
</style>