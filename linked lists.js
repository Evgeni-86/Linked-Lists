class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    append(value) {   //добавление в конец листа
        let elem = new Node(value)
        if (this.head == null) {
            this.head = elem
        } else {
            let current = this.head
            while(current.next) { //если есть следующий элемент то
                current = current.next // переназначаем, цикл продолжится с новым значением 
            }
            current.next = elem
        }
        this.size++
    }

    prepend(value) {  //добавление вначало списка
        let elem = new Node(value)
        elem.next = this.head
        this.head = elem
        this.size++
    }

    listSize() {
        return this.size
    }

    showHead() { //показать первый элемент
        return this.head
    }

    showTail() { //показать последний элемент
        let current = this.head
        while(current.next != null) { 
            current = current.next  
        }
        return current
    }
    at(index) { //показать элеменет по индексу от 0
        let elem = this.head
        if (index == 0) return this.head
        if (index > 0 && index <= this.size) {
        for (let i = 0; i < index; i++) {
                elem = elem.next
            }
        return elem
        }
    }
    pop() { //удалить последний элемент
        if( this.size > 0 ) {
            let parantCurent = this.head
            let curren = parantCurent.next
            if (curren == null) { return this.head = null }
            while(curren.next != null) {   
                parantCurent = curren
                curren = parantCurent.next
            }
            parantCurent.next = null
            this.size--
        }
    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;
      }
}

let list = new LinkedList()

list.append('first')
list.append('second')
list.append('third')
// list.append('forth')
// list.append('fift')
// list.append('sixten')

console.log(list)
// console.log(list.showHead())
// console.log(list.showTail())
// console.log(list.at(5))
list.pop()
console.log(list)
