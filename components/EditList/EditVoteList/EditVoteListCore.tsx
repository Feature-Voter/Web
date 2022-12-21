import { v4 as uuid_v4 } from "uuid";

interface EditAction {
    type: Actions,
    payload: voteItem
}

export type voteItem = {
    id: string,
    title: string
}

interface State {
    items: Array<voteItem>,
    newItem: string
}

export enum Actions {
    addItem,
    changeEdit,
    deleteItem
}

export function reducer(state: State, action: EditAction) {
    const {type,  payload} = action
    switch(type) {
    case Actions.addItem:
        return {items: [...state.items, {id: uuid_v4(), title: state.newItem}], newItem: ""}
    case Actions.changeEdit:
        return {...state, newItem: payload.title }
    case Actions.deleteItem:
        return {...state, items: state.items.filter(item => item.id !== payload.id)}
    }
}