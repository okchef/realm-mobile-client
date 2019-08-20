export function getHex(map, coordinates) {
    return map.hexes[`${coordinates.x},${coordinates.y}`]
}

export function getHexInDirection(map, origin, direction) {
    const dest = getCoordsInDirection(origin, direction);
    return getHex(map, dest);
}

export function getHexAfterPath(map, origin, path) {
    let position = origin;
    path.forEach((step) => {
        position = getCoordsInDirection(position, step);
    });
    return getHex(map, position);
}

export function getCoordsInDirection(origin, direction) {
    const dest = {};
    switch (direction) {
        case "1":
            dest.x = origin.x + 1;
            dest.y = origin.y;
            break;
        case "2":
            if (origin.y % 2 === 0) {
                dest.x = origin.x;
            } else {
                dest.x = origin.x + 1;
            }
            dest.y = origin.y - 1;
            break;
        case "3":
            if (origin.y % 2 === 0) {
                dest.x = origin.x - 1;
            } else {
                dest.x = origin.x;
            }
            dest.y = origin.y - 1;
            break;
        case "4":
            dest.x = origin.x - 1;
            dest.y = origin.y;
            break;
        case "5":
            if (origin.y % 2 === 0) {
                dest.x = origin.x - 1;
            } else {
                dest.x = origin.x;
            }
            dest.y = origin.y + 1;
            break;
        case "6":
            if (origin.y % 2 === 0) {
                dest.x = origin.x;
            } else {
                dest.x = origin.x + 1;
            }
            dest.y = origin.y + 1;
            break;
        default:
            dest.x = origin.x;
            dest.y = origin.y;
    }
    return dest;
}