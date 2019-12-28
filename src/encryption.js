import cryptoJS from "crypto-js"

let iv = cryptoJS.enc.Hex.parse("a0f6202318b5f2c5");
let key = "3c48573a28ae897a0b71c5990e63efece46edd3f5569ff7e1746935be4531c24";

export function decrypt(str) {
  return cryptoJS.AES.decrypt(str, key, { iv: iv })
}

export function encrypt(str) {
  return cryptoJS.AES.encrypt(str, key, { iv: iv })
}