package com.codility.java;

/**
 * We use following algo:
 * 1. convert int into binary
 * 2. iterate over binary string and then: for each 0 we increase gap, for 1 we calculate and update max gap
 * So as lesson name imply, we just use simple iteration to solve this problem
 */
class Solution {
    public int solution(int N) {
        String binary = Integer.toBinaryString(N);
        int len = binary.length();
        int max = 0, gap = 0;
        for (int i = 0; i < len; i++){
            char ch = binary.charAt(i);
            if (ch == '1'){
                if (max < gap){
                    max  = gap;
                }
                gap = 0;
            } else {
                gap++;
            }
        }
        return max;
    }
}