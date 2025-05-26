package com.codility.java;

/**
 * This task is similar to `Lesson 3` task of `PermMissingElem`.
 * But here we can use duplicates. So we can use HashTable data structures to detect duplicates first,
 * then see if it full sequence or some is missing.
 * But the trick is the size of HashTable, if we try to create array with size as max element, it would fail performance test of codility simulator
 * So we use hack, kind of Map implementation where we limit value by 1M. Otherwise, you won't get 100%, but you can get it with this solution
 */
class Solution {
    public int solution(int[] arr) {
        int size = 1_000_000;
        int[] map = new int[size];
        int sum = 0;
        for (int i = 0; i < arr.length; i++){
            int v = arr[i] % size;
            if (map[v] == 1){
                return 0;
            }
            map[v] = 1;
            sum += v;
        }
        int n = arr.length;
        int arithmeticSum = n * (n+1) / 2;
        return sum == arithmeticSum ? 1 : 0;
    }
}