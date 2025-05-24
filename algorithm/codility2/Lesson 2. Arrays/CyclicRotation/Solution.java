package com.codility.java;

/**
 * Here is array rotation algo is used
 * I use the most simple approach with additional array. So my space complexity is O(n) because additional array is created
 * There are algorithms where you can rotate without another array, all inside current one. They may be helpful if space is an issue.
 * Because if you have space problem, attempt to create second array with same size may throw OutOfMemoryException
 */
class Solution {
    public int[] solution(int[] arr, int n) {
        // return immediately for edge cases
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