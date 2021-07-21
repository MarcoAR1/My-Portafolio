const sortComplete = (a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];


const name = [['Jone', 200], ['Ara', 700], ['Ara', 100],['tna', 500],['Jone', 200], ['Clara', 500], ['Clara', 100],['tna', 500]]
console.log(name.sort(sortComplete))