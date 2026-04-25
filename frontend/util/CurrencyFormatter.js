




export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});




export const http = async (route, method, order) => {

    const response = await fetch(`http://localhost:3001/${route}`, {
        method: method,
        body: JSON.stringify({ order }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response

}
