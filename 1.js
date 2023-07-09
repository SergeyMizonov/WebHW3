let input = Number.parseInt(prompt('Введите температуру в градусах Цельсия: '));
alert(`Градусов Цельсия: ${input}\n Градусов Фаренгейта: ${Math.round((9 / 5) * input + 32)}`)