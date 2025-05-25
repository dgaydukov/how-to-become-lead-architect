package com.codility.java;

/**
 * Using HashTable to store values and understand immediately do we have duplicates or not
 * Disadvantages: would require a lot of memory for huge array with big values
 * Time Complexity: O(3n)
 * Space Complexity: O(n)
 * Because of space complexity it doesn't pefrom well in codility simulator
 */
class Solution {
    public int solution(int[] arr) {
        // find max possible value
        int max = 0;
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (max < v){
                max = v;
            }
        }
        // create map where values would be indexes, that's why we need max value, otherwise we don't know array size
        int[] map = new int[max+1];
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (map[v] == 0){
                map[v] = 1;
            } else {
                map[v] = 0;
            }
        }
        // last iteration to find value without duplicate
        for (int i = 0; i < arr.length; i++){
            if (map[arr[i]] == 1){
                return arr[i];
            }
        }
        return -1;
    }
}