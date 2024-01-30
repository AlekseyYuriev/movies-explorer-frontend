
export const getFilterCheckbox = () => {
   return localStorage.getItem('filterCheckbox') === 'true' || false;
}

export const getTextSearch = () => {
   return localStorage.getItem('textSearch') || '';
}