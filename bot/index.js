require('./../config/globalConfig');

const Oracle = require('./../oracles/simpleOracle');
const Bot = require('./Bot');

const dataAccounts = require('../data/accounts.json');

const seed = dataAccounts.bot.seed;
const oracle = new Oracle();
const bot = new Bot(seed, oracle);

bot.run();
