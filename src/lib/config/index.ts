// import dotenv from "dotenv";
import { cleanEnv, str, num } from "envalid";

// const environment = import.meta.env.NODE_ENV || "dev";

// import.meta.env.NODE_ENV = environment.trim();
// const envPath = `.env.${import.meta.env.NODE_ENV}`; //path.resolve(__dirname, );

// Load environment variables from .env file
// dotenv.config({ path: envPath });

// Validate and clean environment variables
const env = cleanEnv(import.meta.env, {
  // NODE_ENV: str({ choices: ["dev", "prod", "test", "stage", "uat"] }),
  VITE_SERVER_URL: str(),
});

export default env;
