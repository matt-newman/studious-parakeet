const data = [
    `WLWWW`,
    `WLWWW`,
    `WWWLW`,
    `WWLLW`,
    `LWWLL`,
    `LLWWW`,
];

export const getNumberOfIslands = ( grid ) => {
    let totalIslands = 0;

    // connected coords == island

    const coords = grid.map(row => row.split(''));
    const landCoords = [];

    console.log( {coords});

    coords.forEach((row, yIndex) => {
        row.forEach((item, xIndex) => {
            if( item === 'L' ) {
                landCoords.push(`${xIndex},${yIndex}`);
            }
        });
    });

    landCoords.forEach(coord => {
        // if x +- 1 / y +- 1 is in land coords then is connected and only 1 island
        const [x,y] = coord.split(',');

        const left = `${x-1},${y}`;
        const right = `${(x*1)+1},${y}`;
        const up = `${x},${y-1}`;
        // const down = (y + 1);

        const connectedAbove = landCoords.includes(up);
        const connectedToLeft = landCoords.includes(left);
        const connectedToRight = landCoords.includes(right);
        const data = { x, y, up, left, right };

        // console.log( { connectedAbove, connectedToLeft, connectedToRight, data } );

        if ( !connectedAbove && !connectedToLeft && !connectedToRight ) {
            console.log( { landCoords, connectedAbove, connectedToLeft, connectedToRight, data } );
            totalIslands++;
        }

    });

    // console.log( {coords, landCoords} );

    return totalIslands;
}