import {createRouter, createWebHistory} from 'vue-router';
import Project from "@/components/Project.vue";
import Home from "@/views/Home.vue";
import Cv from "@/components/CV.vue";
import Projects from "@/views/Projects.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cv',
        name: 'CV',
        component: Cv,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/project',
        name: 'Project',
        component: Project,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
});

export default router;