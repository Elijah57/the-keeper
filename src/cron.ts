import * as  cron from "node-cron"
import axios from "axios"
import * as http from "http"


const server = http.createServer()
const keep_alive = process.env.KEEP_ALIVE as string;


// Listen to the request event
server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });

cron.schedule("*/2 * * * *", async ()=>{
    console.log("Hello world")
    try{
      const revive_wa_bot = await axios.get(keep_alive);
      // const revive_the_keeper = await axios.get(the_keeper)
    }catch (error){
      console.error(error)
    }
})

server.listen(4000)