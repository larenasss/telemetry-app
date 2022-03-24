import { createStore } from 'vuex';
// import defaultParamsInMessage from '@/settings/defaultParamsInMessage';


export const mutationsTypes = {
  setControllers: 'setControllers',
  setParams: 'setParams'
};

export const actionsTypes = {
  loadMessages: 'loadMessages',
  loadControllerById: 'loadControllerById'
};

export const gettersTypes = {
  getControllers: 'getControllers',
  getControllerById: 'getControllerById'
};

export const store = createStore({
  state() {
    return {
      loading: false,
      controllers: [],
      params: [],
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
            message: messagesForItem
          });
        }
        return acc;
      }, []);
      state.controllers = controllers;
      state.loading = true;
    },
    [mutationsTypes.setParams]: (state, payload) => {
      state.params = payload;
    }
  },
  actions: {
    [actionsTypes.loadMessages]: async({ commit }) => {
      try {
        const data = await fetch('/dataDB/db.json');
        data.json().then(messages => {
          const arrayParams = Object.keys(messages[0]).map(el => el);
          commit(mutationsTypes.setParams, arrayParams);
          commit(mutationsTypes.setControllers, messages);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    [gettersTypes.getControllers]: (state) => state.controllers,
    [gettersTypes.getControllerById]: (state) => id => {
      const controller = state.controllers.filter(cr => cr.Id === id)[0];
      /* controller.message = controller.message.map(ms => {
        Object.keys(ms).forEach(key => {
          if (defaultParamsInMessage.includes(key)) {
            delete ms[key];
          }
        });
        return ms;
      }); */

      return controller;
    }
  }
});