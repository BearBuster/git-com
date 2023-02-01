export interface User {
    id: number
    login: string
    password: string
    name: string
    lastName: string
    gender: string
    religion?: string
    age: number
    other?: string
}