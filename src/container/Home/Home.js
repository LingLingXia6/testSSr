import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetch from '../../fetcher.js';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import './index.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = ({ banners, state, songs }) => {
  const [playlists, setPlayLists] = useState([]);


  useEffect(() => {
    fetch('/top/playlist?limit=8&order=hot').then((res) => {
      // console.log("nnn", res);
      if (res?.data?.playlists) {
        setPlayLists(res?.data?.playlists);
      }
    })
  }, []);
  return (
    <div className='homebg'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
        animation='cubeAnimation'>
        {banners &&
          banners.map((d) => (
            <div className='item' key={d.bannerId}>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img className='img' src={d.pic} />
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
      </AutoplaySlider>
      <Link to='/playList'>List</Link>
     {!!playlists.length&& <div className='songs'>
        {playlists?.map((_playList) => (<div className='songBox'>
          <img className='songImg' src={_playList?.coverImgUrl} />
          <div className='songTag'>#{_playList?.tags[0]}</div>
          <div className='desc'>{_playList?.name}</div>
        </div>))}
        </div>
      }
      <div>24775</div>
      <div>1989</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  banners: state.banners,
  state: state,
  songs:state.songs,
});

export default connect(mapStateToProps)(Home);
