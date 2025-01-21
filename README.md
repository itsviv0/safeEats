# SafeEats

Allergy detection app for packaged food items.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Download Expo Go app and scan the QR-Code.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Tech Stack

- Expo - React Native development platform
- React Navigation - Navigation library
- Expo Router - File-based routing
- Reanimated - Animations
- TypeScript - Type safety

## Project Structure

- app - Screen components and routing
- components - Reusable UI components
- constants - Theme colors and other constants
- hooks - Custom React hooks for theming
- assets - Images and fonts

## To run the dev mode remotely on Android

1. Create an Expo account by visiting [Expo Sign Up](https://expo.dev/signup).

2. Log in to your Expo account in the terminal

   ```bash
   expo login
   ```

   Enter user name and the password.

3. Initialize EAS

   ```bash
   eas init
   ```

4. Configure the build

   ```bash
   eas build:configure
   ```

5. Start the build process

   ```bash
   eas build --profile development --platform all
   ```

6. Wait for the build to complete. It can take 8-15 minutes for completion.

7. Scan the QR code and install the application

8. Start the app

   ```bash
   npx expo start
   ```
