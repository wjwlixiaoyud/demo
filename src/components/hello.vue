<template>
  <div class="bod">
    <h1 data-text="中国农业的时空之旅Web网页开发">
      中国农业的时空之旅Web网页开发
    </h1>
  </div>
</template>

<style>
.bod {
  height: 100%;
  width: 100%;
  background-image: url(../assets/background2.jpg);
  display: flex;
  place-items: center;
}
h1 {
  position: relative;
  font-family: "Poppins";
  color: rgb(30, 219, 115);
  background-image: radial-gradient(#f6d8d5);
  font-size: 150px;
}
h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0em;
  left: 0em;
  color: #313f97;
  z-index: -1;
  transition: 0.2s;
}
h1:hover::before {
  top: 0.04em;
  left: 0.04em;
}
h1::after {
  content: attr(data-text);
  position: absolute;
  color: transparent;
  top: 0em;
  left: 0em;
  background-image: radial-gradient(
    rgba(236, 34, 185, 0.5) 0.0125em,
    transparent 0.0125em
  );
  background-size: 8px 8px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px #ec2225;
  transition: 0.2s;
}
h1:hover::after {
  top: -0.04em;
  left: -0.04em;
}
</style>
