import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify';

function showError() {
  PNotify.error({
    text: 'Invalid email or password',
    delay: 3000,
    stack: {
      dir1: 'down',
      dir2: 'right',
      firstpos1: 100,
      firstpos2: 900,
    },
  });
}

function closeError() {
  PNotify.closeAll();
}

export default {
  showError,
  closeError,
};
