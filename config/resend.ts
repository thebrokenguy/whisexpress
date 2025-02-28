import { Resend } from "resend"

// Use an environment variable for the API key
const resend = new Resend(process.env.RESEND_API_KEY)

export default resend

