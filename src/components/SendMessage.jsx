import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react'
import { db, auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'


const style = {
    form:`h-14 max-w-[728px] flex text-xl absolute bottom-4 right-4 left-4 shadow-xl rounded-bl-full rounded-br-full`,
    input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-tl-full rounded-bl-full`,
    button:`w-[20%] bg-green-500 rounded-br-full rounded-tr-full`
}

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
    const [user] =useAuthState(auth);
    const sendMessage = async (e) => {
        setInput('')
        e.preventDefault()
        if(input === ''){
            alert('Please enter a valid message')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        scroll.current.scrollIntoView({behavior: 'smooth'})
        if (user === false){
            alert('Please Log in')
            return
        }
        
    };

const NotLogged = () => {
    alert('Please log in before send a message')
    return
}

  return (
    <form onSubmit={user ? sendMessage : NotLogged} className={style.form}>
        <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Message' />
        <button className={style.button} type="submit">Send</button>
    </form>
  )
}

export default SendMessage