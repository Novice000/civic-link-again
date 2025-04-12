export type User = {
    email: string
    password: string
}
  
let user: User | null = null
  
export function signUp(data: User): boolean {
    user = data
    return true
}
  
export function signIn(data: User): boolean {
if (user && user.email === data.email && user.password === data.password) {
    return true
}
return false
}