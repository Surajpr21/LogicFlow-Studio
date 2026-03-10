from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI() 

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {node.id: [] for node in pipeline.nodes}

    for edge in pipeline.edges:
        if edge.source in graph:
            graph[edge.source].append(edge.target)

    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return False

        if node in visited:
            return True

        rec_stack.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        rec_stack.remove(node)
        visited.add(node)

        return True

    is_dag = True

    for node in graph:
        if not dfs(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
