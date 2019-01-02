module.exports = {
    checkPrime(min1, max1) {
        let size = (Math.floor(max1 / 100) + 1);
        let range = Math.floor(min1 / 100);
        let arr1 = [];
        if (min1 == 0 || min1 == 1) {
            min = 2;
        }
        else {
            min = min1;
        }
        if (min1 == 0 && max1 > 100) {
            max = 100;
        }
        else if (max1 < 100) {
            max = max1;
        }
        else {
            max = ((range + 1) * 100);
        }
        for (let index = range + 1; index <= size; index++) {
            if ((max - min) <= 100 && max <= max1 && (max - min) != 0) {
                let prime = new Array();
                for (let i = min; i <= max; i++) {
                    let count = 0;
                    for (let j = 1; j <= i; j++) {
                        if (i % j == 0) {
                            count++;
                        }
                    }
                    if (count <= 2) {
                        prime.push(i);
                    }
                }
                arr1.push(prime);
                if (max1 - max < 100) {
                    range = Math.floor(min / 100);
                    min = (min + ((range + 1) * 100) - min);
                    max = max1;
                }
                else {
                    range = Math.floor(min / 100);
                    min = (min + ((range + 1) * 100) - min);
                    max = max + 100;
                }
            }
        }
        console.log('\n Prime Numbers in the given range are :')
        console.log(arr1);
    },
    prime(min, max) {
        //let arr1 = [];
        let prime = new Array();
        if (min == 0 || min == 1) {
            min = 2;
        }
        for (let i = min; i <= max; i++) {
            let count = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count <= 2) {
                prime.push(i);
            }
        }
        return prime;
    },

    anagrams(str1, str2) {
        var arr1 = str1.split('');
        var arr2 = str2.split('');
        var array1 = this.removeSpace(arr1);
        var array2 = this.removeSpace(arr2);
        var res1 = array1.sort();
        var res2 = array2.sort();
        if (res1.length == res2.length) {
            var output = this.compare(res1, res2);
            if (output) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    },
    removeSpace(array) {
        var newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] != ' ') {
                newArray.push(array[i]);
            }
        }
        return newArray;
    },
    compare(array1, array2) {
        let count = 0;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] == array2[i]) {
                count++
            }
        }
        return (array1.length == count);
    },
}