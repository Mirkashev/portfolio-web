/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.svg?svgr' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface ImportMetaEnv {
  readonly SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type PolymorphicProps<T extends ElementType, E extends object = {}> = { as?: T } & E &
  Omit<React.ComponentPropsWithoutRef<T>, keyof E | 'as'>;
