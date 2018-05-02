import { Message } from 'element-ui'

export const notify = function({
  type = 'info',
  message = '',
  duration = 2000,
  showClose = false,
  onClose = function() {}
}) {
  Message({
    type,
    message,
    duration,
    showClose,
    onClose
  })
}

export const closeNotify = function() {
  Message.close()
}
