/* eslint-disable import/prefer-default-export */

import { KEY } from '../redux/middlewares/api';

export const createApiAction = (lifecycle, { type, payload, meta = {} }) => ({
  type,
  payload,
  meta: {
    ...meta,
    [KEY.LIFECYCLE]: lifecycle,
  },
});
