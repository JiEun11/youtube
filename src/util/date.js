import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko',koLocale);

// NOTE: AGO를 설정하는 formatter
export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}