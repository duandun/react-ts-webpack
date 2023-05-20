
Function.prototype.bind = function() {
    const args = Array.prototype.slice.call(arguments, 1);
    const fn = this;
    return function() {
        const params = Array.prototype.slice.call(arguments);
        const finalParams = [].concat(args, params);
        fn.apply(args[0], finalParams);
    };
};

function curry(fn) {
    return function nest(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        }
        return function(arg) {
            return nest(...args, arg);
        };
    };
}

const AsyncTimer = {
    arr: [],
    save(...n) {
        this.arr = [].concat(this.arr, n);
        return this.save.bind(this);
    },
    toString() {
        return this.arr;
    },
    fire() {
        for (let i = 0; i < this.arr; i++) {
            this._handleItem(this.arr[i]).then(() => this._handleItem(this.arr[i++]));
        }
        while (this.arr.length) {
            const n = this.arr.pop();
            this._handleItem(n);
        }
    },

    recurseFn(arr) {
        if (!arr.length) {
            return;
        }
        const n = arr.shift();
        return this._handleItem(n).then(() => this.recurseFn(arr));
    },

    _handleItem(n) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(n);
                resolve();
            }, n * 1000);
        });
    }
};

// AsyncTimer.save(1).save(2).save(4);
// AsyncTimer.recurseFn(AsyncTimer.arr);

export default AsyncTimer;
