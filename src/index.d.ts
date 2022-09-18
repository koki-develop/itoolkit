declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_VERCEL_ENV: "production" | "preview" | "development";
  }
}
