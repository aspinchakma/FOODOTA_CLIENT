import { useContext } from 'react';
import { AuthenticationContext } from "../utilities/ContexApi/AuthProvider";
const useCont = () => {
    return useContext(AuthenticationContext)
}

export default useCont;