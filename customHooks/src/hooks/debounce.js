/* The logic (Implementation) in node.js for debouncing from backend

let currentClock; // global variable

function searchBackend(){
   console.log("request sent to backend";)
   //fetch()
}

function debouncedSearchBackend(){
  //restart the clock after 30 sec
  clearTimeout(currentClock); //stops the old clock after 30 sec and then a new clock starts 
  currentClock = setTimeout(searchBackend , 30)
}
//Now we have to write a logic ki it won't get called but gets called only at thr last call
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();

*/


