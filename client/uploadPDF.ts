import * as fs from "fs";
import pdfParse from "pdf-parse";

export async function uploadPDF(filePath: string): Promise<string> {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    console.log("PDF text extracted successfully.");
    return pdfData.text;
  } catch (error) {
    console.error("Error extracting text from PDF file:", error);
    throw error;
  }
}
