import React from "react";
import "./MainDark.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { UserButton, useUser } from "@clerk/clerk-react";

const Main = () => {
  const {
    onSent,
    input,
    setInput,
    recentPrompts,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  const { user } = useUser();

  const cartImageStyle = {
    width: "25px",
    height: "25px",
    position: "absolute",
    borderRadius: "20px",
    bottom: "10px",
    right: "10px",
  }

  return ( 
    <div className="main">
      {/* --------------------------------Navbar------------------------------------------*/}
      <div className="nav">
        <p>AI-StudyMate</p>
        {/* <img src={assets.user_icon} alt="" /> */}
        <p><UserButton/></p>
      </div>

      {/*------------------------------Main Conatiner----------------------------------- */}
      {/* -------------Center content------------- */}
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, {user.firstName}.</span>
              </p>
              <p style={{fontSize:"50px"}}>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Create a personalized study plan to stay organized daily</p>
                <LightbulbOutlinedIcon style={cartImageStyle}/>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <CodeOutlinedIcon style={cartImageStyle}/>
              </div>
              <div className="card">
                <p>Get helpful study materials and resources for your subjects</p>
                <StickyNote2OutlinedIcon style={cartImageStyle}/>
              </div>
              <div className="card">
                <p>Discover effective time management strategies for better productivity</p>
                <ExploreOutlinedIcon style={cartImageStyle}/>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              {/* <img src={assets.user_icon} alt="" /> */}
              {/* <p><UserButton/></p> */}
              <p className="userLogo"><UserButton/></p>
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? 
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> 
              : 
              <p dangerouslySetInnerHTML={{ __html: resultData }} />
              }
            </div>
          </div>
        )}

        {/*---------------Bottom------------------- */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              onChange={(e) => setInput(e.target.value)} //input
              value={input}
            />
            <div>
              <AddPhotoAlternateOutlinedIcon />
              <KeyboardVoiceOutlinedIcon/>
              {input? <SendOutlinedIcon onClick={() => onSent()}/> : null}
            </div>
          </div>
          <p className="bottom-info">
            AI-Assistent may display inacuurate info, including about people, so
            double-check its reponses. Your Privacy and AI-Assistent Apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
