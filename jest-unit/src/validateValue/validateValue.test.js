const validateValue = require('./validateValue')

test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true)
    })

    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })

    test('Больше коректного', () => {
        expect(validateValue(150)).toBe(false)
    })
})