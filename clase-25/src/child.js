const sumar = () => {
    let resultado = 0;
    for (let i = 0; i < 5e9; i++) {
        resultado += i;
    }

    return resultado;
}

process.on('message', (msg) => {
    const resultadoSuma = sumar();
    process.send(resultadoSuma);
})