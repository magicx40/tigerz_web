export function useSetToken(token: string) {
    localStorage.setItem('token', token)
}

export function useGetToken() {
    return localStorage.getItem('token')
}
