 // Online Java Compiler
// Use this editor to write, compile and run your Java code online

class HelloWorld3 {
    public static void main(String[] args) {
    int sum = firstMethod(10,20,30);
    secondMethod("madhavi");
    System.out.println(sum);
    

    }
    public static int firstMethod(int a, int b , int c){
        // System.out.println(a+b+c);
       return a+b+c;

    }
    public static void secondMethod(String name){
        System.out.println("name:"+name);
    }
} 
    

