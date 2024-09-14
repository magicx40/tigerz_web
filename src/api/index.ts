import { service } from '@/util/http'

export function login() {
    return service.post('/api/v1/auth/login', { username: 'hanzongyuan', password: '123456' })
}

export function getUserInfo() {
    return service.get('/api/v1/auth/profile')
}
