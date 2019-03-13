
export default function (name) {
  return name
}

export function getQuerys (url) {
  const splitedUrl = (url || '').split('?')
  if (splitedUrl.length < 2) {
    return {}
  }
  let qs = splitedUrl[1]
  qs = qs.split('#')[0]
  if (qs.length === 0) {
    return {}
  }

  const paramPairs = qs.split('&')
  const params = {}
  paramPairs.forEach((e) => {
    if (!e || e.length === 0) {
      return
    }
    const pair = e.split('=')
    if (pair.length < 2) {
      return
    }
    const key = pair[0]
    const value = pair.slice(1, pair.length).join('=')
    if (value.length === 0) {
      return
    }
    params[decodeURIComponent(key)] = decodeURIComponent(value)
  })
  return params
}

export function getQuery (key, url) {
  const reg = new RegExp(`[?|&]${key}=([^&]+)`)
  const match = url.match(reg)
  return match && match[1]
}

export function createLink (page, params = {}) {
  const args = []
  Object.keys(params).forEach((key) => {
    args.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  })

  if (weex.config.bundleUrl) {
    const splitedUrl = (weex.config.bundleUrl).split('?')
    const hostUrl = splitedUrl[0]
    const wx_tpl = getQuery('_wx_tpl', weex.config.bundleUrl) // eslint-disable-line
    const tplPathList = (wx_tpl || hostUrl).split('/') // eslint-disable-line
    tplPathList[tplPathList.length - 2] = page

    if (wx_tpl) { // eslint-disable-line
      args.unshift(`_wx_tpl=${tplPathList.join('/')}`) // eslint-disable-line
      return `${hostUrl}?${args.join('&')}`
    } else {
      return `${tplPathList.join('/')}?${args.join('&')}`
    }
  }
}
export function fetch (opt) {
  if(weex.config.env.appName=='智配Store'){
    const serviceAPI = weex.requireModule('serviceAPI');
    serviceAPI.postAPI(
      opt.url
      , opt.body
      , result =>{
        if(opt.success){
          opt.success(result)
        }
    },res=>{
      if(opt.error){
        opt.error(res)
      }
    });
  }else{
    const stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal');
    opt.url=process.env.apiDomain+opt.url;
    
    stream.fetch(opt,function(res){
      console.log(res);
      if(res.ok){
        if(res.data.Header.ErrorCode==0){
          if(opt.success){
            opt.success(res.data.Body);
          }
        }else{
          modal.toast({
            message: res.data.Header.Message,
            duration: 3.3
          });
        }
      }else{
        modal.toast({
          message: JSON.stringify(res.data),
          duration: 3.3
        });
      }      
    })
  }
}
