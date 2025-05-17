// module.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    VERCEL?: string;
  }
}

interface ImportMeta {
  env: {
    PROD: boolean;
    DEV: boolean;
    SSR: boolean;
  };
  dirname: string;
}
