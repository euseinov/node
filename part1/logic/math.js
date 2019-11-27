const math = [];
 
module.exports = class math{
    constructor(min = 0, max = 100){
        this.max = Math.floor(max);
        this.min = Math.ceil(min);
    }
    average() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
    shuffle() {
        return 'ssf'
    }
}