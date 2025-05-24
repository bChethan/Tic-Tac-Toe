# Tic-Tac-Toe with React

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)

A complete Tic-Tac-Toe game with time-travel feature built with React.

## Features

- 🎮 Classic Tic-Tac-Toe gameplay (X vs O)
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔄 Reset game functionality
- 📱 Responsive design

## How It Works

### Game Logic
- Tracks board state using React's `useState`
- Calculates winner after each move by checking all 8 possible winning combinations
- Uses non-breaking spaces (`\u00A0`) for empty squares to maintain UI consistency

### Time-Travel Feature
- Maintains an array of all board states
- Allows jumping back to any previous move
- Truncates future moves when making new moves after time-travel

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bChethan/Tic-Tac-Toe.git
```
2. Install the project dependencies using npm:

```bash
npm install
```
3. Start the development server:

```bash
npm run dev
```
