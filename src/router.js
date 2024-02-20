import { createRouter, createWebHistory } from "vue-router";
import  BookList from "./components/BookList.vue";
import  BookDetail  from "./components/BookDetail.vue";

const routes=[
    {
        path:"/books",
        name:"bookslist",
        component:BookList
    },
    {
        path:"/books/:id",
        name:"bookdetails",
        component:BookDetail
    },
    {
        path:"/",
        name:"books",
        component:BookList
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;