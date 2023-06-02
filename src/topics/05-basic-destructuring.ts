

interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015
    },
}

const song = 'New Song'
// Se desestructura las propiedades del objeto
const {
    song: anotherSong,
    songDuration:duration,
    details
} = audioPlayer

const {author} = details

console.log('Song: ', anotherSong)
console.log('Song: ', song)
console.log('Duration: ', duration)
console.log('Author: ', author)

const [ ,  , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
// const trunks = dbz[3] || 'No hay personaje'

// console.error('Personaje 3:', dbz[3])
console.error('Personaje 3:', trunks)

export {}