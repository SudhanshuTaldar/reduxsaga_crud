export function addData(data)
{
    return{
        type:"ADD_DATA",
        payload:data
    }
}

export function deleteData(data)
{
    return{
        type:"DELETE_DATA",
        payload:data
    }
}

export function updateData(data)
{
    return{
        type:"UPDATE_DATA",
        payload:data
    }
}