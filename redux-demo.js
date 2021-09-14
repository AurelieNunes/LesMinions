//Etape 1 : Importer Redux
const redux = require('redux');

//Etape 2 : Initialiser le state
const initialState = {
    counter: 0
};


// Etape 3 : Creer le reducer (permettra de modif le state selon une action)
const reducer = (state= initialState, action) => {
    
    if(action.type === 'INC_COUNTER'){
        return {
            counter : state.counter +1
        }
    }
    else if(action.type === 'ADD_COUNTER'){
        return {
            counter : state.counter + action.value
        }
    }

    return state;
}

// Etape 4 : Créer le store (permettra de diffuser notre state partout (c'est un gros magasin))
const createStore = redux.createStore;
const store = createStore(reducer);

// Etape 5 : Créer l'abonnement au store (pour récupérer les dernières modifications)
store.subscribe(() => {
    console.log(store.getState());
})

//Etape 6 : Envoyer des actions (dispatch)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:5});