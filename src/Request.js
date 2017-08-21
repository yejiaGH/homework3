const DB = require('../lib/db.js')

class Request extends DB () {
    constructor(options={}) {
        super(options)
    }

    request() {
        super.request()
        return this
    }

    get() {
        console.log('get')
    }
}

let r = new Request({'url':'abc'}).request();
