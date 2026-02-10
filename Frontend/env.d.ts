/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // agregá acá todas las variables que tengas
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
