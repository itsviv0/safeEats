import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import ImagePicker from "@/components/ui/ImagePicker";
import CustomTextInput from "@/components/ui/CustomTextInput";
import { extractText } from "@/services/ocrService";

export default function HomeScreen() {
  const [extractedText, setExtractedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageSelected = async (imageUri: string) => {
    try {
      setLoading(true);
      const text = await extractText(imageUri);
      setExtractedText(text);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Error processing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SafeEats</ThemedText>
      </ThemedView>
      <ThemedView>
        <Text style={styles.instructions}>
          Take a photo or upload an image of ingredient labels to scan for
          allergens
        </Text>
      </ThemedView>
      <ImagePicker onImageSelected={handleImageSelected} />

      <ThemedView style={styles.container}>
        <CustomTextInput
          value={extractedText}
          onChangeText={setExtractedText}
          placeholder="Or type ingredients manually here..."
        />
      </ThemedView>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Processing image...</Text>
        </View>
      )}

      {extractedText ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Extracted Text:</Text>
          <Text style={styles.resultText}>{extractedText}</Text>
        </View>
      ) : null}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
  },
  resultContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
