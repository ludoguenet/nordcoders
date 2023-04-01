import { test, expect } from "vitest";

const mergeRecursive = (
    firstItem: Object|Array<string>,
    secondItem: Object|Array<string>,
) => {
    if (
        Array.isArray(firstItem) &&
        Array.isArray(secondItem)
    ) {
       return [...firstItem, ...secondItem];
    }

    const merged = {... firstItem};

    for (const key of Object.keys(secondItem)) {
        if (
            typeof firstItem[key] === 'object' ||
            Array.isArray(firstItem[key])
        )
            merged[key] = mergeRecursive(firstItem[key], secondItem[key]);
        else
            merged[key] = secondItem[key];
    }

    return merged;
}

test('deep merge with overlaps', () => {
    expect(mergeRecursive(
        ['test', 'test2'],
        ['test3', 'test4'],
    )).toEqual(['test', 'test2', 'test3', 'test4']);

    expect(mergeRecursive(
        {name: 'ludo', age: 30},
        {feature: 'awesome', age: 32},
    )).toEqual({name: 'ludo', age: 32, feature: 'awesome'})

    expect(mergeRecursive(
        {
            name: 'ludo', accounts: {
                github: 'ludoguenet',
            }
        },
        {
            accounts: {
                twitter: 'nordcoders',
            }
        },
    )).toEqual({name: 'ludo', accounts: {
            github: 'ludoguenet',
            twitter: 'nordcoders',
        }
    })
});