#!/usr/bin/env node

var process = require('process');
var minimist = require('minimist');
var lookAroundYou = require('../lib/look-around-you');

var args = process.argv.slice(2);
var argv = minimist(args);

if (!argv.text && args.length && !args[0].startsWith('--')) {
    argv.text = args.join(' ');
}

lookAroundYou.run(argv.text, argv.delay);
