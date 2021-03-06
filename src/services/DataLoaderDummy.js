import delay from 'lodash/delay';
import map from 'lodash/map';

class DataLoaderDummy {
    /**
     * Simulates an async operation with dummy data.
     * 
     * @returns {Promise<Array<{label: String, value: String, clicks: Number, impressions: Number}>>}
     */
    async load() {
        return new Promise((resolve) => {
            delay(() => resolve(createSearchResultSet()), 5000);
        });
    }
}

/**
 * Creates a dummy search result set and returns that.
 * 
 * @returns {Array<{label: String, value: String, clicks: Number, impressions: Number}>}
 */
function createSearchResultSet() {
    return map(['dog', 'cat', 'parrot', 'elephant', 'seal', 'ladybug', 'hamster', 'monkey'], (animal, index) => itemToSearchResult(animal, index + 1));
}

/**
 * Creates and returns a search result item by the given parameters.
 * 
 * @param {String} item The label of the item.
 * @param {Number} index The index of the item.
 * @returns {{label: String, value: String, clicks: Number, impressions: Number}}
 */
function itemToSearchResult(item, index) {
    const multiplier = (10 * index);

    return {
        label: item.charAt(0).toUpperCase() + item.slice(1),
        value: item,
        clicks: 1 * multiplier,
        impressions: 10 * multiplier,
    }
}

export default DataLoaderDummy;
