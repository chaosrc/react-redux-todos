

export const getInputValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('hello hooks'), 1000)
    })
}