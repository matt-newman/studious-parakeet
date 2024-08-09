import { getNumberOfIslands } from './index';

const firstTestGrid = [
    `WLWWW`,
    `WLWWW`,
    `WWWLW`,
    `WWLLW`,
    `LWWLL`,
    `LLWWW`,
];

const noIslands = [
    'WWWWWW'
]

const oneIslandVertical = [
    'WWLWW',
    'WWLWW'
]

const oneIslandHoriz = [
    'WWLLW',
    'WWWWW'
]

const oneIsland = [
    'WWLLW',
    'WWLWW'
]

const joinedIsland = [
    'WWWLW',
    'WWLLW'
]

describe('counting islands', () => {
    it('should return zero when there is no islands', () => {
        const result = getNumberOfIslands( noIslands );
        expect( result ).toBe( 0 );
    })

    it('should return one when there is 1 island - vertical', () => {
        const result = getNumberOfIslands( oneIslandVertical );
        expect( result ).toBe( 1 );
    })

    it('should return one when there is 1 island - horizontal', () => {
        const result = getNumberOfIslands( oneIslandHoriz );
        expect( result ).toBe( 1 );
    })

    it('should return one when there is 1 island - second', () => {
        const result = getNumberOfIslands( oneIsland );
        expect( result ).toBe( 1 );
    })

    it('should return one when there is 1 island - joinedIsland', () => {
        const result = getNumberOfIslands( joinedIsland );
        expect( result ).toBe( 1 );
    })

    it('should return the number of islands', () => {
        const result = getNumberOfIslands( firstTestGrid );
        expect( result ).toBe( 3);
    })
})