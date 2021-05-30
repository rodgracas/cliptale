/**
 * 
 * @param {} date 
 * @returns 
 */
function getFormattedDate(date) {
    /**
     * Helper function to append a zero if a certain number is less or equal to 9.
     * This is used on date format.
     *
     * @param {Number} number
     * @returns {String|Number}
     * @private
     */
    const _appendZero = (number) => {
        if (number <= 9) {
            return `0${number}`;
        }

        return number;
    }

    return `${date.getFullYear()}_${_appendZero(date.getMonth() + 1)}_${_appendZero(date.getDate())}`;
}

module.exports = {
    getFormattedDate
}