import { ALCOR_MARKET, getAlcorPrice } from "../dal/alcor";
import { getWaxPriceInUSD } from "../dal/coingecko";
import { readable, Subscriber } from "svelte/store";

const DEFAULT_INTERVAL_FREQ = 10000;

export const waxPrice = readable(0.0, function start(set) {
  getWaxPriceInUSD().then((wp) => set(wp.wax.usd));
  const interval = setInterval(() => {
    getWaxPriceInUSD().then((wp) => set(wp.wax.usd));
  }, DEFAULT_INTERVAL_FREQ);
  return function stop() {
    clearInterval(interval);
  };
});

export const aetherPrice = readable(0.0, function start(set) {
  return _setAlcorPriceWithInterval(ALCOR_MARKET.AETHER, set);
});

export const wecanPrice = readable(0.0, function start(set) {
  return _setAlcorPriceWithInterval(ALCOR_MARKET.WECAN, set);
});

export const caponPrice = readable(0.0, function start(set) {
  return _setAlcorPriceWithInterval(ALCOR_MARKET.CAPON, set);
});

export const waxonPrice = readable(0.0, function start(set) {
  return _setAlcorPriceWithInterval(ALCOR_MARKET.WAXON, set);
});

export const eneftPrice = readable(0.0, function start(set) {
  return _setAlcorPriceWithInterval(ALCOR_MARKET.ENEFT, set);
});

function _setAlcorPriceWithInterval(
  market: ALCOR_MARKET,
  set: Subscriber<number>,
  frequence = DEFAULT_INTERVAL_FREQ
) {
  getAlcorPrice(market).then((ap) => set(ap.last_price));
  const interval = setInterval(() => {
    getAlcorPrice(market).then((ap) => set(ap.last_price));
  }, frequence);
  return function stop() {
    clearInterval(interval);
  };
}

