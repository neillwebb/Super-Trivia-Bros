import React from "react";


const Form = (props) => (
    <form>
        <h3>Register</h3>
        <input name="reguser" placeholder="Username" value={props.Reguser} onChange={props.onChangeHandler} />
        <input name="regpw" type="password" placeholder="Password" value={props.Regpw} onChange={props.onChangeHandler} />
        <button onClick={props.regHandler}> Register </button>

        <h3>Login</h3>
        <input name="username" placeholder="Username" value={props.value} onChange={props.onChangeHandler} />
        <input name="password" type="password" placeholder="Password" value={props.value} onChange={props.onChangeHandler} />
        <button onClick={props.loginHandler}> Login </button>
    </form>

)

export default Form