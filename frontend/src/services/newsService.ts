import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default async function getNews(){
  try{
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${'ef1b2e34f0f04ca1b5c6341c0677bc92'}`
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