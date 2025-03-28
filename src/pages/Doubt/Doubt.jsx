import React, { useContext, useState } from "react";
import "./Doubt.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { UserButton, useUser } from "@clerk/clerk-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Doubt = () => {
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
      const [isListening, setIsListening] = useState(false);
      
      const { transcript, resetTranscript } = useSpeechRecognition();
    
      const handleVoiceInput = () => {
        if (!isListening) {
          SpeechRecognition.startListening({ continuous: true, language: "en-US" });
        } else {
          SpeechRecognition.stopListening();
          setInput(transcript);
        }
        setIsListening(!isListening);
      };
    
      return (
        <div className="main">
          <div className="nav">
            <p>AI-StudyMate</p>
            <p><UserButton/></p>
          </div>
    
          <div className="doubt-container">
            {!showResult ? (
              <>
                <div className="greet">
                  <p className="hello">
                    <span>Hello, {user.firstName}</span>
                  </p>
                  <p className="text" >How can I help you ?</p>
                  
                </div>
              </>
            ) : (
              <div className="result">
                <div className="result-title">
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
    
            <div className="main-bottom">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Enter your question here..."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div>
                  <AddPhotoAlternateOutlinedIcon />
                  <KeyboardVoiceOutlinedIcon onClick={handleVoiceInput} style={{ color: isListening ? "red" : "white" }}/>
                  {input && <SendOutlinedIcon onClick={() => onSent()}/>}
                </div>
              </div>
              <p className="bottom-info">
                AI-Assistent may display inaccurate info, including about people, so double-check its responses.
              </p>
            </div>
          </div>
        </div>
    );
}

export default Doubt