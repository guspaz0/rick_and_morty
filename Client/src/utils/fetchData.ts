const url = import.meta.env.VITE_BACKEND

export async function fetchData(
    endpoint: string, 
    method: string, 
    data: object, 
    authorization: string,
    onErrorCode: number): Promise<Response>  {
    try {
        const options: RequestInit = {
            method: method? method : 'GET',
            mode: 'cors'
        }
        if (data) options.body = JSON.stringify(data)
        if (authorization) options.headers = { 'authorization': authorization }
        const response = await fetch(url+endpoint, options)
        if (response.ok) return await response.json()
        if (onErrorCode && response.status == onErrorCode) {
            const data = await response.json()
            throw new Error(JSON.stringify(data));
        } else {
            throw new Error("network error")
        }
    } catch (error) {
        
    }
}