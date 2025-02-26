import { openai } from "./utils.js";

export async function processPDF(pdfContent: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Create a literature review based on the following content: ${pdfContent}`,
      },
    ],
    max_tokens: 1500,
  });

  return response.choices[0].message.content;
}
