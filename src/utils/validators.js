export const required = (value) => {
    if(value) return undefined;
    return "Заполните ячейку"
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length > maxLength) return `Максимально ${maxLength} символов`
    return undefined;
}
export const minLengthCreator = (minLength) => (value) =>{
    if(value.length < minLength) return `Минимально ${minLength} символа`
    return undefined;
}


export const onlyLetters = value =>
    value && /[^a-zA-Za-яА-Я]/i.test(value)
        ? 'Введите только буквы'
        : undefined

