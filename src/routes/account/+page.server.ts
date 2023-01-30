import type { PageServerLoad } from "./$types"

export  const load:PageServerLoad = async({ fetch }) => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts")
const users = await res.json()
if(res.ok){
    return {users: users}
}
return {
    status: res.status,
    error: new Error("Could not fetch the data")
}

}