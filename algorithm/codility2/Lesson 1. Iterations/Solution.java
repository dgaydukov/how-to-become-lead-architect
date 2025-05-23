package com.aeron.hacks;

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