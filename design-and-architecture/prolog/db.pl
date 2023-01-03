parent(a,b).
parent(b,c).
parent(c,d).
parent(d,e).
parent(e,f).

grandparent(X, Y) :-
    parent(X, Z),
    parent(Z, Y).

predecessor(X, Y) :-
    parent(X, Y);
    parent(X, Z),
    predecessor(Z, Y).


infinitePred(X, Z) :-
    infinitePred( X, Y),
    parent( Y, Z).
infinitePred(X, Z) :-
    parent(X, Z).