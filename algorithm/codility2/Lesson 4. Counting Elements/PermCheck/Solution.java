package com.codility.java;

/**
 * This task is similar to `Lesson 3` task of `PermMissingElem`. But here we can use duplicates. So we can use HashTable data structures to detect duplicates first, then see if it full sequence or some is missing. Unfortunately my java solution assumes that you create HashTable as java array of n length. But if fails in codility with `OutOfMemoryError` when I try to preallocate array. But the solution is correct.
 * Another way to do it, is to use `Arrays.sort` to first sort array, then identify duplicates and missing numbers.
 */
class Solution {
    public int solution(int[] arr) {
        int max = 0;
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (max < v){
                max = v;
            }
        }
        int[] map = new int[max+1];
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (map[v] == 1){
                // duplicate found return
                return 0;
            }
            map[arr[i]]++;
        }
        for (int i = 1; i < map.length; i++){
            if (map[i] == 0){
                return 0;
            }
        }
        return 1;
    }
}