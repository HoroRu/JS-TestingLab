'use strict'

function start_clock() {
    var user_clock = document.getElementById('visitor_input').value;
    if (user_clock < 10) {
        count_cancels(1);
    }
    else if ((user_clock > 10) && (user_clock < 3600)) {
        count_visits(1);
        if ((user_clock > 360) && (user_clock < 3600)) {
            count_attention(1);
        };
    };
      console.log( `Визитов всего: ${visits_total} \n Визитов засчитано: ${count_visits(0)} ${visits_total / count_visits(0) } %\n Визитов не засчитано: ${count_cancels(0)} ${visits_total / count_cancels(0)  } %\n Задержали внимание ${count_attention(0)}, ${ visits_total/ count_attention(0) } %` )
};
const make_counter = function (start) {
    let counter = start;
    return function (x) {
        counter += x;
        return counter;
    };
};
let count_visits = make_counter(0);
let count_cancels = make_counter(0);
let count_attention = make_counter(0);
let visits_total = +( count_visits(0) + count_cancels(0) + count_attention(0));
