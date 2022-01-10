import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<String, Integer> map = new HashMap<>();
        
        for (int index = 0; index < phone_book.length; index ++) {
            map.put(phone_book[index], index);
        }
        
        for (int i = 0; i < phone_book.length; i ++) {
            for (int j = 0; j < phone_book[i].length(); j ++) {
                if (map.containsKey(phone_book[i].substring(0, j))) { return false; }    
            }
        }
        
        return true;
    }
}