import TextRecognition from "@react-native-ml-kit/text-recognition";

export const extractText = async (imageUri: string): Promise<string> => {
  try {
    const result = await TextRecognition.recognize(imageUri);
    return result.text;
  } catch (error) {
    console.error("OCR Error:", error);
    throw error;
  }
};
