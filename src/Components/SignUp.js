import React,{useState,useEffect} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toustify';
import styles from "./signup.module.css";
import { Link } from 'react-router-dom';

import { validate } from './validate';

const SignUp = () => {

    const [data , setData] = useState({
        name :"",
        email :"",
        password :"",
        confirmPassword :"",
        isAccept: false
    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    useEffect(()=>{
        setErrors(validate(data,"signup"))
    },[data,touched])

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name] : true})
    }

    const changeHandler = (event) =>{
       
        if(event.target.name === "isAccept"){
            setData({...data , [event.target.name] : event.target.checked})
        }else{
            setData({...data, [event.target.name] : event.target.value})
        }
        
    }
    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("you signin is successful" , "success")
        }else{
            notify("you signin is not successful" , "warning")

            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true,
            })
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>sign up</h2>
                <div className={styles.formfield}>
                    <label>name </label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}

                </div>
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
                <div className={styles.formfield}>
                    <label>confirm Password </label>
                    <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formfield}>
                    <div  className={styles.checkBoxContainer}>
                        <label>I accet terms of privacty policy</label>
                        <input  className={(errors.isAccept && touched.isAccept) ? styles.uncompleted : styles.formInput}  type="checkbox" name="isAccept" value={data.isAccept} onChange={changeHandler} onFocus={focusHandler}/>
                    </div>
                    {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="./login"> Login</Link>
                    <button type="submit" >sign in</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;