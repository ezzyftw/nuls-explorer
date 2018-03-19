<template>
  <header class="head">
    <div class="nuls-head-content clearfix">
      <div class="nuls-logo-content clearfix">
      </div>
      <ul class="nuls-navigation-box clearfix">
        <li>
          <router-link to="">首页</router-link>
        </li>
        <li>
          <router-link to="">排名</router-link>
        </li>
        <li>
          <router-link to="">工具</router-link>
        </li>
        <li>
          <span @mouseenter="dropdwon" @mouseleave="dropdwon">
            <router-link to="" class="nuls-dropdown">钱包</router-link>
            <i class="el-icon-arrow-down"></i>
          </span>
          <ul  class="nuls-dropdown-list">
            <li>
              <router-link to="">客服端下载</router-link>
            </li>
            <li>
              <router-link to="">网页轻钱包</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="nuls-search-box">
        <input placeholder="Address / Txhash / Block" type="text"/>
        <i class="el-icon-search"></i>
      </div>
    </div>
  </header>
</template>

<script>
  import {getTop, getLeft} from "../assets/js/common.js";

  var isInDropDown = false;

  function dropdownLeaveEvent(e) {
    isInDropDown = true;
  }

  function dropdownOutEvent(e) {
    isInDropDown = false;
    var currentElement = e.currentTarget;
    if (currentElement.style.display === '' || currentElement.style.display === 'block') {
      currentElement.style.display = 'none';
    }
  }

  export default {
    name: "Head"
    , data() {
      return {};
    }
    , methods: {
      dropdownOutEvent:dropdownOutEvent,
      dropdownLeaveEvent:dropdownLeaveEvent,
      dropdwon: function (e) {
        let currentElement = e.currentTarget;

        let dropdownBox = document.querySelector(".nuls-dropdown-list");

        dropdownBox.removeEventListener("mouseleave", dropdownOutEvent);
        dropdownBox.addEventListener("mouseleave", dropdownOutEvent);

        dropdownBox.removeEventListener("mouseover", dropdownLeaveEvent);
        dropdownBox.addEventListener("mouseover", dropdownLeaveEvent);

        if (!!dropdownBox) {
          var style= window.getComputedStyle(dropdownBox);
          if (style.display === '' || style.display === 'block') {
            setTimeout(function () {
              if (!isInDropDown) {
                dropdownBox.style.display = 'none';
              }
            }, 300);
          } else {
            let absoluteTop = getTop(currentElement);
            let absoluteLeft = getLeft(currentElement);
            let height = currentElement.offsetHeight;
            let width = currentElement.offsetWidth;
            dropdownBox.style.top = (absoluteTop + height - 10) + "px";
            dropdownBox.style.left = (absoluteLeft + width / 2) + "px";
            dropdownBox.style.marginTop = 3 + "px";
            dropdownBox.style.marginLeft = (-120 / 2) + "px";

            dropdownBox.style.display = 'block';


          }
        }
      }
    }
  }
</script>

<style scoped>


</style>
