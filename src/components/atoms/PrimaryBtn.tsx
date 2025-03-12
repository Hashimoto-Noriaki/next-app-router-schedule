import { ReactNode }from 'react'

type PropsType = {
    children:ReactNode;
}

export default function PrimaryBtn({ children }: PropsType){
    return(
        <button className="bg-lime-800 text-white p-4 rounded-lg text-lg">
            {children}
        </button>
    )
}