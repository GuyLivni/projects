/* eslint-disable import/prefer-default-export */
/* @flow */

import { KEY } from "../redux/middlewares/api";

type actionCreator = {
  type: string,
  payload: Object,
  meta: Object
};

export const createApiAction = (
  lifecycle: string,
  { type, payload, meta = {} }: actionCreator
) => ({
  type,
  payload,
  meta: {
    ...meta,
    [KEY.LIFECYCLE]: lifecycle
  }
});
