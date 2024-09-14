import { createRouter, createWebHistory } from 'vue-router'
import Exam from '@/views/exam/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'exam',
            component: Exam
        }
    ]
})

export default router
