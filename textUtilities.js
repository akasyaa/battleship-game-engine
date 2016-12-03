export default function titleCase(name) {
    var words = name.split(' ');
    var titleCasedWords = words.map(function(word) {
        if (word === 'of')
            return word;
        else if (word === 'the')
            return word;

        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(' ');
}
