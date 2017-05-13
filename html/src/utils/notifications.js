import {actions as notifActions} from 'redux-notifications'
const {notifSend} = notifActions

export const errorNotification = (message = 'Something go wrong', dismissAfter = 5000) =>
  notifSend({
    message,
    kind: 'danger',
    dismissAfter,
  })

export const successNotification = (message = 'Success', dismissAfter = 5000) =>
  notifSend({
    message,
    kind: 'success',
    dismissAfter,
  })
