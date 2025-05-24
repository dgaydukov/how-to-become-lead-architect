package com.codility.java;

class Solution {
    public int[] solution(int[] arr, int n) {
        if (n == arr.length || n == 0 || arr.length == 0 || arr.length == 1){
            return arr;
        }
        int[] rotated = new int[arr.length];
        n = n % arr.length;
        int j = arr.length - n;
        for (int i = 0; i < arr.length; i++){
            rotated[i] = arr[j++];
            if (j == arr.length){
                j = 0;
            }
        }
        return rotated;
    }
}