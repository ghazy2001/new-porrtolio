import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, ".env");
let API_KEY = "";

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
  if (match) {
    API_KEY = match[1].trim();
  }
}

if (!API_KEY) {
  console.error("API Key not found in .env file.");
  process.exit(1);
}

async function listModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`,
    );
    const data = await response.json();

    if (data.models) {
      console.log("Available Models:");
      data.models.forEach((m) => console.log(`- ${m.name}`));
    } else {
      console.error("No models found or error:", data);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
