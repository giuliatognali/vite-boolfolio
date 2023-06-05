import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel nostro router
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';

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
            path: '/project',
            name: 'project',
            component: ProjectsPage
        }
    ]
});

export { router };