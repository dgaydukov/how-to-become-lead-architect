package com.codility.java;

/**
 * Solution using O(n^2) time complexity where we have 2 loops
 * Although correct it shows 25% performance on codility simulator
 */
class Solution {
    public int solution(int[] arr) {
        // brute force
        for (int i = 0; i < arr.length; i++){
            for (int j = i + 1; j < arr.length; j++){
                if (arr[i] == arr[j]){
                    arr[i] = -1;
                    arr[j] = -1;
                    break;
                }
            }
            if (arr[i] != -1){
                return arr[i];
            }
        }
        return -1;
    }
}