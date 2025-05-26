package com.codility.java;

/**
 * We need to check on which index all values 1..d would be filled
 * The easiest way is to use HashTable where for each new value we increase counter
 * Then just wait until counter===d
 */
class Solution {
    public int solution(int d, int[] arr) {
        int[] map = new int[d+1];
        int count = 0;
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (map[v] == 0){
                count++;
            }
            map[v]++;
            if (count == d){
                return i;
            }
        }
        return -1;
    }
}