import { createContext, useEffect, useState } from "react";
import run from "../config/gemini";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = (props) =>{
    const [input,setInput] = useState("");
    const [recentPrompts,setRecentPrompts] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const navigate = useNavigate();

    const newChat = ()=>{
        setLoading(false);
        setShowResult(false);
    }
    
    const onSent = async(prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompts(prompt);
        }else{
            setPrevPrompts([...prevPrompts,input]);
            setRecentPrompts(input);
            response = await run(input); //Gemini run function
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0; i<responseArray.length; i++){
            if(i===0||i%2===0){
                newResponse += responseArray[i];
            }
            else{
                newResponse += '<p style="font-weight: 500; display: inline;">' + responseArray[i] + '</p>';
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        setResultData(newResponse2);
        setLoading(false);
        setInput("");
    } 

    const contextValue = {
        onSent,
        input,
        setInput,
        recentPrompts,
        setRecentPrompts,
        prevPrompts,
        setPrevPrompts,
        showResult,
        loading,
        resultData,
        newChat,
        navigate
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider


 
