"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.setItem = setItem;

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}