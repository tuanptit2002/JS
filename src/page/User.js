import { createUser } from "../service/user.service";


export function User(){
    
    let summit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let user = {
            username: formdata.get("username"),
            password: formdata.get("password"),
            email: formdata.get("email")
        }
        createUser(user);

    }
    return(
        <div>
            <form onSubmit={summit}>
            <label>Username:</label>
            <input type="text" name="username"/>
            <label>Password:</label>
            <input type="text" name="password"/>
            <label>Email:</label>
            <input type="text" name="email"/>
            <button type="submit">Create</button>
            </form>
        </div>
    )
}