export function convertCurrency(value : string | number){
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(+value)
}

