import { resources, defaultNS } from '@/i18n';

declare module 'react-i18next' {
  type DefaultResourcesType = typeof resources['pt-BR'];

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResourcesType {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['pt-BR'];
  }
}
