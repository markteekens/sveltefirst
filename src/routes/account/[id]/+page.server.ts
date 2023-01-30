import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export  const load:PageServerLoad = async({ fetch, url  }) => {
const ref = url.pathname.split("/account/")
const id = ref[1]
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const users = await res.json()
console.log(users)
if(res.ok){
    return {users: users}
}
else{
    throw redirect(301, "/account");
}

}