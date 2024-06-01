import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const signup = async () => {
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // console.log(users)

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            toast.success("Signup Succesfully")
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
            navigate('/login')
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100'>
      {loading && <Loader />}
      <div className='bg-white px-10 py-10 rounded-xl shadow-lg'>
        <div className="">
          <h1 className='text-center text-pink-600 text-xl mb-4 font-bold'>Signup</h1>
        </div>
        <div>
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            className='bg-pink-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
            placeholder='Name'
          />
        </div>
        <div>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            className='bg-purple-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
            placeholder='Email'
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-blue-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
            placeholder='Password'
          />
        </div>
        <div className='flex justify-center mb-3'>
          <button
            onClick={signup}
            className='bg-gradient-to-r from-pink-300 to-purple-300 w-full text-white font-bold px-2 py-2 rounded-lg shadow-md'>
            Signup
          </button>
        </div>
        <div>
          <h2 className='text-gray-800'>Have an account <Link className='text-pink-400 font-bold' to={'/login'}>Login</Link></h2>
        </div>
      </div>
    </div>
  
    )
}

export default Signup