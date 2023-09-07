import {redirect} from '@sveltejs/kit'
import {page} from '$app/stores'

export function load({params}){
    throw redirect(308, `/node/${params.path}`)

}
