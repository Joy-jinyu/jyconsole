function jyConsole(...args) {
    console.log({
        ...args
    }, 'joy')
}

module.exports = jyConsole