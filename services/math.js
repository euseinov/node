const math = [];
 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function fibonacci(index, cache) {
    cache = cache || {};
  
    if (cache[index]) return cache[index];
    if (index <= 2) return 1;

    return cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
}

module.exports = { 
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },

    shuffle,
    fibonacci
}