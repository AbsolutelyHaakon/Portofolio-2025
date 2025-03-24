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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;