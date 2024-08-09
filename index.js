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

    console.log( { landCoords } );

    landCoords.forEach(coord => {
        // if x +- 1 / y +- 1 is in land coords then is connected and only 1 island
        const [x,y] = coord.split(',');

        const left = `${x-1},${y}`;
        const right = `${(x*1)+1},${y}`;
        const up = `${x},${y-1}`;
        // const down = (y + 1);

        const connectedAbove = landCoords.includes(up);
        const connectedToLeft = landCoords.includes(left);

        const data = { y, x, up, left, right };
        
        // TODO: if connected to right are connected above, dont increment
        let isExistingIsland = false;
        let nextX = (x * 1) + 1;
        let xMax = coords[0].length;
        let aboveNewX;
        let rightOfNewX = right;

        // console.log( { isExistingIsland, connectedAbove, connectedToLeft, data, xMax, nextX } );

        while( 
            (!connectedAbove && !connectedToLeft)
                && landCoords.includes( rightOfNewX )
                && nextX < xMax && !isExistingIsland ) {
            rightOfNewX = `${nextX},${y}`;
            aboveNewX = `${nextX},${y-1}`;

            // console.log( { nextX, rightOfNewX, aboveNewX } );

            if ( landCoords.includes( rightOfNewX ) && landCoords.includes( aboveNewX ) ) {
                isExistingIsland = true;
            }
            nextX++;
        }

        // console.log( { connectedAbove, connectedToLeft, connectedToRight, data } );

        if ( !isExistingIsland && !connectedAbove && !connectedToLeft ) {
            // console.log( 'ONE MORE ISLAND!', { isExistingIsland, connectedAbove, connectedToLeft, data } );
            totalIslands++;
        }

    });

    // console.log( {coords, landCoords} );

    return totalIslands;
}