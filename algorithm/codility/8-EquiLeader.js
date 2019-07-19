'use strict';

(() => {
    /**
     * In every step we divide array on 2 subarrays, and check if they both have the same leader
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        const hash = {}, equiHash = {};
        let total = 0, subLeader = false;
        for (let i = 0; i < size; i++) {
            if (hash[arr[i]]) {
                hash[arr[i]]++;
            }
            else {
                hash[arr[i]] = 1;
            }
        }
        for (let i = 0; i < size; i++) {
            const len = i + 1;
            if (equiHash[arr[i]]) {
                equiHash[arr[i]]++;
            }
            else {
                equiHash[arr[i]] = 1;
            }
            if (equiHash[arr[i]] > len / 2) {
                subLeader = arr[i];
            }
            else if (equiHash[subLeader] <= len / 2) {
                subLeader = false;
            }
            hash[arr[i]]--;
            if (subLeader !== false && hash[subLeader] > (size - len) / 2) {
                total++;
            }

        }
        return total;
    }


    console.log(
        solution([4, 3, 4, 4, 4, 2]),
        solution([0, 0]),
        // solution([4, 4, 2, 5, 3, 4, 4, 4])
    );
})();