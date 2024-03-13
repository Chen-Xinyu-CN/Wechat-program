// pages/index.js
var ctx = wx.createCanvasContext('myCanvas')
var h1=4,h2=0,h3=0,a,b;
var a1=[24,18,12,6];
var a2=['0','0','0','0'];
var a3=['0','0','0','0'];
Page({
  data:({
    
  }),
  onLoad:function(){
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    b=0
    ctx.moveTo(50-a1[b], 250-20*b)
    ctx.lineTo(50+a1[b], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    b=b+1
    ctx.moveTo(50-a1[b], 250-20*b)
    ctx.lineTo(50+a1[b], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    b=b+1
    ctx.moveTo(50-a1[b], 250-20*b)
    ctx.lineTo(50+a1[b], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    b=b+1
    ctx.moveTo(50-a1[b], 250-20*b)
    ctx.lineTo(50+a1[b], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
  },
  m1to2: function() {
    if (a1[h1-1]<a2[h2-1] || h2==0){
    a=h1-1
    h1=h1-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(50-a1[a], 250-20*a)
    ctx.lineTo(50+a1[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h2
    h2=h2+1
    a2[b]=a1[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(150-a1[a], 250-20*b)
    ctx.lineTo(150+a1[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a1[a]=0
    if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },
  m1to3: function() {
    if (a1[h1-1]<a3[h3-1] || h3==0){
    a=h1-1
    h1=h1-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(50-a1[a], 250-20*a)
    ctx.lineTo(50+a1[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h3
    h3=h3+1
    a3[b]=a1[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(250-a1[a], 250-20*b)
    ctx.lineTo(250+a1[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a1[a]=0

        if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },
 
  m2to1: function() {
    if (a2[h2-1]<a1[h1-1] || h1==0){
    a=h2-1
    h2=h2-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(150-a2[a], 250-20*a)
    ctx.lineTo(150+a2[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h1
    h1=h1+1
    a1[b]=a2[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(50-a2[a], 250-20*b)
    ctx.lineTo(50+a2[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a2[a]=0
    if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },
  m2to3: function() {
    if (a2[h2-1]<a3[h3-1] || h3==0){
    a=h2-1
    h2=h2-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(150-a2[a], 250-20*a)
    ctx.lineTo(150+a2[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h3
    h3=h3+1
    a3[b]=a2[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(250-a2[a], 250-20*b)
    ctx.lineTo(250+a2[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a2[a]=0
    if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },

  m3to2: function() {
    if (a3[h3-1]<a2[h2-1] || h2==0){
    a=h3-1
    h3=h3-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(250-a3[a], 250-20*a)
    ctx.lineTo(250+a3[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h2
    h2=h2+1
    a2[b]=a3[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(150-a3[a], 250-20*b)
    ctx.lineTo(150+a3[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a3[a]=0
    if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },
  m3to1: function() {
    if (a3[h3-1]<a1[h1-1] || h1==0){
    a=h3-1
    h3=h3-1
    ctx.setStrokeStyle('white')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(250-a3[a], 250-20*a)
    ctx.lineTo(250+a3[a], 250-20*a)
    ctx.stroke()
    ctx.draw(true)

    b=h1
    h1=h1+1
    a1[b]=a3[a]
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round') //设置线条端点样式，圆形
    ctx.setLineJoin('miter') //设置线条连接样式，尖形
    ctx.moveTo(50-a3[a], 250-20*b)
    ctx.lineTo(50+a3[a], 250-20*b)
    ctx.stroke()
    ctx.draw(true)
    a3[a]=0
    if(a3[3]==6 ||a2[3]==6){
      ctx.setFillStyle('blue')
      ctx.setFontSize(20) 
      ctx.setTextBaseline('bottom')
      ctx.fillText('key1=114514', 40, 80) 
      ctx.draw(true)
    }
  }
  },

  translucent: function() {
    ctx.setFillStyle('red')
    ctx.setGlobalAlpha(0.2) //设置全局透明度(整个画布的透明度是0-1)
    ctx.fillRect(50, 50, 250, 250)
    ctx.draw()
    ctx.setGlobalAlpha(1) //恢复以前设置 
  }

})