
import {
  GoogleGenerativeAI,
  HarmCategory,   
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Use Vite's env variable
const genAI = new GoogleGenerativeAI(apiKey);

if (!apiKey) {
  console.error("API key not found. Please check your environment variables.");
  process.exit(1);
}

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response.text();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

export default run;