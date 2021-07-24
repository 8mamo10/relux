import React from 'react-redux'
import { parseISO, formatDistanceNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceNow(date)
    timeAago = `${timePeriod} ago`
  }
  return (
    <span title={timestmap}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}