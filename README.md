---

# React Native Expo App with Firebase Backend

This project is a mobile application developed using **React Native** and **Expo**, with a backend powered by **Firebase**. The app includes user authentication features, allowing users to sign in and sign out using their email and password.

## Features

- **User Authentication**: Secure sign-in and sign-out functionality using Firebase Authentication.
- **Real-time Messaging**: Chat functionality powered by Firebase Firestore, enabling real-time communication between users.
- **Responsive UI**: A user-friendly interface designed with React Native components and styled for both iOS and Android platforms.
- **Navigation**: Smooth navigation experience using React Navigation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThilinaJayamal/live-chat-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd live-chat-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   ```bash
   npx expo install firebase
   ```
4. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to a `.env` file in the root directory.
   ```env
   API_KEY=your-api-key
   AUTH_DOMAIN=your-auth-domain
   PROJECT_ID=your-project-id
   STORAGE_BUCKET=your-storage-bucket
   MESSAGING_SENDER_ID=your-messaging-sender-id
   APP_ID=your-app-id
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- **Sign In**: Users can sign in using their email and password.
- **Sign Out**: Users can securely sign out of their account.
- **Chat**: Users can send and receive messages in real-time.

## Screenshots

![WhatsApp Image 2024-09-20 at 22 00 40_59493a0f](https://github.com/user-attachments/assets/24c04b54-06f7-409c-bc73-4bdef083392f)
![WhatsApp Image 2024-09-20 at 22 00 41_59018a65](https://github.com/user-attachments/assets/6c9e3e94-a842-4277-bf86-0c25a90dca70)
![WhatsApp Image 2024-09-20 at 22 00 39_7793baaa](https://github.com/user-attachments/assets/ccffc34d-f2e8-4479-9d9d-4783f09c9620)
![WhatsApp Image 2024-09-20 at 22 00 40_c1a095e8](https://github.com/user-attachments/assets/d7f5c28d-7a99-4dfe-a977-278cb5796131)


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---
