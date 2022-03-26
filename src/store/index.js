import { createStore } from 'vuex';
import { createArrayParamsSettingForUI } from '@/helpers/createArrayParamsSettingForUI';
import { getItem } from '@/helpers/persistanceStorage';

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
        const isExist = acc.some(ct => ct.Id === messages.Imei);
        if (!isExist) {
          const messagesByItem = payload.filter(ms => ms.Imei === messages.Imei);
          acc.push({
            Id: messages.Imei,
            TruckId: messages.TruckId,
            messages: messagesByItem
          });
        }
        return acc;
      }, []);
      state.controllers = controllers;
      state.loading = true;
    },
    [mutationsTypes.setParamsSetting]: (state, payload) => {
      state.paramsSetting = createArrayParamsSettingForUI(payload, [...getItem('hideParamsSetting') ?? ""]);
    }
  },
  actions: {
    [actionsTypes.loadMessages]: async({ commit }) => {
      try {
        const data = await fetch('https://telemetry-app-56995-default-rtdb.firebaseio.com/.json');
        data.json().then(messages => {
          const arrayParams = Object.keys(messages[0]).map(el => el);
          commit(mutationsTypes.setParamsSetting, arrayParams);
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
          TruckId: ctr.TruckId ?? 0,
        };
      });
    },
    [gettersTypes.getControllerById]: (state) => id => {
      const controller = state.controllers.filter(cr => cr.Id === id)[0];
      return controller;
    },
  }
});