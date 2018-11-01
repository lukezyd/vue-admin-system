<template>
  <div class="table-details">
    <p>table details</p>
  </div>
</template>
<script>
import { tableDetails } from '@/api/ztable'
export default {
    data() {
        return {
            
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        loadData: function(){
            tableDetails({
                catId:this.$route.params
            }).then( response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }
    }
};
</script>
<style>
</style>
