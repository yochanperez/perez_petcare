CREATE USER veterinario_user WITH PASSWORD 'admin';

CREATE DATABASE petcare_db OWNER veterinario_user;

\c petcare_db

ALTER SCHEMA public OWNER TO veterinario_user;

GRANT CREATE ON SCHEMA public TO veterinario_user;

ALTER DEFAULT PRIVILEGES FOR USER veterinario_user IN SCHEMA public GRANT ALL ON TABLES TO veterinario_user;

ALTER DEFAULT PRIVILEGES FOR USER veterinario_user IN SCHEMA public
GRANT ALL ON SEQUENCES TO veterinario_user;

ALTER DEFAULT PRIVILEGES FOR USER veterinario_user IN SCHEMA public
GRANT ALL ON FUNCTIONS TO veterinario_user;