export default {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'white',
        borderRadius: 0,
        borderColor: '#9c9c9c',
        borderWidth: 1,
        boxShadow: 'none',
        marginBottom: 30,
        marginTop: 20,
        transition: 'border-color 0.5s, box-shadow 0.3s',

        ':hover': {
            borderColor: '#1d354d',
            boxShadow: '0px 0px 5px 0px rgba(29, 53, 77, 0.5)'
        }
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? '#1d354d' : '#fff',
            color: isFocused ? '#fff' : '#1d354d',
            transition: 'background-color 0.25s, color 0.25s'
        };
    },

    clearIndicator: (styles) => ({
        ...styles,
        backgroundColor: '#1d354d',
        borderRadius: '100%',
        color: '#fff',
        cursor: 'pointer',
        height: 28,
        padding: 4,
        transition: 'transform 0.5s',
        width: 28,

        ':hover': {
            color: '#fff',
            transform: 'rotate(360deg)'
        }
    }),

    placeholder: (styles) => ({
        ...styles,
        fontStyle: 'italic',
        textAlign: 'center',
        width: `calc(100% + ${indicatorsContainerWith}px)`
    }),

    indicatorsContainer: (styles) => ({
        ...styles,
        justifyContent: 'center',
        width: indicatorsContainerWith
    }),

    menu: (styles) => ({
        ...styles,
        borderRadius: 0,
        marginBottom: 0,
        marginTop: 3,
        padding: 0
    }),

    noOptionsMessage: () => ({
        backgroundColor: '#ff3860',
        color: '#fff',
        fontWeight: 'bold',
        padding: `10px 5px`,
        textAlign: 'center'
    })
};

const indicatorsContainerWith = 40;
