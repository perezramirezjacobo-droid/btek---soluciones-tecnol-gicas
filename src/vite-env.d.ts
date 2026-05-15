/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend de correo (vacío = mismo origen, p. ej. proxy /api en dev) */
  readonly VITE_DIAGNOSTIC_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
