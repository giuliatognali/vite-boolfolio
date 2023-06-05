import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel nostro router
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectDetail
        },
    ]
});

export { router };