export const debounce = <T>(action: (e: T) => void, time = 500): ((e: T) => void) => {
    let searchDelay: NodeJS.Timeout;

    return (e: T) => {
        clearTimeout(searchDelay);

        searchDelay = setTimeout(() => {
            action(e);
        }, time);
    };
};
