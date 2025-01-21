import Tesseract from "tesseract.js";

export const extractText = async (imageUri: string): Promise<string> => {
  try {
    let rawText = await Tesseract.recognize(imageUri);
    return rawText.data.text;
  } catch (error) {
    console.error("OCR Error:", error);
    throw error;
  }
};
