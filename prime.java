import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.Scanner;
import java.util.concurrent.*;
import java.util.regex.*;



public class Solution {
    public static void main(String[] args)  {
         Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        // System.out.println(n);
        //  scan.nextLine();
        //  String out = scan.nextLine();
        for(int i = 2; i <= n; i++){
                     int count=0;
            if(n%i==0){
                count++;
            }
            // System.out.println(count);
         if(count == 1){
            System.out.println("prime");
         }
         else{
            System.out.println("not prime");
         }
        }
        // System.out.println(out);
        
        scan.close();
    }
}
