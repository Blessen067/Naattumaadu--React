import React, { Fragment, useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Navbar from '../../components/Navbar/index';

import Link from "next/link";
import { login } from '../../utils/api';


const LoginPage = (props) => {

    const router = useRouter()


    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const handleLogin = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;
            const password = value.password;

            console.log("uu", email)

            try {
                const userData = await login(email, password);
                console.log('Login successful:', userData.userdetails);

                router.push('/home2');
            } catch (error) {
                toast.error(error.message);
            }

        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Fragment>
            <Navbar  />
            <Grid className="loginWrapper">
                <Grid className="loginForm">
                    <h2>Sign In</h2>
                    <p>Sign in to your account</p>
                    <form onSubmit={handleLogin}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="E-mail"
                                    value={value.email}
                                    variant="outlined"
                                    name="email"
                                    label="E-mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('email', value.email, 'required|email')}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="Password"
                                    value={value.password}
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('password', value.password, 'required')}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid className="formAction">
                                    <FormControlLabel
                                        control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                                        label="Remember Me"
                                    />
                                    <Link href="/forgot-password">Forgot Password?</Link>
                                </Grid>
                                <Grid className="formFooter">
                                    <Button fullWidth className="cBtnTheme" onClick={handleLogin} type="button">Login</Button>
                                </Grid>
                                <Grid className="loginWithSocial">
                                    <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                    <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                    <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                                </Grid>
                                <p className="noteHelp">Don't have an account? <Link href="/register">Create free account</Link>
                                </p>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    )
};

export default LoginPage;