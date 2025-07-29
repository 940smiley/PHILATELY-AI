# PHILATELY-AI

PHILATELY-AI provides simple desktop and web applications for managing a stamp collection. Both apps allow you to upload images, run a placeholder identification process and keep a small log. The project is a demonstration of basic user interfaces, subscription flows and platform integrations.

## Directory overview

- `desktop_app` – minimal Python/Tkinter application.
- `web_app` – example Flask/React project.

Each folder contains its own README with more details.

## Development

Python tests are written with `pytest` and JavaScript tests use Jest. After installing dependencies, run:

```bash
python3 -m pytest
npm test
```

The apps are intentionally lightweight; check `PRODUCTION_CHECKLIST.md` for tasks required in a real deployment.
