import { useState } from 'react'
import Button from './Button'
import Input from './Input'
const Form = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <form id="login-form" >
        <h1 className="title">Login</h1>
        <label>
        <i className="fa-regular fa-user" aria-label="Icon Usuario"></i>
      </label>
        <label>
          <i className="fa-solid fa-envelope" aria-label="Icon Email"></i>
          <Input
            type="email"
            id="email"
            placeholder="Ej: SukiZukaritas@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <i className="fa-solid fa-lock"></i>
          <Input
            type="password"
            id="password"
            aria-label="Icon Password"
            placeholder="Password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            required
          />
        </label>
        <Button className="btn success pulse-effect shadow-effect" title="Inciar Sesión" />

      </form>
    );
}

export default Form;