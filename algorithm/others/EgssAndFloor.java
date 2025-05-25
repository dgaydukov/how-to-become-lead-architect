package com.codility.java;

/**
 * We can use DP for egg and floor problem
 * The original problem: we have 2 eggs and 100 floor, how many min attemps do we need to make sure we find a floot at which egg is broken
 * The idea is that we change condiiton: we know number of eggs and number of attempts. To which max floor we can get knowing these 2
 * We use dynamic programming to build 2 dimensional array. If you print such array you will see that if you have 2 eggs and 14 attemps you can go max to 105 floor
 *
 */
class Test{
    public static void main(String[] args) {
        int n = 20;
        long[][] arr = new long[n][n];
        for (int i = 0; i < n; i++){
            arr[i][0] = i+1;
            arr[0][i] = 1;
        }
        for (int i = 1; i < n; i++){
            for (int j = 1; j < n; j++){
                arr[i][j] = arr[i-1][j] + arr[i-1][j-1] + 1;
            }
        }
        print(arr);
    }

    public static void print(long[][] arr){
        for (int i = 0; i < arr.length; i++){
            for (int j = 0; j < arr[i].length; j++){
                long lastRowValue = arr[arr.length-1][j];
                int lastRowValueLen = String.valueOf(lastRowValue).length();
                long currentValue = arr[i][j];
                int currentValueLen = String.valueOf(currentValue).length();
                int paddingLen = lastRowValueLen - currentValueLen + 1;
                System.out.print(currentValue + " ".repeat(paddingLen));
            }
            System.out.println();
        }
    }
}