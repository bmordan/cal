class Cal {
    constructor(month, year) {
        if (month && year) {
            this.date = new Date(year, Number(month) - 1)
            _setThisDay()
        } else {
            this.date = new Date()
            this.day = this.date.getDate()
        }

        this.month = this.date.getMonth()
        this.year = this.date.getFullYear()
        
        this.header = this._createHeader()
        this.body = this._createDates()
        this.output = [this.header, this.body].join('\n')
        
        console.log(this.output)
    }
    
    _createHeader() {
        const titleHeader = [this.date.toLocaleString('default', { month: 'long' }), this.year].join(' ')
        const daysHeader = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].join(' ')
        const pad = Math.round((daysHeader.length - titleHeader.length) / 2)
        return [titleHeader.padStart(titleHeader.length + pad, ' '), daysHeader].join('\n')
    }
    _createDates() {
        const firstDate = new Date(this.year, this.date.getMonth(), 1).getDay()
        const lastDate = new Date(this.year, this.date.getMonth() + 1, 0).getDate()
        const days = new Array(firstDate).fill('  ')
        for(let d = 1; d <= lastDate;d++) {
            if (d === this.day) {
                days.push(["\x1b[7m", String(d), "\x1b[0m"].join('').padStart(2, ' '))
            } else {
                days.push(String(d).padStart(2, ' '))
            }
        }
        const rows = []
        let slicer = 0
        while(slicer < days.length) {
            rows.push(days.slice(slicer, slicer += 7))
        }
        return rows.map(row => row.join(' ')).join('\n')
    }
    _setThisDay() {
        const today = new Date()
        if (today.getMonth() === this.date.getMonth() 
        && today.getFullYear() === this.date.getFullYear()) {
            this.day = today.getDate()
        } 
    }
}

new Cal(process.argv[2], process.argv[3])

module.exports = Cal
