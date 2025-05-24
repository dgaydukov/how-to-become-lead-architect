package com.codility.java;

/**
 * Second solution using the same array
 * Here time complexity is O(n) but space complexity is O(1), because we don't create a second array, but just do substitution in the first one
 * Algo:
 * Let's say we have array [1,2,3,4,5,6] and we need to rotate for 2 positions
 * 1. start form 0 and update all indexes: arr[2] = arr[0], arr[4] = arr[2], arr[0] = arr[4]
 * 2. go second outer loop: arr[3]=arr[1], arr[5]=arr[3], arr[1]=arr[5]
 * 3. exit outer loop, cause count=arr.length at this point
 */
class Solution2 {
    public int[] solution(int[] arr, int n) {
        // return immediately for edge cases
        if (n == arr.length || n == 0 || arr.length == 0 || arr.length == 1){
            return arr;
        }
        n = n % arr.length;
        int count = 0;
        for (int i = 0; count < arr.length; i++){
            int start = i;
            int prev = arr[start];
            do{
                int nextIndex = (start + n) % arr.length;
                int next = arr[nextIndex];
                arr[nextIndex] = prev;
                prev = next;
                start = nextIndex;
                count++;
            } while (start != i);
        }
        return arr;
    }
}