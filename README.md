# Video Player App

A responsive React.js application for playing videos from a playlist, featuring seeking, timer, autoplay, speed selector, and playlist reordering.

## How to Run Locally

1. Clone this repository HTTPS Link: `https://github.com/sachidanand-pradhan/rigi_assignment.git`
2. Clone this repository GitHub CLI Link:`gh repo clone sachidanand-pradhan/rigi_assignment`
3. Navigate to the project folder: `cd rigi_assignment`
4. Install dependencies: `npm install`
5. Start the development server: `npm start`
6. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

- /src
  - /components
    - Playlist.jsx
    - Index.jsx
    - /VideoPlayer
      - Player.jsx
      - ContentDesc.jsx
  - /context
    - ContextProvider.js
  - /data
    - videoDatas.js
  - /page
    - Home.jsx
    - NavBar.jsx
    - MyPlayList.jsx
    - EmptyPlaylist.jsx
  - app.jsx
  - index.js

## Features

- **Play videos from a playlist:**
  - Users can add multiple videos to a playlist.
  - The application provides a user interface to select and play a specific video from the playlist.
  - Users can navigate through the playlist and choose the video they want to watch.

- **Seeking functionality:**
  - Users can manually seek (jump to a specific point) in the currently playing video.
  - This allows users to skip forward or backward in the video timeline to find a specific moment.

- **Timer display:**
  - The application displays a timer that shows the current playback time of the video.
  - Users can easily track the progress of the video and know how much time has elapsed.

- **Autoplay:**
  - When autoplay is enabled by utilizing the onEnded event in video player component. This ensures that one video automatically plays after the current video ends.

- **Speed selector:**
  - Users can choose the playback speed of the video.
  - This feature allows users to watch videos at a faster or slower pace based on their preferences.

- **Playlist reordering:**
  - Users can change the order of videos in the playlist.
  - This functionality provides a convenient way for users to organize and customize the sequence of videos they want to watch.

- **Fullscreen Feature:**
  - Clicking the fullscreen button expands the video for an immersive full-screen viewing experience.

## Technologies Used

- React.js
- Context API
- Tailwind CSS
- React Router Dom

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/video-player-app.git

```

```bash
cd rigi_assignment
```
```bash
npm install
```
```bash
npm start
```


