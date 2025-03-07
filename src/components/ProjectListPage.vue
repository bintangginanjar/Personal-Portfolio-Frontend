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
    <div v-for="project in projects" v-bind:key = "project.id" class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden">
            <h1>{{ project.name }}</h1>
            <img v-bind:src="project.imageUrl">
        </div>
    </div>    
</template>
<style>
</style>