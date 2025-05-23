/**
 * Famous turtoise and hare algorithm to determine if linked list is cycled
 * Basic idea is that we use 2 pointers, one is slow, other is fast, and if at some point they meet, that means list is cyclic
 */
class App{
    public static void main(String[] args) {
        LinkedListNode<Integer> l1 = new LinkedListNode<>(1);
        LinkedListNode<Integer> l2 = new LinkedListNode<>(2);
        LinkedListNode<Integer> l3 = new LinkedListNode<>(3);
        LinkedListNode<Integer> l4 = new LinkedListNode<>(4);
        l1.setNext(l2);
        l2.setNext(l3);
        l3.setNext(l4);
        l4.setNext(l1);

        LinkedListNode<Integer> node = l1;
        LinkedListNode<Integer> hare = node, turtle = node;
        while (node != null) {
            System.out.println(node);
            node = node.getNext();
            if (turtle.getNext() != null && hare.getNext() != null) {
                turtle = turtle.getNext();
                hare = hare.getNext().getNext();
                if (turtle.equals(hare)){
                    System.out.println("cycle found");
                    break;
                }
            }
        }
    }
}

class LinkedListNode<T>{
    private T value;
    private LinkedListNode next;
    public LinkedListNode(T value){
        setValue(value);
    }
    public void setValue(T value){
        this.value = value;
    }
    public T getValue(){
        return value;
    }
    public void setNext(LinkedListNode next){
        this.next = next;
    }
    public LinkedListNode<T> getNext(){
        return next;
    }
    @Override
    public String toString(){
        return "LinkedListNode[value=" + value + "]";
    }
}