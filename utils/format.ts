export const formatCurrency = (amount: number | undefined, currency: string | undefined) => {
    const value = amount || 0;
    if(currency && currency == 'el')
      return new Intl.NumberFormat('el', {
        style: 'currency',
        currency: 'EUR',
      }).format(value);
    else return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };