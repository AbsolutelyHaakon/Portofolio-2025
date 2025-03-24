import {createRouter, createWebHistory} from 'vue-router';
import App from "@/App.vue";
import Project from "@/components/Project.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/project',
        name: 'Project',
        component: Project,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;