package com.codility.java;

/**
 * We just iterate over array and keep leftSum and rightsum
 * And find their ABS difference and increment leftSum and decrement rightSum
 * time complexity O(n)
 */
class Solution {
    public int solution(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        int ls = arr[0], rs = sum - ls, min = Integer.MAX_VALUE;
        for (int i = 1; i < arr.length; i++){
            int diff = Math.abs(ls - rs);
            if (min > diff){
                min = diff;
            }
            ls += arr[i];
            rs -= arr[i];
        }
        return min;
    }
}