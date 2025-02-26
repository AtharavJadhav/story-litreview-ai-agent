import { uploadPDF } from "./uploadPDF.js";
import { displayIP } from "./displayIP.js";
import axios from "axios";

async function main() {
  try {
    const pdfContent = uploadPDF("./Paper 1.pdf");
    const response = await axios.post("http://localhost:3000/process-pdf", {
      pdfContent,
    });

    const ipData = response.data;
    displayIP(ipData);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
