const math = [];
 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = { 
    random: function(min, max) { return (Math.floor(Math.random() * (max - min) ) + min) / 10 },
    shuffle: function(arrValues) { return shuffle(arrValues)}
}