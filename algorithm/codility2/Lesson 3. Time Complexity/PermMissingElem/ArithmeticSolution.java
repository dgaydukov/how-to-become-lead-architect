package com.codility.java;

/**
 * Faster solution using arithmetic progresion
 * We calculate sum of array, than sum using arithmetic progression and then calculate difference
 * Out diff is our missing number
 * The kye is to use long for sum, because otherwise if we use int we may have max overflow for int and get incorrect result
 */
class Solution {
    public int solution(int[] arr) {
        long sum = 0;
        for (int i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        long n = arr.length + 1;
        long arithmeticSum = n *(1+n)/2;
        return (int)(arithmeticSum - sum);
    }
}

/**
 * Same solution as above, but we calculate within same variable
 */
class Solution2 {
    public int solution(int[] arr) {
        int d = 0, n = 1;
        for (int i = 0; i < arr.length; i++){
            d += arr[i] - n++;
        }
        return (arr.length+1-d);
    }
}