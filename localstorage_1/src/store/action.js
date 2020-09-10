export const GET_VALUE='GET_VALUE';

export const getValue=(value)=>{
    return{
        type:GET_VALUE,
        payload:value
    }
}