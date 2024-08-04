import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default async function getNews(){
  try{
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${''}`
    let results = await axios({
        method: 'get',
        url: url,
        responseType: 'stream'
      })
      let processed = JSON.parse(results.data).articles
      processed = processed.map((x:any)=>{
        x.id=uuidv4()
        return x
      })
    return {status:'pass',data:processed}
  }catch(e){
    return {status:'fail'}
  }
}