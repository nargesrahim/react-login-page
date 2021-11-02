import React,{useState,useEffect} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { notify } from './toustify';
import styles from "./signup.module.css";

import { validate } from './validate';

const Login = () => {

    const [data , setData] = useState({

        email :"",
        password :"",

    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    useEffect(()=>{
        setErrors(validate(data,"login"))
    },[data,touched])

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name] : true})
    }

    const changeHandler = (event) =>{
            setData({...data, [event.target.name] : event.target.value}) 
    }
    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("you login is successful" , "success")
        }else{
            notify("you login is not successful" , "warning")

            setTouched({
                email: true,
                password: true,
            })
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>Log in</h2>
                <div className={styles.formfield}>
                    <label>E-mail </label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Password </label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password &&  touched.password &&<span>{errors.password}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/"> sign up</Link>
                    <button type="submit" >Log in</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;