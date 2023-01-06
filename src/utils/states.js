import { proxy } from 'valtio';
import { proxyMap } from 'valtio/utils';

export default proxy({
  history: [],
  statuses: proxyMap([]),
  home: [],
  homeNew: [],
  homeLastFetchTime: null,
  notifications: [],
  notificationsNew: [],
  notificationsLastFetchTime: null,
  accounts: new Map(),
  reloadStatusPage: 0,
  spoilers: proxyMap([]),
  scrollPositions: new Map(),
  // Modals
  showCompose: false,
  showSettings: false,
  showAccount: false,
  composeCharacterCount: 0,
});
