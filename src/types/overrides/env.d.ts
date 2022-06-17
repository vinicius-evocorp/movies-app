/// <reference types="vite/client" />

interface ImportMetaEnv {
  // APP VARIABLES
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;

  // API VARIABLES
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_IMAGES_BASE_URL: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
