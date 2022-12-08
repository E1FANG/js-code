"use strict";
const flash = (distance) => {
    console.log('闪现');
    console.log(distance);
};
const throttle = (fn, time) => {
    let timer = null;
    let flag = false;
    return (...args) => {
        if (flag)
            return;
        fn.call(undefined, ...args);
        flag = true;
        timer = setInterval(() => {
            flag = false;
        }, time);
    };
};
const useFlash = throttle(flash, 2000);
useFlash();
