<script setup>
import ServiceListPage from './ServiceListPage.vue';
import SkillListPage from './SkillListPage.vue';
</script>

<template>
    <section class="pt-36 pb-32 bg-slate-700">
        <div class="container">
            <div class="w-full px-4">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <!--<h4 class="font-semibold text-lg text-primary mb-2">Client</h4>-->
                        <h2 class="font-bold text-white text-4xl mb-4">My Expertises</h2>
                        <p class="font-medium text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium odio vero impedit ratione sed ad asperiores. Sint tempore, qui reiciendis nobis repellat illum, quos a, eius fugit totam perspiciatis ea assumenda?</p>
                    </div>
                </div>
                <SkillListPage/>                
                <!--
                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center">
                        <a href="#">A</a>
                        <a href="#">A</a>
                    </div>
                </div>            
                -->
            </div>
        </div>
    </section>    
</template>

<style>

</style>