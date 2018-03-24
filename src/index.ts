import * as clients from './lib/clients';
import * as utils from './lib/utils';
import logger from './apps/rtm-logger';
import commander from './apps/commader';

logger(clients);
commander(clients, utils);
