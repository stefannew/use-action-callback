import { Action } from 'redux';

export type DefaultState = {
  lastAction: Action;
}

export type Callback = (action: Action) => void;

export type UseActionCallback = <State extends DefaultState>(action: Action, callback: Callback) => void;