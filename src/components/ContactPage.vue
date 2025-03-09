<script setup>
</script>

<template>
    <section class="pt-36 pb-32">
        <div class="container">
            <div class="w-full px-4">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">                    
                        <h2 class="font-bold text-dark text-4xl mb-4">Contact Us</h2>
                        <p class="font-medium text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium odio vero impedit ratione sed ad asperiores. Sint tempore, qui reiciendis nobis repellat illum, quos a, eius fugit totam perspiciatis ea assumenda?</p>
                    </div>
                </div>
            </div>            
            <form>
                <div class="w-full lg:w-2/3 lg:mx-auto">
                    <div class="w-full mb-4 px-4">
                        <label v-bind:for="name" class="text-base font-bold text-primary">Name</label>
                        <input type="text" v-bind:id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                    </div>
                    <div class="w-full mb-4 px-4">
                        <label v-bind:for="email" class="text-base font-bold text-primary">Email</label>
                        <input type="email" v-bind:id="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                    </div>
                    <div class="w-full mb-4 px-4">
                        <label v-bind:for="message" class="text-base font-bold text-primary">Message</label>
                        <textarea type="text" v-bind:id="message" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"/>
                    </div>
                    <div class="w-full px-4">
                        <button class="text-base font-semibold bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Send</button>
                    </div>
                </div>
            </form>            
        </div>
    </section>
</template>