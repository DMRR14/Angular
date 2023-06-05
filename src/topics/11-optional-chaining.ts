

export interface Passenger{
    name: string
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Diana'
}
const passenger2: Passenger = {
    name: 'Marina',
    children: ['Karol', 'Pepito'],
}

const returnChildrenNumber = ( passenger: Passenger) => {

    // const  howManyChildren = passenger.children?.length || 0
    const  howManyChildren = passenger.children!.length

    console.log(passenger.name, howManyChildren)
}

returnChildrenNumber(passenger2)