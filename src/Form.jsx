import React, { useState } from 'react'

function Form() {


    const [user, setUser] = useState({

        name: "",
        email: "",
        password: ""

    });



    const Inputhand = (e) => {



        const name = e.target.name;



        const value = e.target.value;



        setUser({...user, [name]: value });
    }


    const Postdata = (e) => {

        e.preventDefault();
        const errors = {};
        if (user.name.length < 4) {

            console.log("place enetr yorr anmew mine")
        } else {

            alert("yor name is complete")
        }


        if (user.password.length < 4) {

            //  <span className="error"><h1>Passwords are not equal.</h1></span>
            console.log("place enetr yorr password mine")


        } else {



            console.log("it commplate")

        }


        return errors;

    }



    return ( <
        div >





        <
        form >

        <
        input type = "name"
        required value = { user.name }
        autoComplete = 'off'
        onChange = { Inputhand }
        name = "name"
        id = "name" / >

        <
        br / >


        <
        br / >

        <
        br / >
        <
        input type = "email"
        required value = { user.email }
        autoComplete = 'off'
        onChange = { Inputhand }
        name = "email"
        id = "email" / >


        <
        br / >


        <
        br / >

        <
        br / >
        <
        input type = "password"
        name = "password"
        value = { user.password }
        autoComplete = 'off'
        onChange = { Inputhand }
        id = "password"
        placeholder = "password" / >

        <
        br / >


        <
        br / >

        <
        br / >

        <
        input type = "submit"
        value = "submite"
        onClick = { Postdata }
        name = ""
        id = "" / >
        <
        /form>

        <
        /div>
    )
}

export default Form