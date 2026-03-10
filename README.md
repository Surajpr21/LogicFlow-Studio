# FlowForge

A visual pipeline builder built with React Flow and FastAPI.

> Build, connect, and run directed acyclic graph (DAG) workflows through an intuitive drag-and-drop interface.

---

## Demo

> Coming soon — screenshots and live demo link will be added here.

---

## Features

- Drag-and-drop node-based workflow editor powered by React Flow
- Create and connect pipeline steps as Directed Acyclic Graphs (DAGs)
- Real-time graph validation and cycle detection
- Save, load, and manage multiple pipelines via REST API
- Global state management with Zustand
- FastAPI backend with full CRUD support for workflows
- Clean, responsive UI built with React

---

## Architecture

```
frontend (React + React Flow + Zustand)
        |
        | HTTP / REST API (JSON)
        |
backend (FastAPI + Python)
        |
        | Read / Write
        |
   Data Store (in-memory / database)
```

- **Frontend** handles the visual canvas, node/edge state, and API communication
- **Backend** exposes REST endpoints for pipeline CRUD and execution
- **State** is managed via Zustand stores on the frontend
- **Graphs** are serialized as JSON (nodes + edges) and stored via FastAPI

---

## Project Structure

```
flowforge
│
├── frontend
│   ├── src
│   │   ├── components        # React Flow canvas, custom node UIs
│   │   ├── store             # Zustand state stores
│   │   ├── api               # Axios/fetch clients for FastAPI
│   │   ├── hooks             # Custom React hooks
│   │   └── App.jsx           # Root component
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── main.py           # FastAPI entrypoint
│   │   ├── models.py         # Pydantic models
│   │   ├── routers           # API route handlers
│   │   └── services          # Business logic (pipeline processing)
│   └── requirements.txt
│
└── README.md
```

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI framework |
| React Flow | Node-based graph editor |
| Zustand | Global state management |
| JavaScript | Primary language |
| Vite | Build tool |

### Backend
| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| Python | Primary language |
| Uvicorn | ASGI server |
| Pydantic | Data validation |

---

## Installation

### Prerequisites

- Node.js >= 18 and npm
- Python >= 3.9 and pip

### 1. Clone the repository

```bash
git clone https://github.com/Surajpr21/LogicFlow-Studio.git
cd LogicFlow-Studio
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

### 3. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at: `http://localhost:8000`

API docs available at: `http://localhost:8000/docs`

---

## Usage

1. Start the FastAPI backend server
2. Start the React frontend dev server
3. Open `http://localhost:5173` in your browser
4. Drag nodes from the sidebar onto the canvas
5. Connect nodes by dragging from one handle to another
6. Configure node parameters via the properties panel
7. Save the pipeline using the Save button
8. Load existing pipelines from the backend

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/pipelines` | List all pipelines |
| POST | `/pipelines` | Create a new pipeline |
| GET | `/pipelines/{id}` | Get a pipeline by ID |
| PUT | `/pipelines/{id}` | Update a pipeline |
| DELETE | `/pipelines/{id}` | Delete a pipeline |
| POST | `/pipelines/{id}/run` | Run a pipeline |

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
