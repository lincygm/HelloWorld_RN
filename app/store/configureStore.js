/**
 * Created by goumou on 2017/3/3.
 */

import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);
export default store;

// const enhancer = compose(
//     //��Ҫʹ�õ��м��������ǰ��
//     applyMiddleware(thunk),
//     //����ģ����ô���monitors��������ʾ����DevTools
//     DevTools.instrument()
// )
//
// export default function createStoreWithMiddleware(initialState){
//     //ע�⣺����ֻ��redux>=3.1.0֧�ֵ���������
//     const store = createStore(rootReducer,initialState,enhancer)
//     return store
// }