package com.codility.java;

import java.util.Arrays;

/**
 * Using O(n*log(n)) time complexity
 * We first sort the array, and then iterate over to find missing number
 * Codility simulator returns 100% for this execution, so apparently it's ok to do it
 */
class Solution {
    public int solution(int[] arr) {
        Arrays.sort(arr);
        if (arr.length == 0){
            return 1;
        }
        for (int i = 0; i < arr.length-1; i++){
            if (arr[i]+1 != arr[i+1]){
                return arr[i]+1;
            }
        }
        // edge case either first or last
        return arr[0] == 1 ? arr.length+1 : 1;
    }
}