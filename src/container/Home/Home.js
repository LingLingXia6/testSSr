import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserList,getHotMusic } from "../../store/actions";

import AwesomeSlider from "react-awesome-slider";

import 'react-awesome-slider/dist/styles.css';


const Home = ({  getHotMusic, name, userList, hotMusic }) => {
  console.log("hotMusic-component",hotMusic)
 console.log("test--in Home",userList)
  useEffect(() => {
    console.log(2222);
    //  getUserList();
     getHotMusic();
  },[])

  return (
    <div>
      <h1>首页110002dd357</h1>
      
    
      <ul>
        
      </ul>
      <AwesomeSlider>
        {hotMusic && hotMusic?.length && hotMusic?.map((d) => (
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d?.picUrl} />
                </div>
                <h2>{d?.name}</h2>
                <p>{d?.desc} </p>
              </div>
            </div>

           
          </div>
        ))}
      </AwesomeSlider>
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
Home.getInitialData = (store) => {
  console.log("store", store);
  // will return a promise because of the thunk
  return store.dispatch(getHotMusic());
}
const mapStateToProps = (state)=>({
  name:state.name,
  userList: state.userList,
  hotMusic:state.hotMusic
});
// {1}
const mapDispatchToProps = (dispatch)=>({
  getUserList(){
    dispatch(getUserList(dispatch))
  },
  getHotMusic() {
    dispatch(getHotMusic(dispatch))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);

