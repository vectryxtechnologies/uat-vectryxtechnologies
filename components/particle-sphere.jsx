"use client";
import { useEffect, useRef } from "react";
const COUNT=1350;
const PALETTE=["#3db663","#23874a","#235c45","#69bd83","#1f1c1d","#b07040"];
function pointAt(index,shape){
 const u=index/COUNT,a=index*2.399963,y=1-2*u,r=Math.sqrt(1-y*y);
 if(shape===1){const v=a*.24,t=u*Math.PI*2;return[Math.cos(t)*(.64+.26*Math.cos(v)),Math.sin(t)*(.64+.26*Math.cos(v)),.26*Math.sin(v)]}
 if(shape===2){const t=u*Math.PI*7,side=index%2?1:-1;return[Math.cos(t)*.54*side,y,Math.sin(t)*.54*side]}
 if(shape===3){const face=index%6,p=(Math.sin(a)*.5+.5)*1.5-.75,q=(Math.cos(index*1.71)*.5+.5)*1.5-.75;return face<2?[(face?1:-1)*.75,p,q]:face<4?[p,(face===3?1:-1)*.75,q]:[p,q,(face===5?1:-1)*.75]}
 if(shape===4){const t=u*Math.PI*2;return[(1-u*1.2)*Math.cos(t*3),y*.7+.16*Math.cos(a),(1-u*1.2)*Math.sin(t*3)]}
 return[Math.cos(a)*r,y,Math.sin(a)*r];
}
export default function ParticleSphere({className,stage=0}){
 const canvasRef=useRef(null),stageRef=useRef(stage);
 useEffect(()=>{stageRef.current=stage},[stage]);
 useEffect(()=>{
  const canvas=canvasRef.current,ctx=canvas.getContext("2d");if(!ctx)return;
  const media=matchMedia("(prefers-reduced-motion: reduce)");
  let width=0,height=0,frame=0,rotation=0,last=0,inView=true,pointer={x:-9999,y:-9999};
  const points=Array.from({length:COUNT},(_,i)=>({position:pointAt(i,0),color:PALETTE[i%23===0?5:i%11===0?4:i%4]}));
  const draw=time=>{
   if(!inView||document.hidden){last=time;return}
   const dt=Math.min((time-last)||16,40);last=time;if(!media.matches)rotation+=dt*.000095;
   ctx.clearRect(0,0,width,height);
   const mobile=width<=800,cx=mobile?width*.5:width*.738,cy=mobile?height-210:height*.53;
   const radius=mobile?Math.min(width*.34,155):Math.min(width*.185,height*.305,290),cs=Math.cos(rotation),sn=Math.sin(rotation),tilt=.16;
   const projected=points.map((p,i)=>{const target=pointAt(i,stageRef.current);for(let j=0;j<3;j++)p.position[j]+=(target[j]-p.position[j])*.035;const[x,y,z]=p.position,rx=x*cs+z*sn,rz=-x*sn+z*cs;return{p,x:rx,y:y*Math.cos(tilt)-rz*Math.sin(tilt),z:y*Math.sin(tilt)+rz*Math.cos(tilt)}}).sort((a,b)=>a.z-b.z);
   for(const{p,x,y,z}of projected){const depth=(z+1)/2;let px=cx+x*radius,py=cy+y*radius;const dx=px-pointer.x,dy=py-pointer.y,d=Math.hypot(dx,dy);if(d<100&&d>0&&!media.matches){const force=(1-d/100)*17;px+=dx/d*force;py+=dy/d*force}ctx.globalAlpha=.2+depth*.8;ctx.fillStyle=p.color;ctx.beginPath();ctx.ellipse(px,py,1.5+depth*2.1,1.1+depth*1.6,Math.atan2(y,x)+rotation,0,Math.PI*2);ctx.fill()}
   for(let i=0;i<56;i++){const seed=Math.abs(Math.sin(i*175.7)),x=(seed*width+Math.sin(rotation*.6+i)*20)%width,y=Math.abs(Math.cos(i*53.3))*height+Math.cos(rotation+i)*13;ctx.globalAlpha=.14+(i%3)*.09;ctx.fillStyle=PALETTE[i%6];ctx.beginPath();ctx.arc(x,y,1+i%4,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;
  };
  const resize=()=>{const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);if(media.matches)draw(0)};
  const loop=t=>{draw(t);frame=requestAnimationFrame(loop)};
  const onPointer=e=>{const rect=canvas.getBoundingClientRect();pointer={x:e.clientX-rect.left,y:e.clientY-rect.top}};
  const observer=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting},{threshold:0});observer.observe(canvas);
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize();draw(0);if(!media.matches)frame=requestAnimationFrame(loop);
  window.addEventListener("pointermove",onPointer,{passive:true});
  return()=>{cancelAnimationFrame(frame);observer.disconnect();ro.disconnect();window.removeEventListener("pointermove",onPointer)};
 },[]);
 return <canvas ref={canvasRef} className={className} aria-hidden="true"/>;
}
