interface PanelState {
    value: string
}
interface PanelAction {
    type: string,
    payload: string
}

const defaultReducer: PanelState = {
    value: 'Все записи'
}
export const panelReducer = (state = defaultReducer, action: PanelAction) => {
    switch (action.type) {
        case "CHANGE_PANEL":
            return {...state, value: action.payload};
        default:
            return state;
    }

}

export const  changePanelAction = (payload: string) => {
    return {type: "CHANGE_PANEL", payload}
}