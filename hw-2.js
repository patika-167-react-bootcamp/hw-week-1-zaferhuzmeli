Array.prototype.includesCi = function(value) {
    return this.some(function(element) {
        return element.toLowerCase() === value.toLowerCase();
    });
};
const wordsList = [
    'aLIas',
    'consEQatur',
    'AlIas',
    'ConseQUaTur',
];

console.log(wordsList.includesCi('Alias'));
console.log(wordsList.includesCi('ALIAS'));