import React from 'react';
import ReactDOM from 'react-dom';
import Notify from './toast';
import { IProps } from './types';
import './index.scss';

function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notify notice={notice} />, div);
  console.log(notification);
  return {
    addNotice(notice) {
      return notification(notice);
    },
    destroy() {
      ReactDOM.unMountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

let notification;
const notice = ({
  closeable,
  textStyle,
  message,
  content,
  borderRadius,
  type = 'danger',
  color,
  padding
}: IProps) => {
  if (!notification) notification = createNotification();
  return notification.addNotice({
    closeable,
    textStyle,
    message,
    content,
    borderRadius,
    type,
    color,
    padding
  });
};

export default notice;
