// Redux Stuff
import store from '../../redux/store.js';
import { setScreenFormats } from '../../redux/actions/ui-actions.ts';
// Functions
import { getScreenSize } from './screens.js';
import logger from '../client-logger/client-logger.js';

const log = logger(`listener-rezise-screen.js`);

export default function() {

  window.addEventListener("resize", resizeThrottler, false);
  log(`START LISTENER RESIZE`);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
      }, 200);
    }
  }

  // Получаем текущий размер экрана и сохраняем в store
  function actualResizeHandler() {
    const screenSize = getScreenSize();
    // log(`actualResizeHandler: `, screenSize);

    store.dispatch(setScreenFormats(screenSize));
  }

  // Один раз запускаем в самом начале
  actualResizeHandler();
};