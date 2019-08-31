import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DataLoaderDummy from './DataLoaderDummy';
import AggregatedResultPresenterList from './AggregatedResultPresenterList';
import ErrorMessage from './ErrorMessage';

function Search() {
    const [options, setOptions] = useState([]);
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
            setOptions(await new DataLoaderDummy().load());
        } catch (error) {
            // Something went wrong, we have to update the state.
            setHasError(true);
        } finally {
            // It's time to hide the loading indicator.
            setIsLoading(false);
        }
    }

    function handleChange() {

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
                    isLoading={isLoading}
                    isSearchable={true}
                    onChange={handleChange}
                    options={options}
                />

                <AggregatedResultPresenterList numberOfClicks={0} numberOfImpressions={0} />
            </div>
        );
    }

    return (
        <div className="search">
            {hasError ? renderErrorMessage() : renderTypeAhead()}
        </div>
    );
}

export default Search;
