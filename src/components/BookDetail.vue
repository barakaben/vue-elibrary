<template>
    <div class="book">
        <div class="title"><h3>title: {{ ebook.title }} </h3></div>
        <div class="authors"><h3>authors: {{ ebook.authors }} </h3></div>
        <div class="cover"> <img :src="ebook.cover_image" /> </div>
        <div class="publisher"><h3>publisher: {{ ebook.publisher }} </h3></div>
        <div class="year"><h3>year: {{ ebook.year }} </h3></div>
    </div>
</template>

<script lang="ts">
    export default{
        name:"BookDetail",
        data(){
            return{
                ebook:{
                    id:"",
                    title:"",
                    authors:"",
                    cover_image:"",
                    publisher:"",
                    year:""
                }
            };
        },
        created(){
            let id  = this.$route.params.id;
            fetch(import.meta.env.VITE_API_URL+'ebooks/'+id).
            then(res=>res.json()).
            then(json=>this.ebook=json);    
        }      
    };
</script>