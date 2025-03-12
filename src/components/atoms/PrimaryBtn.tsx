import { ReactNode }from 'react'

type PropsType = {
    onClick:() => void
    children:ReactNode;
}

export default function PrimaryBtn({ onClick,children }: PropsType){
    return(
        <button className="bg-lime-800 text-white p-4 rounded-lg text-lg" onClick={onClick}>
            {children}
        </button>
    )
}