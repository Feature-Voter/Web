import { useContext, FC } from 'react'
import { LoginContext } from './LoginContext';

type Props = {
    children?: React.ReactNode
};

const SecureComponent: FC<Props> = ({children}) => {
    const { user } = useContext(LoginContext)

    return (
        <>        
        {user.auth ? (<div>{children} </div>) : (<></>)}
        </>
    )
}

export const UnsecureComponent: FC<Props> = ({children}) => {
    const { user } = useContext(LoginContext)

    return (
        <>        
        {user.auth ? (<></>) : (<div>{children} </div>)}
        </>
    )
}

export default SecureComponent