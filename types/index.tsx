export interface ImagePickerProps {
  onImageSelected: (uri: string) => Promise<void>;
}
export interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}
