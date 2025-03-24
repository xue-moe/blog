import { createRouter, createWebHistory} from 'vue-router';


const routes = [
    { path: '/', component: () => import('@/views/Home.vue'), }
];

const router = createRouter({
    history: createWebHistory('/blog/'),
    routes,
});

export default router;