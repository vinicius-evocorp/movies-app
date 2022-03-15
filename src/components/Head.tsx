import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

const APP_TITLE = import.meta.env.VITE_APP_TITLE;

type HeadProps = {
  title?: string;
  children?: ReactNode;
};

export function Head({ title, children }: HeadProps) {
  return (
    <Helmet>
      {title && <title>{`${title} | ${APP_TITLE}`}</title>}

      {children}
    </Helmet>
  );
}
