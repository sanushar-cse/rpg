import{i as e,n as t,t as n}from"./jsx-runtime-CKRPohAc.js";var r=e(t(),1),i=n(),a=`
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,o=`
                uniform float u_time;
                uniform vec2 u_resolution;
                uniform float u_interactive_fidelity;
                varying vec2 vUv;

                mat2 rotate2d(float _angle){
                    return mat2(cos(_angle),-sin(_angle),
                                sin(_angle),cos(_angle));
                }

                void main() {
                    vec2 p = vUv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;
                    p = rotate2d(0.55) * p;

                    vec3 color = vec3(0.0);
                    float spread = 0.06 * (0.3 + u_interactive_fidelity * 0.7);

                    for(int i = 0; i < 3; i++) {
                        float offset = float(1 - i) * spread;
                        float y = p.y + offset + (sin(p.x * 2.5 - u_time * 1.5) * 0.12);
                        float wave = smoothstep(0.85, 0.99, sin(y * 6.0 + u_time * 2.0) * 0.5 + 0.5);
                        
                        // Modulating color mixing logic for the violet-indigo theme
                        if(i == 0) color.r += wave * 1.2; 
                        if(i == 1) color.g += wave * 0.5; 
                        if(i == 2) color.b += wave * 1.8; 
                    }

                    float vignette = exp(-length(vUv * 2.0 - 1.0) * 0.8);
                    color *= vignette;

                    gl_FragColor = vec4(color, 1.0);
                }
            `,s={speed:1,fidelity:.5,scale:1,brightness:1,opacity:1,hue:0,saturation:1};function c(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create Stream Convergence shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??`Stream Convergence shader compilation failed`);return r}function l({className:e=``,...t}){let n=(0,r.useRef)(null),l=(0,r.useRef)(null),u=(0,r.useRef)({...s,...t});u.current={...s,...t},(0,r.useEffect)(()=>{let e=n.current,t=l.current;if(!e||!t)return;let r=t.getContext(`webgl`,{alpha:!0,antialias:!1});if(!r)return;let i=c(r,r.VERTEX_SHADER,a),s=c(r,r.FRAGMENT_SHADER,`precision highp float;
${o}`),d=r.createProgram();if(!d)return;if(r.attachShader(d,i),r.attachShader(d,s),r.linkProgram(d),!r.getProgramParameter(d,r.LINK_STATUS))throw Error(r.getProgramInfoLog(d)??`Stream Convergence program link failed`);r.useProgram(d);let f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let p=r.getAttribLocation(d,`position`);r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0);let m=r.getUniformLocation(d,`u_time`),h=r.getUniformLocation(d,`u_resolution`),g=r.getUniformLocation(d,`u_interactive_fidelity`),_=0,v=!0,y=()=>{let n=e.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.round(n.width*i)),t.height=Math.max(1,Math.round(n.height*i)),r.viewport(0,0,t.width,t.height),r.uniform2f(h,t.width,t.height)},b=e=>{let t=u.current;r.uniform1f(m,e*3e-4*t.speed),r.uniform1f(g,t.fidelity),r.drawArrays(r.TRIANGLES,0,6),_=v&&!document.hidden?requestAnimationFrame(b):0},x=new ResizeObserver(y),S=new IntersectionObserver(([e])=>{v=e?.isIntersecting??!0,v&&!_&&(_=requestAnimationFrame(b)),!v&&_&&(cancelAnimationFrame(_),_=0)});return x.observe(e),S.observe(e),y(),_=requestAnimationFrame(b),()=>{_&&cancelAnimationFrame(_),x.disconnect(),S.disconnect(),r.deleteBuffer(f),r.deleteShader(i),r.deleteShader(s),r.deleteProgram(d)}},[]);let d=u.current;return(0,i.jsx)(`div`,{ref:n,className:`threeui-background stream-convergence${e?` ${e}`:``}`,children:(0,i.jsx)(`canvas`,{ref:l,style:{opacity:d.opacity,filter:`hue-rotate(${d.hue}deg) saturate(${d.saturation}) brightness(${d.brightness})`,transform:`scale(${d.scale})`}})})}export{l as StreamConvergenceBackground};