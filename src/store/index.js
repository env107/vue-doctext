import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);
const appinfo = {
    state:{
        version:"1.0",
        versionType:"build"
    },
    getters:{
        version(state){
            return state.versionType + " - " + state.version;
        }
    }

};




const store = new Vuex.Store({
    modules:{
        appinfo
    }
});

export default  store;