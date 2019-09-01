import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AggregatedResultPresenterList from '../AggregatedResultPresenterList/AggregatedResultPresenterList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import selectStyles from './selectStyles';

/**
 * @param {{loadData: Function}} props The props of the component.
 */
function Search(props) {
    const [options, setOptions] = useState([]);
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [numberOfImpressions, setNumberOfImpressions] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []); // Passing an empty array because we want to load the data only once, this will prevent to execute 'useEffect' on every render.

    /**
     * Loads the search data.
     */
    async function loadData() {
        try {
            // Loading data, setting options.
            setOptions(await props.loadData());
        } catch {
            // Something went wrong, we have to update the state.
            setHasError(true);
        } finally {
            // It's time to hide the loading indicator.
            setIsLoading(false);
        }
    }

    function handleChange(selected) {
        let clicks = 0;
        let impressions = 0;

        if (selected !== null) {
            clicks = selected.clicks;
            impressions = selected.impressions;
        }

        setNumberOfClicks(clicks);
        setNumberOfImpressions(impressions);
    }

    function renderErrorMessage() {
        return (
            <ErrorMessage message="The data couldn't be loaded!" />
        );
    }

    function renderTypeAhead() {
        return (
            <div>
                <Select
                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                    isClearable={true}
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    isSearchable={true}
                    onChange={handleChange}
                    openMenuOnClick={false}
                    options={options}
                    placeholder="What are you looking for?"
                    noOptionsMessage={() => 'Oh no, there are no matches for the given term! :('}
                    styles={selectStyles}
                />

                <AggregatedResultPresenterList numberOfClicks={numberOfClicks} numberOfImpressions={numberOfImpressions} />
            </div>
        );
    }

    return (
        <div className="search">
            {hasError ? renderErrorMessage() : renderTypeAhead()}
        </div>
    );
}

Search.propTypes = {
    loadData: PropTypes.func.isRequired
};

export default Search;
