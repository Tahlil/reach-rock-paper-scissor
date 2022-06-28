import { loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const addAlice = await stdlib.newTestAccount(startingBalance);
const addBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = ['Rock', 'Paper', 'Scissor'];
const OUTCOME = ['Bob Wins', 'Draw', 'Alice wins']
const Player = (Who) => ({
    getHand: () => {
        const hand = Math.floor(Math.random() * 3);
        console.log(`${Who} played ${HAND[hand]}`);
        return hand;
    }
})

await Promise.all([
    ctcAlice.p.Alice({

    }),
    ctcAlice.p.Bob({

    }),
])