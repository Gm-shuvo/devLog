import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeAgo = ({timestamp}) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span className='text-gray-700 text-sm'>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}


export default TimeAgo;