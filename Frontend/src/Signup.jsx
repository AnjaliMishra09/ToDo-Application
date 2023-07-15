import { Button } from "@mui/material"
import {TextField} from "@mui/material"
import {Card} from "@mui/material"
import {useState} from "react";

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField onChange={(event1)=>{
                    let element= event1.target;
                    setEmail(element.value);
                }} label="Username" variant="outlined" />
                <br /> <br />

                <TextField onChange={(e)=>{
                    setPassword(e.target.value);
                }} label="Password" variant="outlined" />
                <br />
                <br />
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                        }
                        function callback1(res) {
                            res.json().then(callback2)
                        }
                        fetch("http://localhost:3000/admin/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                        .then(callback1)
                    }}

                > Signup</Button>
                </Card>
            </div>
            
    </div>
}

export default Signup
