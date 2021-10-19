import { useContext } from "react"
import { useContexts } from "../AuthContext/AuthContext"

const useAuth = () =>{
    return useContext(useContexts)
}
export default useAuth;