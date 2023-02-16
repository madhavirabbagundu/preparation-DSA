public class Constructor {
    public static void main(String[] args){
        cube mark = new cube();
        System.out.println(mark.getCubeVolume());
        cube mark1 =  new cube(20,30,40);
        System.out.println(mark1.getCubeVolume());
    }
    
}

class cube {
    int length;
    int breadth;
    int height;

    public int getCubeVolume(){
        return (length*breadth*height);
    }
    cube(){
        length = 20;
        breadth = 12;
        height = 30;
    }
    cube(int l,int b, int h){
        length = l;
        breadth = b;
        height = h;

    }
}