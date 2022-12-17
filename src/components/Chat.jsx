
import { onSnapshot, orderBy, collection, query } from 'firebase/firestore';
import { db } from '../firebase';
import React, {useState, useEffect, useRef}from 'react'
import Message from './Message'

const style= {
     main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    },[])
  return (
    <>
      <main className={style.main}>
         
         {messages && messages.map((message) => (
            <Message key={message.id} message={message}/>
         ))}
         
      </main>
      {/*send message component */}
    </>
  )
}

export default Chat