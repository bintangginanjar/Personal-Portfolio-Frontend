<script>
import ServiceService from '../services/ServiceService';

export default {
    name: "Service",
    data() {        
        return{
            services: []
        }        
    },
    methods: {
        getAllService() {
            ServiceService.getAll().then((response) => {
                this.services = response.data.data
            });
        }
    },
    created() {
        this.getAllService();
    }
};
</script>

<template>
    <div class="flex flex-wrap">
        <div v-for="service in services" v-bind:key="service.id" class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <center>
                    <img v-bind:src="service.imageUrl" class="max-w-[200px]">
                </center>            
                <div class="py-8 px-6">
                    <h3 class="block mb-3 font-semibold text-xl text-dark">{{ service.name }}</h3>
                    <p class="font-medium text-base text-secondary">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>