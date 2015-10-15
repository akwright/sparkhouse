/*!
 * sparkhouse
 * we craft high quality ios apps
 * 
 * @author sparkhouse
 * @version 1.0.0
 * Copyright 2015. MIT licensed.
 */
/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
/* jshint ignore:start */
!function(a,b,c){'use strict';function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||'set',ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera);})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,'resize orientationchange',function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:'0.6.30'},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k='touchstart',l='touchmove',m='touchcancel',n='touchend',o='skrollable',p=o+'-before',q=o+'-between',r=o+'-after',s='skrollr',t='no-'+s,u=s+'-desktop',v=s+'-mobile',w='linear',x=1e3,y=.004,z='skrollr-body',A=200,B='start',C='end',D='center',E='bottom',F='___skrollable_id',G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R='',S='',T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S='');R=R[0],'-'===R.slice(0,1)?(S=R,R={'-webkit-':'webkit','-moz-':'Moz','-ms-':'ms','-o-':'O'}[R]):S='-'+R.toLowerCase()+'-'}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+'RequestAnimationFrame'],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+'CancelAnimationFrame'];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName('*')):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if('data-anchor-target'!==p.name)if('data-smooth-scrolling'!==p.name)if('data-edge-strategy'!==p.name)if('data-emit-events'!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode='relative',r.anchors=[u,v]):(r.mode='absolute',u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j='off'!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target '+p.value+''}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow='',e.style.height=f.style.height='',ja&&g.setStyle(ja,'transform','none'),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La='down',Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(' '),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent('MouseEvents');y.initMouseEvent('click',!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:'outCubic',duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow='hidden'},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),'relative'===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case'reset':fa(j);continue;case'ease':k=v.frame;break;default:case'set':var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf('@')?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf('@')?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&('down'===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?'down':Ma>d?'up':La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,'transform','translate(0, '+-Ta+'px) '+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf('!')?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+'%'})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),'{?}'}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw'Can\'t interpolate between \"'+a[0]+'\" and \"'+b[0]+'\"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua='translateZ(0)',g.setStyle(ja,'transform',ua);var a=j(ja),b=a.getPropertyValue('transform'),c=a.getPropertyValue(S+'transform'),d=b&&'none'!==b||c&&'none'!==c;d||(ua='')};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace('-',''),'zIndex'===b)isNaN(c)?d[b]=c:d[b]=''+(0|c);else if('float'===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(' ');for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent('on'+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent('on'+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=''),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+'px'),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],'function'==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c='className';return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c='baseVal'),b[c]},Ea=function(b,d,e){var f='className';if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f='baseVal'),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h]),' ');g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,'')},Ga=function(a){return' '+a+' '},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La='down',Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];'function'==typeof define&&define.amd?define([],function(){return g}):'undefined'!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);
  /* jshint ignore:end */


/**
 * isMobile
 * from: https://github.com/kaimallea/isMobile
 **/
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

;(function ($, window, document, undefined) {

  'use strict';

  function getDomNodeArray(domNodeList) {
    var arrayFromNodeList = [];

    for (var i = 0; i < domNodeList.length; i++) {
      arrayFromNodeList.push(domNodeList[i]);
    }

    return arrayFromNodeList;
  }

  var docElem = window.document.documentElement;

  window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
  }();

  window.cancelAnimFrame = function(){
    return (
        window.cancelAnimationFrame       || 
        window.webkitCancelAnimationFrame || 
        window.mozCancelAnimationFrame    || 
        window.oCancelAnimationFrame      || 
        window.msCancelAnimationFrame     || 
        function(id){
            window.clearTimeout(id);
        }
    );
  }();

  var tools = {
    /**
     *
     * Used to get the length of a rect
     *
     * @param el is the rect element ex $('.rect')
     * @return the length of the rect in px
     */
    getRectLength:function(el){
        var w = el.getAttribute('width');
        var h = el.getAttribute('height');

        return (w*2)+(h*2);
    },

    /**
     *
     * Used to get the length of a Polygon
     *
     * @param el is the Polygon element ex $('.polygon')
     * @return the length of the Polygon in px
     */
    getPolygonLength:function(el){
        var points = el.getAttribute('points');
        points = points.split(' ');
        var x1 = null, x2, y1 = null, y2 , lineLength = 0, x3, y3;
        for(var i = 0; i < points.length; i++){
            var coords = points[i].split(',');
            if(x1 === null && y1 === null){

                if(/(\r\n|\n|\r)/gm.test(coords[0])){
                    coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,'');
                    coords[0] = coords[0].replace(/\s+/g,'');
                }

                if(/(\r\n|\n|\r)/gm.test(coords[1])){
                    coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,'');
                    coords[0] = coords[1].replace(/\s+/g,'');
                }

                x1 = coords[0];
                y1 = coords[1];
                x3 = coords[0];
                y3 = coords[1];

            }else{

                if(coords[0] !== '' && coords[1] !== ''){             

                    if(/(\r\n|\n|\r)/gm.test(coords[0])){
                        coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,'');
                        coords[0] = coords[0].replace(/\s+/g,'');
                    }

                    if(/(\r\n|\n|\r)/gm.test(coords[1])){
                        coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,'');
                        coords[0] = coords[1].replace(/\s+/g,'');
                    }

                    x2 = coords[0];
                    y2 = coords[1];

                    lineLength += Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));

                    x1 = x2;
                    y1 = y2;
                    if(i === points.length-2){
                        lineLength += Math.sqrt(Math.pow((x3-x1), 2)+Math.pow((y3-y1),2));
                    }

                }
            }

        }
        return lineLength;

    },

    /**
     *
     * Used to get the length of a line
     *
     * @param el is the line element ex $('.line')
     * @return the length of the line in px
     */
    getLineLength:function(el){
        var x1 = el.getAttribute('x1');
        var x2 = el.getAttribute('x2');
        var y1 = el.getAttribute('y1');
        var y2 = el.getAttribute('y2');
        var lineLength = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
        return lineLength;

    },

    /**
     *
     * Used to get the length of a circle
     *
     * @param el is the circle element
     * @return the length of the circle in px
     */
    getCircleLength:function(el){
        var r = el.getAttribute('r');
        var circleLength = 2 * Math.PI * r; 
        return circleLength;
    },


    /**
     *
     * Used to get the length of the path
     *
     * @param el is the path element
     * @return the length of the path in px
     */
    getPathLength:function(el){
        var pathLength = el.getTotalLength();
        return pathLength;
    }
  };

  function SVGEl( el ) {
    this.el = el;
    this.image = this.el.previousElementSibling;
    this.currentFrame = 0;
    this.totalFrames = 90;
    this.path = [];
    this.length = [];
    this.handle = 0;
    this.init();
  }

  SVGEl.prototype.init = function() {
    var self = this;
    [].slice.call( self.el.children ).forEach( function( path, i ) {
      self.path[i] = path;
      var l;
      if (path.tagName === 'polygon') {
        l = tools.getPolygonLength(self.path[i]);
      } else if (path.tagName === 'path') {
        l = tools.getPathLength(self.path[i]);
      } else if (path.tagName === 'rect') {
        l = tools.getRectLength(self.path[i]);
      } else if (path.tagName === 'circle') {
        l = tools.getCircleLength(self.path[i]);
      }
      self.length[i] = l;
      self.path[i].style.strokeDasharray = l + ' ' + l; 
      self.path[i].style.strokeDashoffset = l;
    } );
  };

  SVGEl.prototype.render = function() {
    if( this.rendered ) { return; }
    this.rendered = true;
    this.draw();
  };

  SVGEl.prototype.draw = function() {
    var self = this,
        progress = this.currentFrame/this.totalFrames;

    if (progress > 1) {
      window.cancelAnimFrame(this.handle);
      this.showImage();
    } else {
      this.currentFrame++;
      for(var j=0, len = this.path.length; j<len;j++){
        this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
      }
      this.handle = window.requestAnimFrame(function() { self.draw(); });
    }
  };

  SVGEl.prototype.showImage = function() {
    var curImage = this.image,
        curEl    = this.el;
    curImage.classList.add( 'show' );
    curEl.classList.add( 'hide' );
  };

  function getViewportH() {
    var client = docElem.clientHeight,
        inner = window.innerHeight;
     
    if( client < inner ) {
      return inner;
    }
    else {
      return client;
    }
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  function getOffset( el ) {
    var offsetTop = 0, offsetLeft = 0;
    do {
      if ( !isNaN( el.offsetTop ) ) {
        offsetTop += el.offsetTop;
      }
      if ( !isNaN( el.offsetLeft ) ) {
        offsetLeft += el.offsetLeft;
      }
    } while( el = el.offsetParent );

    return {
      top : offsetTop,
      left : offsetLeft
    };
  }

  function inViewport( el, h ) {
    var elH = el.offsetHeight,
      scrolled = scrollY(),
      viewed = scrolled + getViewportH(),
      elTop = getOffset(el).top,
      elBottom = elTop + elH,
      // if 0, the element is considered in the viewport as soon as it enters.
      // if 1, the element is considered in the viewport only when it's fully inside
      // value in percentage (1 >= h >= 0)
      h = h || 0;

    return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
  }

  var sparkhouse = {
    
    init: function() {
      this.floatingLabels.init();
      this.messageCount.init();
      this.svgCheckboxes.init();
      this.formSubmission.init();
      this.setSVGDashes.init();
      this.setupMapSVG.init();
      //this.scrollServices.init();
    },

    floatingLabels: {

      init: function() {
        var inputs         = document.querySelectorAll('.input'),
            inputArr       = getDomNodeArray(inputs),
            inputOnClass   = 'is-active',
            inputShowClass = 'is-visible';


        function toggleInputs() {
          var label = this.previousSibling;

          if (this.value !== '') {
            label.classList.add(inputShowClass);
          } else {
            label.classList.remove(inputShowClass);
          }
        }

        function toggleLabelClass(event) {
          var label = this.previousSibling;
          if (event.type === 'focus') {
            label.classList.add(inputOnClass);
          } else {
            label.classList.remove(inputOnClass);
          }
        }

        for (var i = 0; i < inputArr.length; i++) {
          inputArr[i].addEventListener('keyup', toggleInputs, false);

          inputArr[i].addEventListener('focus', toggleLabelClass, false);

          inputArr[i].addEventListener('blur', toggleLabelClass, false);
        }
      }

    },

    messageCount: {

      init: function() {
        var textarea  = document.getElementById('message'),
            maxChars  = parseInt(textarea.getAttribute('maxlength')),
            curChars  = 0,
            charDiff  = 0,
            charCount = document.querySelector('.js-character-count'),
            charElem  = document.querySelector('.js-character-element');

        function updateCharCount() {
          curChars = this.value.length;
          charDiff = (maxChars - curChars);
          charCount.innerHTML = charDiff;

          if (charDiff <= 15) {
            charElem.classList.add('has-error');
          } else {
            charElem.classList.remove('has-error');
          }
        }

        textarea.addEventListener('keyup', updateCharCount, false);
        textarea.addEventListener('blur', updateCharCount, false);
      }

    },

    svgCheckboxes: {

      init: function() {
        if( document.createElement('svg').getAttributeNS ) {

          var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( '.checkbox-labels input[type="checkbox"]' ) ),
            checkboxPath = ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
            checkboxAnim = { speed : 0.2, easing : 'ease-in-out' };

          var createSVGEl = function( def ) {
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            if( def ) {
              svg.setAttributeNS( null, 'viewBox', def.viewBox );
              svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
            }
            else {
              svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
            }
            svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
            return svg;
          };

          var controlCheckbox = function( el, svgDef ) {
            var svg = createSVGEl( svgDef );
            el.parentNode.appendChild( svg );
            
            el.addEventListener( 'change', function() {
              if( el.checked ) {
                draw( el );
              }
              else {
                reset( el );
              }
            } );
          };

          checkbxsCheckmark.forEach(function( el) {
            controlCheckbox( el ); }
          );

          var draw = function ( el ) {
            var paths = [], pathDef, 
              animDef,
              svg = el.parentNode.querySelector( 'svg' );

            pathDef = checkboxPath;
            animDef = checkboxAnim;
            
            paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
            
            for( var i = 0, len = paths.length; i < len; ++i ) {
              var path = paths[i];
              svg.appendChild( path );

              path.setAttributeNS( null, 'd', pathDef[i] );

              var length = path.getTotalLength();
              // Clear any previous transition
              //path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
              // Set up the starting positions
              path.style.strokeDasharray = length + ' ' + length;
              if( i === 0 ) {
                path.style.strokeDashoffset = Math.floor( length ) - 1;
              }
              else {
                path.style.strokeDashoffset = length;
              }
              // Trigger a layout so styles are calculated & the browser
              // picks up the starting position before animating
              path.getBoundingClientRect();
              // Define our transition
              path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
              // Go!
              path.style.strokeDashoffset = '0';
            }
          };

          var reset = function ( el ) {
            Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
          };

        }
      }

    },

    formSubmission: {

      init: function() {
        var form              = document.querySelector('.js-contact-form'),
            submitBtn         = document.querySelector('.js-submit-button'),
            submitBtnContent  = document.querySelector('.js-submit-content');

        form.addEventListener('submit', function(e) {

          submitBtn.classList.add('is-loading');
          submitBtn.setAttribute( 'disabled', '' );

          submitBtnContent.innerHTML = 'Sending Message...';

          var oData = new FormData(form);

          var oReq = new XMLHttpRequest();
          oReq.open('POST', 'assets/includes/send_mail.php', true);
          oReq.onload = function() {
            submitBtn.classList.remove('is-loading');
            if (oReq.status === 200) {
              submitBtn.classList.add('is-successful');
              submitBtnContent.innerHTML = 'Message Sent!';
              submitBtn.removeAttribute( 'disabled' );
              setTimeout(function() {
                resetSubmit('is-successful');
              }, 1500);
            } else {
              submitBtn.classList.add('has-error');
              submitBtnContent.innerHTML = 'Message Sending Failed. Please Try Again.';
              submitBtn.removeAttribute( 'disabled' );
              setTimeout(function() {
                resetSubmit('has-error');
              }, 1500);
            }
          };
          
          oReq.send(oData); 
          e.preventDefault();

        }, false);

        function resetSubmit(classname) {
          submitBtn.classList.remove(classname);
          submitBtnContent.innerHTML = 'Send & Get Started';
        }
      }

    },

    setSVGDashes: {

      init: function() {

        var mainSVG     = document.getElementById('house_scene'),
            SVGChildren = Array.prototype.slice.call(mainSVG.children);

        
        
        getLengths(SVGChildren);

        function setStrokeAttributes(svgEl, totalLength) {
            svgEl.setAttribute('data-_box-150p', 'stroke-dasharray:' + Math.ceil(totalLength) + 'px; stroke-dashoffset:' + Math.ceil(totalLength) + 'px;');
            svgEl.setAttribute('data-_box-250p', 'stroke-dasharray:' + Math.ceil(totalLength) + 'px; stroke-dashoffset:0px;');
        }

        function getLengths(eleArr) {
            eleArr.forEach( function(ele, i) {
                if (ele.tagName === 'polygon') {
                    setStrokeAttributes(ele, tools.getPolygonLength(ele));
                } else if (ele.tagName === 'path') {
                    setStrokeAttributes(ele, tools.getPathLength(ele));
                } else if (ele.tagName === 'line') {
                    setStrokeAttributes(ele, tools.getLineLength(ele));
                } else if (ele.tagName === 'circle') {
                    setStrokeAttributes(ele, tools.getCircleLength(ele));
                } else if (ele.tagName === 'g') {
                    window['eleArr' + i] = Array.prototype.slice.call(ele.children);
                    getLengths(window['eleArr' + i]);
                }
            });
        }

      }

    },

    setupMapSVG: {

        init: function() {
            var mapSVG = document.getElementById( 'mapSVG' ),
                didScroll = false,
                resizeTimeout;

            // the svgs already shown...
            var svg = new SVGEl( mapSVG );
            setTimeout(function( mapSVG ) {
                return function() {
                    if( inViewport( mapSVG.parentNode ) ) {
                        svg.render();
                    }
                };
            }( mapSVG ), 250 );

            var scrollHandler = function() {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( function() { scrollPage(); }, 60 );
                    }
                },
                scrollPage = function() {
                    if( inViewport( mapSVG.parentNode, 0.5 ) ) {
                        svg.render();
                    }
                    didScroll = false;
                },
                resizeHandler = function() {
                    function delayed() {
                        scrollPage();
                        resizeTimeout = null;
                    }
                    if ( resizeTimeout ) {
                        clearTimeout( resizeTimeout );
                    }
                    resizeTimeout = setTimeout( delayed, 200 );
                };

            window.addEventListener( 'scroll', scrollHandler, false );
            window.addEventListener( 'resize', resizeHandler, false );
        }

    },

    scrollServices: {

      init: function() {

        // Only init skrollr if not on a mobile device
        if (!isMobile.any) {
          skrollr.init({
            constants: {
              box: '100p'
            }
          });

          sparkhouse.adjustHeight.init();
        }

      }

    },

    adjustHeight: {

      init: function() {

        var main = document.querySelector('.js-main'),
            bodyEl = document.body,
            bodyHeight = parseInt(bodyEl.style.height.replace('px', '')),
            docHeight  = parseInt(document.documentElement.clientHeight);

        main.style.marginTop = (bodyHeight - docHeight) + 'px';

      }

    }

  };

  sparkhouse.init();

})(jQuery, window, document);
