<script>
import SkillService from '../services/SkillService';

export default {
    name: "Skill",
    data() {        
        return{
            skills: []
        }        
    },
    methods: {
        getAllSkill() {
            SkillService.getAll().then((response) => {
                this.skills = response.data.data
            });
        }
    },
    created() {
        this.getAllSkill();
    }
};
</script>

<template> 
    <div class="w-full px-4">
        <div class="flex flex-row items-center justify-center">
            <img v-for="skill in skills" v-bind:src="skill.imageUrl" class="max-w-[100px] mx-4 py-4 grayscale opacity-60">            
        </div>
    </div>
</template>