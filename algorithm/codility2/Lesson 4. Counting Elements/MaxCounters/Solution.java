package com.codility.java;


import java.util.Arrays;

/**
 * Naive solution:
 * The trick is that once we get array value greater than n, we have to fill our "counters" with max value. That means we have to iterate over it and update each value
 * But doing this we add time complexity as O(m*n), where m - size of original array, n - size of counters array (map in our code)
 * This solutions get 77% in cocility https://app.codility.com/demo/results/training94JAQ6-USD/
 * So you need to think about smarter way to do it
 */
class Solution {
    public int[] solution(int n, int[] arr) {
        int[] map = new int[n];
        int max = 0;
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (v <= n){
                int k = v - 1;
                map[k]++;
                if (max < map[k]){
                    max = map[k];
                }
            } else{
                // update all counters to max value
                for (int j = 0; j < n; j++){
                    map[j] = max;
                }
            }
        }
        return map;
    }
}


class Test{
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("[3, 2, 2, 4, 2] => "+ Arrays.toString(s.solution(5, new int[]{3,4,4,6,1,4,4})));
    }
}