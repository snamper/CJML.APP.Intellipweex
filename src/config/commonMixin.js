
const stream = weex.requireModule('stream');

function ajax(opt){
  
  stream.fetch(opt,function(res){
    if(opt.success){
      opt.success(res)
    }
  })
}
module.exports.ajax=ajax;
