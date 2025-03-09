<script>
import ProjectService from '../services/ProjectService'

export default {
    name: "Projects",
    data() {        
        return{
            projects: []
        }        
    },
    methods: {
        getAllProjects() {
            ProjectService.getAll().then((response) => {
                this.projects = response.data.data
            });
        }
    },
    created() {
        this.getAllProjects();
    }
};
</script>
<template>     
    <div v-for="project in projects" v-bind:key="project.id" class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden">            
            <img v-bind:src="project.imageUrl" width="w-full">            
        </div>
        <h3 class="font-bold text-dark text-xl mt-5 mb-3">{{ project.name }}</h3>
        <h4 class="font-semibold text-secondary"><a v-bind:href="project.url">Project URL : {{ project.url }}</a></h4>
        <p class="font-extrabold text-base text-dark">{{ project.description }}</p>        
    </div>    
</template>
<style>
</style>