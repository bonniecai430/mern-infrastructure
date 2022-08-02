import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function AuthPage({setUser}) {
    
    return (
      <main>
      <h1>AuthPage</h1>
      <h3>Sign Up</h3>
      <SignUpForm setUser={setUser}/>
      <h3>Log In</h3>
      <LoginForm setUser={setUser}/>
      </main>
    );
  }