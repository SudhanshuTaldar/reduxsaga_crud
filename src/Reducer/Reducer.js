const initial={data:[]};
const reducer = (state=initial,action) =>{

    switch(action.type)
    {
        case 'ADD_DATA_ASYNC':
            return({...state,
                data:state.data.concat(action.payload)
            });
        case 'DELETE_DATA_ASYNC':
            return({...state,
                data:state.data.filter((content)=>content.id!=action.payload)
            });
        case "UPDATE_DATA_ASYNC":
            return({
                ...state,
                data:state.data.map((content)=>content.id===action.payload.id ? {...content,name:action.payload.name,email:action.payload.email}:content)
            });
        default:
            return state;
    }
}

export default reducer;