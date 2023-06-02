
// Si la variable no cambiará su valo entonces se declara const
const name: string = 'Strider';
let hpPoints: number | 'FULL' = 95; // tipo número o la palabra FULL
const isAlive: boolean = true;

hpPoints = 'FULL'

console.log({
    name, hpPoints, isAlive
})

export {};