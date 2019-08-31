import axios from 'axios';
import concat from 'lodash/concat';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import sumBy from 'lodash/sumBy';
import uniqueId from 'lodash/uniqueId';

class DataLoaderMockyIo {
    /**
     * Loads the metrics from mocky.io.
     * 
     * @returns {Promise<Array<{label: String, value: String, clicks: Number, impressions: Number}>>}
     */
    async load() {
        return axios
            .get('http://www.mocky.io/v2/5cd93aeb300000b721c014b0')
            .then(response => {
                const responseData = transformResponseData(response.data);

                return sortBy(concat(processCampaigns(responseData), processChannels(responseData)), 'label');
            })
            .catch(() => {
                throw new Error(`The metrics couldn't be loaded!`);
            });
    }
}

/**
 * Processes the given data and returns the list of the campaigns.
 * 
 * @param {{Array<{campaign: String, channel: String, clicks: Number, impressions: Number}>}} data The response data to process.
 * @returns {{Array<{campaign: String, channel: String, clicks: Number, impressions: Number}>}} The processed campaigns. 
 */
function processCampaigns(data) {
    return map(groupBy(data, 'campaign'), (items) => mapMetricItem(items, 'campaign'));
}

/**
 * Processes the given data and returns the list of the channels.
 * 
 * @param {{Array<{campaign: String, channel: String, clicks: Number, impressions: Number}>}} data The response data to process.
 * @returns {{Array<{campaign: String, channel: String, clicks: Number, impressions: Number}>}} The processed channels. 
 */
function processChannels(data) {
    return map(groupBy(data, 'channel'), (items) => mapMetricItem(items, 'channel'));
}

/**
 * Transforms the given data into a list.
 * 
 * @param {Array<String>} data The response data.
 * @returns {Array<{campaign: String, channel: String, clicks: Number, impressions: Number}>} The transformed data.
 */
function transformResponseData(data) {
    // Removing the first line.
    const csvLines = data.split('\n').splice(1);
    // Creating the proper list.
    return map(csvLines, (item) => {
        const data = item.split(',');

        return {
            campaign: data[0],
            channel: data[1],
            clicks: +data[2],
            impressions: +data[3]
        };
    });
}

/**
 * Maps the metric item.
 * 
 * @param {Array} items The label of the metric item.
 * @param {String} key The key of the metric item. 
 */
function mapMetricItem(items, key) {
    return {
        label: items[0][key],
        value: uniqueId('metric_'),
        clicks: sumBy(items, 'clicks'),
        impressions: sumBy(items, 'impressions')
    };
}

export default DataLoaderMockyIo;
