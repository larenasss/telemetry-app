import { createStore } from 'vuex';
import { defaultHideParamsSetting } from '@/settings/defaultHideParamsSetting';
import { createNewArrayParams } from '@/helpers/createNewArrayParams';
import { getItem } from '../helpers/persistanceStorage';
// import { getItem } from '@/helpers/persistanceStorage';

export const mutationsTypes = {
  setControllers: 'setControllers',
  setParamsSetting: 'setParamsSetting'
};

export const actionsTypes = {
  loadMessages: 'loadMessages',
  loadControllerById: 'loadControllerById'
};

export const gettersTypes = {
  getControllers: 'getControllers',
  getControllersForUI: 'getControllersForUI',
  getControllerById: 'getControllerById',
  getParamsSetting: 'getParamsSetting'
};

export const store = createStore({
  state() {
    return {
      loading: false,
      controllers: [],
      paramsSetting: [],
    };
  },
  mutations: {
    [mutationsTypes.setControllers]: (state, payload) => {
        const controllers = payload.reduce((acc, messages) => {
        const isSome = acc.some(ct => ct.Id === messages.Imei);
        if (!isSome) {
          const messagesForItem = payload.filter(ms => ms.Imei === messages.Imei);
          acc.push({
            Id: messages.Imei,
            TruckId: messages.TruckId,
            messages: messagesForItem
          });
        }
        return acc;
      }, []);
      state.controllers = controllers;
      state.loading = true;
    },
    [mutationsTypes.setParamsSetting]: (state, payload) => {
      state.paramsSetting = payload;
    }
  },
  actions: {
    [actionsTypes.loadMessages]: async({ commit }) => {
      try {
        const data = await fetch('/dataDB/db.json');
        data.json().then(messages => {
          const arrayParams = Object.keys(messages[0]).map(el => el);
          commit(mutationsTypes.setParamsSetting, createNewArrayParams(arrayParams, [...defaultHideParamsSetting, ...getItem('hideParamsSetting') ?? ""]));
          commit(mutationsTypes.setControllers, messages);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    [gettersTypes.getControllers]: (state) => state.controllers,
    [gettersTypes.getControllersForUI]: (state) => {
      return state.controllers.map(ctr => {
        return {
          Id: ctr.Id,
          TruckId: ctr.TruckId,
        };
      });
    },
    [gettersTypes.getControllerById]: (state) => id => {
      const controller = state.controllers.filter(cr => cr.Id === id)[0];
      return controller;
    },
  }
});