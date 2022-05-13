import _ from 'lodash'

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    (event) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE() {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
export function scorePassword(pass) {
  let score = 0
  if (!pass) {
    return score
  }
  // award every unique letter until 5 repetitions
  const letters = {}
  for (let i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1
    score += 5.0 / letters[pass[i]]
  }

  // bonus points for mixing it up
  const variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  }

  let variationCount = 0
  for (var check in variations) {
    variationCount += variations[check] === true ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
}

// 工具方法
export const utilFn = {
  _isString: _.isString,
  _isNumber: _.isNumber,
  _isInteger: _.isInteger,
  _isBoolean: _.isBoolean,
  _isArray: _.isArray,
  _isFunction: _.isFunction,
  _isPlainObject: _.isPlainObject,
  _isDate: _.isDate,
  _isElement: _.isElement,
  _get: _.get,
  _set: _.set,
  _hasIn: _.hasIn,
  _toNumber: _.toNumber,
  _toString: _.toString,
  _cloneDeep: _.cloneDeep,
  _replace: _.replace,
  _awaitWrap: awaitWrap,
  _isEmpty: isEmpty,
  _isNotEmpty: isNotEmpty,
  _replaceValidator: replaceValidator,
}

// 封装promise，返回数组[err, data]
export function awaitWrap(promise) {
  return promise.then((data) => [null, data]).catch((err) => [err, null])
}

// 值是否为空
export function isEmpty(val) {
  if (typeof val === 'string') {
    val = val.trim()
  }
  return val === undefined || val === null || val === '' || val === false || Object.is(val, NaN)
}

// 值是否不为空
export function isNotEmpty(val) {
  return !isEmpty(val)
}

// 正则替换校验
export function replaceValidator(value, rule, filedPath) {
  utilFn._set(this, filedPath, value.replace(rule, ''))
}

/**
 * 获取uuid
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(16)
  })
}
