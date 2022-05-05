const { expect, test } = require('@jest/globals')
const path = require('path')
const { spawn } = require('child_process')
const Cal = require('./Cal')

describe('cal', () => {
    test('cal will take a date as an argument', () => {
        const cal = new Cal(11, 1975)
        expect(cal.month).toBe(11)
        expect(cal.year).toBe(1975)
        expect(cal.date instanceof Date).toBeTruthy()
    })

    test('cal will instantiate with todays date with no args', () => {
        const cal = new Cal()
        const today = new Date()
        expect(cal.month).toEqual(today.getMonth())
        expect(cal.year).toEqual(today.getFullYear())
    })

    test('will write a string to stdout', done => {
        const calPath = path.join(__dirname, 'Cal.js')
        const cmd = spawn('node', [calPath])
        cmd.stdout.on('data', data => {
            cmd.kill('SIGINT')
            expect(data.toString()).toMatch(/Mo Tu We/g)
            done()
        })
    })

    test('header is padded', done => {
        const calPath = path.join(__dirname, 'Cal.js')
        const cmd = spawn('node', [calPath])
        cmd.stdout.on('data', data => {
            expect(data.toString().substring(0,5)).toEqual('     ')
            cmd.kill('SIGINT')
            done()
        })        
    })

    test('dates of month are padded', done => {
        const calPath = path.join(__dirname, 'Cal.js')
        const cmd = spawn('node', [calPath, 11, 1975])
        cmd.stdout.on('data', data => {
            const dates = data.toString().split('Su').pop()
            const rows = dates.split('\n')
            expect(rows[0]).toEqual('                   1')
            cmd.kill('SIGINT')
            done()
        })        
    })
    test.skip('can deal with args in wrong order', () => {
        expect(() => new Cal(1975, 11)).toThrow()
        try {
            new Cal(1975, 11)
        } catch(err) {
            expect(err.message).toBe("Usage: cal [month, year]")       
        }
    })
})