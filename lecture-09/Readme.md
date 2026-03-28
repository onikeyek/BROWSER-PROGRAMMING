# Lecture 9 — Backend & API

## Task 4: Why do we need a backend if JavaScript runs in the browser?

We need a backend because the browser can't safely store secrets, access databases, or run trusted logic — anyone can see and modify frontend JS.

The backend runs in a controlled environment on a server, handles data securely, and exposes only what the frontend needs via an API.

