<template>
    <div id="mainpage">
        <div class="container">
            <div class="row d-flex justify-content-center images">
                <ul 
                class="list-group list-group-horizontal-sm " 
                v-for="image in images" 
                v-bind:key="image.id"
                >
                    <li class="list-group-item">
                        <img 
                        class="img-fluid" 
                        v-bind:src="image.url"
                        >
                    </li>
                </ul>
            </div>
            <div class="row link-container d-flex justify-content-center">
                <button class="btn btn-danger btn-lg ">
                    <router-link 
                    class="nav-item" 
                    to="/login">
                    Выйти
                    </router-link>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    const jsonURL = "https://boiling-refuge-66454.herokuapp.com/images";
    import axios from 'axios';

    export default {
        data() {
            return {
                images: null
            }
        },
        mounted() {
            axios.get(jsonURL).then(responce => (this.images = responce.data));
        }
    }
</script>

<style scoped>
    .nav-item {
        text-decoration: none;
        color: white;
    }
    .images {
        margin: 150px 0 40px 0;
        font-family: 'Acme', sans-serif;
    }
    .list-group {
        padding: 0;
    }
</style>