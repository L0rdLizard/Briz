import { createStore } from 'vuex'

// export const store = createStore({
//     state: {
//         formData: {}
//     },
//     mutations: {
//         setFormData(state, data) {
//             state.formData = data
//         }
//     }
// })

interface State {
    formData: {
        SFrom: string;
        STo: string;
        SDate: string;
        SDateBack: string;
    };
}

export const store = createStore<State>({
    state: {
        formData: {
            SFrom: '',
            STo: '',
            SDate: '',
            SDateBack: ''
        }
    },
    mutations: {
        setFormData(state, data) {
            state.formData = data
        }
    }
})
