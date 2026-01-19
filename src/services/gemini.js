// GoogleGenerativeAI removed to use direct fetch

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();

export const chatWithGemini = async (prompt) => {
  if (!API_KEY || API_KEY.includes("YOUR_GEMINI_API_KEY")) {
    console.warn("Gemini API Key missing or invalid! Returning mock response.");
    return "I am ready to help, Mahmoud! (Please paste your valid API Key in the .env file to enable my brain).";
  }

  try {
    // Direct fetch to bypass potential SDK/Browser issues
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are the AI Assistant for Mahmoud GhaZy, a Creative Frontend Developer.
      Context:
      - Mahmoud pivoted from Accounting (Tanta University) & Industrial Management to Software Engineering (2017-Present).
      - He specializes in React 19, Three.js, R3F, and MERN Stack.
      - He is passionate about "Creative Coding" and "Immersive Web Experiences".
      
      Your Personality:
      - Friendly, professional, but slightly witty.
      - Keep answers concise (maximum 2-3 sentences) so they are easy to speak.
      - If asked about his skills, highlight his unique mix of management logic and creative development.

      User: ${prompt}`,
                },
              ],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || response.statusText);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please check the console for the specific error.";
  }
};
