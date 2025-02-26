import express from "express";
import "dotenv/config";
import { processPDF } from "./processPDF.js";
import { createIP } from "./createIP.js";

const app = express();
app.use(express.json());

app.post("/process-pdf", async (req, res) => {
  try {
    const { pdfContent } = req.body;
    const reviewContent = await processPDF(pdfContent);

    if (typeof reviewContent === "string" && reviewContent.trim() !== "") {
      const ipAsset = await createIP(reviewContent);
      res.json(ipAsset);
    } else {
      throw new Error("Invalid review content received from OpenAI.");
    }
  } catch (error) {
    console.error("Error processing PDF:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("ServerAI listening on port 3000");
});
