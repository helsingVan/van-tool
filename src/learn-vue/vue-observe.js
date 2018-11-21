/*
*   标准vue obervue
*/
class Vue {
    constructor (option) {
        this.data = option.data;
        this._observe(this.data, option.render);
    }

    _observe (obj, callback) {
        Object.keys(obj).forEach(key => {
            ((obj, key, value, callback) => {
                Object.defineProperty(obj, key, {
                    get: () => value,
                    set: (newValue) => {
                        value = newValue;
                        callback();
                    }
                });
            })(obj, key, obj[key], callback);
        });
    }
}

var app = new Vue({
    data: {
        a: '1',
        b: '2'
    },
    render () {
        console.log('render');
    }
});

/*
*   vue observe proxy
*/
class VueProxy {
    constructor (option) {
        this.data = option.data;
        this._observe(this.data, option.render);
    }

    _observe (obj, callback) {
        Object.keys(obj).forEach(key => {
            Object.defineProperty(this, key, {
                get: () => this.data[key],
                set: (newValue) => {
                    this.data[key] = newValue;
                    callback();
                }
            });
        });
    }
}

var app2 = new VueProxy({
    data: {
        a: 1,
        b: 2
    },
    render () {
        console.log('render');
    }
});

