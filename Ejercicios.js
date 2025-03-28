//Ejercicio 1
import java.util.LinkedList;
import java.util.Queue;

public class Cola {
    public static Integer proximoEnLaFila(Queue<Integer> cola, int elemento) {
    cola.offer(elemento); // Agrega el elemento al final de la cola
    return cola.isEmpty() ? null : cola.poll(); // Verifica que no esté vacía antes de hacer poll()
}

    public static void main(String[] args) {
    Queue < Integer > cola = new LinkedList <> ();
    cola.add(1);
    cola.add(2);
    cola.add(3);
    cola.add(4);

        Integer removido = proximoEnLaFila(cola, 5);

    if (removido != null) {
        System.out.println("Elemento removido: " + removido);
    } else {
        System.out.println("La cola estaba vacía, no se pudo remover un elemento.");
    }

    System.out.println("Cola actual: " + cola);
}
}


//Ejercicio 2
import java.util.Arrays;

public class Main {
    public static int proximoEnLaFila(int[] arreglo, int elemento) {
        int eliminado = arreglogay[0]; // Guarda el primer elemento antes de eliminarlo

        // Desplaza los elementos a la izquierda
        for (int i = 0; i < arreglo.length - 1; i++) {
            arreglo[i] = arreglo[i + 1];
        }

        // Agrega el nuevo elemento al final
        arreglo[arreglo.length - 1] = elemento;

        return eliminado; // Retorna el elemento eliminado
    }

    public static void main(String[] args) {
        int[] cola = { 1, 2, 3, 4}; // Arreglo inicial
        
        int eliminado = proximoEnLaFila(cola, 5);

        System.out.println("Elemento removido: " + eliminado);
        System.out.println("Cola actual: " + Arrays.toString(cola));
    }
}