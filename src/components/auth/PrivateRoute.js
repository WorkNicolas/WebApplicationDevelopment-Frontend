/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/

import { useLocation, Navigate   } from 'react-router-dom'
import { isAuthenticated } from './auth-helper'

function PrivateRoute({ children }){

    let location = useLocation();

    if(!isAuthenticated()){
        return <Navigate to="/login" state={{ from: location.pathname}} />
    }

    return children
}

export default PrivateRoute