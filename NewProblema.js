const queries = [[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]

function freqQuery(queries) {
    const data = {};
    const number = [];
    function trueOrFalse(quantity) {
        let counter = 0;
        for (let i = 0; i < number.length; i += 1) {
            if (data[number[i]] === quantity) {
                counter = 1;
                break
            }
        }
        return counter
    }
    for (let i = 0; i < queries.length; i += 1) {
        if (queries[i][0] === 1) {
            if (data[queries[i][1]]) {
                data[queries[i][1]] += 1
            }
            else {
                data[queries[i][1]] = 1
                number.push(queries[i][1])
            }
        }
        if (queries[i][0] === 2) {
            if (data[queries[i][1]]) {
                data[queries[i][1]] -= 1
                if (data[queries[i][1]] === 0) {
                    delete data[queries[i][1]]
                }
            }
        }
        if (queries[i][0] === 3) {
            if (queries[i][1] > i) {
                console.log(0)
            }
            else { console.log(trueOrFalse(queries[i][1])) }
        }
    }

}
freqQuery(queries)
