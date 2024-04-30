public class multithreading extends thread{
    public void run(){
        for(int i=1;i<=5;i++){
            try{
                Thread.Sleep(1000);
            }
            catch(Exception e){
                System.out.println(e);
            }
                System.out.println(i);
        }
    }
    public static void main(String[] args) {
        System.out.println("ayush");
    multithreading t1 = new multithreading();
    
    t1.start();



    }
}