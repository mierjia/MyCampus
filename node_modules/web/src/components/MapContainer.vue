<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "map-view",
  mounted() {
    this.initAMap();
  },
  unmounted() {
    this.map?.destroy();
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: "3c9f69fcb32ce219c2cb0ded9033a7c7", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geolocation'], // 添加 Geolocation 插件
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            viewMode: "3D", // 是否为3D地图模式
            zoom: 15, // 初始化地图级别
            center: [114.364372, 30.534545], // 初始化地图中心点为武汉大学中心位置
            resizeEnable: true, // 允许调整大小
          });

          // 添加定位插件
          this.map.plugin('AMap.Geolocation', () => {
            const geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, // 是否使用高精度定位，默认：true
              timeout: 10000, // 设置定位超时时间，默认：无穷大
              maximumAge: 0, // 定位结果缓存0毫秒，默认：0
              convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: false, // 定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy: false // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            this.map.addControl(geolocation);
            geolocation.getCurrentPosition();
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 80vh; /* 设置高度为屏幕高度的80% */
  max-width: 100%;
  max-height: 100%;
}
</style>
