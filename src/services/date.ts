import * as dateFns from 'date-fns';
// import enUS from 'date-fns/locale/en-US';

// const locale = ptBR;

export const dateFormat = {
  ...dateFns,
  format: (date: number | Date, format = `DD/MM/yyyy`) => {
    return dateFns.format(date, format);
  },
  formatDistance: (date: number | Date, baseDate: number | Date) => {
    return dateFns.formatDistance(date, baseDate);
  },
  formatRelative: (date: number | Date, baseDate: number | Date) => {
    return dateFns.formatRelative(date, baseDate);
  },
  distanceInWordsToNow: (date: number | Date) => {
    return dateFns.formatDistanceToNowStrict(date);
  },
};
