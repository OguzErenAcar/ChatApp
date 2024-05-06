 import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://chat-servers-f5a674c30156.herokuapp.com/';

export const Socket =io(URL, { transports : ['websocket'] ,autoConnect: false})

// export const Socket=()=> {
//     return io(URL, { transports : ['websocket'] ,autoConnect: false})

// }


 