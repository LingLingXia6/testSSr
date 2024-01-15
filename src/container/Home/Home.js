import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserList } from "../../store/actions";

const Home = ({getUserList,name,userList})=>{
console.log("test--in Home")
  useEffect(() => {
    console.log(2222);
    getUserList();
  },[])

  return (
    <div>
      <h1>首页110002dd357</h1>
      <ul>
        {/* {
         
          userList?.map(user=>{
            const { first_name, last_name, email, avatar, id } = user;
            return <li key={id}>
              <img src={avatar} alt="用户头像" style={{width:"30px",height:"30px"}}/>
              <div>姓名：{`${first_name}${last_name}`}</div>
              <div>email：{email}</div>
            </li>
          })
        } */}
      </ul>
      <br/>
      <Link to="/login">跳转到登录页</Link>
      <br/>
      <button onClick={() => {
        alert(22);
        console.log("click me")
      }}>点击</button>
    </div>
  )
}

const mapStateToProps = (state)=>({
  name:state.name,
  userList:state.userList
});
// {1}
const mapDispatchToProps = (dispatch)=>({
  getUserList(){
    dispatch(getUserList(dispatch))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);

