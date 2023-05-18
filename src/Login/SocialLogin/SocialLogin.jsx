import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
    const {logInWithGoogle, logInWithGitHub} = useContext(AuthContext);
    const handleLoginWithGoogle =()=>{
        logInWithGoogle();
    }
    const handleLoginWithGithub =()=>{
        logInWithGitHub();
    }
    return (
        <div className="mx-auto flex gap-3">
       <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-outline btn-primary text-2xl">G</button> 
       <button className="btn btn-circle btn-outline text-2xl" onClick={handleLoginWithGithub}>g</button>       
        </div>
    );
};

export default SocialLogin;