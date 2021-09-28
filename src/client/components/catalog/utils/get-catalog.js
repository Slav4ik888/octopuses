// Redux
import store from '../../../redux/store.js';
import { dataActionType, uiActionType } from '../../../redux/action-types.ts';
// Functions
import clientLogger from '../../../utils/client-logger/client-logger.js';
import { setStorageData, getStorageData } from '../../../utils/data/local-storage.js';
import { getFromGoogleData } from './get-from-google-data.js';
import { adapterGoogleData } from './adapter-google-data/adapter-google-data.js';
import { isMaxFrequencyEnd } from './is-max-frequency.js';



const log = clientLogger(`getCatalog`);


export default async function getCatalog() {
  if (isMaxFrequencyEnd(getStorageData(`Oct_LastGetGoogle`))) {
    const key = `AIzaSyCoylJEk` + `JCJBah7jfg4RB` + `lb8ItUUFX8fK0`;
    const identificator = `AKfycbxVefB9zobcTLA4ukxFMiscBUe5o27xn_wroYghMUHGBr1YJER4qAd_eO-VKf3dfTnt`;
    const URL = `https://script.google.com/macros/s/${identificator}/exec?key=${key}`;
    // const URL = `https://script.google.com/macros/s/AKfycbxVefB9zobcTLA4ukxFMiscBUe5o27xn_wroYghMUHGBr1YJER4qAd_eO-VKf3dfTnt/exec`;

    store.dispatch({ type: uiActionType.LOADING_UI });

    try {
      const res = await getFromGoogleData(URL);
      log('Загрузили из Гугл: ', res);
  
      // Сохраняем и в local & store
      setStorageData(`Oct_LastGetGoogle`, new Date());
      setStorageData(`Oct_DBFromGoogle`, res);
      store.dispatch({
        type: dataActionType.SET_CATALOG,
        payload: adapterGoogleData(res)
      });
      store.dispatch({ type: uiActionType.LOADING_UI_OFF });
    }
    catch (e) {
      store.dispatch({ type: uiActionType.LOADING_UI_OFF });
    }
  }
  else {
    const DB = getStorageData(`Oct_DBFromGoogle`);
    log(`Загрузили из Storage...`, DB);
    
    store.dispatch({
      type: dataActionType.SET_CATALOG,
      payload: adapterGoogleData(DB)
    });
  }
}
