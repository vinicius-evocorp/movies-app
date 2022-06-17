export const formatCurrency = {
  brl: (value: number | string | undefined | null) => {
    let onlyNumbers = value || 0;

    if (typeof value === 'string') {
      onlyNumbers = Number(value.replace(/\D/g, '')) / 100;
    } else if (typeof value === 'number') {
      onlyNumbers = value / 100;
    }

    if (Number.isNaN(onlyNumbers)) {
      onlyNumbers = 0;
    }

    return onlyNumbers.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
    });
  },
  stringToNumber: (value: number | string | null) => {
    let toParseValue = value || 0;

    if (typeof value === 'string') {
      toParseValue = Number(value.replace(/\D/g, ''));
    }

    return Number(toParseValue);
  },
};
