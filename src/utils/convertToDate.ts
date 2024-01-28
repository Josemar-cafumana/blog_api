import moment from 'moment';

export const convertToDate = (dateString: Date | null | undefined) => {
  if (!dateString) return null;
  if(!moment(dateString, 'DD/MM/YYYY', true).isValid()) return null;
  return dateString ? moment(dateString).format('YYYY-MM-DDTHH:mm:ss[Z]') : null;
};