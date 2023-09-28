import { useCallback, useState } from "react";

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [blogUrl, setBlogUrl] = useState('')
    const [error, setError] =useState('')

    const onSubmit = () => {
       const isName = onValidName();
       const isPhone = onPhoneValidation();
       const isEmail=onEmailValidation();
       if(isName && isPhone && isEmail){
        setError('Form submitted succesfully')
       }
       else{
        setError('Form Not submitted succesfully')
       }
    }

    const onValidName = useCallback(() => {
        if (name.length > 3 && name.length < 30) {
            const nameReg = /^[a-zA-Z]+$/;      
            if (nameReg.test(name)) {
               return true
            }
        }
        return false
    },[name])

    const onPhoneValidation = useCallback(()=>{
        const phoneRegex = /^[0-9]{10}$/;
        if(phoneRegex.test(phone)){
            return true
        } 
        return false
    },[phone])

    const onEmailValidation = useCallback(()=>{
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailRegex.test(email)){
            return true;
        } 
        return false
    },[email])


    return (
        <div style={{ 'marginLeft': '20px' }}>
            <h5>Name</h5>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <h5>Email</h5>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <h5>Phone No</h5>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <h5>Blog Url</h5>
            <input type='text' value={blogUrl} onChange={(e) => setBlogUrl(e.target.value)}></input>
            <br />
            <br/>
            <button onClick={() => onSubmit()}>Verify</button>
            <br />
            <br/>
            {error}
        </div>
    )
}

export default Form;