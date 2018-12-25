import React, { Component } from 'react';
import Navbar from './navbar'
import Poshistory from './postHistory'
import Suggestions from './suggestions'




class Profile extends Component {
  render() {
    return (  
        <div>
          <div className="profile">
            <Navbar></Navbar>
            <div className="ProfileCanopy-inner">
              <div className="ProfileCanopy-headerBg">
                <img className="bg" src="https://pbs.twimg.com/profile_banners/19583545/1545331300/1500x500" ></img>
              </div>
              <div className="AppContainer">
                <div className="ProfileCanopy-avatar">
                  <div className="ProfileAvatar">
                    <img className="ProfileAvatar-image" src="http://www.croop.cl/UI/twitter/images/carl.jpg" alt="30miRRR"></img>
                  </div>
                </div>
              </div>
              <div className="ProfileCanopy-navBar u-boxShadow">
                <div className="AppContainer">
                  <div className="ProfileCanopy-nav">
                    <div className="ProfileNav">
                      <ul className="ProfileNav-list">
                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                          <div  className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav">
                            <span className="ProfileNav-label">Tweets</span>
                            <span class="u-hiddenVisually">Tweets, current page.</span>
                            <span class="ProfileNav-value" >100</span>
                          </div>
                        </li>

                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                          <div  className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav">
                            <span className="ProfileNav-label">Following</span>
                            <span class="u-hiddenVisually">Tweets, current page.</span>
                            <span class="ProfileNav-value" >100</span>
                          </div>
                        </li>

                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                          <div  className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav">
                            <span className="ProfileNav-label">Follower</span>
                            <span class="u-hiddenVisually">Tweets, current page.</span>
                            <span class="ProfileNav-value" >20</span>
                          </div>
                        </li>

                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                          <div  className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav">
                            <span className="ProfileNav-label">Money</span>
                            <span class="u-hiddenVisually">Tweets, current page.</span>
                            <span class="ProfileNav-value" >95$</span>
                          </div>
                        </li>

                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                          <div  className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav">
                            <span className="ProfileNav-label">Mana</span>
                            <span class="u-hiddenVisually">Tweets, current page.</span>
                            <span class="ProfileNav-value" >60%</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div class="row">
            <div class="col" style={{marginLeft: 90 + "px"}}>
            
            <div className="AppContainer"> 
              <div className="Grid Grid--withGutter">
                <div className="Grid-cell u-size1of3 u-lg-size1of4">
                  <div className="Grid-cell">
                    <div className="ProfileHeaderCard">
                      <h1 class="ProfileHeaderCard-name">
                        <b>30miRRR</b>
                        <i className="fas fa-check-circle" style={{color: "green", marginLeft: 4 + "px"}}></i>
                      </h1>
                      <h2 className="ProfileHeaderCard-screenname u-inlineBlock u-dir">
                        <span>@30miRRR</span>
                        <br/>
                        <br/>
                        Mssv: 1512676-1512678
                      </h2>
                      <div className="ProfileUserList ProfileUserList--socialProof">
                        <div className="ProfileUserList-heading">
                          
                          <i className="fas fa-user" ></i>
                          <span style={{color: "#1DA1F2", marginLeft: 10 + "px"}}>2 Followers you know</span>

                        </div>
                        <ul className="ProfileUserList-facepile u-cf">
                          <li class="ProfileUserList-facepileItem">
                            <img class="Avatar Avatar--size48" src="https://pbs.twimg.com/profile_images/989364677426733057/HD-2Vnhf_bigger.jpg" alt="Shawn Mendes"></img>
                          </li>
                          <li class="ProfileUserList-facepileItem">
                            <img class="Avatar Avatar--size48" src="https://pbs.twimg.com/profile_images/948489086150561792/Q3zjpLAm_bigger.jpg" alt="Louis Tomlinson"></img>
                          </li>
                        </ul>
                      </div>

                      
                    </div>

                    
                  </div>
                  <div className="PhotoRail">
                    <div className="PhotoRail-heading">
                      <i className="fas fa-image" ></i>
                      <span style={{color: "#1DA1F2", marginLeft: 10 + "px"}}>6 Photos and Videos</span>
                    </div>
                    <div className="PhotoRail-mediaBox">
            
                      <img className="tweet-media-img-placeholder js-nav" src="https://pbs.twimg.com/ad_img/1077466244939436032/JZBwS-0G?format=jpg&name=orig" style={{height: 83 + "px", width: 83 + "px", marginLeft: 0 + "px", marginTop: 0 + "px"}}></img>
                      <img className="tweet-media-img-placeholder js-nav" src="https://pbs.twimg.com/media/DvBcfisWsAAs5VI.jpg" style={{height: 83 + "px", width: 83 + "px", marginLeft: 10 + "px", marginTop: 0 + "px"}}></img>
                      
                    
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
            <div class="col-6">
              <div className="Grid Grid--withGutter js-empty-timeline">
              <div className="ProfileEmptyTimeline-tweetBox">
                <div className="ProfileTweetbox u-bgUserColorLightest u-borderUserColorLight js-profileEmptyTimelineTweetbox" style={{height: 150 + "px"}}>
                  <form>
                    <div className="tweet-content">
                      <div className="RichEditor RichEditor--emojiPicker">
                        <div className="RichEditor-container u-borderRadiusInherit" >
                            <input type="Text" placeholder="ABC" style={{width: 100 + "%", height: 100 + "px"}}>
                            </input> 
                        </div>
                      
                      </div>

                    </div>
                  </form>
                  <div className="TweetBoxToolbar-tweetButton tweet-button" >
                    <button id="button1" class="tweet-action disabled EdgeButton EdgeButton--primary js-tweet-btn" type="button" disabled="">
                      <span class="button-text tweeting-text">
                      Tweet
                      </span>
                      
                    </button>
                  </div>
                  <Poshistory></Poshistory>
                </div>
              </div>
            </div>
            </div>
            <div class="col" style={{marginTop: 40 + 'px'}}>
              <Suggestions></Suggestions>
            </div>
          </div>
            

            


          </div>
        
        
     
      </div>
    );
  }
}

export default Profile;