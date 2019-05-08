import { Modal } from 'antd';

export const SuccessNotification = (title, desciption, time) => {
  const modal = Modal.success({
    title: title,
    content: desciption,
  });
  const timer = setInterval(() => {
    time -= 1;
    modal.update({
      content: desciption,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, time * 1000);
}