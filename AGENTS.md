## Runtime / Debugging Rules
- This repo runs via `docker compose watch`.
- When checking build/runtime errors, prefer `docker compose logs` (not local process logs).
- Default diagnostics command: `docker compose logs --tail=200`.
