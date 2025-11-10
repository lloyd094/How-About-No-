# How About No?

A beautiful, modern web application that generates creative excuses for when you need to decline something. Built with React, TypeScript, and powered by the No-as-a-Service API.

## Features

- **Random Excuse Generation** - Get creative rejection excuses at the click of a button
- **Excuse History** - View your last 10 generated excuses with a smooth fade effect
- **Copy to Clipboard** - Easily copy any excuse with one click
- **Responsive Design** - Beautiful UI that works seamlessly on all devices

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher recommended)
- **npm**
- **Docker** and **Docker Compose** (optional, for containerized deployment)

Make sure ports **1010** (frontend) and **3001** (backend) are available on your system.

## Running the Application

### Clone the Repository

```bash
git clone https://github.com/lloyd094/How-About-No-.git
cd How-About-No-
```

### Option 1: Docker Compose (Recommended)

The easiest way to run the entire application:

```bash
docker-compose up -d --build
```

This will start both the frontend and backend services:
- **Frontend**: http://localhost:1010
- **Backend**: http://localhost:3001

To stop the services:
```bash
docker-compose down
```

### Option 2: Manual Development Setup

#### Install Dependencies

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
cd ..
```

#### Start the Backend

```bash
cd backend
npm start
```

The backend will run on http://localhost:3001

#### Start the Frontend (in a new terminal)

```bash
npm run dev
```

The frontend will run on http://localhost:5173 (Vite's default port)

**Note**: If running manually, update your `.env` file to point to the correct backend URL.

## Project Structure

```
.
├── src/                      # Frontend source code
│   ├── components/           # React components
│   │   ├── ExcuseCard.tsx   # Individual excuse display
│   │   └── ThemeToggle.tsx  # Dark mode toggle
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.ts      # Theme management
│   ├── services/            # API services
│   │   └── excuseService.ts # Excuse fetching logic
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── backend/                 # Backend API server
│   ├── index.js            # Express server
│   ├── reasons.json        # Database of excuses
│   ├── package.json        # Backend dependencies
│   └── Dockerfile          # Backend container config
├── docker-compose.yml      # Multi-container orchestration
├── Dockerfile              # Frontend container config
└── package.json            # Frontend dependencies
```

## Credits

- **API**: Powered by [No-as-a-Service](https://github.com/hotheadhacker/no-as-a-service) by hotheadhacker
- **Built with**: [Bolt.new](https://bolt.new)

## License

This project is open source and available under the MIT License.

## Contributing

Do whatever you want. I don't take any "ownership" of anything here. I just asked AI to make a web wrapper for my own purposes (fun), and troubleshooted for a few hours to make something that works.

---

Made on a Sunday with music, coffee, and poodle dancing.
