<script setup lang="ts">

</script>

<template>
    <div class="header" style="background-color:silver;display:block;">
        <div class="logo">
            <router-link to="/"><img src="/vite.svg" alt="logo" /></router-link>
        </div>
        <ul class="main-nav">
            <li><router-link to="/" style="margin:0.5%;">Home</router-link></li>
            <li><router-link to="/books" style="margin:0.5%;">Books</router-link></li>
        </ul>
    </div>
  
    <router-view></router-view>


    <div class="footer" style="background-color:silver;vertical-align:center;">
        <p><small>Copyright &copy;2024 Elibrary</small></p> 
    </div>    
</template>
<style>
    .header .main-nav li {
        list-style: none;
        display:inline-flex;
        margin:0.4rem;
    }
    .header .logo {
        float:left;
        max-width:100%;    
    }
    .header {
        height:auto;
    }
</style>

