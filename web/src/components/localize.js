import React, {useCallback} from 'react'
import {createLocaleTextGetter} from '../lib/createLocaleTextGetter'
const localize = (Component, {propsTotranslate = ['data']} = {}) => props => {
  const locale = props.pageContext?.locale || props.locale
  const getLocalizedContent = useCallback(createLocaleTextGetter(locale))
  const translatedProps = {}
  propsTotranslate.forEach(key => {
    translatedProps[key] = getLocalizedContent(props[key])
  })
  return <Component {...{...props, ...translatedProps}} />
}
export default localize
