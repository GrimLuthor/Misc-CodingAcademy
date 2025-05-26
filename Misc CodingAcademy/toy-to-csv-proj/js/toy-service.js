'use strict'

var gSortBy = ''
var gSortDirection = 1
var gToys = [
    createToy('Teddy Bear', 15, 1312504831014, 'cute'),
    createToy('Dinosaur', 10, 1412541496669, 'scary'),
    createToy('RC Car', 30, 1532544443836, 'fast'),
    createToy('Barby', 12, 1600544939113, 'house'),
    createToy('Telescope', 100, 1552542628671, 'science')
]

function getToys() {
    _sortToys()
    return gToys
}

function setSort(sortBy) {
    gSortDirection = (gSortBy === sortBy)? gSortDirection * -1 : 1
    gSortBy = sortBy
}


function toggleToy(toyId, isSelected) {
    const toy = gToys.find(toy => toy.id === toyId)
    toy.isSelected = isSelected
}

function selectAllToys(isSelected) {
    gToys.forEach(toy => toy.isSelected = isSelected)
}

function getAsCSV() {
    let csvStr = `Id, Name, Price, Category, Created At`
    gToys.forEach(toy => {
        if (!toy.isSelected) return
        const date = new Date(toy.createdAt).toDateString()
        const csvLine = `\n${toy.id}, ${toy.name}, \$${toy.price}, ${toy.category}, ${date}`
        csvStr += csvLine
    })
    return csvStr
}
function getAsCSVGeneric() {
    let csvStr = Object.keys(createToy()).map(capitlaize).join()
    gToys.forEach(toy => {
        if (!toy.isSelected) return
        const csvLine = Object.values(toy).join()
        csvStr += ('\n' + csvLine)
    })
    return csvStr
}



function createToy(name, price, createdAt, category) {
    return {
        id: _makeId(),
        name,
        price,
        createdAt,
        category,
        isSelected: price > 20
    }
}

function getFormatDate(time) {
    const date = new Date(time)
    return date.toDateString()
}

function _makeId(length = 6) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function capitlaize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function _sortToys() {
    if (!gSortBy) return
    const isNumericSort = typeof gToys[0][gSortBy] === 'number'

    if (isNumericSort) {
        gToys.sort((toy1, toy2) => {
            return (toy1[gSortBy] - toy2[gSortBy]) * gSortDirection
        })
    } else {
        gToys.sort((toy1, toy2) => {
            return (toy1[gSortBy].localeCompare(toy2[gSortBy])) * gSortDirection
        })
    }
}
