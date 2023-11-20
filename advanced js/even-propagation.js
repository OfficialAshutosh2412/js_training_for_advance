//  event propagation is kinda flow of handling the event in js.
// like, if an event is called inside a parent and also parent have an event call then which event handled first or last called event propagation.

// there are two kind a event propagation happen.
/*
1. Event bubbling.
2. Event capturing.
*/


// 1. Event bubbling.
/*
event is captured and handled by the innermost element and then propagate to outermost elements. It is applied by default by broswer

(Last)window <-- 5.document <-- 4.html <-- 3.body <-- 2.div <-- 1.Target element
*/

// 1. Event capturing.
/*
event is captured and handled by the outermost element and then propagate to inermost elements. It is also called event trickling.

1.window --> 2.document --> 3.html --> 4.body --> 5.div --> (last)Target element
*/