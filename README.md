# React Native To-Do List App

This is a simple To-Do List application built with React Native. The app features two screens: one for viewing and deleting items, and the other for adding items (name and quantity). It’s designed to be intuitive and easy to use for managing daily tasks.

---

## Features

- **View Tasks**: Displays a list of tasks with their names and quantities.
- **Add Tasks**: Add new tasks by entering their name and quantity on a dedicated screen.
- **Delete Tasks**: Remove tasks directly from the list.
- **React Native**: Designed for cross-platform functionality, compatible with both iOS and Android.
- **Expo Integration**: Quickly run and test the app with `expo-cli` and the Expo Go app.

---

## Demo

To preview and test the app, follow these steps:

1. Clone the repository.
2. Start the development server using `npx expo start`.
3. Open the app on your mobile device using the [Expo Go app](https://expo.dev/client).

---

## Screenshots

### View Tasks Screen  
![IMG_4647](https://github.com/user-attachments/assets/34d98c15-c5ff-491a-8072-fa2664425cb6)

### Add Tasks Screen  
![IMG_4648](https://github.com/user-attachments/assets/10020e15-d07c-46a9-92a9-135b0cb282c2)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/polbesalu/ReactNativeToDoApp.git
   cd ReactNativeToDoApp
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npx expo start
   ```

4. **Test the app**:

   - Download the [Expo Go app](https://expo.dev/client) on your mobile device.
   - Scan the QR code displayed in your terminal or development server.

---

## File Structure

- **`components`**: Reusable components such as the task list item and input form.
- **`screens`**: Contains the two primary screens: `ViewTasksScreen` and `AddTasksScreen`.
- **`App.js`**: Entry point for navigation and app setup.
- **`styles`**: Centralized styling for consistency across screens.

---

## Technologies Used

- **React Native**: Framework for building cross-platform mobile applications.
- **Expo**: Simplifies the development and testing process for React Native apps.
- **React Navigation**: For managing navigation between screens.

---

## How to Use

1. **View Tasks**:
   - Start on the main screen, where all added tasks are displayed.
   - Delete tasks by tapping a delete button next to each item.

2. **Add Tasks**:
   - Navigate to the "Add Task" screen using the provided navigation.
   - Enter the task name and quantity, then add the task to the list.

---

## Future Improvements

- **Data Persistence**: Add functionality to save tasks locally using AsyncStorage or externally using a backend.
- **Edit Tasks**: Implement a feature to edit existing tasks.
- **Dark Mode**: Add support for dark mode for improved user experience.
- **Sorting and Filtering**: Allow users to sort tasks by name, quantity, or creation date.

---

## License

This project is licensed under the [MIT License](./LICENSE).
