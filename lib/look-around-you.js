// Defaults
var _delay = 50;
var _text = 'LOOK AROUND YOU ';

// Kill flag
var _kill = false;

/**
 * ## run
 *
 * Start printing
 *
 * @param  {String} [text]: what to print
 * @param  {Number} [delay]: how long to wait between printing
 * @return {Promise}
 */
function run(text, delay) {
    if (_kill) {
        _kill = false;
        return;
    }

    if (typeof text !== 'string') text = _text;
    if (typeof delay !== 'number') delay = _delay;

    process.stdout.write(text);
    return new Promise(function(resolve){
        setTimeout(resolve, delay);
    }).then(function() {
        run(text, delay);
    });
}

/**
 * ## stop
 *
 * Shut up
 */
function stop() {
    _kill = true;
}

/**
 * # Module 1
 */
var lookAroundYou = {
    run: run,
    stop: stop,
};

Object.defineProperties(lookAroundYou, {
    delay: {
        get: function() {
            return _delay;
        },
        set: function(delay) {
            _delay = delay;
        },
    },
    text: {
        get: function() {
            return _text;
        },
        set: function(text) {
            _text = text;
        },
    },
});

module.exports = lookAroundYou;
