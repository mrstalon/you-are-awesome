// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value',
    });
    return propertyName;
};

const createProtoMagicObject = () => {
    const magic = () => {};
    magic.prototype = magic.__proto__;
    return magic;

};

let incrementValue = 0;
const incrementor = () => {
    incrementValue++;
    return incrementor;
};

incrementor.toString = () => incrementValue;

let asyncIncrementValue = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        asyncIncrementValue++;
        resolve(asyncIncrementValue);
    });
};

const createIncrementer = () => {
    this.currentValue = 0;

    function next() {
        this.currentValue++;
        return this;
    }
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    let propsCount = 0;

    (countProps = (object) => {
        propsCount += Object.keys(object).length;

        Object.keys(object).forEach((key) => {
            if (typeof object[key] === 'object') {
                countProps(object[key]);
            }
        });
    })(obj);

    return propsCount;
};
const createSerializedObject = () => {
    return {
        value: 'hello',
        toJSON: () => 'hello',
        toString: () => 'hello',
    };
};
const toBuffer = () => {};
const sortByProto = (objects) => objects.sort((left, right) => left.__proto__ - right.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;