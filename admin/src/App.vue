<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<style>
html ,body{
  padding: 0;
  margin: 0;
  background-color: #f7f7f7;
  
}
li{ list-style: none;}
</style>

<script>
const debounce = (fn, delay) => {
  let timer
   return (...args) => {
     if (timer) {
       clearTimeout(timer)
     }
     timer = setTimeout(() => {
       fn(...args)
     }, delay)
   }
}
  
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
   constructor(callback) {
     callback = debounce(callback, 200);
     super(callback);
   }
}
</script>