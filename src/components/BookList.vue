
<template>
    <div class="booksList" v-for="ebook in books" key="ebook.id" style="display:inline-flex;
    margin:0.4rem;">
        <div class="book">
            <div class="picture">
                <img :src="ebook.cover_image" />
            </div>
            <div class="booklinks">
                <button><a :href="ebook.pdf"  target="blank">Download Pdf</a></button>
                <button><router-link v-bind:to="'/books/'+ ebook.id">Details</router-link></button>
            </div>
        </div>
    </div>
    <!--<pagination></pagination>-->
</template>

<script>
export default {
    name:"BookList",
    data() {
        return {
            books:[],
            totalBooks:0
        }
    },
    
    created() {
        this.showPage()
    },

    methods: {
        showPage( pageNo = 1 ) {
            fetch(import.meta.env.VITE_API_URL+`?page=+${pageNo}`)
            .then(response=>response.json())
            .then(json=>this.books=json.results);
        },        
    }

}
</script>