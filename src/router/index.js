import {createRouter, createWebHistory} from 'vue-router';
import App from "@/App.vue";
import Project from "@/components/Project.vue";
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";

const routes = [
    {
        path: '/',
        name: 'Hjem',
        component: Home,
    },
    {
        path: '/CV',
        name: 'CV',
        component: CV,
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
            return {top: 0};
        }
    },
});

export default router;