<template>
    <div>
        
            <img v-bind:src="images">
        
    </div>
</template>

<script>


    export default {
        name: 'SecondPage',
        data () {
            return {
                images: "https://picsum.photos/id/237/300/200"
                
            }
        }
    }
</script>