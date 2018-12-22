import React, { Component } from 'react';
import '../App.css'

class ListFriends extends Component {
  render() {
    return (
        <div className="list">
            <ul style={{listStyle: "none", paddingBottom: 10 + 'px'}}>
                <li className="tooltip1">
                    <a href="https://www.facebook.com/messages/t/100007839872342">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px'}}>
                                    <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p32x32/36948633_2132096543728321_1256832341343469568_n.jpg?_nc_cat=110&amp;_nc_ht=scontent.fsgn5-3.fna&amp;oh=2504d8eb176554844cb806251ec06ddf&amp;oe=5CD8CC32" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Phạm Phú Vĩnh
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                  
                            </div>

                            
                            
                        </div>
                    </a>
                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 111$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                                

                    
                                
                    
                    

                    
                    <div className="tooltiptext1">
                        <b>Phạm Phú Vĩnh</b>
                        <br></br>
                        @PhamPhuVinh
                        <br>
                        </br>
                        -------------
                        <br></br>
                        128Tweet
                        <br></br>
                        Số tiền hiện có: 111$
                    </div>
                </li>
                <li className="tooltip1">
                    <a href="https://www.facebook.com/messages/t/vo.ngocrim.3">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/p50x50/31492848_986559618165755_201002437933268992_n.jpg?_nc_cat=109&_nc_ht=scontent.fsgn5-6.fna&oh=98d44f2d6eaf238ee2d35c362aad10a1&oe=5CA6C5C6" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Ngọc Vinh
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>
                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 3003$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Ngọc Vinh</b>
                        <br></br>
                        @30miRRR
                        <br>
                        </br>
                        -------------
                        <br></br>
                        1892Tweet
                        <br></br>
                        Số tiền hiện có: 3003$
                    </div>
                </li>
                <li className="tooltip1">
                    <a href="#">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/p32x32/534159_1192296467578268_5938810131497992832_n.jpg?_nc_cat=102&_nc_ht=scontent.fsgn5-4.fna&oh=78f886eab7cdd36a3b724c2727fd591e&oe=5CA18784" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Nguyễn Văn A
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>

                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 11$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Nguyễn Văn A</b>
                        <br></br>
                        @NVA
                        <br>
                        </br>
                        -------------
                        <br></br>
                        50Tweet
                        <br></br>
                        Số tiền hiện có: 11$
                    </div>
                </li>
                <li className="tooltip1">
                    <a href="#">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-1/c5.0.32.32a/p32x32/75126_112737105545717_245669307_n.jpg?_nc_cat=109&_nc_ht=scontent.fsgn3-1.fna&oh=923c5f8051eb6494afc765d9711832d4&oe=5CA6F2CF" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Nguyễn Ngọc B
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>

                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 112$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Nguyễn Ngọc B</b>
                        <br></br>
                        @BlackB
                        <br>
                        </br>
                        -------------
                        <br></br>
                        456Tweet
                        <br></br>
                        Số tiền hiện có: 112$
                    </div>
                </li>
                <li className="tooltip1">
                    <a href="#">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-1/c0.3.32.32a/p32x32/47254488_612220505859160_1440758435984441344_n.jpg?_nc_cat=108&_nc_ht=scontent.fsgn8-1.fna&oh=f32873d194dcf40b5996581e08d405fa&oe=5C90CA3A" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Trần Thị C
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>

                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 95$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Trần Thị C</b>
                        <br></br>
                        @TTC
                        <br>
                        </br>
                        -------------
                        <br></br>
                        30Tweet
                        <br></br>
                        Số tiền hiện có: 95$
                    </div>
                </li>
                <li className="tooltip1">
                    <a href="#">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-1/p32x32/26239500_1111648595643793_7743158209148605115_n.jpg?_nc_cat=100&_nc_ht=scontent.fsgn4-1.fna&oh=758d37ebd2a1d86299ac9242dc0aa892&oe=5CA9FE12" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Võ D
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>

                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 774$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Võ D</b>
                        <br></br>
                        @VoD
                        <br>
                        </br>
                        -------------
                        <br></br>
                        303Tweet
                        <br></br>
                        Số tiền hiện có: 774$
                    </div>
                </li>

                <li className="tooltip1">
                    <a href="#">
                        <div style={{paddingTop: 10 + "px"}}>
                            <div style={{float: "left"}}>
                                <div style={{width: 32 + 'px', height: 32 + 'px', borderRadius: 50 + '%'}}>
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/p32x32/18301521_1082857325152382_8256863210351785694_n.jpg?_nc_cat=105&_nc_ht=scontent.fsgn5-2.fna&oh=31d2d3a1cffc99f7bd0e5511e0a46788&oe=5C9D48DC" alt="" class="img" width="32" height="32"></img>
                                    
                                </div>
                          
                            </div>
                            <div style={{}}>
                                <div style={{display: 'inline-block', paddingLeft: 20 + "px", height: 24 + 'px',width: 150 + 'px'}}>
                                    Anh Duy
                                    
                                </div>
                                <div className="active">
                            
                                </div>
                                
                                          
                            </div>
                            
                        </div>
                    </a>

                    <a href="#" data-toggle = "dropdown" style={{display: 'inline-block', marginLeft: 20 + "px"}}>
                        <div className="btnsendmoney">
                             <span>Send Money</span>
                             
                        </div>
                    </a>
                                
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <form className= "SendMoney">
                            <b>Số tiền hiện có: 354$</b>
                            <br></br>
                            <span>Số tiền muốn gởi: </span>
                            <input type="number" style={{width: 40 + "%"}}/>
                            <br></br>
                            <span>Người nhận: </span>
                            <input type="text" style={{width: 40 + "%"}}/>
                            <br></br>
                            <button className="button">Send</button>
                        </form>
                    </div>
                          
                    <div className="tooltiptext1">
                        <b>Anh Duy</b>
                        <br></br>
                        @ADuy
                        <br>
                        </br>
                        -------------
                        <br></br>
                        49Tweet
                        <br></br>
                        Số tiền hiện có: 354$
                    </div>
                </li>
            
            </ul>
            
        </div>
        
    );
  }
}

export default ListFriends;