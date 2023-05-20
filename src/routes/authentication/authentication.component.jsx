// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
//   auth,
// } from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import './authentication.styles.css'

const Authentication = () => {

//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if(response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // const logGoogleRedirectUser = async () => {
  //     const {user} = await signInWithGoogleRedirect()
  //   console.log({user})
  // }

  return (
    <div className="authentication-container">
     
      <SignInForm/>
    <SignUpForm/>
   
    </div>
  );
};

export default Authentication;
