import { json} from '@sveltejs/kit'

export function GET = async ()=>{
	const mode = "hello"
	const news = [
		{
			title:'hi',
			content:'kkalskaskl'
		}
	]

	return new Response(JSON.stringify(news),{
		headers:{
			"Content-Type":"application/json"
		}
	})
}