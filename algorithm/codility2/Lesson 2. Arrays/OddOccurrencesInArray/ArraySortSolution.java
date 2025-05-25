package com.codility.java;

import java.util.Arrays;

class Solution {
    public int solution(int[] arr) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i+=2){
            if (i == arr.length - 1 || arr[i] != arr[i+1]){
                return arr[i];
            }
        }
        return -1;
    }
}