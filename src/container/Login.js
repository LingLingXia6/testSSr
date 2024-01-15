import React from 'react';

const Login = () => {
  return (
    <div>
      Login
      <button onClick={() => {
        alert(22);
        console.log("click me")
      }}>点击</button>
    </div>
  );
}

export default Login;
