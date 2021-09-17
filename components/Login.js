import Image from 'next/image'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
            src="https://links.papareact.com/t4i"
            objectFit="contain"
            width={400}height={400} alt='Login'/>
            <button 
            onClick={signIn}
            className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:animate-pulse">Login with Facebook</button>
        </div>
    )
}

export default Login
