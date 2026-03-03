## Runtime / Debugging Rules
- This repo is running via `docker compose watch`.
- When diagnosing or checking build/runtime errors, prefer `docker compose logs --tail=200` (not local process logs).
