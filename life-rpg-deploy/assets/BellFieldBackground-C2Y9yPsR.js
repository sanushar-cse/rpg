import{i as e,n as t,t as n}from"./jsx-runtime-CKRPohAc.js";var r=e(t(),1),i=n(),a=`
                attribute vec2 position;
                void main() { gl_Position = vec4(position, 0.0, 1.0); }
            `,o=`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform vec2 u_mouse;
                uniform float u_strike;

                #define PI 3.14159265359

                float hash(vec2 p) { return fract(sin(dot(p, vec2(23.71, 91.37))) * 41537.1234); }

                // damped-cosine stand-in for the Bessel envelope of a circular mode
                float bess(float x) { return cos(x - 0.785398) / sqrt(1.0 + abs(x)); }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                    vec2 p = uv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;
                    p.y += 0.08;

                    vec2 m = u_mouse / u_resolution.xy * 2.0 - 1.0;
                    m.y = -m.y;
                    m.x *= u_resolution.x / u_resolution.y;
                    p -= m * 0.11;

                    float t = u_time * 0.09;
                    float r = length(p);
                    float a = atan(p.y, p.x);

                    // the bell drifts between partials the way a struck bell does
                    float ang = 3.0 + 1.6 * sin(t * 0.37) + sin(t * 0.19 + 1.7);
                    float k   = 3.1 + 1.0 * sin(t * 0.23 + 0.6);

                    float amp = 1.0 + (1.0 - u_strike) * 0.55;
                    float f1 = bess(r * k * PI - t * 2.2) * cos(ang * a + t * 0.5);
                    float f2 = bess(r * k * 1.6 * PI + t * 1.4) * cos((ang * 2.0 + 1.0) * a - t * 0.31);
                    float f = (f1 + f2 * 0.30) * amp;

                    // nodal lines — where the metal stands still
                    float node = 1.0 - smoothstep(0.0, 0.075 + 0.075 * r, abs(f));
                    // antinodes — where it moves, and glows hot
                    float anti = smoothstep(0.40, 0.95, abs(f));

                    // the crown stays quiet — clears a reading zone under the type
                    float open = smoothstep(0.14, 0.92, r);
                    node *= open;
                    anti *= open;

                    vec3 deep   = vec3(0.031, 0.055, 0.051);
                    vec3 patina = vec3(0.306, 0.608, 0.541);
                    vec3 bronze = vec3(0.847, 0.608, 0.247);
                    vec3 ash    = vec3(0.937, 0.914, 0.863);

                    vec3 col = deep;
                    col = mix(col, patina, node * 0.50);
                    col = mix(col, bronze, anti * 0.22);
                    col += ash * pow(node, 3.0) * 0.13;

                    // shock ring travelling out from the strike
                    float ring = smoothstep(0.06, 0.0, abs(r - u_strike * 2.3)) * (1.0 - u_strike);
                    col += mix(bronze, ash, 0.4) * ring * 0.7;

                    col *= mix(0.10, 1.0, smoothstep(2.0, 0.28, r));
                    col += (hash(gl_FragCoord.xy) - 0.5) * 0.022;

                    gl_FragColor = vec4(col, 1.0);
                }
            `,s={speed:1,pointerAmount:1,strikeDuration:2400,emberAmount:1,brightness:1,opacity:1,hue:0,saturation:1};function c(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create Bell Field shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??`Bell Field shader compilation failed`);return r}function l({className:e=``,...t}){let n=(0,r.useRef)(null),l=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)({...s,...t});d.current={...s,...t},(0,r.useEffect)(()=>{let e=n.current,t=l.current,r=u.current;if(!e||!t||!r)return;let i=t.getContext(`webgl`),s=r.getContext(`2d`);if(!i||!s)return;let f=c(i,i.VERTEX_SHADER,a),p=c(i,i.FRAGMENT_SHADER,o),m=i.createProgram();if(!m)return;if(i.attachShader(m,f),i.attachShader(m,p),i.linkProgram(m),!i.getProgramParameter(m,i.LINK_STATUS))throw Error(i.getProgramInfoLog(m)??`Bell Field program link failed`);i.useProgram(m);let h=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,h),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),i.STATIC_DRAW);let g=i.getAttribLocation(m,`position`);i.enableVertexAttribArray(g),i.vertexAttribPointer(g,2,i.FLOAT,!1,0,0);let _=i.getUniformLocation(m,`u_resolution`),v=i.getUniformLocation(m,`u_time`),y=i.getUniformLocation(m,`u_mouse`),b=i.getUniformLocation(m,`u_strike`),x=1,S=1,C=1,w=.5,T=.5,E=.5,D=.5,O=0,k=!0,A=!1,j=-1e9,M=performance.now(),N=Array.from({length:58},()=>({x:Math.random(),y:Math.random(),r:.4+Math.random()*1.4,vy:-(.1+Math.random()*.26),vx:(Math.random()-.5)*.08,ph:Math.random()*Math.PI*2,sp:.5+Math.random()*1.4,hot:Math.random()<.36})),P=()=>{let n=e.getBoundingClientRect();x=Math.max(1,n.width),S=Math.max(1,n.height),C=Math.min(window.devicePixelRatio||1,2),t.width=Math.max(1,Math.round(x*C)),t.height=Math.max(1,Math.round(S*C)),r.width=t.width,r.height=t.height,s.setTransform(C,0,0,C,0,0),i.viewport(0,0,t.width,t.height),i.uniform2f(_,t.width,t.height),A||=(w=E=x*.5,T=D=S*.5,!0),N.forEach(e=>{e.x<=1&&(e.x*=x),e.y<=1&&(e.y*=S)})},F=t=>{let n=e.getBoundingClientRect(),r=d.current.pointerAmount;E=x*.5+(t.clientX-n.left-x*.5)*r,D=S*.5+(t.clientY-n.top-S*.5)*r},I=()=>{j=performance.now()},L=window.setTimeout(I,1700),R=window.setInterval(I,8200),z=e=>{let t=d.current,n=e*.001*t.speed;w+=(E-w)*.04,T+=(D-T)*.04,i.uniform1f(v,(e-M)*.001*t.speed),i.uniform1f(b,Math.min(1,Math.max(0,(e-j)/t.strikeDuration))),i.uniform2f(y,w*C,T*C),i.drawArrays(i.TRIANGLES,0,6),s.clearRect(0,0,x,S);let r=Math.max(0,Math.min(58,Math.round(58*t.emberAmount)));for(let e=0;e<r;e+=1){let r=N[e];r.y+=r.vy*t.speed,r.x+=(r.vx+Math.sin(n*r.sp*.5+r.ph)*.13)*t.speed,r.y<-4&&(r.y=S+4,r.x=Math.random()*x),r.x<-4&&(r.x=x+4),r.x>x+4&&(r.x=-4);let i=.5+.5*Math.sin(n*r.sp+r.ph);s.beginPath(),s.arc(r.x,r.y,r.r,0,Math.PI*2),s.fillStyle=r.hot?`rgba(231, 193, 101, ${.06+i*.34})`:`rgba(143, 203, 185, ${.04+i*.24})`,s.fill()}O=k&&!document.hidden?requestAnimationFrame(z):0},B=new ResizeObserver(P),V=new IntersectionObserver(([e])=>{k=e?.isIntersecting??!0,k&&!O&&(O=requestAnimationFrame(z)),!k&&O&&(cancelAnimationFrame(O),O=0)});return B.observe(e),V.observe(e),e.addEventListener(`pointermove`,F,{passive:!0}),e.addEventListener(`pointerdown`,I),P(),O=requestAnimationFrame(z),()=>{O&&cancelAnimationFrame(O),window.clearTimeout(L),window.clearInterval(R),B.disconnect(),V.disconnect(),e.removeEventListener(`pointermove`,F),e.removeEventListener(`pointerdown`,I),i.deleteBuffer(h),i.deleteShader(f),i.deleteShader(p),i.deleteProgram(m)}},[]);let f=d.current;return(0,i.jsxs)(`div`,{ref:n,className:`threeui-background bell-field${e?` ${e}`:``}`,style:{background:`#08100f`,opacity:f.opacity,filter:`hue-rotate(${f.hue}deg) saturate(${f.saturation}) brightness(${f.brightness})`},children:[(0,i.jsx)(`canvas`,{ref:l,style:{zIndex:0}}),(0,i.jsx)(`canvas`,{ref:u,style:{zIndex:1,pointerEvents:`none`}})]})}export{l as BellFieldBackground};