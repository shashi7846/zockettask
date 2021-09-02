import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PostLogin } from "./api";
import { LoopCircleLoading } from "react-loadingg";
function Login() {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [load, setLoad] = useState(false);
  let userData = { username: username, email: email };

  let history = useHistory();
  useEffect(async () => {
 
    setLoad(true);
  },[userData]);

  return (
    <>
      {
        load ?(
<div class="container mt-5">
        <div class="d-flex justify-content-center h-100">
          <div className="card1">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  await PostLogin(userData);
                  setEmail("");
                  setUsername("");
                  console.log(userData);

                  history.push(`./Mainpage/${(username, email)}`);
                }}
              >
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white"></span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white"></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right  btn-dark"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        ):(
          <LoopCircleLoading/>
        )
      }
    </>
  );
}

export default Login;
