function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function isArray(item) {
    return (item && typeof item === 'object' && Array.isArray(item));
}

export function mergeRealmState(realmState, realmStateFragment) {
    let mergedRealmState;

    if (isObject(realmStateFragment)) {
        mergedRealmState = {...realmState};
        for (const key in realmStateFragment) {
            mergedRealmState[key] = mergeRealmState(realmState ? realmState[key] : undefined, realmStateFragment[key]);
        }
    } else if(isArray(realmStateFragment)) {
        mergedRealmState = [...realmState];
        for (const key in realmStateFragment) {
            mergedRealmState[key] = mergeRealmState(realmState ? realmState[key] : undefined, realmStateFragment[key]);
        }
    }
    else if(realmStateFragment !== undefined) {
        mergedRealmState = realmStateFragment;
    } else {
        mergedRealmState = realmState;
    }

    return mergedRealmState;
}