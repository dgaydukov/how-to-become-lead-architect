# Demistifying prolog
For a long time prolog was a mystery to me, especially if you come from imperative background, where programming language is pretty dumb, and you need to specify exactly how-to-do. And now  you have some "magical" declarative language where you don't need to do it, just specify what-to-do and prolog would figure out how-to-do. Looks like magic. Yet now in this short article you would see that prolog is not magic, it's very similar to SQL language, and it suitable for only selected list of problems. You can't solve everything there. That's why it hasn't gained much traction since early 90s.

Prolog is logical declarative programming language:
* logical - it's best operated on objects and their relations
* declarative - compare to many other imperative languages, where you say how-to-do, in prolog you say what-to-do
and it's the job of prolog, to determine how-to-do it.
The closest language to prolog is SQL. Here you also have relations, and you can query data based on these objects.
Yet prolog add a little extra logic above.
So, prolog is a programming language with:
* pattern matching
* tree-based data structures
* backtracking

At first glance it looks like magic, that you just say what-to-do and prolog internally decides how-to-do it, yet there is no magic. Just like SQL, you just add some data and relations between them, and then you just query it. In my opinion, it even more limited than any imperative language like c++/java, cause there is only small area where prolog can be applied, also you can solve any prolog-like problem in imperative language, but not vice-versa.

Conclusion: prolog is a nice language to learn, especially for students, or if you just want to broaden you knowledge, yet it's pretty useless in modern world. And practice shows it, top 30 programming language all - imperative, and prolog only somewhere in the bottom, with some niche, but this niche is extremely small.

Syntax:
* [5 min introduction](http://www.cs.trincoll.edu/~ram/cpsc352/notes/prolog/factsrules.html)
* best book - Ivan Bratko - Prolog Programming for AI
* variables start with uppercase letter or underscore
* structures - complex objects like `date(1, may, 2022)`, we can use variables inside structures like `date(Day, may, 2022)`, 
since Day starts from capital letter it's variable, and we can use any value there. Internally structures stored as trees.
structure consists of 2 parts: functor (date in our example) and params
* goal can be separated by:
    * `,` - conjunction, all goals must be true
    * `;` disjunction - any of the sub goals must be true
    P :- A,B;C,D,E => (A, B) : (C, D, E) and the same as P:- A, B    P:- C, D, E
* backtracking - let's say you have a goal like `black(X), big(X)` and list of animals as facts.
    * declarative approach is answer what I can get - I want animal that is both black & big.
    * procedural approach - how can prolog find such an animal:
        * search among facts which animal is black, once found stop search
        * check if that found animal is big, if it's return
        * if not, backtrack, and search black animal again
        * if after all backtracking, no animal found, return false
As you see there is no magic behind declarative approach, it just a layer above simple procedural approach that based on search & backtracking.
* order matter - although prolog is declarative language, underneath simple prodecural style is executed, 
so you shouldn't just say what you want, but specify correct order, otherwise, like our example with `infinitePred` shows you may get into infinite loop
so we can get declaratively correct problem with wrong orderting - that would be incorrect and won't return desired results
* list can be represented in both notations:
```
L = [a | Tail] => [a,b,c[ = [a | [b,c]] = [a,b,c | []]
list1 = [a,b,c]
list2 = .(a, .(b, .(c, []) ) ).
```